import './style.css'
import { site } from './protagonist.js'

document.querySelector('#app').innerHTML = `
<h1>Leo, Imperial Guardsman</h1>
<p class="patch">Patch 1.0</p>
<div class="backButton" id="backButton">
</div>
<br>
<p class="mainText" id="story"></p>
<div id="buttons">
    <div id="B1"></div>
    <br>
    <div id="B2"></div>
</div>
`
site(document.querySelector(`#app`))