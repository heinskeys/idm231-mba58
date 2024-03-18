document.addEventListener("DOMContentLoaded", function() {
    var zodiacBoxes = document.querySelectorAll(".zodiacBox");
    var zodiacPages = document.querySelectorAll(".zodiacProfile");
    var returnHome = document.querySelectorAll(".scrollBtn");
    var hideHome = document.querySelectorAll(".mainContent");
    var hideZodiac = document.querySelectorAll(".hideZodiac");

    function hideHomeContent() {
        hideHome.forEach(function(element){
            element.classList.add('hideMain');
        });
    }

    function viewHomeContent() {
        hideHome.forEach(function(element){
            element.classList.remove('hideMain');
        });
    }

    function hideZodiacProfile() {
        zodiacPages.forEach(function(element){
            element.style.display = "none";
        });
    }

    hideZodiacProfile();

    zodiacBoxes.forEach((box, index) => {
        box.addEventListener("click", () => { 
            hideHomeContent();
            hideZodiacProfile(); 
            if (zodiacPages[index]) { 
                zodiacPages[index].style.display = "block";
            }
        });
    });

    returnHome.forEach(button => {
        button.addEventListener("click", () => {
            hideZodiacProfile();
            viewHomeContent();
        });
    });
});

