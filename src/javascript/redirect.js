if (location.host === "kevin-granier") {
  if (location.protocol == 'http:'){
    location.href = location.href.replace(/^http:/, 'https:')
  }
}