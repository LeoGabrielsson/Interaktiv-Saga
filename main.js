import './style.css'
import { site } from './protagonist.js'

document.querySelector('#app').innerHTML = `
<h1>Leo, Imperial Guardsman</h1>
<p>Patch 1.0</p>
<br>
<p id="story"></p>
<div id="buttons">
    <div id="B1"></div>
    <div id="B2"></div>
</div>
`
site(document.querySelector(`#app`))