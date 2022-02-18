const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const abbreviateString = (array) => array.map((str) => str.substring(0, 3))
console.log(abbreviateString(months))
console.log(abbreviateString(weekdays))

const currentMonth = document.querySelector('.calendar-current-month span')
const calendarDays = document.querySelector('.calendar-weekdays')
const weekdayName = document.querySelector('.calendar-weekdays-names')
let today = new Date()
let date = new Date()
const dateLocale = date.toLocaleDateString('en-UK', {
  month: 'long',
  year: 'numeric',
})
// console.log({date})

console.log(
  date.toLocaleDateString('en-UK', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  })
)
currentMonth.textContent = dateLocale

today.setHours(0, 0, 0, 0)
// console.log({today})

abbreviateString(weekdays).map((weekday) => {
  return (weekdayName.innerHTML += `<div class='weekday-name'>${weekday}</div>`)
})

renderCalendar()
function renderCalendar() {
  const prevMonthLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate()
  const totalMonthDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()
  const startWeekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  console.log({ prevMonthLastDay, totalMonthDays, startWeekDay })

  const numberOfWeekedays = 7
  const maxNumberOfCalendarRows = 6
  let totalCalendarDay = numberOfWeekedays * maxNumberOfCalendarRows

  calendarDays.innerHTML = ''

  for (let i = 0; i < totalCalendarDay; i++) {
    let day = i - startWeekDay
    // console.log({ day })

    if (i <= startWeekDay) {
      // adding previous month days
      calendarDays.innerHTML += `
        <div class='calendar-day-container'>
          <div class='calendar-date'>
            ${prevMonthLastDay - i}
          </div>
        </div>
      `
    } else if (i <= startWeekDay + totalMonthDays) {
      // adding this month days
      date.setDate(day)
      date.setHours(0, 0, 0, 0)

      // Adds a classname
      let dayClass =
        date.getTime() === today.getTime()
          ? 'calendar-day-container current-day'
          : 'calendar-day-container month-day'

      // Create element
      calendarDays.innerHTML += `
          <div class='${dayClass}'>
            <div class='calendar-date'>
              ${day}
            </div>
            <div class="calendar-tags">
              <a href="" class="calendar-link">Hello</a>
            </div>
          </div>
        `
    } else {
      // adding next month days
      calendarDays.innerHTML += `
          <div class='calendar-day-container'>
            <div class='calendar-date'>
              ${day - totalMonthDays}
            </div>
          </div>
        `
    }
  }
}

document.querySelectorAll('.action-button').forEach(function (element) {
  element.addEventListener('click', function () {
    date = new Date(currentMonth.textContent)
    date.setMonth(
      date.getMonth() + (element.classList.contains('prevMonth') ? -1 : 1)
    )
    currentMonth.textContent = currentMonth.textContent =
      date.toLocaleDateString('en-UK', { month: 'long', year: 'numeric' })
    renderCalendar()
  })
})
