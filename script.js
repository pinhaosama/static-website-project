function menuCollapse() {
    document.getElementById("ham").checked = false;
}

function menuExpand() {
    document.getElementById("ham").checked = true;
}

function footerCollapse(element) {
    let menu = document.getElementsByClassName('footerList');
    let check = false;
    if(check == false) {
        menu.style.display = "block";
        check = true;
    }else{
        menu.style.height = "none";
        check = false;
    }
}

