const d = document;

  d.addEventListener("DOMContentLoaded", function () {
    const sectionSkills = d.getElementById("skills");
    const skillsTerminal = d.querySelector(".skills__popup");
    const btnClose = d.querySelector(".btn__red ");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
const observer = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsTerminal.classList.add("active");
          btnClose.addEventListener("click", function () {
            skillsTerminal.classList.remove("active");
          } );
        }else{
          skillsTerminal.classList.remove("active");
        }

      });
    };
    const observerSkills = new IntersectionObserver(observer, options);

   const timerTerminal =  setTimeout(() => {
      observerSkills.observe(sectionSkills);
    }, 8000);
  });


  export default timerTerminal;