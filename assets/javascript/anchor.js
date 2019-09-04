/* 
    Creates a delay when clicking on menubar
*/

document.getElementById("anchor-link").onclick = function(event) {
    if (event.target.tagName === "A") {
        event.preventDefault(); // Must add this for it to work
        let innerLink = event.target.innerHTML;
        let link = event.target.getAttribute("href");
        link = link.replace("#", innerLink + ".html");
        event.target.href = link;

<<<<<<< HEAD
=======
        let element = document.getElementsByClassName('main-nav'); 
        element[0].classList.add("main-nav-left"); // Adds class for the animation of the menu bar

>>>>>>> 318138099be6b1907c0be12b77f63937d31be707
        setTimeout(function(){
            window.location.href = link;
        }, 2000);

    }
<<<<<<< HEAD
}

/* document.getElementById(link).style.display = "flex";
event.target.classList.add("active-name");  */
=======
}
>>>>>>> 318138099be6b1907c0be12b77f63937d31be707
