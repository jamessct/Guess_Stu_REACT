var React = require('react');

var Faces = React.createClass({
  // getRandomFace: function(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   } 
  //   return array;
  // },

  render: function() {
    // var randomisedArray = this.getRandomFace(this.props.faces);
    var focusFace = this.props.randomisedArray[0].pic;

    return (
      <div>
        {focusFace}
      </div>
    )
  }
})

module.exports = Faces;