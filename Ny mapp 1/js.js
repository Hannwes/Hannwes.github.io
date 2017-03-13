function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function showboxLeft2() {
    document.getElementById("boxAxel").style.width = "0px";
    document.getElementById("boxAxel").style.height = "0px";
    document.getElementById("boxAxel").style.transform = "rotate(0deg)";
    document.getElementById("boxAxel").style.marginTop = "0px";

    document.getElementById("boxJesper").style.width = "0px";
    document.getElementById("boxJesper").style.height = "0px";
    document.getElementById("boxJesper").style.transform = "rotate(0deg)";

    document.getElementById("boxLeft2").style.marginRight = "0px";
}