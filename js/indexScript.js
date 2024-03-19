document.addEventListener("DOMContentLoaded", function() {

    // !!!! GET SIGN ON HOMEPAGE !!!
    var zodiacBoxes = document.querySelectorAll(".zodiacBox");
    var zodiacPages = document.querySelectorAll(".zodiacProfile");
    var returnHome = document.querySelectorAll(".scrollBtn");
    var hideHome = document.querySelectorAll(".mainContent");

    // Hides all the "home" content.
    function hideHomeContent() {
        document.getElementById('homeStyle').disabled = true;
        document.getElementById('zodiacStyle').disabled = false;
        hideHome.forEach(function(element){
            element.classList.add('hideMain');
        });
    }

    // Displays all the home content.
    function viewHomeContent() {
        document.getElementById('homeStyle').disabled = false;
        document.getElementById('zodiacStyle').disabled = true;
        hideHome.forEach(function(element){
            element.classList.remove('hideMain');
        });
    }

    // Hides the zodiacProfile content
    function hideZodiacProfile() {
        zodiacPages.forEach(function(element){
            element.style.display = "none";
        });
    }

    // As a default, hide the zodiacProfiles, turn off the zodiac stylesheet and leave only the home content and homestylesheet visible. 
    document.getElementById('homeStyle').disabled = false;
    document.getElementById('zodiacStyle').disabled = true;
    hideZodiacProfile();


    // When a user clicks on a "zodiacBox", display the zodiacProfile associated.
    zodiacBoxes.forEach((box, index) => {
        box.addEventListener("click", () => { 
            hideHomeContent();
            hideZodiacProfile(); 
            if (zodiacPages[index]) { 
                zodiacPages[index].style.display = "flex";
            }
        });
    });

    //  When a user clicks on the back button, hide the zodiacProfile content and display the home content.
    returnHome.forEach(button => {
        button.addEventListener("click", () => {
            hideZodiacProfile();
            viewHomeContent();
        });
    });

    //  !!!! GET SIGN BY ENTERING DATE !!!

    // Denotes what astrological sign concides with which date. 
    function getZodiacSign(month, day) { 
        let astrological_sign;
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            astrological_sign = "Capricorn";
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            astrological_sign = "Sagittarius";
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            astrological_sign = "Scorpio";
        } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
            astrological_sign = "Libra";
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 23)) {
            astrological_sign = "Virgo";
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            astrological_sign = "Leo";
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            astrological_sign = "Cancer";
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            astrological_sign = "Gemini";
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            astrological_sign = "Taurus";
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            astrological_sign = "Aries";
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            astrological_sign = "Pisces";
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            astrological_sign = "Aquarius";
        }
        return astrological_sign;
    }


    //  Displays zodiacProfile based on sign.
    function showZodiacProfile(sign) {
        var className = sign.toLowerCase() + "Character";
        var zodiacProfile = document.querySelector("." + className);
        if (zodiacProfile) {
            zodiacProfile.style.display = "flex";
        } else {
            console.log("No zodiac profile found for", className);
        }
    }

    var birthdayInput = document.getElementById('birthday')
    var dateInput = document.querySelector('.submitBtn');

    dateInput.addEventListener("click", function() {
        var selectedDate = new Date(birthdayInput.value);
    
        // Take note of month and day entered.
        var month = selectedDate.getMonth() + 1; // Months are zero-indexed, so we add 1
        var day = selectedDate.getDate();
        // Pass that information into function that denotes which sig concides with which date in order to get astrological sign.
        var astrological_sign = getZodiacSign(month, day);
    
        hideHomeContent();
        hideZodiacProfile(); 
    
        // Show the zodiac profile corresponding to the astrological sign.
        showZodiacProfile(astrological_sign);
    });
});

