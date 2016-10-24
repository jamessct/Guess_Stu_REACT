var React = require('react');

var Buttons = React.createClass({
  // guessStu: function(event) {
  //   if(this.props.faces.name === 'Stu') {
  //     return true
  //   } else 
  //   return false;
  //   result('')
  // },

  // alWho: function(event) {
  //   if(this.props.faces.name === 'Al') {
  //     return true
  //   } else
  //   return false;
  //   result();
  // },

  // result: function() {
  //   if(this.guessStu() === true || this.alWho() === true) {
  //     return ("Correct! The correct answer is " + this.props.faces.name)
  //   } else
  //   return null;
  // },
  // getRandomFace: function(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   } 
  //   return array;
  // },

  handleChange: function(event) {
    var guess = event.target.value;
    // var randomisedArray = this.getRandomFace(this.props.faces);
    // var focusFace = this.props.randomisedArray[0];
    console.log(this.props.focusFace)
    console.log(this.props.focusFace.name);
    if(guess === this.props.focusFace.name) {
      var correctAnswer = document.createElement('p');
      correctAnswer.innerHTML = "<p'yes'>YEP</p>";
      var div = document.getElementById('answer');
      div.appendChild(correctAnswer);
    } else
    var wrongAnswer = document.createElement('p');
    wrongAnswer.innerHTML = "<p>NOPE</p>";
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