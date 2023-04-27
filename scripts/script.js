let btn = document.getElementById("btn");
let injectArea = document.getElementById("injectArea");
let textArea = document.getElementById("textArea");
let listNum = 1;
let createList = document.getElementById("createList");

createList.addEventListener("click", function (e) {
  createLists();
});

// function switchElement(elementToSwitch){
//   switch(elementToSwitch){
//     case 'div':
//       return document.createElement('div')
//     case 'input':
//       return document.createElement('input')
//     case 'ol':
//       return document.createElement('ol')
//     case 'i':
//       return document.createElement('i')
//     case 'li':
//       return document.createElement('li')
//     case 'button':
//       return document.createElement('button')
//       default:
//         alert('No Matches')
//         break
//   }

// }
function createElements(elementToCreate, style) {
  let createdElement = document.createElement(elementToCreate);
  createdElement.classList = style;
  return createdElement;
}

function createLists() {
  listNum = 0
  let rowListDiv = createElements("div", "row justify-content-center");

  let colAutoDiv = createElements("div", "col-auto");

  let inputGroupDiv = createElements("div", "input-group mb-3");

  let inputArea = createElements("input", "form-control");

  inputArea.setAttribute("type", "text");
  inputArea.setAttribute("placeholder", "enter item here");
  inputArea.setAttribute("aria-label", "Recipient's username");
  inputArea.setAttribute("aria-describedby", "button-addon2");
  let btn2 = createElements("button", "btn btn-outline-success");

  btn2.setAttribute("type", "button");
  btn2.innerText = "Add Item";

  btn2.addEventListener("click", function (e) {
    createItems(inputArea.value);
  });

  inputGroupDiv.appendChild(inputArea);
  inputGroupDiv.appendChild(btn2);
  colAutoDiv.appendChild(inputGroupDiv);
  rowListDiv.appendChild(colAutoDiv);
  injectArea.appendChild(rowListDiv);
}

function createItems(item) {
  listNum++;
  let row = createElements("div", "row");

  let div1 = createElements("div", "col-1");

  let div2 = createElements("div", "form-check pt-2 mx-4");

  let checkBox = createElements("input", "form-check-input");

  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("click", function (e) {
    // if(e.target.checked){
    //   e.target.parentNode.parentNode.nextSibling.classList.add('strike')
    // }
    // else
    // {
    //   e.target.parentNode.parentNode.nextSibling.classList.remove('strike')
    // }
    e.target.checked
      ? e.target.parentNode.parentNode.nextSibling.classList.add("strike")
      : e.target.parentNode.parentNode.nextSibling.classList.remove("strike");
  });
  div2.appendChild(checkBox);
  div1.appendChild(div2);
  let div3 = createElements("div", "col-10");

  let olTag = createElements("ol", "list-group");

  let liTag = createElements("li", "list-group-item list-group-item-primary");
  liTag.innerText = listNum + ". " + item;
  liTag.contentEditable = true;

  olTag.appendChild(liTag);
  div3.appendChild(olTag);
  let div4 = createElements("div", "col-1 pt-2");

  let iTag = createElements("i", "fa-regular fa-trash-can");

  iTag.setAttribute("style", "color #d14415");
  iTag.addEventListener('click', function(e){
    // this. and e. are interchangable;
    let deletedItemNumber = parseInt(this.parentNode.parentNode.querySelector('ol li').innerText.split('.')[0]);
    this.parentNode.parentNode.remove();
    let remainingItems = document.querySelectorAll('.list-group-item');
    remainingItems.forEach(function(item){
        let currentNumber = parseInt(item.innerText.split('.')[0]);
        if (currentNumber > deletedItemNumber) {
            item.innerText = (currentNumber - 1) + item.innerText.substring(item.innerText.indexOf('.'));
        }
    });
    itemNumber = Math.max(itemNumber - 1, 1);

  })


  
  div4.appendChild(iTag);
  row.appendChild(div1);
  row.appendChild(div3);
  row.appendChild(div4);
  injectArea.appendChild(row);
}

// btn.addEventListener("click", function (e) {

// });

//create an element - need the node(element to add to) first

// let pTag = document.createElement('p')
// pTag.innerText = 'ur mum'
// console.log(pTag)

// injectArea.appendChild(pTag)

// //1)the area to add element
// //2) allows you to add a node to the item you are referencing
// //3)telling appendChild what node(element) you are adding

// let h1Tag = document.createElement('h1')
// h1Tag.innerText = 'no ur mum'
// injectArea.appendChild(h1Tag)

// let trashcan = document.createElement('i')
// trashcan.classList = 'fa-regular fa-trash-can'
// injectArea.appendChild(trashcan)
