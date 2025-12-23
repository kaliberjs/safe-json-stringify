module.exports = {
  kaliber: {
    includeInServerCompilation: [
      /^@kaliber\/safe-json-stringify/
    ],
    /** @arg {Error} e */
    reportError(e) {
      console.error(e)
    }
  }
}
