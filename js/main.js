//find elements
// by ID
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "TechTrash e-commerce";

// byClass
const infoCollection = document.getElementsByClassName("info"); // returns an html collection

const infoElementsArray = [...infoCollection]; // convert html collection to an array
infoElementsArray.forEach((element) => {
    element.style.color = "blue";
});

// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");
const pArray = [...allParagraphsHtmlCollection];
pArray.forEach((element) => {
    element.style.fontSize = "45px";
});

//by css selector
const first = document.querySelector("header h2"); //select the first element
const all = document.querySelectorAll("header h2"); //select all the elements
all.forEach((elm) => (elm.style.color = "orange"));

// context : document vs element
const smt = document.querySelectorAll("#products p");
smt.forEach((elem) => {
    elem.style.color = "green";
});

const productsElm = document.getElementById("products");
const allParagInProducts = productsElm.getElementsByTagName("p");

//properties
// Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `        
	<div>
    	<p>one<p>
        <p>two
            <a href="#">click here for more info</a>
        <p>
    </div>`;

// Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us -> we are amazing";

// Read/Modify CSS --> elm.style
mainTitle.style.color = "purple";
mainTitle.style.border = "15px solid black";
mainTitle.style.backgroundColor = "yellow";

// Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id";

// Read/Modify the id --> elm.className
mainTitle.className = "box rounded";

//(bonus) elm.classList (provides methods to access class names)
// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("important"); //adds if it doesn't exist
mainTitle.classList.toggle("rounded"); //removes if it exists

/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const linkUrl = linkElm.getAttribute("href");
console.log(linkUrl);

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com"); // modify
linkElm.setAttribute("target", "_blank"); // create

/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element
const newImg = document.createElement("img");

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful image of pikachu");

//step3: append to the dom: `parentElm.appendChild()` - to add it into html
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);

/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events:
- Document (DOMContentLoaded, ...)
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)
- ...*/

// btn1.onclick = () => {
//     console.log("hello world option2");
// };

const btn1 = document.getElementById("button-1");
btn1.addEventListener("click", () => {
    console.log("user has clicked in our button....");

    // step1: create the element
    const newP = document.createElement("p");

    // step2: add content or modify (ex. innerHTML...)
    newP.innerText = "this paragraph has been created dynamically";

    //step3: append to the dom: `parentElm.appendChild()`
    const box1 = document.getElementById("box-1");
    box1.appendChild(newP);
});
