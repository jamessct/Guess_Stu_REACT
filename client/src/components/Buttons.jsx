var React = require('react');

var Buttons = React.createClass({
  handleChange: function(event) {
    var guess = event.target.value;
    if(guess === this.props.focusFace.name) {
      var correctAnswer = document.createElement('p');
      correctAnswer.innerHTML = "<p id='yes'>YEP</p>";
      var div = document.getElementById('answer');
      div.appendChild(correctAnswer);
    } else
    var wrongAnswer = document.createElement('p');
    wrongAnswer.innerHTML = "<p id='no'>NOPE</p>";
    var div = document.getElementById('answer');
    div.appendChild(wrongAnswer);
  },

  render: function() {
    return (
      <div>
        <select id="answers" defaultValue="default" onChange={this.handleChange}>
          <option id="default">Who is in the picture?</option>
          <option id="al">Al</option>
          <option id="stu">Stu</option>
        </select>
        <div id="answer"></div>
      </div>
    )
  }
})

module.exports = Buttons;