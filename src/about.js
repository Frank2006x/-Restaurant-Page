import chefImg from './asset/chef.jpg';

export default function(){
    const img=document.createElement("img");
    img.src=chefImg;
    img.setAttribute("id","about_img");
    const divImg=document.createElement("div");
    divImg.setAttribute("id","div_about");
    const divEle=document.createElement("div");
    divEle.setAttribute("id","about_text");
    const title=document.createElement("h1");
    const about=document.createElement("p");
    title.textContent="About us";
    about.textContent="Welcome to Guki's Kitchen, where passion meets flavor! Located in the heart of Chennai, we take pride in serving delicious, freshly prepared dishes that bring people together.";
    divImg.appendChild(img);
    divEle.appendChild(title);
    divEle.appendChild(about);
    const content=document.getElementById("content");
    content.appendChild(divImg);
    content.appendChild(divEle);

}