/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


$("#closeSideBar").on("click", closeNav);
$("#closeSideBar").addClass("closebtn glyphicon glyphicon-remove");


$("#openSideBar").on("click", openNav);
$("#openSideBar").addClass("glyphicon glyphicon-menu-hamburger myStyle");
$("#openSideBar").text(" Menu");
