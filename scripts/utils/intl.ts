export type Divisors = {
  readonly amount: number;
  readonly name: Intl.RelativeTimeFormatUnit;
}[];

export const DIVISORS: Divisors = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
];

/**
 * @example
 * const currentDate = new Date()
 * const pastDate = new Date().setMonth(currentDate.getMonth() - 5)
 *
 * console.log(formatTimeAgo(pastDate)) // "5 months ago"
 */
export function formatTimeAgo(
  date: Date | string | number = Date.now(),
  { lang, ...options }: Intl.RelativeTimeFormatOptions & { lang?: string } = {},
) {
  const formatter = new Intl.RelativeTimeFormat(lang, { numeric: 'auto', ...options });
  let duration = (+new Date(date) - +new Date()) / 1000;

  for (const { amount, name } of DIVISORS) {
    if (Math.abs(duration) < amount) {
      return formatter.format(Math.round(duration), name);
    }
    duration /= amount;
  }
  return 'never';
}
