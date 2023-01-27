import nodeNotifier from 'node-notifier';
let multiplier = 40
let counter = 1
let focusTime = false
let index = 1
let progressBar = ['[', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ']']
let focusSeconds = 1200
let breakSeconds = 300

setInterval(() => {
  if (counter === focusSeconds && focusTime === false) { //seconds
    notifier()
    counter = 0
    focusTime = true
  }
  if (counter === breakSeconds && focusTime === true) { //seconds
    counter = 0
    focusTime = false
    notifier2()
  }

  console.clear()
  
  if (counter >= 60) {
    console.clear()
    let min = Math.floor(counter / 60)
    let sec = counter - min * 60
    console.log(`${min} min e ${sec} seconds`)
  } else {
    console.log(`${counter} seconds`)
  }

  !focusTime ? console.log("Focus time") : console.log("Breaking time")
  counter++

  let joinedArray = progressBar.join("")
  console.log(joinedArray)

  if (counter === multiplier) {
    progressBar[index] = "="
    index++
    multiplier = 2 * multiplier
  }
}, 1000) //ms

//notifiers
function notifier2() {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Focus time',
    sound: true
  });
}
function notifier() {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Breaking time',
    sound: true
  });
}