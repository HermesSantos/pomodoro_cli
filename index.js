import nodeNotifier from 'node-notifier';
let multiplier = 40
let counter = 1
let focusTime = false
let index = 1
let progressBar = ['[', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ']']
let focusSeconds = 1200 //seconds

setInterval(() => {
  if (counter === focusSeconds && focusTime === false) {
    notifier()
    counter = 0
    progressBar = ['[', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ']']
    focusTime = true
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

  counter++

  let joinedArray = progressBar.join("")
  console.log(joinedArray)

  if (counter === multiplier) {
    progressBar[index] = "="
    index++
    multiplier = 2 * multiplier
  }
}, 1000) //ms

//notifiers when the time is over (it is preseted for 20 minutes)
function notifier() {
  nodeNotifier.notify({
    title: 'Pomodoro',
    message: 'Breaking time',
    sound: true
  });
}
