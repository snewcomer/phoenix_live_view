export default class ClickModifier {
  constructor(element, args) {
    this.element = element;
    this.args = args;
  }

  install() {
    let { eventName, callback, options = {} } = this.args;
    this.element.addEventListener(eventName, callback, options);
  }

  destroy() {
    const { eventName, callback, options = {} } = this.args;

    this.element.removeEventListener(eventName, callback, options)
  }
}
