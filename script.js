function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


function submit(){
  // alert("yuu have submitted")
}

document.getElementById('div1').addEventListener('drop',(e)=>{
  e.preventDefault();
  var node=circle.cloneNode(true);
  e.target.append(node);
})

 