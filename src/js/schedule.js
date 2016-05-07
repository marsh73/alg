/**
 * Check proposed appointment against schedule obje
 * @param  {array} schedule  contains schedule objects
 * @param  {object} appt     contains label, date/time, duration
 * @return {bool}          returns true if no conflict
 */
export const checkSchedule = (schedule, appt) => {
  appt = transformAppt(appt)
  let times = schedule.map( app => {
    return transformAppt(app)
  })
  let conflicts = []
  for (let app of times) {
    if(compareAppts(appt, app)){
      conflicts.push(app)
    }
  }
  return conflicts.length ? false : true
}

function transformAppt (appt) {
  let date = new Date(appt.time)
  return {
    start: date.getTime(),
    end: getApptEndTime(appt, appt.duration)
  }
}

function getApptEndTime (appt, duration) {
  let time = new Date(appt.time)
  return time.setMinutes(time.getMinutes() + duration);
}

function compareAppts (appt, booked) {
  return ((appt.start >= booked.start && appt.start <= booked.end) ||
      (appt.end >= booked.start && appt.end <= booked.end) ||
        (appt.start < booked.start && appt.end > booked.end))
}

// transform appt
// get end time
// compare appts
