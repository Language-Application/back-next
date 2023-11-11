export default function isBirthDate({day, month, year}) {
  const date = new Date(year, month - 1, day)
  const now = new Date()
  const minDate = new Date(now.getFullYear() - 120, now.getMonth(), now.getDate())
  const maxDate = new Date(now.getFullYear() - 3, now.getMonth(), now.getDate())
  return {
    error : date > minDate && date < maxDate && day.toString().length < 3 && day.toString().length > 0 && month.toString().length < 3 && month.toString().length > 0 && year.toString().length === 4 && year > 1900 && month > 0 && month < 13 && day > 0 && day < 32,
    year : year.toString().length === 4 && year > 1900,
    month : month.toString().length < 3 && month.toString().length > 0 && month > 0 && month < 13,
    day : day.toString().length < 3 && day.toString().length > 0 && day > 0 && day < 32,
  }
}