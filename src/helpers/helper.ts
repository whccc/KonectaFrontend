export const ValidateEmail = (strEmail: string): boolean => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  return emailRegex.test(strEmail)
}

export const DeterminateCategory = (strIdCategory: string): string => {
  let strCategory = ''
  switch (strIdCategory) {
    case 'DP':
      strCategory = 'Deporte'
      break

    case 'ED':
      strCategory = 'Educación'
      break

    case 'CL':
      strCategory = 'Cultura'
      break

    case 'CC':
      strCategory = 'Ciencia'
      break

    case 'GT':
      strCategory = 'Gastronimía'
      break
  }
  return strCategory
}
