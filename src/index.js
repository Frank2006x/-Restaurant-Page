import './styles.css';
import myIcon from './asset/logo.svg';
import dishPic from './asset/dish.jpg';
const dishPicEle=document.createElement("img");
dishPicEle.setAttribute("id","dish");
const content=document.getElementById("content");
const mainImg=document.getElementById("mainimg");


dishPicEle.src=dishPic;
mainImg.appendChild(dishPicEle);
const iconEle = document.getElementById("icon");
iconEle.src = myIcon;
const text=document.createElement("p");
text.textContent="Nestled in the heart of the city, The Golden Fork is a haven for food lovers.With its warm ambiance and elegant décor, it welcomes guests into a world of flavors.Soft lighting and soothing music set the perfect mood for a delightful dining experience.The aroma of freshly baked bread and sizzling spices fills the air.";
content.appendChild(text);

// document.getElementById("icon").appendChild(iconEle);


console.log("hello");