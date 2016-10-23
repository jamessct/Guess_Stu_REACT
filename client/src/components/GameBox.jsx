var React = require('react');
var Faces = require('./Faces.jsx');
var Buttons = require('./Buttons.jsx');
var Result = require('./Result.jsx');

var GameBox = React.createClass({
  getInitialState:function(){
    return { 
      faces: [{ id: 1, pic: <img src='/public/images/Al1.jpg'></img>, name: 'Al' }, {id: 2, pic: <img src='/public/images/Al2.jpg'></img>, name: 'Al'}, {id: 3, pic: <img src='/public/images/Stu1.jpg'></img>, name: 'Stu'}, {id: 4, pic: <img src='/public/images/Stu2.jpg'></img>, name: 'Stu'}, {id: 5, pic: <img src='/public/images/Stu3.jpg'></img>, name: 'Stu'} ]
    }
  },

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
    var randomisedArray = this.getRandomFace(this.state.faces);
    return(
      <div>
        <h1>GUESS STU!</h1>
        <Faces faces={this.state.faces} randomisedArray={this.randomisedArray}></Faces>
        <Buttons faces={this.state.faces} randomisedArray={this.randomisedArray}></Buttons>
      </div>
    )
  }
})


module.exports = GameBox;