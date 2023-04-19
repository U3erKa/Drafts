type _DIVISORS = {
  readonly amount: number
  readonly name: Intl.RelativeTimeFormatUnit
}[]

const DIVISORS: _DIVISORS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
]

/**
 * @example
 * const currentDate = new Date()
 * const pastDate = new Date().setMonth(currentDate.getMonth() - 5)
 *
 * console.log(formatTimeAgo(pastDate)) // "5 months ago"
 */
function formatTimeAgo(date: Date | number, { lang, ...options }: Intl.RelativeTimeFormatOptions & { lang?: string }) {
  const defaults: Intl.RelativeTimeFormatOptions = { numeric: "auto" }
  options ? Object.assign(defaults, options) : defaults

  const formatter = new Intl.RelativeTimeFormat(lang, options)
  let duration = (date.valueOf() - new Date().valueOf()) / 1000

  for (const { amount, name } of DIVISORS) {
    if (Math.abs(duration) < amount) {
      return formatter.format(Math.round(duration), name)
    }
    duration /= amount
  }
  throw new RangeError() // never reaches, for TS
}

export = { DIVISORS, formatTimeAgo }
