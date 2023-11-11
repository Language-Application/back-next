
export default function checkPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
  const isAtLeastSixChars = password.length >= 6
  const hasNumber = /\d/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasSpecialChar = /[@$!%*?&]/.test(password)
  return [regex.test(password), isAtLeastSixChars, hasNumber, hasUpperCase ,hasLowerCase, hasSpecialChar]
}
