export default class NotificationMessage {
  element;
  subElements = {};

  constructor(msg, {
                duration = 0,
                type = '',
              } = {})
  {

    this.msg = msg;
    this.duration = duration;
    this.type = type;

    this.render();
  }

  template() {
    return `
        <div id="notification" class="${this.type} notification" style="--value: ${this.duration}ms">
        <div class="timer"></div>
        <div class="inner-wrapper">
            <div class="notification-header">
                ${this.msg}
            </div>
            <div class="notification-body">
                ${this.msg}
            </div>
        </div>
        </div>
    `;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template();

    this.element = element.firstElementChild;

    const oldMsg = document.getElementById('notification');

    if(oldMsg != null){
      oldMsg.remove();
    }

  }

  show(parent){
    const main = parent || document.body;

    main.append(this.element);

    setTimeout(() => {
      this.remove();
    }, this.duration)
  }

  remove () {
     this.element.remove();
  }

  destroy() {
    this.remove();
    this.subElements = {};
  }
}


