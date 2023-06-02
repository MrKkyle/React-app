import {useEffect} from 'react';
import Background2 from '../components/Background2';

import Image1 from '../Images/wr47krotuod91.png';
import Image2 from '../Images/au2gypfkx10a1.jpg';
import Image3 from '../Images/wr47krotuod91.png';
import Image4 from '../Images/au2gypfkx10a1.jpg';
import Image5 from '../Images/wr47krotuod91.png';
import Image_default from '../Images/778122.png';

function Aesperia()
{ 
  useEffect(()=> 
  {
    let background = document.getElementById("background");
    let diamonds = document.querySelectorAll(".ul.li");
    
    for(let i = 0; i < diamonds.length; i++)
    {
      let dia = diamonds[i];
      //Child elements to identify empty diamond| takes the image for the background
      let child = dia.firstElementChild.firstElementChild;
      let child_image = dia.firstElementChild.style.backgroundImage;
      diamonds[i].onmouseover = function(event)
      {
        if(dia.onmouseover && child.innerHTML !== "")
        {
          //Background + text changes 
          background.style.backgroundImage = child_image;
          dia.style.border = "2px solid rgb(22 21 21)";

          //hide all other elements besides this one
          for(let z = 0; z < diamonds.length; z++)
          {
            //fadeout other containers besides this one
            dia.style.animation = "none";
            dia.style.opacity = "1";
            diamonds[z].style.animation = "Fadeout ease-in-out 0.7s";
            diamonds[z].style.opacity = "0";
          }
        }
        dia.onmouseleave = function(event)
        {
          background.style.backgroundImage = `url(${Image_default})`;
          dia.style.borderStyle = "";
          dia.style.border = "2px solid rgb(51, 48, 48)";

          //show all diamonds
          for(let z = 0; z < diamonds.length; z++)
          {
            dia.style.animation = "none";
            diamonds[z].style.display = "block";
            diamonds[z].style.animation = "FadeIn ease-in 0.7s";
            diamonds[z].style.opacity = "1";
          }
        }
      }
    }
  }, []);


  return (
    <div>
      <Background2   image1 = {Image1} text1 = "Simulacra" display1 = "block"
                     image2 = {Image2} text2 = "Enemies" display2 = "block"
                     image3 = {Image3} text3 = "World-Bosses" display3 = "block"
                     image4 = {Image4} text4 = "Artificial-Island" display4 = "block"
                     image5 = {Image5} text5 = "Hykros" display5 = "block"
      />
    </div>
  );
  
};

export default Aesperia;

/*
var i = 0;
var txt = 'Shadrach, Meshach and Abednego replied to him, “King Nebuchadnezzar, we do not need to defend ourselves before you in this matter. If we are thrown into the blazing furnace, the God we serve is able to deliver us from it, and he will deliver us from Your Majesty’s hand. ';
var speed = 50;
function typeWriter() 
{
  if (i < txt.length)
  {
    document.getElementById("txtbody").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/