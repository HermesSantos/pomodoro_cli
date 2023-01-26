import nodeNotifier from 'node-notifier';
let counter = 1
let focusTime = false


setInterval(() => {
  if(counter === 300000 && focusTime === false) {
    notifier()
    counter = 0
    focusTime = true
    console.log({"focusTime": focusTime})
  }
  if(counter === 1200000 && focusTime === true) {
    counter = 0
    focusTime = false
    notifier2()
  }
  console.clear()
  if(counter>=60){
    console.clear()
    let min = Math.floor(counter/60)
    let sec = counter - min*60 
    console.log(`${min} min e ${sec} seconds`)
  } else {
    console.log(`${counter} seconds`)
  }
  !focusTime ? console.log("Focus time") : console.log("Breaking time")
  counter++
}, 1000)

function notifier2 () {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Focus time',
    sound: true
  });
}
function notifier () {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Breaking time',
    sound: true
  });
}