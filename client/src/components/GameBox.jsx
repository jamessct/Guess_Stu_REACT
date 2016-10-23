var React = require('react');
var Faces = require('./Faces.jsx');
var Buttons = require('./Buttons.jsx');
var Result = require('./Result.jsx');

var GameBox = React.createClass({
  getInitialState:function(){
    return { faces: [{ id: 1, pic: <img src='/public/images/Al1.jpg'></img>, name: 'Al' }, {id: 2, pic: <img src='/public/images/Al2.jpg'></img>, name: 'Al'}, {id: 3, pic: <img src='/public/images/Stu1.jpg'></img>, name: 'Stu'}, {id: 4, pic: <img src='/public/images/Stu2.jpg'></img>, name: 'Stu'}, {id: 5, pic: <img src='/public/images/Stu3.jpg'></img>, name: 'Stu'} ]}
  },

  render: function() {
    return(
      <div>
        <h1>GUESS STU!</h1>
        <Faces faces={this.state.faces}></Faces>
        <Buttons faces={this.state.faces}></Buttons>
        <Result faces={this.state.faces}></Result>
      </div>
    )
  }
})


module.exports = GameBox;