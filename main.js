import './style.css'
import {site} from './code.js'

document.querySelector('#app').innerHTML = `
<h1>Leo, Imperial Guardsman</h1>
<p id="story">This is the interactive story of Leo and his life in the "Astra Millitarum".
<br>Grab a seat and we will dive headfirst into the grimdark</p>
<button id="start">Grab a seat</button>
`
site(document.querySelector(`#app`))