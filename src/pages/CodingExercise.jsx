import React, { useState, useRef, useEffect } from 'react';
import { usePro } from '../auth/ProContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import coreJava from '../data/codingQuestions/core-java';
import reactQuestions from '../data/codingQuestions/react';
import springboot from '../data/codingQuestions/springboot';
import microservices from '../data/codingQuestions/microservices';
import pythonQuestions from '../data/codingQuestions/python';
import django from '../data/codingQuestions/django';
import aws from '../data/codingQuestions/aws';
import bgImage from '../assets/Avantika_Interviews.png';

export default function CodingExercise() {
  const { isPro } = usePro();
  const topics = [
    { key: 'react', label: 'React (JS)', items: reactQuestions },
    { key: 'core-java', label: 'Core Java', items: coreJava },
    { key: 'springboot', label: 'Spring Boot', items: springboot },
    { key: 'microservices', label: 'Microservices', items: microservices },
    { key: 'python', label: 'Python', items: pythonQuestions },
    { key: 'django', label: 'Django', items: django },
    { key: 'aws', label: 'AWS', items: aws }
  ];
  const [selectedTopic, setSelectedTopic] = useState(topics[0].key);
  const [questions, setQuestions] = useState(topics[0].items || []);
  const [qIndex, setQIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const [code, setCode] = useState(`// Implement function "solve" that returns the sum of numbers in an array\nfunction solve(arr) {\n  // example: return arr.reduce((s,x)=>s+x,0)\n  return 0;\n}`);
  const [output, setOutput] = useState('');
  const [testsResult, setTestsResult] = useState(null);
  const iframeRef = useRef(null);
  const msgListenerRef = useRef(null);

  useEffect(() => {
    // cleanup listener on unmount
    return () => {
      if (msgListenerRef.current) window.removeEventListener('message', msgListenerRef.current);
    };
  }, []);

  if (!isPro) {
    return (
      <div style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
        <Card>
          <CardHeader>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Coding Exercise (Pro)</div>
          </CardHeader>
          <CardContent>
            <p>This interactive exercise runner is available for Pro users. Upgrade to access live coding problems.</p>
            <Button onClick={() => (window.location.href = '/pricing')} variant="default">Go to Pricing</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  function createRunnerHtml(userCode, runTests = false, tests = []) {
    // provide lightweight Node-like globals so snippets using `exports`, `module` or `process` don't throw ReferenceError
    const prelude = `
      // lightweight stubs for Node-style globals (safe):
      var exports = {};
      var module = { exports: exports };
      var require = function(){ throw new Error('require is not available in the browser sandbox'); };
      var process = { env: {} };
    `;

    // This HTML will execute user code and either run console-only or run tests
    const testsSnippet = runTests && Array.isArray(tests) && tests.length ? `
      const _tests = JSON.parse('${JSON.stringify(tests).replace(/\\/g,'\\\\').replace(/'/g,"\\'")}');
      (async()=>{
        try {
          const results = [];
          for (let t of _tests){
            let out = await Promise.resolve(typeof solve === 'function' ? solve(...t.input) : undefined);
            results.push({ input: t.input, expected: t.expected, output: out, pass: Object.is(out, t.expected) });
          }
          parent.postMessage({ type: 'tests', ok: true, results }, '*');
        } catch (err) {
          parent.postMessage({ type: 'tests', ok: false, error: (err && err.message) || String(err) }, '*');
        }
      })();
    ` : '';

    return `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>runner</title>
      </head>
      <body>
      <script>
      // capture console
      (function(){
        const send = (obj)=>parent.postMessage(obj, '*');
        ['log','info','warn','error'].forEach((k)=>{
          const orig = console[k];
          console[k] = function(){
            try{ send({ type: 'console', level: k, args: Array.from(arguments) }); }catch(e){}
            orig.apply(console, arguments);
          }
        });
        window.onerror = function(message, source, lineno, colno, err){
          send({ type: 'error', message: message, stack: err && err.stack });
        };
      })();
      try{
        ${prelude}
        ${userCode}
      } catch(e){ parent.postMessage({ type: 'error', message: e && e.message, stack: e && e.stack }, '*'); }
      ${runTests ? testsSnippet : "parent.postMessage({ type: 'done' }, '*');"}
      </script>
      </body>
      </html>
    `;
  }

  function runRunner(runTestsFlag, customTests = []) {
    setOutput('');
    setTestsResult(null);

    // remove existing iframe if present
    if (iframeRef.current) {
      try { iframeRef.current.remove(); } catch (e) {}
      iframeRef.current = null;
    }

    // remove existing message listener if present
    if (msgListenerRef.current) {
      try { window.removeEventListener('message', msgListenerRef.current); } catch (e) {}
      msgListenerRef.current = null;
    }

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts';
    document.body.appendChild(iframe);
    iframeRef.current = iframe;

    const html = createRunnerHtml(code, !!runTestsFlag, customTests);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframe.src = url;

    // debug: log URL and mark that iframe was created
    try { console.debug && console.debug('[runner] iframe created, src:', url); } catch (e) {}

    const listener = (ev) => {
      try { console.debug && console.debug('[runner] message event', ev && ev.data); } catch (e) {}
      if (!ev.data) return;
      const d = ev.data;
      if (d.type === 'console') {
        setOutput((s) => s + '[' + d.level + '] ' + d.args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ') + '\n');
      } else if (d.type === 'error') {
        setOutput((s) => s + '[error] ' + (d.message || 'Error') + '\n');
      } else if (d.type === 'done') {
        setOutput((s) => s + '[done]\n');
      } else if (d.type === 'tests') {
        setTestsResult(d);
      }
    };
    msgListenerRef.current = listener;
    try { window.addEventListener('message', listener); } catch (e) { console.error('[runner] failed to attach message listener', e); }

    // revoke URL when iframe loads to free memory
    iframe.onload = () => { try { URL.revokeObjectURL(url); } catch (e) {} };
  }

  function runCode() { runRunner(false); }
  function runTests() {
    const q = questions[qIndex] || {};
    runRunner(true, q.tests || []);
  }

  // navigate user to a runnable coding exercise (React JS topic, first question)
  function goToCodingExercise() {
    const key = 'react';
    setSelectedTopic(key);
    const t = topics.find(x => x.key === key);
    const items = t ? t.items : [];
    setQuestions(items || []);
    setQIndex(0);
    setShowSolution(false);
    if (items && items[0] && items[0].language === 'javascript' && items[0].solution) {
      setCode(items[0].solution);
    }
  }

  // helper to render inline code between backticks in statements
  function renderInlineCode(text) {
    if (!text) return text;
    // split on backticks and alternate text / code nodes
    return text.split('`').map((part, i) => (i % 2 === 1 ? <code key={i} style={{ background: '#eef2ff', padding: '2px 6px', borderRadius: 6, fontSize: 13 }}>{part}</code> : part));
  }

  return (
    <div style={{
      padding: 28,
      maxWidth: 1100,
      margin: '40px auto',
      borderRadius: 16,
      boxShadow: '0 10px 30px rgba(2,6,23,0.08)',
      backgroundImage: `linear-gradient(135deg, rgba(99,102,241,0.06), rgba(14,165,233,0.03)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Card>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>Coding Exercise</div>
              <div style={{ color: '#666' }}>Run JavaScript code in a safe sandbox and validate against sample tests.</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button onClick={runCode} variant="default">Run</Button>
              <Button onClick={runTests} variant="default">Run Tests</Button>
              <Button onClick={() => (window.location.href = '/')} variant="outline">Home</Button>
            </div>
          </div>
        </CardHeader>
        
        {/* Replace content with Table of contents + Question view + Output */}
        <CardContent>
          <div style={{ marginBottom: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
            <select value={selectedTopic} onChange={(e) => { const key = e.target.value; setSelectedTopic(key); const t = topics.find(x=>x.key===key); setQuestions(t ? t.items : []); setQIndex(0); setShowSolution(false); }}>
              {topics.map(t=> <option key={t.key} value={t.key}>{t.label}</option>)}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 360px', gap: 20 }}>
            {/* Left: Table of contents */}
            <div style={{ borderRight: '1px solid #eee', paddingRight: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 12 }}>Table of contents</div>
              <div style={{ maxHeight: 640, overflowY: 'auto' }}>
                {questions.map((q, i) => (
                  <div
                    key={q.id || i}
                    onClick={() => {
                      setQIndex(i);
                      setShowSolution(false);
                      const qq = questions[i] || {};
                      if (qq.language === 'javascript' && qq.solution) setCode(qq.solution);
                    }}
                    style={{
                      cursor: 'pointer',
                      padding: '10px 8px',
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                      background: i === qIndex ? '#f0f4ff' : 'transparent',
                      borderRadius: 6,
                      marginBottom: 6
                    }}
                  >
                    <div style={{ color: '#6b7280', minWidth: 20, textAlign: 'right' }}>{i + 1}</div>
                    <div style={{ fontSize: 13, color: i === qIndex ? '#111' : '#444' }}>{q.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Question content */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: 28, margin: 0 }}>{qIndex + 1}. {(questions[qIndex] && questions[qIndex].title) || 'Select a question'}</h1>
                <div>
                  <Button
                    onClick={() => setShowSolution(s => !s)}
                    variant="default"
                    style={{
                      background: showSolution ? '#111827' : '#4f46e5',
                      color: '#fff',
                      padding: '10px 16px',
                      borderRadius: 10,
                      boxShadow: showSolution ? '0 6px 18px rgba(0,0,0,0.2)' : '0 10px 30px rgba(79,70,229,0.18)',
                      border: 'none',
                      fontWeight: 700
                    }}
                  >
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </Button>
                </div>
              </div>

              <div style={{ marginTop: 14, color: '#374151', lineHeight: 1.7 }}>
                <div style={{ marginBottom: 12 }}>{renderInlineCode((questions[qIndex] && questions[qIndex].statement) || 'Select a question to see the statement.')}</div>

                {/* If selected question is JavaScript show the editor */}
                {questions[qIndex] && questions[qIndex].language === 'javascript' && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>Code editor</div>
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} style={{ width: '100%', minHeight: 240, fontFamily: 'monospace', fontSize: 13, padding: 12, borderRadius: 8 }} />
                  </div>
                )}

                {/* Solution block styled like screenshot (dark code block) */}
                {showSolution && (
                  <div style={{ marginTop: 18 }}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>Solution ({(questions[qIndex] && questions[qIndex].language) || 'unknown'})</div>
                    <pre style={{ background: '#0b1220', color: '#dbeafe', padding: 20, borderRadius: 12, overflowX: 'auto', fontSize: 14, whiteSpace: 'pre-wrap' }}>
                      {(questions[qIndex] && questions[qIndex].solution) || 'No solution available.'}
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Output & tests (unchanged) */}
            <div>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Output</div>
              <div style={{ whiteSpace: 'pre-wrap', minHeight: 200, padding: 12, borderRadius: 8, background: '#111', color: '#fff' }}>{output || 'No output'}</div>

              <div style={{ marginTop: 12 }}>
                <div style={{ fontWeight: 700 }}>Test Results</div>
                <div style={{ marginTop: 8 }}>
                  {testsResult ? (
                    testsResult.ok ? (
                      <div>
                        {testsResult.results.map((r, i) => (
                          <div key={i} style={{ padding: 8, borderRadius: 6, background: r.pass ? '#e6ffed' : '#ffe6e6', marginBottom: 6 }}>
                            <div><b>Test {i + 1}</b>: {r.pass ? 'PASS' : 'FAIL'}</div>
                            <div>Input: {JSON.stringify(r.input)}</div>
                            <div>Expected: {JSON.stringify(r.expected)}</div>
                            <div>Output: {JSON.stringify(r.output)}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ color: 'red' }}>Test run failed: {testsResult.error}</div>
                    )
                  ) : (
                    <div style={{ color: '#666' }}>No tests run yet.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Floating Home button for quick navigation */}
      <Button onClick={() => (window.location.href = '/')} style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1000, borderRadius: 999, padding: '10px 14px', boxShadow: '0 8px 24px rgba(2,6,23,0.12)' }} variant="default">Home</Button>
    </div>
  );
}
