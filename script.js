/*
MADE BY YAPAC
*/

//Text animation
function Anim(title,text,className) 
{

    let ArrayTitle = text.split('');

    let TitleHtml= "<span class='"+className+"'>" + ArrayTitle[0] + "</span>";
    for (let i = 1; i < ArrayTitle.length; i++) 
    {
        TitleHtml = TitleHtml + "<span class='"+className+"'>"+ ArrayTitle[i] + "</span>";
    }

    title.innerHTML = TitleHtml;
}

Anim(document.querySelector(".title"),"The Eye-Curious","toInvi");
Anim(document.querySelector(".textUnder"),"Learn how to catch a user eye!","toInvi")
Anim(document.querySelector(".UnderTitle"),"What make a website catching","toInvi")


//eyes animation

let ball = document.getElementById("eyeBall");
let eyeContainer = document.getElementById("eyeContainer");
console.log(eyeContainer.innerWidth+ " + " + eyeContainer.innerHeight )
document.onmousemove = () => 
{

    let x = (event.clientX  * 100 / 5000)-7 + "%";
    let y = (event.clientY  * 100 / 5000)-7 + "%";
    ball.style.left = x;
    ball.style.top = y;
}
