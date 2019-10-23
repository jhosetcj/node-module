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

async function main () {
  const isInterview = await interview(koder)
  const isAdvancePayment = await advancePayment(isInterview)
  const isAdvancePayment = await advancePayment(isInterview)
  const isAttendance = await attendance(koder)
  return isAttendance
}

main ()
.then((koderRegister) => {
  console.log("koder: " , koderRegister)
})
.catch(error => {
  console.error("ERROR: " , error)
})