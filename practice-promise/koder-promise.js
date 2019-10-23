let koder = {
  isInterview : false,
  isAdvancePayment : false,
  isAttendance : false
}

function interview (koder) {
  return new Promise ((resolve, reject) => {
    koder.isInterview = true
    if (!koder.isInterview) {
      return reject (new Error('NO SE ENTREVISTO'))
    }
    return resolve (koder)
  })
}

function advancePayment (koder) {
  return new Promise ((resolve , reject) => {
    koder.isAdvancePayment = true
    if (!koder.isAdvancePayment) {
      return reject (new Error ('NO PUDO PAGAR'))
    }
    return resolve (koder)
  })
}

function attendance (koder) {
  returnnew Promise((resolve , reject) => {
    koder.isAttendance = true
    if(!koder.isAttendance) {
      return reject (new Error ('NO ASISTIO'))
    }
    return resolve (koder)
  })
}

interview(koder)
  .then (isInterview => {
    advancePayment(isInterview)
      .then (isAdvancePayment => {
        attendance(isAdvancePayment)
          .then (isAdvancePayment => {
            console.log ("koder: " , isInterview)
          })
        .catch (error => {
          console.error("ERROR DONT ATTENDANCE" , error)
        })
      .catch (error => {
        console.error("ERROR DONT ADVANCE PAYMENT" , error)
      })
  })
.catch (error => {
  console.error("ERROR DONT INTERVIEW" , error)
})