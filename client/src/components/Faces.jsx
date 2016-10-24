var React = require('react');
var Buttons = require('./Buttons.jsx');

var Faces = React.createClass({

  render: function() {
    var focusFace = this.props.randomisedArray[0];
    var picture = focusFace.pic;
    console.log(picture)
    return (
      <div>
        {picture}
        <Buttons focusFace={focusFace}></Buttons>
      </div>
    )
  }
})

module.exports = Faces;