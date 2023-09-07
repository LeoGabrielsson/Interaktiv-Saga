import { storySegements } from "./parts";
export function site(element) {
  storySegements()
  start.addEventListener('click', (e) => {
    //const start = element.querySelector('#start').value;
    const readable = element.querySelector('#story');
    readable.innerHTML = "fem"
    console.log(intro)
  })
}
