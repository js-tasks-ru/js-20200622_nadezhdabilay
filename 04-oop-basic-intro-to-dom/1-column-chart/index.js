export default class ColumnChart {
  element;
  subElement = {};
  chartHeight = 50;
  data = '';

  constructor(data) {
    this.data = data.data;
    this.label = data.label;
    this.value = data.value;
    this.link = data.link;
  }

  out() {
    if (this.label == 'orders') {
      const element = document.getElementById('orders');
      return this.renderColumn(element);
    } else if (this.label == 'sales') {
      const element = document.getElementById('sales');
      return this.renderColumn(element);
    } else if (this.label == 'customers') {
      const element = document.getElementById('customers');
      return this.renderColumn(element);
    }
  }

  renderColumn(element) {
    let column_chart, column_img, label_chart, value_chart, label_link;
      element.classList += " column-chart__container";
      if (this.link != undefined){
        label_link = document.createElement('div');
        label_link.classList += ' column-chart__link';
        label_link.innerHTML += this.link;
        element.appendChild(label_link);
      }
      label_chart = document.createElement('div');
      label_chart.classList += ' column-chart__title';
      label_chart.innerHTML += this.label;
      element.appendChild(label_chart);
      value_chart = document.createElement('div');
      value_chart.classList += ' column-chart__header';
      value_chart.innerHTML += this.value;
      element.appendChild(value_chart);
      column_chart = document.createElement('div');
      column_chart.style.marginTop = 50 + 'px';
      column_chart.classList += 'column-chart__chart';
      element.appendChild(column_chart);
    if (this.data == ''){
      column_chart.remove();
      element.classList.remove("column-chart__container");
      element.classList += " column-chart_loading";
      column_img = document.createElement('div');
      column_img.classList += " column-chart__container";
      element.appendChild(column_img);
    }
    else{
      return this.data.map(a => {
        const column = document.createElement("div");
        column.innerHTML += '';
        column.style.height = a + 'px';
        column_chart.appendChild(column);
      });
    }
  }
}
