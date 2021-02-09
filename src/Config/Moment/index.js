
import moment from 'moment'

export const getMonths = moment.monthsShort()

export const dataDay = []
for (let i = 0; i < 31; i++) {
  dataDay.push({id: i + 1, value: i + 1})
}

export const dataMonth = [
  {id:1, month: 'Jan' },
  {id:2, month: 'Feb' },
  {id:3, month: 'Mar' },
  {id:4, month: 'Apr' },
  {id:5, month: 'May' },
  {id:6, month: 'Jun' },
  {id:7, month: 'Jul' },
  {id:8, month: 'Aug' },
  {id:9, month: 'Sep' },
  {id:10, month: 'Oct' },
  {id:11, month: 'Nov' },
  {id:12, month: 'Dec' },
]

export const dataYears = (back) => {
  const year = new Date().getFullYear();
  return Array.from({length: back}, (v, i) => year - back + i + 1);
}
