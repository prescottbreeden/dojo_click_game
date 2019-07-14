// ----------------------------
//       Helper Functions
// ----------------------------
function addClasses(node, classes) {
  for (let cls of classes) {
    node.classList.add(cls);
  }
}

function addChildren(parent, childArray) {
  for (let child of childArray) {
    parent.appendChild(child);
  }
  return parent;
}

function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// ----------------------------
//      Container Elements
// ----------------------------
function header(classes = []) {
  const newHeader = document.createElement('header');
  addClasses(newHeader, classes);
  return newHeader;
}

function section(classes = []) {
  const newSection = document.createElement('section');
  addClasses(newSection, classes);
  return newSection;
}

// ----------------------------
//        Block Elements
// ----------------------------
function h(tag, text, classes = []) {
  const newHeading = document.createElement(tag);
  newHeading.innerText = text;
  addClasses(newHeading, classes);
  return newHeading;
}

function p(text, classes = []) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  addClasses(paragraph, classes);
  return paragraph;
}

function div(classes = []) {
  const newDiv = document.createElement('div');
  addClasses(newDiv, classes);
  return newDiv;
}

// ----------------------------
//    Inline-block Elements
// ----------------------------
function img(path, classes = []) {
  const newImg = document.createElement('img');
  newImg.src = path;
  addClasses(newImg, classes);
  return newImg;
}

function pbar(id, value, max) {
  const progressBar = document.createElement('progress');
  progressBar.id = id;
  progressBar.value = value;
  progressBar.max = max;
  return progressBar;
}

// ----------------------------
//        Table Elements
// ----------------------------
function table(classes = []) {
  const newTable = document.createElement('table');
  addClasses(newTable, classes);
  return newTable;
}

function td(classes = []) {
  const td = document.createElement('td');
  addClasses(td, classes);
  return td;
}

function tr(classes = []) {
  const tr = document.createElement('tr');
  addClasses(tr, classes);
  return tr;
}

// ----------------------------
//        Form Elements
// ----------------------------
function form() {
  const newForm = document.createElement('form');
  return newForm;
}

function label(text, target, classes = []) {
  const newLabel = document.createElement('label');
  newLabel.innerText = text;
  newLabel.htmlFor = target;
  addClasses(newLabel, classes);
  return newLabel;
}

function input(name, type, classes = []) {
  const newInput = document.createElement('input');
  newInput.type = type;
  newInput.id = name;
  addClasses(newInput, classes);
  return newInput;
}

function btn(text, classes = []) {
  const newButt = document.createElement('button');
  newButt.innerText = text;
  return newButt;
}


// ----------------------------
//      Thematic Elements
// ----------------------------
function hr() {
  const ruler = document.createElement('hr');
  return ruler;
}
