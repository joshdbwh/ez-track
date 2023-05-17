/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'color-canvas': '#0d1116',
        'color-primary': '#010409',
        'color-surface': '#161b22',
        'color-accent': 'rgb(47, 129, 247)',
        'color-border': '#30363d',
        'color-primary-text': '#e6edf3',
        'color-secondary-text': '#7d8590',
        'color-list-item-hover': 'rgba(177,186,196,0.12)',
        'color-list-item-hover-border': 'rgba(0,0,0,0)',
        'color-border-active': '#f78166',
        'color-btn-base': 'rgb(33, 38, 45)',
        'color-btn-base-border': 'rgba(240,246,252,0.1)',
        'color-btn-base-hover': 'rgb(48, 54, 61)',
        'color-btn-base-hover-border': 'rgb(139, 148, 158)',
        'color-btn-primary': '#238636',
        'color-btn-primary-border': 'rgba(240,246,252,0.1)',
        'color-btn-primary-hover': '#2ea043',
        'color-btn-primary-hover-border': 'rgba(240,246,252,0.1)',
      }
    },
  },
  plugins: [],
}

