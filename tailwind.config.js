const brandColors = {
  birdBlue: '#1D9bf0',
  platinum: '#e7e9ea',
  silver: '#71767b',
  onix: '#333639',
  richBlack: '#15202b'
}

module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum,
      }
    },
  },
  plugins: [],
}