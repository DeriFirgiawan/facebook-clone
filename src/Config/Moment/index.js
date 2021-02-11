
import moment from 'moment'

export const getDataMonths = moment.monthsShort()

export const getDataDays = []
for (let i = 0; i < 31; i++) {
  getDataDays.push({id: i + 1, value: i + 1})
}

export const getDataYears = (back) => {
  const year = new Date().getFullYear();
  return Array.from({length: back}, (v, i) => year - back + i + 1);
}
