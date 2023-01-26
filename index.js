import nodeNotifier from 'node-notifier';
let num = 1
let voltaDescanso = false


setInterval(() => {
  if(num===5 && voltaDescanso === false) {
    notificador()
    num = 0
    voltaDescanso = true
    console.log({"voltaDescanso": voltaDescanso})
  }
  if(num === 10 && voltaDescanso === true) {
    num = 0
    voltaDescanso = false
    notificador2()
  }
  console.clear()
  if(num>=60){
    console.clear()
    let min = Math.floor(num/60)
    let sec = num - min*60 
    console.log(`${min} min e ${sec} segundos`)
  } else {
    console.log(`${num} segundos`)
  }
  num++
}, 1000)

function notificador2 () {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Hora do descanso',
    sound: true
  });
}
function notificador () {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Hora do descanso',
    sound: true
  });
}