$(function() {
    $( ".draggable" ).draggable();
  } );
  
  let images = ["images/wristgrab1.jpeg","images/wristgrab2.jpeg"];
  let captions = ["a collection of liquids","my favorite candies from childhood", "a fancy tea collection", "my mother's cookie recipes","every corsage i've ever had", "our taxonomies"]
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  
  build();
  
  function build (){
  for (let i = 0; i < images.length; i++){
    let cloud = document.createElement("img");
    cloud.src = images[i];
    console.log(cloud);
  
    let text = document.createElement("p");
    let textnode = document.createTextNode(captions[i]);
    text.appendChild(textnode);
  
    let newdiv = document.createElement("div");
    newdiv.classList.add("draggable");
    
    newdiv.appendChild(cloud);
    newdiv.appendChild(text);
  
    console.log(newdiv);
  
    // update top and left position
    newdiv.style.top = getRandomNumber(0, winHeight - 200) +"px";
    newdiv.style.left = getRandomNumber(0, winWidth - 200) +"px";
  
    document.body.appendChild(newdiv);
  
    }
  }
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  
  }
  