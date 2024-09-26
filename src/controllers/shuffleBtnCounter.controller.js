const shuffleButton = document.querySelector(".image__button");

const hideSkills = document.querySelectorAll(".hero__skills")
let botonShuffle = 0;

export  function clickHandler() {
    botonShuffle++;
     if (botonShuffle === 9) {  // Activar customScheme en el 9º clic
        document.documentElement.classList.add("customScheme");
        document.documentElement.classList.remove("dark", "dark-mode");
        localStorage.setItem("theme", "customScheme");
        hideSkills.forEach(skill=> {
            skill.style.display = "none";
        });
    }
}

shuffleButton.addEventListener("click", clickHandler);
