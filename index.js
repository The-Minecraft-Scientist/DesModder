import Controller from './Controller'
import View from './View'

const controller = new Controller()
const view = new View()

controller.init(view)
view.init(controller)

let dispatchListenerID

function onEnable () {
  dispatchListenerID = window.Calc.controller.dispatcher.register(
    ({ type }) => {
      if (type === 'open-expression-search') {
        view.initView()
      } else if (type === 'close-expression-search') {
        view.destroyView()
      }
      // may want to listen to update-expression-search-str
    }
  )
}

function onDisable () {
  window.Calc.controller.dispatcher.unregister(dispatchListenerID)
  view.destroyView()
}

export default {
  name: 'Find and Replace',
  description: 'Easily refactor variable names in Ctrl+F Menu',
  onEnable: onEnable,
  onDisable: onDisable,
  enabledByDefault: true
}
