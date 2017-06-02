function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function clickText(temp){
    switch (temp) {
        case 1:
            document.getElementById("headerOne").innerHTML = "Name:";
            document.getElementById("textOne").innerHTML = "Jesper ''Jeppa #Vansinnig'' Larsson";
            document.getElementById("headerTwo").innerHTML = "Role:";
            document.getElementById("textTwo").innerHTML = "Entry fragger";
            document.getElementById("headerThree").innerHTML = "Extra";
            document.getElementById("textThree").innerHTML = "Teams 'MVP'";
            break;
        case 2:
            document.getElementById("headerOne").innerHTML = "Name:";
            document.getElementById("textOne").innerHTML = "Axel ''Angela Merkel'' Froborg";
            document.getElementById("headerTwo").innerHTML = "Role:";
            document.getElementById("textTwo").innerHTML = "Lurker";
            document.getElementById("headerThree").innerHTML = "Extra";
            document.getElementById("textThree").innerHTML = "Never makes a sound";
            break;
        case 3:
            document.getElementById("headerOne").innerHTML = "Name:";
            document.getElementById("textOne").innerHTML = "Filip ''FcN'' Nilsson";
            document.getElementById("headerTwo").innerHTML = "Role:";
            document.getElementById("textTwo").innerHTML = "In Game Leader";
            document.getElementById("headerThree").innerHTML = "Extra";
            document.getElementById("textThree").innerHTML = "The one who is noisy";
            break;
        case 4:
            document.getElementById("headerOne").innerHTML = "Name:";
            document.getElementById("textOne").innerHTML = "Oscar ''vemVet'' Greiff";
            document.getElementById("headerTwo").innerHTML = "Role:";
            document.getElementById("textTwo").innerHTML = "Awper";
            document.getElementById("headerThree").innerHTML = "Extra";
            document.getElementById("textThree").innerHTML = "Always landing that first shot";
            break;
        case 5:
            document.getElementById("headerOne").innerHTML = "Name:";
            document.getElementById("textOne").innerHTML = "Hannes ''Maestro'' Adolfsson";
            document.getElementById("headerTwo").innerHTML = "Role:";
            document.getElementById("textTwo").innerHTML = "Support";
            document.getElementById("headerThree").innerHTML = "Extra";
            document.getElementById("textThree").innerHTML = "Knows all the utility throws";
            break;
        case 6:
            document.getElementById("headerOne").innerHTML = "Name:";
            document.getElementById("textOne").innerHTML = "Fredrik ''Mannen'' Andersson";
            document.getElementById("headerTwo").innerHTML = "Role:";
            document.getElementById("textTwo").innerHTML = "Team manager / Coach";
            document.getElementById("headerThree").innerHTML = "Extra";
            document.getElementById("textThree").innerHTML = "Former pro player (Retired)";
            break;
        default:
            document.getElementById("headerOne").innerHTML = "Choose any single one of them";
            document.getElementById("textOne").innerHTML = "";
            document.getElementById("headerTwo").innerHTML = "Your choice";
            document.getElementById("textTwo").innerHTML = "";
            document.getElementById("headerThree").innerHTML = "";
            document.getElementById("textThree").innerHTML = "";
    }
}

function reset() {
    document.getElementById("boxJesper").removeAttribute("style");
	document.getElementById("boxJesper").className = "";
	
    document.getElementById("boxAxel").removeAttribute("style");
	document.getElementById("boxAxel").className = "";
	
    document.getElementById("boxFilip").removeAttribute("style");
	document.getElementById("boxFilip").className = "";
	
    document.getElementById("boxGreiff").removeAttribute("style");
	document.getElementById("boxGreiff").className = "";
	
    document.getElementById("boxHannes").removeAttribute("style");
	document.getElementById("boxHannes").className = "";
	
    document.getElementById("boxFredrik").removeAttribute("style");
	document.getElementById("boxFredrik").className = "";
    
    clickText(0);
	
}

function showboxJesper() {
    document.getElementById("boxJesper").style.width = "150px";
    document.getElementById("boxJesper").style.height = "225px";
    document.getElementById("boxJesper").style.transform = "rotate(-360deg)";
	document.getElementById("boxJesper").style.marginTop = "100px";
	document.getElementById("boxJesper").style.float = "left";
	document.getElementById("boxJesper").className = "";
    clickText(1);
    window.scrollTo(0, 1000)
    
    document.getElementById("boxAxel").style.marginRight = "0px";
	document.getElementById("boxAxel").style.width = "0px";
    document.getElementById("boxAxel").style.height = "0px";
    document.getElementById("boxAxel").style.transform = "rotate(0deg)";
	document.getElementById("boxAxel").style.marginTop = "0px";
	document.getElementById("boxAxel").style.float = "right";
	document.getElementById("boxAxel").className = "box";
	
	document.getElementById("boxFilip").style.marginRight = "10px";
	document.getElementById("boxFilip").style.width = "0px";
    document.getElementById("boxFilip").style.height = "0px";
    document.getElementById("boxFilip").style.transform = "rotate(0deg)";
	document.getElementById("boxFilip").style.marginTop = "0px";
	document.getElementById("boxFilip").style.float = "right";
	document.getElementById("boxFilip").className = "box";;

    document.getElementById("boxGreiff").style.marginRight = "10px";
	document.getElementById("boxGreiff").style.width = "0px";
    document.getElementById("boxGreiff").style.height = "0px";
    document.getElementById("boxGreiff").style.transform = "rotate(0deg)";
	document.getElementById("boxGreiff").style.marginTop = "0px";
	document.getElementById("boxGreiff").style.float = "right";
	document.getElementById("boxGreiff").className = "box";
	
	document.getElementById("boxHannes").style.width = "0px";
    document.getElementById("boxHannes").style.height = "0px";
    document.getElementById("boxHannes").style.transform = "rotate(0deg)";
	document.getElementById("boxHannes").style.marginTop = "0px";
	document.getElementById("boxHannes").style.marginRight = "10px";
	document.getElementById("boxHannes").style.float = "right";
	document.getElementById("boxHannes").className = "box";
	
	document.getElementById("boxFredrik").style.width = "0px";
    document.getElementById("boxFredrik").style.height = "0px";
    document.getElementById("boxFredrik").style.transform = "rotate(0deg)";
	document.getElementById("boxFredrik").style.marginTop = "0px";
	document.getElementById("boxFredrik").style.marginRight = "10px";
	document.getElementById("boxFredrik").style.float = "right";
	document.getElementById("boxFredrik").className = "box";
}

function showboxAxel() {
    document.getElementById("boxJesper").style.marginRight = "0px";
	document.getElementById("boxJesper").style.width = "0px";
    document.getElementById("boxJesper").style.height = "0px";
    document.getElementById("boxJesper").style.transform = "rotate(0deg)";
	document.getElementById("boxJesper").style.marginTop = "0px";
	document.getElementById("boxJesper").style.float = "right";
	document.getElementById("boxJesper").className = "box";
	
    document.getElementById("boxAxel").style.width = "150px";
    document.getElementById("boxAxel").style.height = "225px";
    document.getElementById("boxAxel").style.transform = "rotate(360deg)";
    document.getElementById("boxAxel").style.marginTop = "100px";
	document.getElementById("boxAxel").style.float = "left";
	document.getElementById("boxAxel").className = "";
    clickText(2);
    window.scrollTo(0, 1000)
	
	document.getElementById("boxFilip").style.width = "0px";
    document.getElementById("boxFilip").style.height = "0px";
    document.getElementById("boxFilip").style.transform = "rotate(0deg)";
	document.getElementById("boxFilip").style.marginTop = "0px";
	document.getElementById("boxFilip").style.marginRight = "10px";
	document.getElementById("boxFilip").style.float = "right";
	document.getElementById("boxFilip").className = "box";
	
	document.getElementById("boxGreiff").style.width = "0px";
    document.getElementById("boxGreiff").style.height = "0px";
    document.getElementById("boxGreiff").style.transform = "rotate(0deg)";
	document.getElementById("boxGreiff").style.marginTop = "0px";
	document.getElementById("boxGreiff").style.marginRight = "10px";
	document.getElementById("boxGreiff").style.float = "right";
	document.getElementById("boxGreiff").className = "box";
	
	document.getElementById("boxHannes").style.width = "0px";
    document.getElementById("boxHannes").style.height = "0px";
    document.getElementById("boxHannes").style.transform = "rotate(0deg)";
	document.getElementById("boxHannes").style.marginTop = "0px";
	document.getElementById("boxHannes").style.marginRight = "10px";
	document.getElementById("boxHannes").style.float = "right";
	document.getElementById("boxHannes").className = "box";
	
	document.getElementById("boxFredrik").style.width = "0px";
    document.getElementById("boxFredrik").style.height = "0px";
    document.getElementById("boxFredrik").style.transform = "rotate(0deg)";
	document.getElementById("boxFredrik").style.marginTop = "0px";
	document.getElementById("boxFredrik").style.marginRight = "10px";
	document.getElementById("boxFredrik").style.float = "right";
	document.getElementById("boxFredrik").className = "box";
}

function showboxFilip() {
    document.getElementById("boxJesper").style.marginRight = "0px";
	document.getElementById("boxJesper").style.width = "0px";
    document.getElementById("boxJesper").style.height = "0px";
    document.getElementById("boxJesper").style.transform = "rotate(0deg)";
	document.getElementById("boxJesper").style.marginTop = "0px";
	document.getElementById("boxJesper").style.float = "right";
	document.getElementById("boxJesper").className = "box";
	
	document.getElementById("boxAxel").style.width = "0px";
    document.getElementById("boxAxel").style.height = "0px";
    document.getElementById("boxAxel").style.transform = "rotate(0deg)";
	document.getElementById("boxAxel").style.marginTop = "0px";
	document.getElementById("boxAxel").style.marginRight = "10px";
	document.getElementById("boxAxel").style.float = "right";
	document.getElementById("boxAxel").className = "box";
	
    document.getElementById("boxFilip").style.width = "150px";
    document.getElementById("boxFilip").style.height = "225px";
    document.getElementById("boxFilip").style.transform = "rotate(360deg)";
    document.getElementById("boxFilip").style.marginTop = "100px";
	document.getElementById("boxFilip").style.float = "left";
	document.getElementById("boxFilip").className = "";
    clickText(3);
    window.scrollTo(0, 1000)
	
	document.getElementById("boxGreiff").style.width = "0px";
    document.getElementById("boxGreiff").style.height = "0px";
    document.getElementById("boxGreiff").style.transform = "rotate(0deg)";
	document.getElementById("boxGreiff").style.marginTop = "0px";
	document.getElementById("boxGreiff").style.marginRight = "10px";
	document.getElementById("boxGreiff").style.float = "right";
	document.getElementById("boxGreiff").className = "box";
	
	document.getElementById("boxHannes").style.width = "0px";
    document.getElementById("boxHannes").style.height = "0px";
    document.getElementById("boxHannes").style.transform = "rotate(0deg)";
	document.getElementById("boxHannes").style.marginTop = "0px";
	document.getElementById("boxHannes").style.marginRight = "10px";
	document.getElementById("boxHannes").style.float = "right";
	document.getElementById("boxHannes").className = "box";
	
	document.getElementById("boxFredrik").style.width = "0px";
    document.getElementById("boxFredrik").style.height = "0px";
    document.getElementById("boxFredrik").style.transform = "rotate(0deg)";
	document.getElementById("boxFredrik").style.marginTop = "0px";
	document.getElementById("boxFredrik").style.marginRight = "10px";
	document.getElementById("boxFredrik").style.float = "right";
	document.getElementById("boxFredrik").className = "box";
}

function showboxGreiff() {
    document.getElementById("boxJesper").style.width = "0px";
    document.getElementById("boxJesper").style.height = "0px";
    document.getElementById("boxJesper").style.transform = "rotate(0deg)";
	document.getElementById("boxJesper").style.marginTop = "0px";
	document.getElementById("boxJesper").style.float = "right";
	
    document.getElementById("boxAxel").style.width = "0px";
    document.getElementById("boxAxel").style.height = "0px";
    document.getElementById("boxAxel").style.transform = "rotate(0deg)";
    document.getElementById("boxAxel").style.marginTop = "0px";
	document.getElementById("boxAxel").style.marginRight = "10px";
	document.getElementById("boxAxel").style.float = "right";
	
	document.getElementById("boxFilip").style.width = "0px";
    document.getElementById("boxFilip").style.height = "0px";
    document.getElementById("boxFilip").style.transform = "rotate(0deg)";
	document.getElementById("boxFilip").style.marginTop = "0px";
	document.getElementById("boxFilip").style.marginRight = "10px";
	document.getElementById("boxFilip").style.float = "right";

    document.getElementById("boxGreiff").style.width = "150px";
    document.getElementById("boxGreiff").style.height = "225px";
    document.getElementById("boxGreiff").style.transform = "rotate(360deg)";
    document.getElementById("boxGreiff").style.marginTop = "100px";
	document.getElementById("boxGreiff").style.float = "left";
	document.getElementById("boxGreiff").className = "";
    clickText(4);
    window.scrollTo(0, 1000)
	
	document.getElementById("boxHannes").style.width = "0px";
    document.getElementById("boxHannes").style.height = "0px";
    document.getElementById("boxHannes").style.transform = "rotate(0deg)";
	document.getElementById("boxHannes").style.marginTop = "0px";
	document.getElementById("boxHannes").style.marginRight = "10px";
	document.getElementById("boxHannes").style.float = "right";
	
	document.getElementById("boxFredrik").style.width = "0px";
    document.getElementById("boxFredrik").style.height = "0px";
    document.getElementById("boxFredrik").style.transform = "rotate(0deg)";
	document.getElementById("boxFredrik").style.marginTop = "0px";
	document.getElementById("boxFredrik").style.marginRight = "10px";
	document.getElementById("boxFredrik").style.float = "right";
}

function showboxHannes() {
    document.getElementById("boxJesper").style.marginRight = "0px";
	document.getElementById("boxJesper").style.width = "0px";
    document.getElementById("boxJesper").style.height = "0px";
    document.getElementById("boxJesper").style.transform = "rotate(0deg)";
	document.getElementById("boxJesper").style.marginTop = "0px";
	document.getElementById("boxJesper").style.float = "right";
	document.getElementById("boxJesper").className = "box";
	
	document.getElementById("boxAxel").style.width = "0px";
    document.getElementById("boxAxel").style.height = "0px";
    document.getElementById("boxAxel").style.transform = "rotate(0deg)";
	document.getElementById("boxAxel").style.marginTop = "0px";
	document.getElementById("boxAxel").style.marginRight = "10px";
	document.getElementById("boxAxel").style.float = "right";
	document.getElementById("boxAxel").className = "box";
	
	document.getElementById("boxFilip").style.width = "0px";
    document.getElementById("boxFilip").style.height = "0px";
    document.getElementById("boxFilip").style.transform = "rotate(0deg)";
	document.getElementById("boxFilip").style.marginTop = "0px";
	document.getElementById("boxFilip").style.marginRight = "10px";
	document.getElementById("boxFilip").style.float = "right";
	document.getElementById("boxFilip").className = "box";
	
	document.getElementById("boxGreiff").style.width = "0px";
    document.getElementById("boxGreiff").style.height = "0px";
    document.getElementById("boxGreiff").style.transform = "rotate(0deg)";
	document.getElementById("boxGreiff").style.marginTop = "0px";
	document.getElementById("boxGreiff").style.marginRight = "10px";
	document.getElementById("boxGreiff").style.float = "right";
	document.getElementById("boxGreiff").className = "box";
	
    document.getElementById("boxHannes").style.width = "150px";
    document.getElementById("boxHannes").style.height = "225px";
    document.getElementById("boxHannes").style.transform = "rotate(-360deg)";
    document.getElementById("boxHannes").style.marginTop = "100px";
	document.getElementById("boxHannes").style.float = "left";
	document.getElementById("boxHannes").className = "";
    clickText(5);
    window.scrollTo(0, 1000)
	
	document.getElementById("boxFredrik").style.width = "0px";
    document.getElementById("boxFredrik").style.height = "0px";
    document.getElementById("boxFredrik").style.transform = "rotate(0deg)";
	document.getElementById("boxFredrik").style.marginTop = "0px";
	document.getElementById("boxFredrik").style.marginRight = "10px";
	document.getElementById("boxFredrik").style.float = "right";
	document.getElementById("boxFredrik").className = "box";
}

function showboxFredrik() {
    document.getElementById("boxJesper").style.marginRight = "0px";
	document.getElementById("boxJesper").style.width = "0px";
    document.getElementById("boxJesper").style.height = "0px";
    document.getElementById("boxJesper").style.transform = "rotate(0deg)";
	document.getElementById("boxJesper").style.marginTop = "0px";
	document.getElementById("boxJesper").style.float = "right";
	document.getElementById("boxJesper").className = "box";
	
	document.getElementById("boxAxel").style.width = "0px";
    document.getElementById("boxAxel").style.height = "0px";
    document.getElementById("boxAxel").style.transform = "rotate(0deg)";
	document.getElementById("boxAxel").style.marginTop = "0px";
	document.getElementById("boxAxel").style.marginRight = "10px";
	document.getElementById("boxAxel").style.float = "right";
	document.getElementById("boxAxel").className = "box";
	
	document.getElementById("boxFilip").style.width = "0px";
    document.getElementById("boxFilip").style.height = "0px";
    document.getElementById("boxFilip").style.transform = "rotate(0deg)";
	document.getElementById("boxFilip").style.marginTop = "0px";
	document.getElementById("boxFilip").style.marginRight = "10px";
	document.getElementById("boxFilip").style.float = "right";
	document.getElementById("boxFilip").className = "box";
	
	document.getElementById("boxGreiff").style.width = "0px";
    document.getElementById("boxGreiff").style.height = "0px";
    document.getElementById("boxGreiff").style.transform = "rotate(0deg)";
	document.getElementById("boxGreiff").style.marginTop = "0px";
	document.getElementById("boxGreiff").style.marginRight = "10px";
	document.getElementById("boxGreiff").style.float = "right";
	document.getElementById("boxGreiff").className = "box";
	
	document.getElementById("boxHannes").style.width = "0px";
    document.getElementById("boxHannes").style.height = "0px";
    document.getElementById("boxHannes").style.transform = "rotate(0deg)";
	document.getElementById("boxHannes").style.marginTop = "0px";
	document.getElementById("boxHannes").style.marginRight = "10px";
	document.getElementById("boxHannes").style.float = "right";
	document.getElementById("boxHannes").className = "box";
	
    document.getElementById("boxFredrik").style.width = "150px";
    document.getElementById("boxFredrik").style.height = "225px";
    document.getElementById("boxFredrik").style.transform = "rotate(360deg)";
    document.getElementById("boxFredrik").style.marginTop = "100px";
	document.getElementById("boxFredrik").style.float = "left";
	document.getElementById("boxFredrik").className = "";
    clickText(6);
    window.scrollTo(0, 1000)
}