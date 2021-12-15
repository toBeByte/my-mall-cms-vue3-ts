import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

const DATE_DEFAULT_TYPE = 'YYYY-MM-DD HH:mm:ss'
dayjs.extend(utc)

export function formatUtcTime(
  formatUtcString: string,
  format: string = DATE_DEFAULT_TYPE
) {
  return dayjs.utc(formatUtcString).utcOffset(8).format(format)
}
