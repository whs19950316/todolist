var textIn = document.querySelector("#textIn");
var num1 = document.querySelector(".todolist .now .num");
var num2 = document.querySelector(".donelist .now .num");
var todolist = document.querySelector(".todolist");
var tdl = document.querySelector(".tdl");
var tdl_left = document.querySelector(".tdl_left");
var h2 = document.querySelector(".h2");
var img = document.querySelector(".img");
var todo = document.querySelector(".todo");
var main = document.querySelector(".main");
var done = document.querySelector(".done")

var dataList = localStorage.dataList?JSON.parse(localStorage.dataList):[];
renderList();


function renderList(){
	localStorage.dataList = JSON.stringify(dataList);
	var todoNUM = 0;
	var doneNUM = 0;
	todo.innerHTML = "";
	done.innerHTML = "";
	dataList.forEach(function(item,index){
		var t = document.createElement("div");
		t.className = 'tdl';
		if(item.type=="todo"){
			todoNUM++;
			t.innerHTML = `
			<div class = "tdl">
				<div class = "tdl_left">
					<input type="checkbox" name="check" data-index="${index}"/>
					<span class = "outtext">
						${item.content}
					</span>
					<img src="img/delete.png" data-index = "${index} "class = "img" />
				</div>
			</div>
			
			<br/>
	`;
		todo.appendChild(t);
		
		}else{
			doneNUM++;
			t.innerHTML = `
			<div class = "tdl">
				<div class = "tdl_left">
					<input type="checkbox" name="check" checked = "checked" data-index="${index}"/>
					<span class = "outtext">
						${item.content}
					</span>
					<img src="img/delete.png" data-index = "${index} "class = "img" />
				</div>
			</div>
			<br/>
	`;
		done.appendChild(t);
		
		}
	})
	num1.innerHTML = todoNUM;
	num2.innerHTML = doneNUM;
}


textIn.onkeypress = function(e){
//	console.log(e)
	
	if(e.key == "Enter" && textIn.value != ""){
		var data = {
			content:textIn.value,
			type:"todo"
		}
		dataList.push(data);
		renderList();
	}
}

todo.onchange = function(e){
	console.log(e)
	var s = e.target.dataset.index;
	dataList[s].type="done";
	renderList();
}

main.onclick = function(e){
	if(e.target.className == "img"){
		var index = e.target.dataset.index;
		dataList.splice(index,1)
		renderList();
	}
}


