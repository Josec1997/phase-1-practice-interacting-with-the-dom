const counter = document.getElementById('counter')
const plus = document.querySelector("#plus") 
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const comment_form = document.querySelector('#comment-form')
const comments = document.querySelector('#list')

let paused = false 
let numberTracker = {}
let interval = setInterval(incrementCounter,1000)

pause.addEventListener('click',togglePaused)
heart.addEventListener('click',addlike)
comment_form.addEventListener('submit',handleSubmit)

plus.addEventListener("click", (e) => {
  let number = counter.textContent
    number = parseInt(number) + 1
    counter.textContent = number;
})

minus.addEventListener("click", (e) => {
  let number = counter.textContent
    number = parseInt(number) - 1;
    counter.textContent = number;
})

function incrementCounter(e){
    counter.textContent = parseInt(counter.textContent) +1
}

function decrementCounter(){
    counter.textContent = parseInt(counter.textContent) -1
}

function togglePaused(){
    paused = !paused
    if (paused) {
        clearInterval(interval)
        pause.textContent = 'resume'
    } else {
        interval = setInterval(incrementCounter,1000)
        pause.textContent = 'pause'
    }
}

function addlike(){
    let second = counter.textContent
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    renderlikes()
}

function renderlikes(){
  likes.textContent = ""
  for (let key in numberTracker){
    const li = document.createElement('li')
    li.textContent = `${key} has been liked ${numberTracker[key]}times`
    likes.append(li)
  }  
}

function handleSubmit(e){
  e.preventDefault()
  const comment = e.target.querySelector("input").value
//   const comment = e.target.comment.value
//   console.log(e.target.elements);
  const li = document.createElement("li")
  li.textContent = comment
  comments.append(li)
  e.target.reset()
}

// See the timer increment every second once the page has loaded.
// Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Pause the counter, which should:
//      pause the counter
//      disable all buttons except the pause button
//      switch the label on the button from "pause" to "resume"
// Click the "restart" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."