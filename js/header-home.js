//Sidenav

function SideBarOpen() {
    document.getElementById("sidenav").style.left = "0";
    document.getElementById("sidenav").style.opacity = "1";
    document.getElementById("sidenav").style.transition = "0.7s ease-in-out";
    document.getElementById("filter").style.left = "0";
}

function SideBarClose() {
    document.getElementById("sidenav").style.left = "-70%";
    document.getElementById("sidenav").style.opacity = "0";
    document.getElementById("sidenav").style.transition = "0.7s ease-in-out";
    document.getElementById("filter").style.left = "-100%";
}

function SideNavTitleOn() {
    document.getElementById("sidenavtitle").src = "./img/logo/sidenav-brand-h.png";
}

function SideNavTitleOut() {
    document.getElementById("sidenavtitle").src = "./img/logo/sidenav-brand.png";
}