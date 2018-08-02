import { h, app } from "hyperapp"
import 'bootstrap'
import './scss/index.scss'
import './resume'


function mailme() {
  alert("mail!")
}

const state = {
  count: 0,
  globalBoolean: false
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
  toggle: value => state => ({ globalBoolean: !state.globalBoolean }),
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button class="btn btn-primary" onclick={() => actions.down(1)}>-</button>
    <button class="btn btn-warning" onclick={() => actions.up(3)}>+</button>
    <button class="btn btn-default" onclick={() => actions.toggle()}>toggle</button>
    <h2>{ state.globalBoolean?"True":"False" }</h2>
  </div>
)

app(state, actions, view, document.getElementById('app'))
