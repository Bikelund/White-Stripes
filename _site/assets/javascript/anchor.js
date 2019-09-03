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

        setTimeout(function(){
            window.location.href = link;
        }, 2000);

    }
}

/* document.getElementById(link).style.display = "flex";
event.target.classList.add("active-name");  */
