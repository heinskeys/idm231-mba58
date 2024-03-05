document.addEventListener("DOMContentLoaded", function() {
    const zodiacBoxes = document.querySelectorAll(".zodiacBox");
    const zodiacPages = document.querySelectorAll(".zodiacPage");
    const enterNewBirthday = document.querySelectorAll(".enterNewBtn");

    zodiacBoxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            document.querySelectorAll(".hide").forEach(element => {
                element.style.display = "none";
                zodiacPages[index].style.display = "block";
            });
        });
    });
});