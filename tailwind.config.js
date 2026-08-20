/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Memphis redesign: display now loads Fredoka (rounded sans),
        // not the Balthazar serif this fallback used to hedge for.
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          coral:   '#C9694F',
          yellow:  '#C9A66B',
          mint:    '#4E9B85',
          sky:     '#4C7A94',
        },
        page:        'var(--bg)',
        surface:     'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-hover': 'var(--surface-hover)',
        primary:     'var(--text-primary)',
        // Mid-contrast step between `primary` and `muted` — for copy that
        // needs to read clearly without competing with the headline.
        secondary:   'var(--text-secondary)',
        muted:       'var(--text-muted)',
        subtle:      'var(--border-subtle)',
        strong:      'var(--border-strong)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
