import './style.css'
import {site} from './protagonist.js'

document.querySelector('#app').innerHTML = `
<h1>Leo, Imperial Guardsman</h1>
<p id="story"></p>
<button id="start">Grab a seat</button>
`
site(document.querySelector(`#app`))