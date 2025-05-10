// Timer functionality
function updateTimer() {
  let days = Number.parseInt(document.getElementById("days").textContent)
  let hours = Number.parseInt(document.getElementById("hours").textContent)
  let minutes = Number.parseInt(document.getElementById("minutes").textContent)
  let seconds = Number.parseInt(document.getElementById("seconds").textContent)

  if (seconds > 0) {
    seconds--
  } else if (minutes > 0) {
    minutes--
    seconds = 59
  } else if (hours > 0) {
    hours--
    minutes = 59
    seconds = 59
  } else if (days > 0) {
    days--
    hours = 23
    minutes = 59
    seconds = 59
  }

  document.getElementById("days").textContent = days + " days"
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
}


// Start the timer
setInterval(updateTimer, 1000)

// Sidebar functionality
const menuButton = document.getElementById("menuButton")
const sidebarOverlay = document.getElementById("sidebarOverlay")
const overlay = document.getElementById("overlay")
const closeButton = document.getElementById("closeButton")

// Open sidebar
menuButton.addEventListener("click", () => {
  sidebarOverlay.classList.add("active")
})

// Close sidebar when clicking overlay or close button
overlay.addEventListener("click", () => {
  sidebarOverlay.classList.remove("active")
})

closeButton.addEventListener("click", () => {
  sidebarOverlay.classList.remove("active")
})

// Add event listeners for the accept offer button
const acceptButton = document.querySelector(".accept-button")
acceptButton.addEventListener("click", () => {
  alert("Accept offer clicked")
})

// Add event listeners for the connect telegram button
const telegramButton = document.querySelector(".telegram-button")
telegramButton.addEventListener("click", () => {
  alert("Connect Telegram clicked")
})

// Add event listener for the TON button as well
const tonButton = document.querySelector(".ton-button")
tonButton.addEventListener("click", () => {
  alert("Connect TON clicked")
})

// Show the sidebar by default for preview
sidebarOverlay.classList.add("active")
