let mainContent = document.getElementById("mainContent");
let boxProducto = document.createElement("div");

mainContent.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-producto");

let boxImgProducto = document.createElement("div");
boxProducto.appendChild(boxImgProducto);
boxImgProducto.setAttribute("class", "box-img-producto")

let imgProducto = document.createElement("img");
boxImgProducto.appendChild(imgProducto);
imgProducto.setAttribute("src", "img/mt 09 img.jpg");

let boxInfoProducto = document.createElement("div");
boxProducto.appendChild(boxImgProducto);
imgProducto.setAttribute("class", "img-producto");