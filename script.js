const data = [
  {
    id: '1',
    name: 'Elliot',
    date: '18 February 2022',
  },
  {
    id: '2',
    name: 'Phil',
    date: '17/1/2021',
  },
  {
    id: '3',
    name: 'Toby',
    date: '25/1/2021',
  },
  {
    id: '4',
    name: 'Abc',
    date: '10/1/2021',
  },
]

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

let date = new Date()

const d = date.toLocaleDateString('en-UK', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
})

// console.log(data.map((x) => x.date === d))
console.log(d === data[0].date)

const renderCalendar = () => {
  const currentMonth = document.querySelector('.calendar-current-month span')
  const calendarDays = document.querySelector('.calendar-weekdays')
  const weekdayName = document.querySelector('.calendar-weekdays-names')

  // make sure fields are empty before (re)populating
  calendarDays.innerHTML = ''
  weekdayName.innerHTML = ''

  // Update element to display current month and year
  currentMonth.textContent = date.toLocaleDateString('en-UK', {
    month: 'long',
    year: 'numeric',
  })

  // Get current months last date
  const monthLastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()

  // const monthLastDayIndex = new Date(
  //   date.getFullYear(),
  //   date.getMonth() + 1,
  //   0
  // ).getDay()

  // Get current months start day index
  const monthStartDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay()

  // Get previous month last day index
  const prevMonthLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate()

  // Determines number of next months days to display
  const nextMonthDays = 42 - (monthStartDayIndex + monthLastDay)

  // Shortens an array of strings to 3 characters
  const abbreviateString = (array) => array.map((str) => str.substring(0, 3))
  const populateWeekdayNames = abbreviateString(weekdays).map((weekday) => {
    return (weekdayName.innerHTML += `<div class='weekday-name'>${weekday}</div>`)
  })

  // Create previous month elements
  for (let i = monthStartDayIndex; i > 0; i--) {
    calendarDays.innerHTML += `
    <div class='calendar-day-container'>
      <div class='calendar-date'>
        ${prevMonthLastDay - i + 1}
      </div>
      <div class="calendar-tags">
        <a href="" class="calendar-link">Hello</a>
      </div>
    </div>
  `
  }

  // Create current month elements
  for (let i = 1; i <= monthLastDay; i++) {
    // Display classnames dependant on current day or not
    let dayClass =
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
        ? 'calendar-day-container current-day'
        : 'calendar-day-container month-day'

    // Create element
    calendarDays.innerHTML += `
    <div class='${dayClass}'>
      <div class='calendar-date'>
        ${i}
      </div>
      <div class="calendar-tags">
        <a href="" class="calendar-link">Hello</a>
      </div>
    </div>
`
  }

  // Create next month elements
  for (let i = 1; i <= nextMonthDays; i++) {
    calendarDays.innerHTML += `
    <div class='calendar-day-container'>
      <div class='calendar-date'>
        ${i}
      </div>
      <div class="calendar-tags">
        <a href="" class="calendar-link">Hello</a>
      </div>
    </div>
  `
  }
}

// Create onClick event to handle next and previous month population
document.querySelectorAll('.action-button').forEach(function (element) {
  const clickHandler = () => {
    date.setMonth(
      date.getMonth() + (element.classList.contains('prevMonth') ? -1 : 1)
    )
    renderCalendar()
  }
  element.addEventListener('click', clickHandler)
})

// Create onClick event to handle current month population
document.querySelectorAll('.today').forEach(function (element) {
  const clickHandler = () => {
    date = new Date()
    renderCalendar()
  }
  element.addEventListener('click', clickHandler)
})

renderCalendar()
