import { storySegements } from "./storyParts.js";



export function site(element) {
  const buttonList = document.getElementById('buttons')
  const storyText = element.querySelector('#story');
  let currentEvent = 0
  storyText.innerHTML = storySegements[currentEvent].Text
  buttonMaker(storySegements[currentEvent].Buttons)

  buttons.addEventListener('click', (e) => {
    currentEvent += storySegements[currentEvent].Next
    buttonList.innerHTML = ""
    storyText.innerHTML = storySegements[currentEvent].Text
    buttonMaker(storySegements[currentEvent].Buttons)
    
  })

  function buttonMaker(x) {
    for (let z = 0; z < x; z++) {
      let makeButton = document.createElement('button')
      let buttonText = document.createTextNode(storySegements[currentEvent].Options[z])
      buttonList.appendChild(makeButton)
      makeButton.appendChild(buttonText)

    }
  }
}