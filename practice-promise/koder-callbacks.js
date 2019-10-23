let koder = {
    isInterview : false,
    isAdvancePayment : false,
    isAttendance : false
}

function interview (koder, callback){
  koder.isInterview = true 
  let error = null
  if (!koder.isInterview) {
    error = new Error('No se entrevisto')
  }
  callback(error, koder)
}


function advancePayment (koder, callback) {
  koder.isAdvancePayment = true
  let error = null
  if(!koder.isAdvancePayment) {
    error = new Error ('No pudo pagar')
  }
  callback(error, koder) 
}


function attendance (koder, callback) {
  koder.isAttendance = true
  let error = null
  if (!koder.isAttendance) {
    error = new Error ('NO ASISTIO')
  }
  callback(error,koder)
}

function koderRegister (object) {
  interview(koder , (error , koderIsInterview) => {
    if (error) throw error
    console.log("koderIsInterview:" , koderIsInterview)
    advancePayment(koderIsInterview , (error , koderIsAdvancePayment) => {
      if (error) throw error
      console.log("koderIsAdvancePayment" , koderIsAdvancePayment)
      attendance(koderIsAdvancePayment , (error , koderIsAttendance) => {
        if (error) throw error
        console.log("koderIsAttendance" , koderIsAttendance)
      })
    })
  })
}

koderRegister(koder)
