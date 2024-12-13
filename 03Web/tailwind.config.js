module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonBlue: '#66fcf1',
        darkGray: '#1f2833',
        lightGray: '#c5c6c7',
        pureWhite: '#ffffff',
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
