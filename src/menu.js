function menu_card(name,desp,price,img){
    const content=document.getElementById("content");
    const card=document.createElement("div");
    card.setAttribute("class","card");
    const pic =document.createElement("img");
    pic.src=img;
    pic.setAttribute("class","pic");
    const text=document.createElement("div");
    text.setAttribute("class","text");
    const title=document.createElement("h3");
    title.textContent=name;
    const desc=document.createElement("p");
    desc.textContent=desp;
    const rate=document.createElement("h4");
    rate.textContent=`Price: $${price}`;

    text.appendChild(title);
    text.appendChild(desc);
    text.appendChild(rate);

    card.appendChild(pic);
    card.appendChild(text);
    
    content.appendChild(card);


}
import burgerImg from './asset/burger.jpg';
import pizzaImg from './asset/pizza.jpg';
import noodleImg from './asset/noodle.jpg';
import shawamaImg from './asset/shawama.jpg';




export default function(){
    const item1=new menu_card("Burger","Juicy, savory, grilled, delicious, satisfying.",3,burgerImg);
    const item2=new menu_card("Pizza","Cheesy, crispy, savory, flavorful, irresistible.",7,pizzaImg);
    const item3=new menu_card("Noodles","Steamy, flavorful, savory, tender, satisfying.",4,noodleImg);
    const item4=new menu_card("Shawama","Spicy, savory, tender, flavorful, delicious.",3.5,shawamaImg);

}