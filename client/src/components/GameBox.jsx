var React = require('react');
var Faces = require('./Faces.jsx');

var GameBox = React.createClass({
  getInitialState:function(){
    return { faces: [{ id: 1, pic: <img src='/public/images/Al1.jpg'></img>, stu: false }, {id: 2, pic: <img src='/public/images/Al2.jpg'></img>, stu: false}, {id: 3, pic: <img src='/public/images/Stu1.jpg'></img>, stu: true}, {id: 4, pic: <img src='/public/images/Al2.jpg'></img>, stu: true}, {id: 5, pic: <img src='/public/images/Stu3.jpg'></img>, stu: true} ]}
  },

  render: function() {
    return(
      <div>
        <h1>GUESS STU!</h1>
        <Faces faces={this.state.faces}></Faces>
      </div>
    )
  }
})


module.exports = GameBox;