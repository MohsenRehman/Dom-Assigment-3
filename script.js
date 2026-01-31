// Task 1 Start
let imageOne = document.getElementById("imageOnee");
// imageOne.getAttribute("src")
console.log(imageOne.getAttribute("src"));
// Task 1 End

// Task 2 Start
let imageTwo = document.getElementById("imageTwo")
let changeImgBtn = document.getElementById("changeImgBtn");
function ImgchageBtn(){
    imageTwo .setAttribute("src" , "c5.jpg")
    
}
console.log(imageTwo.getAttribute("src"));
// Task 2 End

//Task 3 Start
let inputField = document.getElementById("inputField");
inputField.setAttribute("placeholder" , "Enter Your Name")

console.log(inputField.getAttribute("placeholder"));
//Task 3 End

//Task 4 Start
let taskfourInput = document.getElementById("taskfourInput");
let taskfourBtn = document.getElementById("taskfourBtn");

function removeAtrr(){
    taskfourInput.removeAttribute("disabled") 
    console.log(taskfourInput.hasAttribute("disabled"));
}
//Task 4 End

//Task 5 Start
let fivePara = document.getElementById("taskfivePara");

let classExsists = fivePara.hasAttribute("class");
console.log(classExsists);
//Task 5 ENd

//Task 6 start
let ancerTag = document.getElementById("anceTag");
let tasksixBTnn = document.getElementById("tasksixBtn");

function changeHref(){
    ancerTag.setAttribute("href" , "https://www.youtube.com/watch?v=bAUMuuRH99o");
    ancerTag.innerText = "Youtube"
    console.log(ancerTag.getAttribute("href"));
}

//Task 6 ENd