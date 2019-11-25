const fill = document.querySelector('.fill', '.fill_2');
const empties = document.querySelectorAll('.bou');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
  this.className = 'bou_amazed';
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' bou_amazed';
}

function dragLeave() {
  e.preventDefault();
  this.className = ' bou';
}

function dragDrop() {
  this.className = 'non';
  setTimeout(() => (this.className = 'bou'), 2600);
}