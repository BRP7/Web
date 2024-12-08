module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: '#e0e0e0',
        neonBlue: '#00d4ff',
        whiteLight: '#ffffff',
      },
      boxShadow: {
        glow: '0 0 20px 5px rgba(0, 212, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
