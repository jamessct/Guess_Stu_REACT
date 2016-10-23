var React = require('react');

var Faces = React.createClass({
  getRandomFace: function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } 
    return array;
  },

  render: function() {
    var randomisedArray = this.getRandomFace(this.props.faces);
    console.log(this)
    var picture = randomisedArray[0].pic;

    return (
      <div>
        {picture}
      </div>
    )
  }
})

module.exports = Faces;