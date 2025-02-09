
import dishPic from './asset/dish.jpg';

export default function(){
    const dishPicEle=document.createElement("img");
    dishPicEle.setAttribute("id","dish");
    const content=document.getElementById("content");
    const mainImg=document.createElement("div");
    mainImg.setAttribute("id","mainimg");


    dishPicEle.src=dishPic;
    content.appendChild(mainImg);
    mainImg.appendChild(dishPicEle);
    const textcon=document.createElement("div");
    textcon.setAttribute("id","textmain");
    const wel=document.createElement("h1");

    const text1=document.createElement("p");
    const text2=document.createElement("p");
    wel.textContent="Welcome to Guki's kitchen";
    text1.textContent="Experience the perfect blend of flavors, ambiance, and hospitality at Guki's kitchen. Nestled in the heart of Chennai, we take pride in serving mouthwatering dishes made with the freshest ingredients and a touch of culinary excellence.";
    text2.textContent="From sizzling appetizers to delightful desserts, our menu is thoughtfully crafted to satisfy every craving. Whether you're in the mood for classic comfort food or gourmet delicacies, our chefs bring passion and creativity to every plate.";
    textcon.appendChild(wel);
    textcon.appendChild(text1);
    textcon.appendChild(text2);
    textcon.style.marginTop="6rem";
    content.appendChild(textcon);
}