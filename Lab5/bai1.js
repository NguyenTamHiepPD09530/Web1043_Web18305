

function addtask(){
	let disabledInput = true;
	let task_name = document.getElementById("task-name").value;
	let task_description = document.getElementById("task_description").value;

}


let row = document.createElement("div");
row.classList.add("row");

let item_name = document.createElement("input");
item_name.type = "text";
item_name.disabled = true;

let item_des = document.createElement("input");
item_des.type = "text";
item_des.disabled = true;

let btn_del = document.createElement("button");
btn_del.textContent ="del";

let btn_exit = document.createComment("button");
btn_exit.textContent = "exit";