function change(pattern: string, date: Date) {
  function toString(number: number) {
    return number.toString().padStart(2, '0')
  }

  switch (pattern) {
    case 'yyyy':
      return date.getFullYear().toString()
    case 'yy':
      return date.getFullYear().toString().slice(2, 4)
    case 'MM':
      return toString(date.getMonth() + 1)
    case 'dd':
      return toString(date.getDate())
    case 'HH':
      return toString(date.getHours())
    case 'mm':
      return toString(date.getMinutes())
    case 'ss':
      return toString(date.getSeconds())
    default:
      throw new Error('pattern not matching error')
  }
}

export default function format(pattern: string, date: Date) {
  return pattern.replace(/(yyyy|yy|MM|dd|HH|mm|ss)/g, (t: string): string => {
    return change(t, date)
  })
}
