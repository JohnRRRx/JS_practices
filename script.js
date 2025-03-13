const newThing = document.querySelector(".newThing");
const list = document.querySelector(".list") ;
const button = document.querySelector(".button") ;


function addToList() {
    if (newThing.value ==="") {
        return;
    }
    const missions = document.createElement("li");
    missions.innerHTML = `
      <input type="checkbox" class="checkbox">
      <label>${newThing.value}</label>
      <button class="trash">🗑️</button>
    `
    const checkbox = missions.querySelector(".checkbox");
    const trash = missions.querySelector(".trash");

    trash.addEventListener("click",function(){
        missions.remove();
    });

    checkbox.addEventListener("change", function(){
        if (checkbox.checked){
            missions.style.textDecoration = "line-through";
            missions.style.color = "#999";
            list.append(missions);
        }else{
            missions.style.textDecoration = "none";
            missions.style.color = "";
            list.prepend(missions);
        }
    });

    list.append(missions);
    newThing.value = "";
}

button.addEventListener("click", addToList);

newThing.addEventListener("keyup", function(e){
    if (e.key === "Enter"){
      addToList();
    }
})
