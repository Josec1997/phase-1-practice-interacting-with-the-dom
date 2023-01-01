const counter = document.getElementById('counter')
const plus = document.querySelector("plus") 
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const comment_form = document.querySelector('#comment-form')
const comments = document.querySelector('#list')
let paused = false
let numberTracker = {}
let interval = setInterval(incrementCounter, 1000)
plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
pause.addEventListener("click", togglePaused)
heart.addEventListener("click", addLike)
comment_form.addEventListener("submit", handleSubmit)
function incrementCounter(event){
  counter.innerText = parseInt(counter.innerText) + 1
}
function decrementCounter(){
  counter.innerText = parseInt(counter.innerText) - 1
}
function togglePaused(){
  paused = !paused
  if (paused) {
    clearInterval(interval)
    pause.innerText = "resume"
  } else {
    interval = setInterval(incrementCounter, 1000)
    pause.innerText = "pause"
  }
}
function addLike(){
  let second = counter.innerText
  numberTracker[second] = numberTracker[second] || 0
  numberTracker[second] += 1
  renderLikes()
}
function renderLikes(){
  likes.innerHTML = ""
  for (let key in numberTracker){
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li)
  }
}
function handleSubmit(event){
  event.preventDefault()
  const comment = event.target.querySelector("input").value
  // const comment = event.target.comment.value
  // console.log(event.target.elements);
  const li = document.createElement("li")
  li.innerText = comment
  comments.append(li)
  event.target.reset()
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