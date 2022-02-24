const data = [
  {
    title: 'Gov22',
    date: '5/7/2022, 6/7/2022',
    url: 'https://www.cgi.org.uk/events/conferences/gov-2022',
    color: 'Orange',
  },
  {
    title: 'Governance Ireland: An evolving landscape',
    date: '10/5/2022',
    url: 'https://www.cgi.org.uk/events/conferences/governance-ireland',
    color: 'Teal',
  },
  {
    title: "Non-Executive Directors' Programme",
    date: '15/3/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/non-executive-directors-programme',
    color: 'Light Blue',
  },
  {
    title: 'Diversity & Inclusion Summit',
    date: '22/3/2022',
    url: 'https://www.cgi.org.uk/events/conferences/dni-summit',
    color: 'Aqua',
  },
  {
    title: 'Effective Minute Taking',
    date: '18/2/2022, 8/3/2022, 12/4/2022, 18/5/2022, 6/6/2022, 25/7/2022, 12/8/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/effective-minute-taking',
    color: 'Orange',
  },
  {
    title: 'ESG: Summit',
    date: '22/4/2022',
    url: 'https://www.cgi.org.uk/events/conferences/esg-summit',
    color: 'Yellow',
  },
  {
    title: 'The Role of the Company Secretary: Part 1',
    date: '22/2/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/the-role-of-the-company-secretary-part-1',
    color: 'Blue',
  },
  {
    title: 'The Role of the Company Secretary: Part 2',
    date: '24/2/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/the-role-of-the-company-secretary-part-2',
    color: 'Blue',
  },
  {
    title: 'Company Secretarial Practice for PLCs',
    date: '26/4/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/company-secretarial-practice-for-plcs',
    color: 'Blue',
  },
  {
    title: 'Company Secretarial Practice for Support Staff',
    date: '11/5/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/company-secretarial-practice-for-support-staff',
    color: 'Blue',
  },
  {
    title: 'Document Retention: Getting it Right',
    date: '12/5/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/document-retention-getting-it-right',
    color: 'Blue',
  },
  {
    title: 'Introduction to Company Law',
    date: '14/6/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/introduction-to-company-law',
    color: 'Blue',
  },
  {
    title: 'Essential Corporate Governance',
    date: '28/4/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/essential-corporate-governance',
    color: 'Blue',
  },
  {
    title:
      'Are you prepared for the UK Modern Slavery Act (2015) new compliance requirements?',
    date: '17/5/2022',
    url: 'https://www.cgi.org.uk/events/networking-and-cpd-events/cpd-events/modern-slavery-act-2015-may',
    color: 'Blue',
  },
  {
    title: 'Is all Local Government shades of Handforth?',
    date: '22/2/2022',
    url: 'https://www.cgi.org.uk/about-us/regional-branches-groups/east-of-england/events/upcoming-events/local-government',
    color: 'Blue',
  },
  {
    title: 'Isle of Man branch - Annual Dinner - Joint event with the ACCA',
    date: '11/3/2022',
    url: 'https://www.cgi.org.uk/about-us/regional-branches-groups/isle-of-man/events/upcoming-events/annual-dinner-2022',
    color: 'Blue',
  },
  {
    title: 'Essential Charity Governance Course',
    date: '20/4/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/essential-charity-governance',
    color: 'Green',
  },
  {
    title: 'GLP - Influencing Skills for Governance Professionals',
    date: '29/3/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/governance-leadership-programme?tabNum=2',
    color: 'Violet',
  },
  {
    title: 'GLP - Influencing Skills for Governance Professionals',
    date: '23/6/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/governance-leadership-programme?tabNum=2',
    color: 'Violet',
  },
  {
    title: 'GLP - Strategic Skills for Governance Professionals',
    date: '28/2/2022',
    url: 'https://www.cgi.org.uk/professional-development/training/virtual-training-courses/governance-leadership-programme?tabNum=3',
    color: 'Violet',
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

// Converts the date from a string to an array using .split
// also, removes any empty spaces.
const convertDateToArray = data.map(
  (d) => [{ ...d, date: d.date.replace(/\s/g, '').split(',') }][0]
)
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
  // 42 represents the maximum numbers of days that could possibly be displayed on a single calendar month, including prev and next months.
  const nextMonthDays = 42 - (monthStartDayIndex + monthLastDay)

  // Shortens an array of strings to 3 characters
  const abbreviateString = (array) => array.map((str) => str.substring(0, 3))
  abbreviateString(weekdays).map((weekday) => {
    return (weekdayName.innerHTML += `<div class='weekday-name'>${weekday}</div>`)
  })

  // Helper function: Remove space and capitilise text
  const capitilise = function capitilise(str) {
    if (str === undefined) {
      return
    }
    return str
      .replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1)
      })
      .replace(/\s/g, '')
  }

  const createDayElements = (classes, i, nextMonth = 1) => {
    // Get date and filter data that matches that date
    const getMonth = date.getMonth() + nextMonth
    const getDate = `${i}/${getMonth}/${date.getFullYear()}`

    // Find data with multiple dates and separate them into their own fields
    const separateMultipleDates = (data) => {
      let newData = []
      data.map((item) => {
        if (item.date.length > 1) {
          item.date.map((date) => {
            return newData.push({
              title: item.title,
              date: [date],
              url: item.url,
              color: item.color,
            })
          })
        }
      })
      return newData
    }
    // Create a new array with the data, removing those that have multiple dates
    const dataWithoutMultipleDates = convertDateToArray.filter(
      (item) => item.date.length === 1
    )
    // Then combine data
    const combineData = dataWithoutMultipleDates.concat(
      separateMultipleDates(convertDateToArray)
    )

    // Filter data that match the current dates
    const matchDateWithData = combineData.filter(
      (d) => d.date.toString() === getDate
    )

    // Create element
    calendarDays.innerHTML += `
      <div class='${classes}'>
        <div class='calendar-date'>${i}</div>
          ${
            matchDateWithData.length > 0
              ? // Checking to make sure there is actually data for said date,
                // then map over and display data
                `<div class="calendar-tags">
                ${matchDateWithData
                  .map(
                    (match) =>
                      `
                        <a 
                          href="${match.url}" 
                          class="calendar-link"
                          title="${match.title}"
                          style="${`--calendarLinkBgColor: var(--color${capitilise(
                            match.color
                          )}75l); --calendarLinkColor: var(--color${capitilise(
                            match.color
                          )});`}"
                        >
                          ${match.title} 
            
                        </a>
                      `
                  )
                  .join('')}
                </div>
              `
              : ''
          }
      </div>
    `
  }

  // Create previous month elements
  for (let i = monthStartDayIndex; i > 0; i--) {
    const className = 'calendar-day-container'
    createDayElements(className, prevMonthLastDay - i + 1, 0)
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

    createDayElements(dayClass, i)
  }

  // Create next month elements
  for (let i = 1; i <= nextMonthDays; i++) {
    const className = 'calendar-day-container'
    createDayElements(className, i, 2)
  }
}

// Create onClick event to handle next and previous month population
document.querySelectorAll('.action-button').forEach(function (element) {
  const clickHandler = () => {
    date.setMonth(
      date.getMonth() + (element.classList.contains('prev-month') ? -1 : 1)
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
