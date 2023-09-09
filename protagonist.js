import { storySegements } from "./storyParts.js";



export function site(element) {
  const storyText = element.querySelector('#story');
  let currentEvent = 0
  storyText.innerHTML = storySegements[currentEvent].Text
  buttonMaker(storySegements[currentEvent].Buttons)

  B1.addEventListener('click', (e) => {
    currentEvent = storySegements[currentEvent].Next[0]
    storyText.innerHTML = storySegements[currentEvent].Text
    B1.innerHTML = ""
    B2.innerHTML = ""
    buttonMaker(storySegements[currentEvent].Buttons)

  })
  B2.addEventListener('click', (e) => {
    currentEvent = storySegements[currentEvent].Next[1]
    storyText.innerHTML = storySegements[currentEvent].Text
    B1.innerHTML = ""
    B2.innerHTML = ""
    buttonMaker(storySegements[currentEvent].Buttons)

  })

  function buttonMaker(x) {
    for (let z = 0; z < x; z++) {
      let makeButton = document.createElement('button')
      let buttonText = document.createTextNode(storySegements[currentEvent].Options[z])
      if (z < 1) {
        B1.appendChild(makeButton)
        makeButton.appendChild(buttonText)
      }
      else {
        B2.appendChild(makeButton)
        makeButton.appendChild(buttonText)
      }
    }
  }
}

