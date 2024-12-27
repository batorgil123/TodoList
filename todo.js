const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("listt");
function addtask() {
  if (inputbox.value == "") alert("Please! Type Something");
  else{
    let list=document.createElement("li");
    list=inputbox.value;
    listcontainer.appendChild(list);
  }
}
