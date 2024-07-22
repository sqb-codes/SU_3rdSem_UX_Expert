// Event binding
// we are attaching an event with a function
// whenever event is triggered, the function will be called

// adding load event - we want to load HTML first
// window.addEventListener("load", function() {
//     document.querySelector("#btn-1").addEventListener("click", add);
// });

window.addEventListener("load", initEvents);

var box_1;
var box_2;

function initEvents() {
    box_1 = document.querySelector("#box_1");
    box_2 = document.querySelector("#box_2");

    document.querySelector("#btn-1").addEventListener("click", add);
    document.querySelector("#btn-2").addEventListener("click", sub);
    document.querySelector("#btn-3").addEventListener("click", div);
    document.querySelector("#btn-4").addEventListener("click", mul);
}

function add() {
    result = parseInt(box_1.value) + parseInt(box_2.value);
    document.querySelector("#result").innerText = result;
}

function sub() {
    result = parseInt(box_1.value) - parseInt(box_2.value);
    document.querySelector("#result").innerText = result;
}

function div() {
    result = parseInt(box_1.value) / parseInt(box_2.value);
    document.querySelector("#result").innerText = result;
}

function mul() {
    result = parseInt(box_1.value) * parseInt(box_2.value);
    document.querySelector("#result").innerText = result;
}