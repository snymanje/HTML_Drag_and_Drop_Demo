const sourcElement = document.querySelector(".image");
const targetElement = document.querySelectorAll(".box");
const uploadedFiles = document.querySelector(".box2");

sourcElement.addEventListener("dragstart", dragstart);

targetElement.forEach(el => {
  el.addEventListener("dragover", dragOver);
  el.addEventListener("drop", dragDrop);
});

function dragstart(e) {
  e.dataTransfer.setData("text", e.target.id);
 //
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}

function dragDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}

/// file upload

uploadedFiles.addEventListener("dragover", dragOver);
uploadedFiles.addEventListener("drop", dragDropFiles);

function dragDropFiles(e) {
  e.preventDefault();
  const fileEle = document.getElementById("fileInput");
  fileEle.files = e.dataTransfer.files;
}
