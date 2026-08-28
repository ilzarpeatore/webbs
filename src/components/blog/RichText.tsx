// El admin panel de bckbs valida `content`/`bibliography` solo como
// `nullable|string` -- no hay confirmación de si el editor real que usan los
// coaches guarda HTML (lo más probable en un editor de texto enriquecido) o
// texto plano. Sin poder verlo en marcha, se maneja de forma adaptativa: si
// el valor contiene una etiqueta HTML se renderiza como HTML, si no, como
// texto plano con saltos de línea preservados -- funciona igual de bien en
// ambos casos sin arriesgar a mostrar etiquetas crudas al visitante.
const looksLikeHtml = (value: string) => /<[a-z][\s\S]*>/i.test(value)

type RichTextProps = {
  html: string
  className?: string
}

const RichText = ({ html, className = '' }: RichTextProps) => {
  if (looksLikeHtml(html)) {
    return <div className={`prose prose-zinc max-w-none ${className}`} dangerouslySetInnerHTML={{ __html: html }} />
  }

  return <div className={`prose prose-zinc max-w-none whitespace-pre-line ${className}`}>{html}</div>
}

export default RichText
