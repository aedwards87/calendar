const data = [
  {
    id: '1',
    title: 'Gov22',
    date: '6 July 2022',
    url: 'https://www.cgi.org.uk/events/conferences/gov-2022',
  },
  {
    id: '2',
    title: 'Gov22',
    date: '6 July 2022',
    url: 'https://www.cgi.org.uk/events/conferences/gov-2022',
  },
  {
    id: '3',
    title: 'Governance Ireland: An evolving landscape',
    date: '10 May 2022',
    url: 'https://www.cgi.org.uk/events/conferences/governance-ireland',
  },
  {
    id: '4',
    title: "Non-Executive Directors' Programme",
    date: '15 March 2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/non-executive-directors-programme',
  },
  {
    id: '5',
    title: 'Diversity & Inclusion Summit',
    date: '22 March 2022',
    url: 'https://www.cgi.org.uk/events/conferences/dni-summit',
  },
  {
    id: '6',
    title: 'Effective Minute Taking',
    date: '24 February 2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/effective-minute-taking',
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

const renderCalendar = () => {
  const currentMonth = document.querySelector('.calendar-current-month span')
  const calendarDays = document.querySelector('.calendar-weekdays')
  const weekdayName = document.querySelector('.calendar-weekdays-names')

  // make sure fields are empty before (re)populating
  calendarDays.innerHTML = ''
  weekdayName.innerHTML = ''

  // Update element to display current month and year
  const monthAndYear = date.toLocaleDateString('en-UK', {
    month: 'long',
    year: 'numeric',
  })
  currentMonth.textContent = monthAndYear

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

    const getDate = `${i} ${months[date.getMonth()]} ${date.getFullYear()}`
    const matchDateWithData = data.filter((d) => getDate === d.date)

    // Create element
    calendarDays.innerHTML += `
      <div class='${dayClass}'>
        <div class='calendar-date'>${i}</div>
          ${
            matchDateWithData.length > 0
              ? `
                <div class="calendar-tags">
                  <a href="${matchDateWithData[0].url}" class="calendar-link">
                    ${matchDateWithData[0].title}
                  </a>
                </div>
              `
              : ''
          }
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
