var React = require('react');

var Result = React.createClass({
  render: function() {
    console.log(this)
    return (
      <div>
        <p>{this.guessStu}{this.alWho}</p>
      </div>
    )
  }
})

module.exports = Result;