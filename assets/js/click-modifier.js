export class ClickModifier {
  constructor(element, args) {
    this.element = element
    this.args = args
  }

  reinstall() {
    this.removeListener()
    this.addListener()
  }

  addListener() {
    let { eventName, callback, options = {} } = this.args
    this.element.addEventListener(eventName, callback, options)
  }

  removeListener() {
    const { eventName, callback, options = {} } = this.args

    this.element.removeEventListener(eventName, callback, options)
  }
}

