import { storySegements } from "./storyParts.js";



export function site(element) {
  //Executed on startup of site. Variables and the home screen is made here. A few bits and bobs if you will
  const storyText = element.querySelector('#story')
  const backButton = element.querySelector('#backButton')
  let currentEvent = 0
  storyText.innerHTML = storySegements[currentEvent].Text
  buttonMaker(storySegements[currentEvent].Buttons)


  //EventListener for the button representing choice 1
  B1.addEventListener('click', (e) => {
    currentEvent = storySegements[currentEvent].Next[0]
    storyText.innerHTML = storySegements[currentEvent].Text
    resetAllButtons()
    buttonMaker(storySegements[currentEvent].Buttons)
    runItBack()

  })
  //EventListener for the button representing choice 2
  B2.addEventListener('click', (e) => {
    currentEvent = storySegements[currentEvent].Next[1]
    storyText.innerHTML = storySegements[currentEvent].Text
    resetAllButtons()
    buttonMaker(storySegements[currentEvent].Buttons)
    runItBack()

  })

  //The sites custom-made functions will be found below
  //Creates buttons based upn the currentEvent
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

  //Removes all buttons. Often for the purpose of creating new ones in their place
  function resetAllButtons() {
    backButton.innerHTML = ""
    B1.innerHTML = ""
    B2.innerHTML = ""
  }

 //Creates the button called "Back to Start" and adds an EventListener to it
  function runItBack() {
    let makeButton = document.createElement('button')
    let buttonText = document.createTextNode("Back to Start")
    backButton.appendChild(makeButton)
    makeButton.appendChild(buttonText)
    backButton.addEventListener('click', (e) => {
      currentEvent = 0
      storyText.innerHTML = storySegements[currentEvent].Text
      resetAllButtons()
      buttonMaker(storySegements[currentEvent].Buttons)
    })
  }
}

