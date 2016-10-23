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
  getRandomFace: function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } 
    return array;
  },

  handleChange: function(event) {
    var guess = event.target.value;
    var randomisedArray = this.getRandomFace(this.props.faces);
    var focusFace = randomisedArray[0];
    console.log(focusFace.name)
    getResult(guess, focusFace);
  },
    
  getResult: function(guess, focusFace)
    if(guess === focusFace.name) {
      return <p>Yes! " {focusFace.name} " is the CORRECT answer!"</p>;
    } else 
    return <p>"Nope. This is" {focusFace.name}"."</p>;
  },

  render: function() {
    return (
      <div>
        <select id="answers" defaultValue="default" onChange={this.handleChange}>
          <option id="default">Who is in the picture?</option>
          <option id="al">Al</option>
          <option id="stu">Stu</option>
        </select>
        {getResult}
      </div>
    )
  }
})

module.exports = Buttons;