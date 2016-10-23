var React = require('react');
var Faces = require('./Faces.jsx');

var GameBox = React.createClass({
  getInitialState:function(){
    return { faces: [{ id: 1, pic: "<img src='../images/Al1.png'", stu: false }, {id: 2, pic: "<img src='../images/Al2.png'", stu: false}, {id: 3, pic: "<img src='../images/Stu1.png'", stu: true}, {id: 4, pic: "<img src='../images/Al2.png'", stu: true}, {id: 5, pic: "<img src='../images/Stu3.png'", stu: true} ]}
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