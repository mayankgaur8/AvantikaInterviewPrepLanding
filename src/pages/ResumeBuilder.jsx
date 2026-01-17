import React, { useState, useRef } from 'react';
import { usePro } from '../auth/ProContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function ResumeBuilder() {
  const { isPro } = usePro();
  const accentColor = '#6B21D8'; // purple accent from provided image
  const previewRef = useRef(null);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState('');
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const resumeInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [parsingConfidence, setParsingConfidence] = useState(null);
  const [serverParsed, setServerParsed] = useState(false);

  function addExperience() {
    setExperiences((s) => [...s, { company: '', role: '', from: '', to: '', desc: '', present: false }]);
  }
  function updateExperience(i, key, val) {
    setExperiences((s) => s.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)));
  }
  function removeExperience(i) {
    setExperiences((s) => s.filter((_, idx) => idx !== i));
  }

  function addEducation() {
    setEducation((s) => [...s, { school: '', degree: '', year: '' }]);
  }
  function updateEducation(i, key, val) {
    setEducation((s) => s.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)));
  }
  function removeEducation(i) {
    setEducation((s) => s.filter((_, idx) => idx !== i));
  }

  async function uploadFile(file, type = 'resume') {
    if (!file) return null;
    setUploading(true);
    setServerParsed(false);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('type', type);
      const res = await fetch(`/api/uploads/${type}`, { method: 'POST', body: fd });
      const json = await res.json();
      if (res.ok && json.parsed) {
        const p = json.parsed || {};
        if (p.name) setName(p.name);
        if (p.title) setTitle(p.title);
        if (p.summary) setSummary(p.summary);
        if (p.skills) setSkills(Array.isArray(p.skills) ? p.skills.join(', ') : (p.skills || ''));
        if (p.experiences) setExperiences(p.experiences);
        if (p.education) setEducation(p.education);
        setParsingConfidence(typeof json.confidence === 'number' ? Math.round(json.confidence * 100) : null);
        setServerParsed(true);
      } else {
        // fallback, server may return parsedHtml or message
        setServerParsed(false);
      }
      return json;
    } catch (err) {
      console.error('Upload failed', err);
      return null;
    } finally {
      setUploading(false);
    }
  }

  async function onResumeSelect(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setResumeFile(f);
    // try local parsing first (best-effort UX)
    try {
      const localParsed = await (async () => {
        const nameLower = (f.name || '').toLowerCase();
        const ext = nameLower.split('.').pop();
        let text = '';
        if (ext === 'pdf') {
          await ensurePdfJs();
          const pdfjsLib = window.pdfjsLib;
          const arrayBuffer = await f.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          for (let i = 1; i <= pdf.numPages; i++) {
            // eslint-disable-next-line no-await-in-loop
            const page = await pdf.getPage(i);
            // eslint-disable-next-line no-await-in-loop
            const content = await page.getTextContent();
            text += content.items.map((it) => it.str).join(' ') + '\n';
          }
        } else if (ext === 'docx') {
          await ensureMammoth();
          const arrayBuffer = await f.arrayBuffer();
          const result = await window.mammoth.convertToHtml({ arrayBuffer });
          const doc = new DOMParser().parseFromString(result.value, 'text/html');
          text = doc.body.textContent || '';
        } else if (ext === 'txt') {
          text = await f.text();
        } else {
          try { text = await f.text(); } catch (err) { text = ''; }
        }
        return parseResumeText(text);
      })();

      if (localParsed) {
        if (localParsed.name) setName(localParsed.name);
        if (localParsed.title) setTitle(localParsed.title);
        if (localParsed.summary) setSummary(localParsed.summary);
        if (localParsed.skills && localParsed.skills.length) setSkills(localParsed.skills.join(', '));
        if (localParsed.experiences && localParsed.experiences.length) setExperiences(localParsed.experiences);
        if (localParsed.education && localParsed.education.length) setEducation(localParsed.education);
      }
    } catch (err) {
      console.warn('Local parse failed', err);
    }

    // upload to server for authoritative parsing and storage
    const serverResp = await uploadFile(f, 'resume');
    if (serverResp && serverResp.parsed) {
      // server handling set fields inside uploadFile
    }
  }

  async function onCoverSelect(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setCoverFile(f);
    // upload cover letter to server (may return parsing or storage status)
    await uploadFile(f, 'cover');
  }

  // Lightweight heuristic parser to extract common sections from plaintext resumes
  function parseResumeText(text) {
    const lines = (text || '').split(/\r?\n|\t/).map((l) => l.trim()).filter(Boolean);
    const joined = lines.join('\n');
    const lower = joined.toLowerCase();

    const getSection = (names) => {
      for (const name of names) {
        const idx = lower.indexOf('\n' + name.toLowerCase());
        if (idx !== -1) {
          // take until next blank-line heading
          const rest = joined.slice(idx + name.length + 1).trim();
          const nextMatch = rest.search(/\n\s*\w+:|\n\s*(summary|skills|experience|education|projects|certifications)/i);
          return nextMatch === -1 ? rest.trim() : rest.slice(0, nextMatch).trim();
        }
      }
      return '';
    };

    // Name: first line that looks like a name (no @ and not starting with 'summary' etc)
    let candidateName = '';
    for (const l of lines.slice(0, 6)) {
      if (l.match(/@/) || l.match(/\d{3,}/)) continue; // skip emails/phones
      if (l.length > 2 && l.split(' ').length <= 5) { candidateName = l; break; }
    }

    const emailMatch = joined.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    const phoneMatch = joined.match(/(\+?\d[\d\s-]{6,}\d)/);

    const summary = getSection(['Summary', 'Professional Summary', 'Profile', 'Summary/Objective', 'Objective']);
    let skillsRaw = getSection(['Skills', 'Technical Skills', 'Skills & Tools']);
    if (!skillsRaw) {
      // try to find a line with many commas
      const commaLine = lines.find((l) => (l.split(',').length >= 3 && l.length < 120));
      if (commaLine) skillsRaw = commaLine;
    }
    const skills = (skillsRaw || '').split(/[,;•\n]/).map(s => s.trim()).filter(Boolean);

    // Experiences: crude split by headings like Experience, Work Experience
    const expRaw = getSection(['Experience', 'Work Experience', 'Professional Experience', 'Employment History']);
    const experiences = [];
    if (expRaw) {
      const chunks = expRaw.split(/\n{1,2}/).map(c => c.trim()).filter(Boolean);
      for (const c of chunks) {
        // try to find a date range
        const dateMatch = c.match(/(\b\d{4}\b.*?-.*?\b\d{4}\b)|(present|current|to date)/i);
        experiences.push({ title: c.split('\n')[0].slice(0, 120), company: '', fromTo: dateMatch ? dateMatch[0] : '', description: c });
      }
    }

    // Education: split by Education heading
    const eduRaw = getSection(['Education', 'Academic Qualifications']);
    const education = [];
    if (eduRaw) {
      const eds = eduRaw.split(/\n{1,2}/).map(e => e.trim()).filter(Boolean);
      for (const e of eds) education.push({ school: e.split('\n')[0].slice(0,120), degree: '', fromTo: '', details: e });
    }

    return {
      name: candidateName || '',
      email: emailMatch ? emailMatch[0] : '',
      phone: phoneMatch ? phoneMatch[0] : '',
      summary: summary || '',
      skills,
      experiences,
      education,
    };
  }

  function ensureMammoth() {
    if (window.mammoth) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/mammoth/mammoth.browser.min.js';
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function ensurePdfJs() {
    if (window.pdfjsLib) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.min.js';
      s.onload = () => {
        // ensure workerSrc optional fallback
        try { window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js'; } catch (e) { /* ignore */ }
        resolve();
      };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // Load html2canvas and jsPDF dynamically and generate a PDF from the preview
  async function ensurePdfLibs() {
    if (window.html2canvas && (window.jspdf || window.jsPDF || window.jspdf?.jsPDF)) {
      return { html2canvas: window.html2canvas, jsPDF: window.jspdf?.jsPDF || window.jsPDF || window.jspdf };
    }
    const load = (src, id) => new Promise((res, rej) => {
      if (document.getElementById(id)) return res();
      const s = document.createElement('script');
      s.src = src;
      s.id = id;
      s.onload = () => res();
      s.onerror = () => rej(new Error('Failed to load ' + src));
      document.body.appendChild(s);
    });
    await load('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js', 'html2canvas-cdn');
    await load('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js', 'jspdf-cdn');
    const jsPDF = window.jspdf?.jsPDF || window.jsPDF || (window.jspdf && window.jspdf.jsPDF);
    return { html2canvas: window.html2canvas, jsPDF };
  }

  async function downloadPdf() {
    if (!previewRef.current) return alert('Nothing to render');
    try {
      const libs = await ensurePdfLibs();
      const { html2canvas, jsPDF } = libs;
      const node = previewRef.current;
      const canvas = await html2canvas(node, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
      const pageWidth = 210; const margin = 10;
      const pxToMm = canvas.width / (pageWidth - margin * 2);
      const imgHeightMm = canvas.height / pxToMm;
      if (imgHeightMm <= (297 - margin * 2)) {
        pdf.addImage(imgData, 'JPEG', margin, margin, pageWidth - margin * 2, imgHeightMm);
      } else {
        const pageCanvas = document.createElement('canvas');
        const pageCtx = pageCanvas.getContext('2d');
        const pageW = canvas.width;
        const pageH = Math.round((297 - margin * 2) * pxToMm);
        pageCanvas.width = pageW;
        pageCanvas.height = pageH;
        let rendered = 0;
        while (rendered < canvas.height) {
          pageCtx.clearRect(0,0,pageW,pageH);
          pageCtx.drawImage(canvas, 0, rendered, pageW, pageH, 0, 0, pageW, pageH);
          const pageData = pageCanvas.toDataURL('image/jpeg', 0.95);
          pdf.addImage(pageData, 'JPEG', margin, margin, pageWidth - margin * 2, pageH / pxToMm);
          rendered += pageH;
          if (rendered < canvas.height) pdf.addPage();
        }
      }
      pdf.save(`${(name||'resume').replaceAll(' ','_')}.pdf`);
    } catch (err) {
      console.error(err);
      alert('Failed to generate PDF. Use Print / Save PDF as fallback.');
    }
  }

  function previewHtml() {
    const skillsList = skills.split(',').map(s=>s.trim()).filter(Boolean);
    return (
      <div style={{ padding: 12 }}>
        <h2 style={{ margin: 0 }}>{name || 'Your name'}</h2>
        <div style={{ color: '#666' }}>{title}</div>
        <hr />
        <div><strong>Summary</strong><p>{summary}</p></div>
        <div><strong>Skills</strong><ul>{skillsList.map((s,i)=>(<li key={i}>{s}</li>))}</ul></div>
        <div><strong>Experience</strong>{experiences.map((e,i)=>(<div key={i}><b>{e.role}</b> @ {e.company} ({e.from} - {e.present ? 'Present' : e.to})<div>{e.desc}</div></div>))}</div>
        <div><strong>Education</strong>{education.map((ed,i)=>(<div key={i}>{ed.degree} — {ed.school} ({ed.year})</div>))}</div>
      </div>
    );
  }

  if (!isPro) {
    return (
      <div style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
        <Card>
          <CardHeader>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Resume Builder (Pro)</div>
          </CardHeader>
          <CardContent>
            <p>This feature is available for Pro users. Please upgrade to access the Resume Builder.</p>
            <Button onClick={() => window.location.href = '/pricing'} variant="default">Go to Pricing</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ background: accentColor, minHeight: '100vh', padding: 40, boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <Card>
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#111' }}>Resume Builder</div>
                <div style={{ color: '#666', marginTop: 6 }}>Create a polished resume and cover letter (Pro)</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input ref={resumeInputRef} type="file" accept="application/pdf,.doc,.docx" style={{ display: 'none' }} onChange={onResumeSelect} />
                <input ref={coverInputRef} type="file" accept="application/pdf,.doc,.docx" style={{ display: 'none' }} onChange={onCoverSelect} />
                <button onClick={() => resumeInputRef.current && resumeInputRef.current.click()} style={{ padding: '8px 12px', borderRadius: 10, background: '#111', color: 'white', border: 'none' }}>{resumeFile ? 'Resume: ' + resumeFile.name : 'Upload Resume'}</button>
                <button onClick={() => coverInputRef.current && coverInputRef.current.click()} style={{ padding: '8px 12px', borderRadius: 10, background: '#fff', color: '#111', border: '1px solid #ddd' }}>{coverFile ? 'Cover: ' + coverFile.name : 'Upload Cover Letter'}</button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
              <div>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontWeight: 600 }}>Name</label>
                  <input value={name} onChange={(e)=>setName(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8 }} />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontWeight: 600 }}>Title</label>
                  <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="e.g. Senior Software Engineer" style={{ width: '100%', padding: 8, borderRadius: 8 }} />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontWeight: 600 }}>Summary</label>
                  <textarea value={summary} onChange={(e)=>setSummary(e.target.value)} rows={4} style={{ width: '100%', padding: 8, borderRadius: 8 }} />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontWeight: 600 }}>Skills (comma separated)</label>
                  <input value={skills} onChange={(e)=>setSkills(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8 }} />
                </div>

                <div style={{ marginTop: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 700 }}>Experience</div>
                    <Button onClick={addExperience} size="sm" variant="outline">Add</Button>
                  </div>
                  {experiences.map((exp,i)=> (
                    <div key={i} style={{ border: '1px solid #eee', padding: 8, borderRadius: 8, marginTop: 8 }}>
                      <input placeholder="Company" value={exp.company} onChange={(e)=>updateExperience(i,'company',e.target.value)} style={{ width: '100%', padding: 6, borderRadius: 6, marginBottom: 6 }} />
                      <input placeholder="Role" value={exp.role} onChange={(e)=>updateExperience(i,'role',e.target.value)} style={{ width: '100%', padding: 6, borderRadius: 6, marginBottom: 6 }} />
                      <input placeholder="From" value={exp.from} onChange={(e)=>updateExperience(i,'from',e.target.value)} style={{ width: '48%', padding: 6, borderRadius: 6, marginRight: '4%' }} />
                      <input placeholder="To" value={exp.to} onChange={(e)=>updateExperience(i,'to',e.target.value)} style={{ width: '48%', padding: 6, borderRadius: 6 }} disabled={exp.present} />
                      <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                        <input type="checkbox" id={`present-${i}`} checked={Boolean(exp.present)} onChange={(e)=>updateExperience(i,'present',e.target.checked)} />
                        <label htmlFor={`present-${i}`} style={{ marginLeft: 8 }}>Currently working (Up to now)</label>
                      </div>
                      <textarea placeholder="Description" value={exp.desc} onChange={(e)=>updateExperience(i,'desc',e.target.value)} style={{ width: '100%', padding: 6, borderRadius: 6, marginTop: 6 }} />
                      <div style={{ marginTop: 6 }}><Button onClick={()=>removeExperience(i)} variant="ghost" size="sm">Remove</Button></div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 700 }}>Education</div>
                    <Button onClick={addEducation} size="sm" variant="outline">Add</Button>
                  </div>
                  {education.map((ed,i)=> (
                    <div key={i} style={{ border: '1px solid #eee', padding: 8, borderRadius: 8, marginTop: 8 }}>
                      <input placeholder="School" value={ed.school} onChange={(e)=>updateEducation(i,'school',e.target.value)} style={{ width: '100%', padding: 6, borderRadius: 6, marginBottom: 6 }} />
                      <input placeholder="Degree" value={ed.degree} onChange={(e)=>updateEducation(i,'degree',e.target.value)} style={{ width: '100%', padding: 6, borderRadius: 6, marginBottom: 6 }} />
                      <input placeholder="Year" value={ed.year} onChange={(e)=>updateEducation(i,'year',e.target.value)} style={{ width: '48%', padding: 6, borderRadius: 6 }} />
                      <div style={{ marginTop: 6 }}><Button onClick={()=>removeEducation(i)} variant="ghost" size="sm">Remove</Button></div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'sticky', top: 12 }}>
                  <div style={{ fontWeight: 700 }}>Preview</div>
                  <div style={{ marginTop: 8, border: '1px solid #eee', borderRadius: 10, padding: 12, background: '#fff' }}>
                    <div ref={previewRef}>{previewHtml()}</div>
                    <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                      <Button onClick={() => window.print()} variant="default" style={{ background: '#111', color: 'white', border: 'none' }}>Print / Save PDF</Button>
                      <Button onClick={downloadPdf} variant="default" style={{ background: '#111', color: 'white', border: 'none' }}>Download PDF</Button>
                    </div>
                    {resumeFile && (<div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>Uploaded resume: <b>{resumeFile.name}</b></div>)}
                    {coverFile && (<div style={{ marginTop: 6, fontSize: 13, color: '#444' }}>Uploaded cover letter: <b>{coverFile.name}</b></div>)}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
