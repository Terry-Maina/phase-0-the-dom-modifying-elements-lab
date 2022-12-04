// Write your code here!
let main = document.getElementById("main");
main.remove();
let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
document.body.appendChild(newHeader);
newHeader.textContent = `<h1>"Teresa is the champion"</h1>`