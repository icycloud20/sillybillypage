/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: { dark:"#0b0b0c", surface:"#141414", text:"#e8e8e8" }, border:"rgba(255,255,255,.14)" }
    }
  }, plugins: []
}
