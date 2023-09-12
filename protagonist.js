import { storySegements } from "./storyParts.js";



export function site(element) {
  //Executed on startup of site. Variables and the home screen is made here. A few bits and bobs if you will
  const storyText = element.querySelector('#story')
  const backButton = element.querySelector('#backButton')
  let currentEvent = 0
  let secretEnding = 1 + Math.floor(Math.random() * 10);
  storyText.innerHTML = storySegements[currentEvent].Text
  buttonMaker(storySegements[currentEvent].Buttons)
  console.log(secretEnding)


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
      //Should the current event in the story be that Leo has reached the distress beacon there is a 10% chance that the secret ending will trigger upon pressing the button
      if (currentEvent = 3 && secretEnding == 10) {
        currentEvent = 8
        storyText.innerHTML = storySegements[currentEvent].Text
        resetAllButtons()
        //makes the "runItBack()" function again but without the chance for the secret ending
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
      } else {
        currentEvent = 0
        storyText.innerHTML = storySegements[currentEvent].Text
        resetAllButtons()
        buttonMaker(storySegements[currentEvent].Buttons)
      }
    })
  }
}