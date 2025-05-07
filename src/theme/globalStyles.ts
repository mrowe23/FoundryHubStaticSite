export 
// Global CSS variables for consistent color scheme
const globalStyles = `
:root {
  /* Primary colors */
  --primary-color: #6d28d9; /* purple-700 */
  --primary-light: #8b5cf6; /* purple-500 */
  --primary-dark: #4c1d95; /* purple-900 */
  
  /* Accent colors */
  --accent-color: #06b6d4; /* cyan-500 */
  --accent-light: #22d3ee; /* cyan-400 */
  --accent-dark: #0e7490; /* cyan-700 */
  
  /* Background colors */
  --bg-main: #111827; /* gray-900 */
  --bg-card: #1f2937; /* gray-800 */
  --bg-dark: #0f172a; /* slate-900 */
  
  /* Text colors */
  --text-primary: #f9fafb; /* gray-50 */
  --text-secondary: #9ca3af; /* gray-400 */
  --text-muted: #6b7280; /* gray-500 */
}

/* Apply global colors */
body {
  background-color: var(--bg-main);
  color: var(--text-primary);
}

.bg-theme-main { background-color: var(--bg-main); }
.bg-theme-card { background-color: var(--bg-card); }
.bg-theme-dark { background-color: var(--bg-dark); }

.text-theme-primary { color: var(--text-primary); }
.text-theme-secondary { color: var(--text-secondary); }
.text-theme-muted { color: var(--text-muted); }

.text-theme-accent { color: var(--accent-color); }
.text-theme-accent-light { color: var(--accent-light); }

.bg-theme-primary { background-color: var(--primary-color); }
.bg-theme-accent { background-color: var(--accent-color); }

.border-theme-primary { border-color: var(--primary-color); }
.border-theme-accent { border-color: var(--accent-color); }

.bg-gradient-theme {
  background-image: linear-gradient(to right, var(--primary-color), var(--accent-color));
}

.from-theme-primary { --tw-gradient-from: var(--primary-color); }
.to-theme-accent { --tw-gradient-to: var(--accent-color); }
`;