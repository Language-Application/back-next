export default function isPseudo(pseudo) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]+$/
  return regex.test(pseudo)
}
