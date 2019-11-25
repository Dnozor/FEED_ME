fill = document.querySelector('.like');
empties = document.querySelectorAll('.bou');

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
function drag(ev) {
  ev.dataTransfer.setData(".like", ev.target.id);
}
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'like';
}

function dragOver(e) {
  e.preventDefault();
  this.className = 'bou_amazed';

}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  e.preventDefault();
  this.className = ' bou';
}

function dragDrop() {
  this.className = 'bou_manger';
  setTimeout(() => (this.className = 'bou'), 3750);
}
