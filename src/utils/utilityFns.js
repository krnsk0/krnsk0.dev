/* eslint-disable no-undef */

export const formatTimestampToDate = timestamp => {
  const date = new Date(Number(timestamp))
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const formatNumberWithCommas = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const wordCountToMinutes = count => {
  const wpm = 170
  return (count / wpm).toFixed(0)
}
