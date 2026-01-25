import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const TOPICS = [
	{ id: "angular", name: "Angular", count: 50, tag: "Frontend", icon: "🅰️" },
	{ id: "aws", name: "AWS", count: 50, tag: "Cloud", icon: "☁️" },
	{ id: "azure", name: "Azure", count: 50, tag: "Cloud", icon: "🟦" },
	{ id: "cicd", name: "CI/CD", count: 50, tag: "DevOps", icon: "🚀" },
	{ id: "core_java", name: "Core Java", count: 50, tag: "Language", icon: "☕" },
	{ id: "design_patterns", name: "Design Patterns", count: 40, tag: "Architecture", icon: "🧩" },
	{ id: "devops", name: "DevOps", count: 50, tag: "DevOps", icon: "🛠️" },
	{ id: "django", name: "Django", count: 50, tag: "Backend", icon: "🌿" },
	{ id: "docker", name: "Docker", count: 50, tag: "DevOps", icon: "🐳" },
	{ id: "ejb", name: "EJB", count: 33, tag: "Backend", icon: "📦" },
	{ id: "gcp", name: "GCP", count: 33, tag: "Cloud", icon: "🌩️" },
	{ id: "hibernate", name: "Hibernate", count: 29, tag: "Backend", icon: "🧠" },
	{ id: "jsp", name: "JSP", count: 29, tag: "Backend", icon: "📄" },
	{ id: "kafka", name: "Kafka", count: 29, tag: "Streaming", icon: "📮" },
	{ id: "kubernetes", name: "Kubernetes", count: 30, tag: "DevOps", icon: "☸️" },
	{ id: "microservices", name: "Microservices", count: 50, tag: "Architecture", icon: "🧬" },
	{ id: "python", name: "Python", count: 50, tag: "Language", icon: "🐍" },
	{ id: "react", name: "React", count: 50, tag: "Frontend", icon: "⚛️" },
	{ id: "rest", name: "REST", count: 49, tag: "Architecture", icon: "🔗" },
	{ id: "servlets", name: "Servlets", count: 50, tag: "Backend", icon: "🧱" },
	{ id: "soap", name: "SOAP", count: 50, tag: "Architecture", icon: "🧼" },
	{ id: "spring", name: "Spring", count: 50, tag: "Backend", icon: "🌱" },
	{ id: "springboot", name: "Spring Boot", count: 50, tag: "Backend", icon: "🚀" },
	{ id: "system_design", name: "System Design", count: 50, tag: "Architecture", icon: "🏗️" },
];

const FILTERS = ["All", "Frontend", "Backend", "Cloud", "DevOps", "Architecture", "Language", "Streaming"];

export default function McqTopicsPage() {
	const nav = useNavigate();
	const [q, setQ] = useState("");
	const [filter, setFilter] = useState("All");
	const [sort, setSort] = useState("recommended");

	const totalQuestions = useMemo(() => TOPICS.reduce((s, t) => s + t.count, 0), []);

	const list = useMemo(() => {
		let items = TOPICS;

		if (filter !== "All") items = items.filter((t) => t.tag === filter);
		if (q.trim()) {
			const s = q.toLowerCase();
			items = items.filter((t) => t.name.toLowerCase().includes(s) || t.id.toLowerCase().includes(s));
		}

		if (sort === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
		if (sort === "count") items = [...items].sort((a, b) => b.count - a.count);

		return items;
	}, [q, filter, sort]);

	return (
		<div style={styles.bg}>
			<div style={styles.shell}>
				<div style={styles.headerCard}>
					<div>
						<h1 style={styles.h1}>MCQ Topics</h1>
						<div style={styles.sub}>
							Pick a topic and start practice. Total: <b>{TOPICS.length}</b> topics • <b>{totalQuestions}</b> questions
						</div>
					</div>

					<div style={styles.toolsRow}>
						<select value={sort} onChange={(e) => setSort(e.target.value)} style={styles.select}>
							<option value="recommended">Sort: Recommended</option>
							<option value="name">Sort: Name</option>
							<option value="count">Sort: Most questions</option>
						</select>

						<input
							value={q}
							onChange={(e) => setQ(e.target.value)}
							placeholder="Search topics (e.g., Spring, AWS, React)"
							style={styles.search}
						/>
					</div>

					<div style={styles.filterRow}>
						{FILTERS.map((f) => (
							<button
								key={f}
								onClick={() => setFilter(f)}
								style={{
									...styles.pill,
									...(filter === f ? styles.pillActive : {}),
									// highlight the 'All' pill with stronger visual treatment
									...(f === 'All'
										? {
												padding: '10px 18px',
												fontWeight: 700,
												borderRadius: 12,
												boxShadow: filter === f ? '0 10px 30px rgba(79,70,229,0.18)' : '0 6px 18px rgba(15,23,42,0.06)',
												background: filter === f ? 'linear-gradient(90deg,#7c3aed,#a78bfa)' : 'rgba(255,255,255,0.06)',
												color: filter === f ? '#fff' : '#f3f4f6',
												border: filter === f ? 'none' : '1px solid rgba(255,255,255,0.06)'
											}
										: {})
								}}
							>
								{f}
							</button>
						))}
					</div>
				</div>

				<div style={styles.metaRow}>
					<div>Showing <b>{list.length}</b> topic(s)</div>
					<div style={{ opacity: 0.75 }}>Tip: Use search + sort to find quickly.</div>
				</div>

				<div style={styles.grid}>
					{list.map((t) => (
						<div key={t.id} style={styles.card}>
							<div style={styles.cardLeft}>
								<div style={styles.icon}>{t.icon}</div>
								<div>
									<div style={styles.title}>{t.name}</div>
									<div style={styles.small}>
										{t.count} questions • <span style={styles.tag}>{t.tag}</span>
									</div>
								</div>
							</div>

							<button style={styles.startBtn} onClick={() => nav(`/mcq/${t.id}`)}>
								Start →
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const styles = {
	bg: {
		minHeight: "100vh",
		padding: "28px 18px",
		background: 'radial-gradient(900px 420px at 8% 0%, #eef2ff 0%, rgba(99,102,241,0.06) 25%, rgba(14,165,233,0.02) 50%, #ffffff 100%), linear-gradient(90deg, #fbfdff 0%, #f4f7ff 100%)',
	},
	shell: { maxWidth: 1150, margin: "0 auto" },
	headerCard: {
		background: "#fff",
		borderRadius: 18,
		boxShadow: "0 18px 50px rgba(2,6,23,0.06)",
		padding: 18,
		border: "1px solid rgba(15,23,42,0.06)",
	},
	h1: { margin: 0, fontSize: 30, letterSpacing: -0.3, color: '#0f172a' },
	sub: { marginTop: 6, opacity: 0.9, color: '#475569' },
	toolsRow: { display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" },
	select: {
		padding: "10px 12px",
		borderRadius: 12,
		border: "1px solid rgba(15,23,42,0.06)",
		background: "#fff",
		color: '#0f172a',
		minWidth: 210,
	},
	search: {
		flex: 1,
		minWidth: 260,
		padding: "10px 12px",
		borderRadius: 12,
		border: "1px solid rgba(15,23,42,0.06)",
		outline: "none",
		color: '#0f172a'
	},
	filterRow: { display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" },
	pill: {
		padding: '8px 12px',
		borderRadius: 12,
		background: '#fff',
		color: '#0f172a',
		border: '1px solid rgba(15,23,42,0.06)',
		cursor: 'pointer',
		transition: 'all 180ms ease',
		fontSize: 14,
		boxShadow: '0 4px 12px rgba(2,6,23,0.04)'
	},
	pillActive: {
		background: 'linear-gradient(90deg,#7c3aed,#a78bfa)',
		color: '#fff',
		transform: 'translateY(-1px)',
		boxShadow: '0 12px 30px rgba(99,102,241,0.18)'
	},
	metaRow: { display: "flex", justifyContent: "space-between", marginTop: 14, padding: "0 4px" },
	grid: {
		marginTop: 14,
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
		gap: 14,
	},
	card: {
		background: "#fff",
		borderRadius: 16,
		padding: 14,
		border: "1px solid rgba(15,23,42,0.06)",
		boxShadow: "0 14px 36px rgba(2,6,23,0.06)",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 10,
		overflow: 'hidden', // ensure children can't visually escape the card
	},
	cardLeft: { display: "flex", gap: 12, alignItems: "center", flex: 1, minWidth: 0 },
	icon: {
		width: 56,
		height: 56,
		borderRadius: 12,
		background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
		color: '#fff',
		display: 'grid',
		placeItems: 'center',
		fontSize: 22,
		lineHeight: '1',
		boxShadow: '0 6px 18px rgba(99,102,241,0.18)',
		flexShrink: 0,
	},
	title: { fontWeight: 700, fontSize: 16, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
	small: { marginTop: 4, opacity: 0.95, fontSize: 13, color: '#475569' },
	tag: { padding: "6px 12px", borderRadius: 999, background: "#eef2ff", color: '#3730a3', fontWeight:600, fontSize:12, marginLeft: 6, border: '1px solid rgba(59,130,246,0.08)' },
	startBtn: {
		padding: "10px 18px",
		borderRadius: 999,
		border: "none",
		background: "linear-gradient(90deg,#7c3aed,#a78bfa)",
		color: '#fff',
		cursor: "pointer",
		fontWeight: 700,
		boxShadow: "0 12px 36px rgba(124,58,237,0.18)",
		transition: 'transform 160ms ease, box-shadow 160ms ease',
		minWidth: 96,
		textAlign: 'center',
		fontSize: 14,
		flexShrink: 0, // keep the button from shrinking when space is tight
		marginLeft: 12,
	},
};
