class Tooltip {
  element;
  static instance;

  onMouseOver = event => {
    const element = event.target.closest('[data-tooltip]');

    if (element) {
      this.render(element.dataset.tooltip);
      this.moveTooltip(event);

      document.addEventListener('pointermove', this.onMouseMove);
    }
  };

  onMouseMove = event => {
    this.moveTooltip(event);
  };

  onMouseOut = () => {
    this.removeTooltip();
  };

  removeTooltip(){
    if (this.element){
      this.element.remove();
      this.element = null;

      document.removeEventListener('pointermove', this.onMouseMove);
    }
  }
  constructor(){
    if (Tooltip.instance){
      return Tooltip.instance;
    }

    Tooltip.instance = this;
  }

  initEventListeners() {
    document.addEventListener('pointerover', this.onMouseOver);
    document.addEventListener('pointerdown', this.onMouseOut);
  }

  initialize(){
    this.initEventListeners();
  }

  render(html){
    this.element = document.createElement('div');
    this.element.className = 'tooltip';

    this.element.innerHTML = html;

    document.body.append(this.element);
  }

  moveTooltip(event){
    const left = event.clientX + 10;
    const top = event.clientY + 10;

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }

  destroy(){
    document.removeEventListener('pointerover', this.onMouseOver);
    document.removeEventListener('pointerout', this.onMouseOut);
    this.removeTooltip();
  }

  remove() {
    this.element.remove();
  }
}

const tooltip = new Tooltip();

export default tooltip;
