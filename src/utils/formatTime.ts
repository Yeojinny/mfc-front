const formatChatTime = (timeString: string): string => {
  const date = new Date(timeString)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? '오후' : '오전'
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${ampm} ${formattedHours}:${formattedMinutes}`
}

const formatTime = (hour: number): string => {
  if (hour === 0) {
    return `오전 12시`
  }
  if (hour < 12) {
    return `오전 ${hour}시`
  }
  if (hour === 12) {
    return `오후 12시`
  }
  return `오후 ${hour - 12}시`
}

const formatCareerDate = (year: number, month: number): string => {
  return `${year}-${month < 10 ? `0${month}` : month}-01`
}

const formatCareerPeriod = (
  startDate: string,
  finishDate: string | null,
): string => {
  // startDate: 2022-01-01, endDate: 2022-12-01 -> 2022년 1월 - 2023년 01월 · 1년 1개월
  // startDate: 2022-01-01, endDate: null -> 2022년 1월 - 현재 · 1년
  const startYear = parseInt(startDate.split('-')[0], 10)
  const startMonth = parseInt(startDate.split('-')[1], 10)
  const finishYear = finishDate
    ? parseInt(finishDate?.split('-')[0], 10)
    : new Date().getFullYear()
  const finishMonth = finishDate
    ? parseInt(finishDate?.split('-')[1], 10)
    : new Date().getMonth() + 1

  const startPeriod = new Date(startYear, startMonth - 1)
  const endPeriod = new Date(finishYear, finishMonth)
  const diffInMonths =
    (endPeriod.getFullYear() - startPeriod.getFullYear()) * 12 +
    endPeriod.getMonth() -
    startPeriod.getMonth()
  const years = Math.floor(diffInMonths / 12)
  const months = diffInMonths % 12

  if (finishDate) {
    return `${startYear}년 ${startMonth}월 - ${finishYear}년 ${finishMonth}월 · ${years ? `${years}년` : ''} ${months ? `${months}개월` : ''}`
  }

  return `${startYear}년 ${startMonth}월 - 현재 · ${years ? `${years}년` : ''} ${months ? `${months}개월` : ''}`
}

export { formatTime, formatChatTime, formatCareerDate, formatCareerPeriod }
