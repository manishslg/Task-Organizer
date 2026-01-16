let submit = document.querySelector("#submit");
let allTask = document.querySelector("#all .list");

let input = document.querySelector("input");


input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        let text = document.querySelector("div input");
    if(text.value !== ""){
        createTask(text.value);
        text.value = "";
    }
    }
})


submit.addEventListener("click", () => {
    let text = document.querySelector("div input");
    if(text.value !== ""){
        createTask(text.value);
        text.value = "";
    }
});


function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div.appendChild(div1);
    div.appendChild(div2);
    allTask.appendChild(div);
    div1.innerHTML = `<i class="fa-regular fa-circle check"></i>${text}`;
    div2.innerHTML = `<i class="fa-regular fa-star star"></i>
                      <i class="fa-regular fa-trash-can delete"></i>`
}


let lists = document.querySelectorAll(".list");


for(let list of lists){
    list.addEventListener("click", (event) => {
        if(event.target.nodeName === "I" && event.target.classList[2] === "delete"){
            event.target.parentElement.parentElement.remove();
        }else if(event.target.nodeName === "I" && event.target.classList[2] === "star"){
            let task = event.target.parentElement.parentElement;
            let important = document.querySelector("#important .list");
            important.appendChild(task);
            event.target.remove();
        }else if(event.target.nodeName === "I" && event.target.classList[2] === "check"){
            let task = event.target.parentElement.parentElement;
            let completed = document.querySelector("#completed .list");
            completed.appendChild(task);
            event.target.remove();
            // event.target.parentElement.nextElementSibling.children[0].remove();
        }
    });
}