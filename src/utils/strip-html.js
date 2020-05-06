import he from 'he'

export default function stripHtml(html) {
  if (typeof window === 'undefined') return html
  let tmp = document.createElement('DIV')
  tmp.innerHTML = html
  let strippedHtml = tmp.textContent || tmp.innerText || ''
  strippedHtml = strippedHtml.replace(/(\r\n|\n|\r)/gm, '')
  let decodedHTML = he.decode(strippedHtml)
  return decodedHTML
}
