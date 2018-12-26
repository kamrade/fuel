import $ from 'jquery';

let SplitText = function SplitText(selector) {

  let self = this;
  this.selector = selector;
  this.$el = $(selector);
  this.version = 'Dexa SplitText version: 0.1';

  let text = this.$el.text().trim();
  this.text = text;

  let newText = '<div style="position: relative; display: inline-block">';

  this.$el.text('');

  for (let i = 0, l = this.text.length; i < l; i++) {

    if (this.text[i] !== ' ') {
      newText += `<span class="dx-char" style="position: relative; display: inline-block; transform: matrix(1,0,0,1,0,0);">${this.text[i]}</span>`;
    } else {
      newText += '</div> <div style="position: relative; display: inline-block">';
    }
  }

  newText += '</div>';

  this.$el.html(newText);
  this.chars = this.$el.find(".dx-char");

};

SplitText.prototype.getVersion = function getVersion() {
  console.log(this.version);
}

export default SplitText;
