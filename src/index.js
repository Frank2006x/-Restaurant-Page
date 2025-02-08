import './styles.css';
import myIcon from './asset/logo.svg';
import dishPic from './asset/dish.jpg';
const dishPicEle=document.createElement("img");
dishPicEle.setAttribute("id","dish");
const mainImg=document.getElementById("mainimg");


// dishPicEle.src=dishPic;
mainImg.appendChild(dishPicEle);
const iconEle = document.getElementById("icon");
iconEle.src = myIcon;

// document.getElementById("icon").appendChild(iconEle);


console.log("hello");