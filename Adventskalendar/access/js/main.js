var monkey1 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey2 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey3 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey4 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey5 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey6 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey7 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey8 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey9 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey10 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey11 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey12 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey13 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey14 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey15 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey16 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey17 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey18 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey19 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey20 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey21 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey22 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey23 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";
var monkey24 = "<img class='imgPopup'  id='imgPopup' onclick='popupOff()' src='access/bilder/money.png' alt='' width='400px' height='550px'></img>";

function popup(x) {
    const date = new Date();
    var day = date.getDate();
    
    if(x <= day){
    document.getElementById('app').style.filter = 'brightness(20%)';
    document.getElementById('background').style.filter = 'brightness(20%)';

    switch(x) {
        case 1:
            document.getElementById('popup').innerHTML = monkey1;
            document.getElementById('imgPopup').style.display = 'block';
            break;

        case 2:
            document.getElementById('popup').innerHTML = monkey2;
            document.getElementById('imgPopup').style.display = 'block';
            break;

        case 3:
            document.getElementById('popup').innerHTML = monkey3;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 4:
            document.getElementById('popup').innerHTML = monkey4;
            document.getElementById('imgPopup').style.display = 'block';
            break;
                
        case 5:
            document.getElementById('popup').innerHTML = monkey5;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 6:
            document.getElementById('popup').innerHTML = monkey6;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 7:
            document.getElementById('popup').innerHTML = monkey7;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 8:
            document.getElementById('popup').innerHTML = monkey8;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 9:
            document.getElementById('popup').innerHTML = monkey9;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 10:
            document.getElementById('popup').innerHTML = monkey10;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 11:
            document.getElementById('popup').innerHTML = monkey11;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 12:
            document.getElementById('popup').innerHTML = monkey12;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 13:
            document.getElementById('popup').innerHTML = monkey13;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 14:
            document.getElementById('popup').innerHTML = monkey14;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 15:
            document.getElementById('popup').innerHTML = monkey15;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 16:
            document.getElementById('popup').innerHTML = monkey16;
            document.getElementById('imgPopup').style.display = 'block';
            break;

        case 17:
            document.getElementById('popup').innerHTML = monkey17;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 18:
            document.getElementById('popup').innerHTML = monkey18;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 19:
            document.getElementById('popup').innerHTML = monkey19;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 20:
            document.getElementById('popup').innerHTML = monkey20;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 21:
            document.getElementById('popup').innerHTML = monkey21;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 22:
            document.getElementById('popup').innerHTML = monkey22;
            document.getElementById('imgPopup').style.display = 'block';
            break;
            
        case 23:
            document.getElementById('popup').innerHTML = monkey23;
            document.getElementById('imgPopup').style.display = 'block';
            break;
        
        case 24:
            document.getElementById('popup').innerHTML = monkey24;
            document.getElementById('imgPopup').style.display = 'block';
            break;
    }

    }else {
        alert("Kann erst in " + (x-day) + " Tagen geöffnet werden")
    }
    
}

function popupOff () {
    document.getElementById('imgPopup').style.display = 'none'
    document.getElementById('app').style.filter = ''
    document.getElementById('background').style.filter = ''
};