module.exports = {
  port: process.env.PORT || 4000,
  open: false,
  files: [
    "./static/**/*.{html,htm,css,js}",
    "./dist/**/*.{html,htm,css,js}"
  ],
  server: { 
    baseDir: [
      "./static",
      "./dist",
      "./node_modules"
    ]
  }
}
