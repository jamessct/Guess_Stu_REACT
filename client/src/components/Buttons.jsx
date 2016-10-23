var React = require('react');
var Buttons = require('react');

var Buttons = React.createClass({
  guessStu: function(event) {
    if(this.props.faces.name === 'Stu') {
      return true
    } else 
    return false;
    result('')
  },

  alWho: function(event) {
    if(this.props.faces.name === 'Al') {
      return true
    } else
    return false;
    result();
  },

  result: function() {
    if(this.guessStu() === true || this.alWho() === true) {
      return ("Correct! The correct answer is " + this.props.faces.name)
    } else
    return null;
  },

  render: function() {
    console.log(this.result())
    return (
      <div>
        <button id="stu" onClick={this.guessStu}>Stu</button>
        <button id="al" onClick={this.alWho}>Al</button>
        <p>{this.result()}</p>
      </div>
    )
  }
})

module.exports = Buttons