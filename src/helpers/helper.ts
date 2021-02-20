export const ValidateEmail = (strEmail: string): boolean => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  return emailRegex.test(strEmail)
}
