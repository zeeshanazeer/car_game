var count = 0;
var flag;



// showing orange light **********
function showOrangeLight() {
    document.querySelector(".red").style.display = "none";
    document.querySelector(".orange").style.display = "block";
    document.querySelector(".green").style.display = "none";
}
document.getElementById("ready-btn").addEventListener("click", showOrangeLight);


// showing red light *********
function showRedLight() {
    document.querySelector(".red").style.display = "block";
    document.querySelector(".orange").style.display = "none";
    document.querySelector(".green").style.display = "none";
}
document.getElementById("stop-btn").addEventListener("click", showRedLight);

// showing green light *********
function showGreenLight() {
    document.querySelector(".red").style.display = "none";
    document.querySelector(".orange").style.display = "none";
    document.querySelector(".green").style.display = "block";
}
document.getElementById("go-btn").addEventListener("click", showGreenLight);





// Moving car *********
function moveCar() {
    var car = document.getElementById("car");
    count += 5;
    car.style.marginLeft = count + "px";
}

document.getElementById("go-btn").addEventListener("click", function () {
    if (!flag) {
        flag = setInterval(moveCar, 10);

    }
}
);


// stop car *********
document.getElementById("stop-btn").addEventListener("click", function () {
    if (flag) {
        clearInterval(flag);
        flag = ''
    }
})



// reset car *********
function resetCar() {
    if (flag) {
        count = 0;
        count += 5;
        car.style.marginLef = count + "px"

    } else if (!flag) {
        count = 0
        car.style.marginLeft = count + "px";
        clearInterval(flag)
    }
}
document.getElementById("reset-car").addEventListener("click", function () {

    resetCar()
})