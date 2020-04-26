export default function stripHtml(html)
{
   if ( typeof window === 'undefined' ) return
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}