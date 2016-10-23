var React = require('react');
var Buttons = require('react');

var Buttons = React.createClass({
  guessStu: function(event) {
    if(this.props.faces.stu === true) {
      return "Well done, it is Stuart!"
    } else 
    return null;
  },

  alWho: function(event) {
    if(this.props.faces.stu === false) {
      return "Correct, this is indeed Alan!"
    } else
    return null;
  },

  render: function() {
    return (
      <div>
        <button id="stu" onClick={this.guessStu}>Stu</button>
        <button id="al" onClick={this.alWho}>Al</button>
      </div>
    )
  }
})

module.exports = Buttons
