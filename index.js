//IMAGE 1 CREATION

const $photo1 = document.querySelector(".photo1");

const photo1 =
        `<img
            class="vettel"
            srcset="/images/image1-vettel-400.jpg 400w,
                    /images/image1-vettel-600.jpg 600w,
                    /images/image1-vettel-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image1-vettel-400.jpg"
            alt="Sebastian Vettel">
        <img
            class="highlight1"
            src="/images/image1-vettel-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Sebastian Vettel<br>Car Number: #5<br>Starting Position: P1<br>Finishing Positon: P1<br>">`

$photo1.innerHTML = $photo1.innerHTML + photo1

//IMAGE 1 HIGHLIGHTED IMAGE CREATION

// GETTING FIRST HIGHLIGHTED IMAGE

const $highlight = document.getElementById("highlight");

const $highlight1 = document.querySelector(".highlight1");

const vettel = document.querySelector(".vettel");

const $baseImg = document.getElementById("base-img");

var captionText = document.getElementById("caption");

vettel.onclick = function(){
    vettel.style.display = "none";
    $highlight1.style.display = "block";
    $highlight.style.display = "block";
    captionText.innerHTML = $highlight1.alt;
    $baseImg.src = $highlight1.src
}

document.addEventListener('keydown', function (event){
  if(event.key == "1"){
        vettel.style.display = "none";
        $highlight1.style.display = "block";
        $highlight.style.display = "block";
        captionText.innerHTML = $highlight1.alt;
        $baseImg.src = $highlight1.src
  }
    else if(event.key == "2"){
        gasly.style.display = "none";
        $highlight2.style.display = "grid";
        $highlight.style.display = "block";
        $baseImg.src = $highlight2.src
        caption.innerHTML = $highlight2.alt
    }
    
    else if(event.key == "3"){
        gilles.style.display = "none";
        $highlight3.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight3.alt
        $baseImg.src = $highlight3.src
    }
    
    else if(event.key == "4"){
        ricciardo.style.display = "none";
        $highlight4.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight4.alt
        $baseImg.src = $highlight4.src
    }
    
    else if(event.key == "5"){
        alonso.style.display = "none";
        $highlight5.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight5.alt
        $baseImg.src = $highlight5.src
    }
    
    else if(event.key == "6"){
        racetrack.style.display = "none";
        $highlight6.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight6.alt
        $baseImg.src = $highlight6.src
    }
    
    else if(event.key == "7"){
        leclerc.style.display = "none";
        $highlight7.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight7.alt
        $baseImg.src = $highlight7.src
    }
    
    else if(event.key == "8"){
        kimiAndGrosjean.style.display = "none";
        $highlight8.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight8.alt
        $baseImg.src = $highlight8.src
    }
    
    else if(event.key == "9"){
        kimiAndLeclerc.style.display = "none";
        $highlight9.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight9.alt
        $baseImg.src = $highlight9.src
    }
    
    else if(event.key == "10"){
        hamilton.style.display = "none";
        $highlight10.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight10.alt
        $baseImg.src = $highlight10.src
    }
    
    else if(event.key == "11"){
        hulkenburg.style.display = "none";
        $highlight11.style.display = "block";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight11.alt
        $baseImg.src = $highlight11.src
    }
    
    else if(event.key == "12"){
        ricciardoCar.style.display = "none";
        $highlight12.style.display = "grid";
        $highlight.style.display = "block";
        caption.innerHTML = $highlight12.alt
        $baseImg.src = $highlight12.src
    }
    
    else if(event.keyCode == "27"){
        $highlight.style.display = "none";
        $highlight1.style.display = "none";
        $highlight2.style.display = "none";
        $highlight3.style.display = "none";
        $highlight4.style.display = "none";
        $highlight5.style.display = "none";
        $highlight6.style.display = "none";
        $highlight7.style.display = "none";
        $highlight8.style.display = "none";
        $highlight9.style.display = "none";
        $highlight10.style.display = "none";
        $highlight11.style.display = "none";
        $highlight12.style.display = "none";
        vettel.style.display = "block";
        gasly.style.display = "block";
        gilles.style.display = "block";
        ricciardo.style.display = "block";
        alonso.style.display = "block";
        racetrack.style.display = "block";
        leclerc.style.display = "block";
        kimiAndGrosjean.style.display = "block";
        kimiAndLeclerc.style.display = "block";
        hulkenburg.style.display = "block";
        hamilton.style.display = "block";
        ricciardoCar.style.display = "block";
    }
})

// RETRIEVING THE CLOSE ARROWS

const span = document.querySelector(".close");


// HIGHLIGHTED IMAGE 1 CLOSE
span.onclick = function() { 
    $highlight.style.display = "none";
    $highlight1.style.display = "none";
    $highlight2.style.display = "none";
    $highlight3.style.display = "none";
    $highlight4.style.display = "none";
    $highlight5.style.display = "none";
    $highlight6.style.display = "none";
    $highlight7.style.display = "none";
    $highlight8.style.display = "none";
    $highlight9.style.display = "none";
    $highlight10.style.display = "none";
    $highlight11.style.display = "none";
    $highlight12.style.display = "none";
    vettel.style.display = "block";
    gasly.style.display = "block";
    gilles.style.display = "block";
    ricciardo.style.display = "block";
    alonso.style.display = "block";
    racetrack.style.display = "block";
    leclerc.style.display = "block";
    kimiAndGrosjean.style.display = "block";
    kimiAndLeclerc.style.display = "block";
    hulkenburg.style.display = "block";
    hamilton.style.display = "block";
    ricciardoCar.style.display = "block";
    
}

// IMAGE 2 CREATION

const $photo2 = document.querySelector(".photo2");

const photo2 =
         `<img
            class="gasly"
            srcset="/images/image2-gasly-400.jpg 400w,
                    /images/image2-gasly-600.jpg 600w,
                    /images/image2-gasly-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image2-gasly-400.jpg"
            alt="Pierre Gasly's Car">
          <img
            class="highlight2"
            src="/images/image2-gasly-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Pierre Gasly<br>Car Number: #10<br>Starting Position: P16<br>Finishing Positon: P11<br>">`

$photo2.innerHTML = $photo2.innerHTML + photo2

// HIGHLIGHTED IMAGE 2 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight2 = document.querySelector(".highlight2");

// GETTING THE GRID IMAGE

const gasly = document.querySelector(".gasly");

// APPLYING THE ONCLICK

gasly.onclick = function(){
    gasly.style.display = "none";
    $highlight2.style.display = "grid";
    $highlight.style.display = "block";
    $baseImg.src = $highlight2.src
    caption.innerHTML = $highlight2.alt
}

// IMAGE 3 CREATION

const $photo3 = document.querySelector(".photo3");

const photo3 =
      `<img
            class="gilles"
            srcset="/images/image3-gilles-400.jpg 400w,
                    /images/image3-gilles-600.jpg 600w,
                    /images/image3-gilles-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image2-gasly-400.jpg"
            alt="Gilles Villenueve">
        <img
            class="highlight3"
            src="/images/image3-gilles-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Jacques Villeneuve<br>Car Number: #12<br>Starting Position: N/A<br>Finishing Positon: N/A<br>">`

$photo3.innerHTML = $photo3.innerHTML + photo3

// HIGHLIGHTED IMAGE 3 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight3 = document.querySelector(".highlight3");

// GETTING THE GRID IMAGE

const gilles = document.querySelector(".gilles");

// APPLYING THE ONCLICK

gilles.onclick = function(){
    gilles.style.display = "none";
    $highlight3.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight3.alt
    $baseImg.src = $highlight3.src
}
      
// IMAGE 4 CREATION

const $photo4 = document.querySelector(".photo4");

const photo4 =
      `<img
            class="ricciardo";
            srcset="/images/image4-ricciardo-400.jpg 400w,
                    /images/image4-ricciardo-600.jpg 600w,
                    /images/image4-ricciardo-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image4-ricciardo-400.jpg"
            alt="Daniel Ricciardo">
        <img
            class="highlight4"
            src="/images/image4-ricciardo-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Daniel Ricciardo <br>Car Number: #3<br>Starting Position: P6 <br>Finishing Positon: P4<br>">`

$photo4.innerHTML = $photo4.innerHTML + photo4

// HIGHLIGHTED IMAGE 4 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight4 = document.querySelector(".highlight4");

// GETTING THE GRID IMAGE

const ricciardo = document.querySelector(".ricciardo");

// APPLYING THE ONCLICK

ricciardo.onclick = function(){
    ricciardo.style.display = "none";
    $highlight4.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight4.alt
    $baseImg.src = $highlight4.src
}

// IMAGE 5 CREATION

const $photo5 = document.querySelector(".photo5");

const photo5 =
      `<img
            class="alonso"
            srcset="/images/image5-alonso-400.jpg 400w,
                    /images/image5-alonso-600.jpg 600w,
                    /images/image5-alonso-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image5-alonso-400.jpg"
            alt="Fernando Alonso">
        <img
            class="highlight5"
            src="/images/image5-alonso-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Fernando Alonso<br>Car Number: #14<br>Starting Position: P14<br>Finishing Positon: DNF<br>">`

$photo5.innerHTML = $photo5.innerHTML + photo5

// HIGHLIGHTED IMAGE 5 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight5 = document.querySelector(".highlight5");

// GETTING THE GRID IMAGE

const alonso = document.querySelector(".alonso");

// APPLYING THE ONCLICK

alonso.onclick = function(){
    alonso.style.display = "none";
    $highlight5.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight5.alt
    $baseImg.src = $highlight5.src
}  

// IMAGE 6 CREATION 

const $photo6 = document.querySelector(".photo6");

const photo6 =
      `<img 
            class="racetrack"
            srcset="/images/image6-racetrack-400.jpg 400w,
                    /images/image6-racetrack-600.jpg 600w,
                    /images/image6-racetrack-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image6-racetrack-400.jpg"
            alt="Racetrack">
        <img
            class="highlight6"
            src="/images/image6-racetrack-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Circuit Gilles Villenueve<br>First Race: 1978<br>">`

$photo6.innerHTML = $photo6.innerHTML + photo6

// HIGHLIGHTED IMAGE 6 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight6 = document.querySelector(".highlight6");

// GETTING THE GRID IMAGE

const racetrack = document.querySelector(".racetrack");

// APPLYING THE ONCLICK

racetrack.onclick = function(){
    racetrack.style.display = "none";
    $highlight6.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight6.alt
    $baseImg.src = $highlight6.src
}

// IMAGE 7 CREATION

const $photo7 = document.querySelector(".photo7");

const photo7 =
      `<img
            class="leclerc"
            srcset="/images/image7-leclerc-400.jpg 400w,
                    /images/image7-leclerc-600.jpg 600w,
                    /images/image7-leclerc-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image7-leclerc-400.jpg"
            alt="Charles Leclerc">
        <img
            class="highlight7"
            src="/images/image7-leclerc-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Charles Leclerc<br>Car Number: #16<br>Starting Position: P13<br>Finishing Positon: P10<br>">`

$photo7.innerHTML = $photo7.innerHTML + photo7

// HIGHLIGHTED IMAGE 7 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight7 = document.querySelector(".highlight7");

// GETTING THE GRID IMAGE

const leclerc = document.querySelector(".leclerc");

// APPLYING THE ONCLICK

leclerc.onclick = function(){
    leclerc.style.display = "none";
    $highlight7.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight7.alt
    $baseImg.src = $highlight7.src
}

// IMAGE 8 CREATION

const $photo8 = document.querySelector(".photo8");

const photo8 =
      `<img
            class="kimi"
            srcset="/images/image8-kimi-and-grosjean-400.jpg 400w,
                    /images/image8-kimi-and-grosjean-600.jpg 600w,
                    /images/image8-kimi-and-grosjean-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image8-kimi-and-grosjean-400.jpg"
            alt="Kimi and Grosjean">
        <img
            class="highlight8"
            src="/images/image8-kimi-and-grosjean-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Names: Kimi Raikkonen & Romain Grosjean<br>Car Numbers: #7 and #8<br>Starting Positions: Kimi - P5 Romain - DNQ <br>Finishing Positon: Kimi - P6 Romain - P12<br>">`

$photo8.innerHTML = $photo8.innerHTML + photo8

// HIGHLIGHTED IMAGE 8 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight8 = document.querySelector(".highlight8");

// GETTING THE GRID IMAGE

const kimiAndGrosjean = document.querySelector(".kimi");

// APPLYING THE ONCLICK

kimiAndGrosjean.onclick = function(){
    kimiAndGrosjean.style.display = "none";
    $highlight8.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight8.alt
    $baseImg.src = $highlight8.src
}

// IMAGE 9 CREATION

const $photo9 = document.querySelector(".photo9");

const photo9 =
      `<img
            class="leclerc-kimi"
            srcset="/images/image9-kimi-and-leclerc-400.jpg 400w,
                    /images/image9-kimi-and-leclerc-600.jpg 600w,
                    /images/image9-kimi-and-leclerc-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image9-kimi-and-leclerc-400.jpg"
            alt="Kimi and Leclerc">
        <img
            class="highlight9"
            src="/images/image9-kimi-and-leclerc-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Names: Charles Leclerc & Kimi Raikkonen<br>Car Numbers: #16 and #7<br>Starting Positions: Charles - P13 Kimi - P5 <br>Finishing Positons: Charles - P10 Kimi - P6<br>">`

$photo9.innerHTML = $photo9.innerHTML + photo9

// HIGHLIGHTED IMAGE 9 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight9 = document.querySelector(".highlight9");

// GETTING THE GRID IMAGE

const kimiAndLeclerc = document.querySelector(".leclerc-kimi");

// APPLYING THE ONCLICK

kimiAndLeclerc.onclick = function(){
    kimiAndLeclerc.style.display = "none";
    $highlight9.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight9.alt
    $baseImg.src = $highlight9.src
}


// IMAGE 10 CREATION

const $photo10 = document.querySelector(".photo10");

const photo10 =
      `<img
            class="hamilton"
            srcset="/images/image10-hamilton-400.jpg 400w,
                    /images/image10-hamilton-600.jpg 600w,
                    /images/image10-hamilton-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image10-hamilton-400.jpg"
            alt="Lewis Hamilton">
        <img
            class="highlight10"
            src="/images/image10-hamilton-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Lewis Hamilton<br>Car Number: #44<br>Starting Position: P4 <br>Finishing Positon: P5<br>">`

$photo10.innerHTML = $photo10.innerHTML + photo10

// HIGHLIGHTED IMAGE 10 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight10 = document.querySelector(".highlight10");

// GETTING THE GRID IMAGE

const hamilton = document.querySelector(".hamilton");

// APPLYING THE ONCLICK

hamilton.onclick = function(){
    hamilton.style.display = "none";
    $highlight10.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight10.alt
    $baseImg.src = $highlight10.src
}   

// IMAGE 11 CREATION

const $photo11 = document.querySelector(".photo11");

const photo11 =
      `<img
            class="hulkenburg"
            srcset="/images/image11-hulkenburg-400.jpg 400w,
                    /images/image11-hulkenburg-600.jpg 600w,
                    /images/image11-hulkenburg-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image11-hulkenburg-400.jpg"
            alt="Nico Hulkenburg">
        <img
            class="highlight11"
            src="/images/image11-hulkenburg-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Name: Nico Hulkenburg<br>Car Number: #27<br>Starting Position: P7<br>Finishing Positon: P7<br>">`

$photo11.innerHTML = $photo11.innerHTML + photo11

// HIGHLIGHTED IMAGE 11 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight11 = document.querySelector(".highlight11");

// GETTING THE GRID IMAGE

const hulkenburg = document.querySelector(".hulkenburg");

// APPLYING THE ONCLICK

hulkenburg.onclick = function(){
    hulkenburg.style.display = "none";
    $highlight11.style.display = "block";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight11.alt
    $baseImg.src = $highlight11.src
}

// IMAGE 12 CREATION

const $photo12 = document.querySelector(".photo12");

const photo12 =
      `<img
            class="ricciardo-car"
            srcset="/images/image12-ricciardo-car-400.jpg 400w,
                    /images/image12-ricciardo-car-600.jpg 600w,
                    /images/image12-ricciardo-car-800.jpg 800w"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            src="/images/image12-ricciardo-car-400.jpg"
            alt="Daniel Ricciardo's Car">
        <img
            class="highlight12"
            src="/images/image12-ricciardo-car-800.jpg"
            sizes="(min-width: 65rem) 20vw, (max-width: 65rem) and (min-width: 35rem) 25vw, (max-width: 35rem) 40vw"
            alt="Daniel Ricciardo's Car<br>Car Number: #3<br>Starting Position: P6<br>Finishing Positon: P4<br>">`

$photo12.innerHTML = $photo12.innerHTML + photo12

// HIGHLIGHTED IMAGE 12 CREATION

// GETTING THE HIDDEN IMAGE

const $highlight12 = document.querySelector(".highlight12");

// GETTING THE GRID IMAGE

const ricciardoCar = document.querySelector(".ricciardo-car");

// APPLYING THE ONCLICK

ricciardoCar.onclick = function(){
    ricciardoCar.style.display = "none";
    $highlight12.style.display = "grid";
    $highlight.style.display = "block";
    caption.innerHTML = $highlight12.alt
    $baseImg.src = $highlight12.src
}



