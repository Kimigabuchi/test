const EVENTS = ["Пожар","Тушение пожара"]

import addCustomEventListener from "../../utils/addCustomEventListener.js";

let showEventCorrectionDialog = false
let correctableEvent = null
let showAddEventMenu = null

const taskClickHandler = () => {
  // console.log("click")
}

const addEventHandler = () => {
  // console.log("событие добавлено")
  document.querySelector(".events-add-event-container").style.display = "none"
  document.querySelector(".events-show-event-dialog-btn").style.display = "block"
}

const toggleEventsHandler = () => {
  // console.log("показать меню для добавления событий")
  document.querySelector(".events-add-event-container").style.display = "block"
  document.querySelector(".events-show-event-dialog-btn").style.display = "none"
  showAddEventMenu = !showAddEventMenu
}

const getEvents = events => {
  let result = ""
  events.forEach((e, i) => {
    result += `<div>${(i + 1)  + '. ' + e}</div>`
  })
  return result
}

addCustomEventListener('#events-container','click',taskClickHandler);
addCustomEventListener('.events-show-event-dialog-btn','click', toggleEventsHandler);
addCustomEventListener('.events-add-event-btn','click', addEventHandler);

export default `
  <div id="events-container">
    <div class="events-header">События</div>
    ${getEvents(EVENTS)}
    <div class="events-show-event-dialog-btn">Добавить событие</div>
    <div class="events-add-event-container">
      <input
        placeholder='Имя события'
      />
      <div class="events-add-event-btn">Добавить</div>
    </div>
  </div>
`