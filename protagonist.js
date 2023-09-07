import { storySegements } from "./storyParts.js";
export function site(element) {
  const readable = element.querySelector('#story');
  readable.innerHTML = storySegements[0].Text
  let buttonlist = element.querySelector('#buttons')
  start.addEventListener('click', (e) => {
    readable.innerHTML = storySegements[1].Text
    const buttonFactorium = document.createElement('button')
    
  })
}
