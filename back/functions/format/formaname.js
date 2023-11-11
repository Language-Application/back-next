export default function isName(name) {
  const regex = /^[A-ZÀ-ÖØ-öø-ÿ][a-zà-öø-ÿ]*(-[A-ZÀ-ÖØ-öø-ÿ][a-zà-öø-ÿ]*)?$/
  return regex.test(name) && name.length <= 20
}
