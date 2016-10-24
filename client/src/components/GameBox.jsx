var React = require('react');
var Faces = require('./Faces.jsx');
var Buttons = require('./Buttons.jsx');
var Result = require('./Result.jsx');

var GameBox = React.createClass({
  getInitialState:function(){
    return { 
      faces: [{ id: 6, pic: <img src='/public/images/AlBeard.jpeg'></img>, name: 'Al' }, { id: 7, pic: <img src='/public/images/AlCheek.jpeg'></img>, name: 'Al' }, { id: 8, pic: <img src='/public/images/AlEar.jpeg'></img>, name: 'Al' }, { id: 9, pic: <img src='/public/images/AlEye.jpeg'></img>, name: 'Al' }, { id: 10, pic: <img src='/public/images/AlLips.jpeg'></img>, name: 'Al' }, { id: 11, pic: <img src='/public/images/StuAnonbitofhair.jpeg'></img>, name: 'Stu' }, { id: 12, pic: <img src='/public/images/StuBeard.jpeg'></img>, name: 'Stu' }, { id: 13, pic: <img src='/public/images/StuCheek.jpeg'></img>, name: 'Stu' }, { id: 14, pic: <img src='/public/images/StuEar.jpeg'></img>, name: 'Stu' }, { id: 15, pic: <img src='/public/images/StuHead.jpeg'></img>, name: 'Stu' }, { id: 16, pic: <img src='/public/images/StuNose.jpeg'></img>, name: 'Stu' }]
    }
  },

  // { id: 1, pic: <img src='/public/images/Al1.jpg'></img>, name: 'Al' }, {id: 2, pic: <img src='/public/images/Al2.jpg'></img>, name: 'Al'}, {id: 3, pic: <img src='/public/images/Stu1.jpg'></img>, name: 'Stu'}, {id: 4, pic: <img src='/public/images/Stu2.jpg'></img>, name: 'Stu'}, {id: 5, pic: <img src='/public/images/Stu3.jpg'></img>, name: 'Stu'}, 

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
        <Faces randomisedArray={randomisedArray}></Faces>
      </div>
    )
  }
})


module.exports = GameBox;