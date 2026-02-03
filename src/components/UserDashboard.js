import React, { useEffect } from 'react';
import { useAuth, useTheme } from '../contexts';
import { useStats } from '../contexts/StatsContext';

const UserDashboard = ({ setSection }) => {
	const { user } = useAuth();
	const { theme } = useTheme();
	const { userStats, getOverallAccuracy, getWeakestDomains, getStrongestDomains, getDailyProgress } = useStats();

	// Inject CSS for animated progress bars (only once)
	useEffect(() => {
		if (document.getElementById('userdashboard-progress-css')) return;
		const css = `
		/* Animated progress inner bar */
		.userdashboard-progress-inner {
			height: 100%;
			border-radius: 6px;
			transition: width 600ms cubic-bezier(.2,.8,.2,1), transform 600ms ease, filter 600ms ease;
			transform-origin: left center;
		}

		/* Subtle pulse when value changes */
		@keyframes ud-pulse {
			0% { transform: scaleX(1); filter: brightness(1); }
			40% { transform: scaleX(1.03); filter: brightness(1.06); }
			100% { transform: scaleX(1); filter: brightness(1); }
		}
		.userdashboard-progress-inner.pulse {
			animation: ud-pulse 900ms ease-out;
		}
		`;
		const s = document.createElement('style');
		s.id = 'userdashboard-progress-css';
		s.appendChild(document.createTextNode(css));
		document.head.appendChild(s);
	}, []);

	const quickActions = [
			{ label: 'Start Quiz', section: 'Quiz', iconKey: 'quiz' },
			{ label: 'Flashcards', section: 'Flashcards', iconKey: 'cards' },
			{ label: 'Practice Exams', section: 'PracticeExams', iconKey: 'exams' },
			{ label: 'All Domains Quiz', section: 'AllDomainsQuiz', iconKey: 'target' }
		];

		const renderIcon = (key) => {
			switch (key) {
				case 'quiz':
					return (
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<path d="M3 5a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M7 9h10M7 13h6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					);
				case 'cards':
					return (
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="1.2"/>
							<path d="M3 10h18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
						</svg>
					);
				case 'exams':
					return (
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M7 13h10M7 17h6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					);
				case 'target':
					return (
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.2"/>
							<circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="1.2"/>
							<circle cx="12" cy="12" r="2" fill="#fff" />
						</svg>
					);
				default:
					return null;
			}
		};

	return (
		<div style={{ padding: 24, maxWidth: 1200, margin: '0 auto', fontFamily: '"Segoe UI", Arial, sans-serif' }}>
			<div style={{ background: theme.gradient, padding: 28, borderRadius: 12, color: 'white', textAlign: 'center', marginBottom: 24 }}>
				<h1 style={{ margin: 0, fontSize: '1.8rem' }}>Welcome back, {user?.name || 'Student'}!</h1>
				<p style={{ margin: '8px 0 0 0' }}>Continue your CCSP study journey — pick an action below.</p>
			</div>

				{/* Progress tracker row 1 - Key stats */}
				<div style={{ display: 'flex', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
					<div style={{ flex: '1 1 180px', background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
						<div style={{ fontSize: '0.95rem', color: theme.textSecondary }}>Questions Answered</div>
						<div style={{ fontSize: '1.8rem', fontWeight: 700, color: theme.primary }}>{userStats?.totalQuestions || 0}</div>
					</div>

					<div style={{ flex: '1 1 180px', background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
						<div style={{ fontSize: '0.95rem', color: theme.textSecondary }}>Overall Accuracy</div>
						<div style={{ fontSize: '1.8rem', fontWeight: 700, color: theme.primary }}>{getOverallAccuracy()}%</div>
					</div>

					<div style={{ flex: '1 1 180px', background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
						<div style={{ fontSize: '0.95rem', color: theme.textSecondary }}>Study Streak</div>
						<div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fb923c' }}>{userStats?.studyStreak || 0} days 🔥</div>
					</div>

					<div style={{ flex: '1 1 180px', background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
						<div style={{ fontSize: '0.95rem', color: theme.textSecondary }}>Today's Progress</div>
						<div style={{ fontSize: '1.8rem', fontWeight: 700, color: theme.primary }}>{getDailyProgress().completed}/{getDailyProgress().goal}</div>
						<div style={{ width: '100%', height: 6, background: theme.border, borderRadius: 4, marginTop: 6, overflow: 'hidden' }}>
							<div style={{ width: `${getDailyProgress().percentage}%`, height: '100%', background: getDailyProgress().percentage >= 100 ? '#34a853' : '#4285f4', transition: 'width 0.3s' }} />
						</div>
					</div>
				</div>

				{/* Progress tracker row 2 - Domain Performance */}
				<div style={{ marginBottom: 18 }}>
					<div style={{ background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
							<div style={{ fontSize: '0.95rem', color: theme.textSecondary, marginBottom: 8 }}>Domain Performance</div>
							<div style={{ display: 'grid', gap: 8 }}>
								{['domain1','domain2','domain3','domain4','domain5','domain6'].map((key, idx) => {
								const d = userStats?.domainStrengths?.[key] || { correct: 0, total: 0, percentage: 0 };
								const pct = d.percentage || 0;
									const color = pct >= 70 ? '#34a853' : pct >= 50 ? '#fbbc04' : '#ea4335';
									return (
										<div key={key}>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: theme.text }}>
												<div>Domain {idx + 1}</div>
												<div>{pct}% ({d.correct}/{d.total})</div>
											</div>
											<div style={{ width: '100%', height: 8, background: theme.border, borderRadius: 6, overflow: 'hidden' }}>
												<div
													key={`${key}-${pct}`}
													className={`userdashboard-progress-inner pulse`}
													style={{ width: `${pct}%`, height: '100%', background: color }}
												/>
											</div>
										</div>
									);
								})}
							</div>
					</div>
				</div>

				{/* Progress tracker row 3 - Recommendations */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
					{/* Weakest Domains - Focus Areas */}
					<div style={{ background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
						<div style={{ fontSize: '0.95rem', color: '#ea4335', fontWeight: 600, marginBottom: 12 }}>📚 Areas to Focus</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{getWeakestDomains().map((d) => (
								<div key={d.domain} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', alignItems: 'center' }}>
									<span>{d.domain.replace('domain', 'Domain ')}</span>
									<span style={{ fontSize: '0.8rem', color: theme.textSecondary }}>{d.accuracy}% ({d.correct}/{d.total})</span>
								</div>
							))}
						</div>
					</div>

					{/* Strongest Domains - Mastery Areas */}
					<div style={{ background: theme.cardBackground, padding: 16, borderRadius: 12, border: `1px solid ${theme.border}` }}>
						<div style={{ fontSize: '0.95rem', color: '#34a853', fontWeight: 600, marginBottom: 12 }}>⭐ Mastered Domains</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{getStrongestDomains().map((d) => (
								<div key={d.domain} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', alignItems: 'center' }}>
									<span>{d.domain.replace('domain', 'Domain ')}</span>
									<span style={{ fontSize: '0.8rem', color: theme.textSecondary }}>{d.accuracy}% ({d.correct}/{d.total})</span>
								</div>
							))}
						</div>
					</div>
				</div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
						{quickActions.map((a) => (
							<button
								key={a.section}
								onClick={() => setSection(a.section)}
								style={{
									padding: 16,
									borderRadius: 10,
									background: theme.primary || '#4285f4',
									border: 'none',
									color: '#fff',
									cursor: 'pointer',
									fontWeight: 700,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 8
								}}
								onMouseOver={(e) => { e.currentTarget.style.opacity = 0.95; }}
								onMouseOut={(e) => { e.currentTarget.style.opacity = 1; }}
							>
								<div style={{ fontSize: '1.6rem' }}>{renderIcon(a.iconKey)}</div>
								<div style={{ marginTop: 8 }}>{a.label}</div>
							</button>
						))}
			</div>
		</div>
	);
};

export default UserDashboard;
