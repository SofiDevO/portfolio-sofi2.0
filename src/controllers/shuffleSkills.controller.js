import { getData } from "@src/services/data";

/* const skillsData = await getData("skills", true); */
export const prerender = true;
import { skillsData } from "@src/data/skillsData";

/* Shuffle initial function */
export const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

/* shuffle on click */
export const buttonShuffle = document.querySelector(".image__button");
const skillIcons = document.querySelector(".hero__skills");
const inicialSkills = shuffle(skillsData).slice(0, 7);
skillIcons.innerHTML = inicialSkills
  .map(
    (skill, index) => `
      <div class="icon__container skill skill-${index}" >
      <iconify-icon

        class="skills__icons " icon="${skill.icon}"  with="45" height="45"> </iconify-icon>
      </div>
    `
  )
  .join("");
buttonShuffle.addEventListener("click", () => {
  const shuffledSkills = shuffle(skillsData).slice(0, 7);
  skillIcons.innerHTML = shuffledSkills
    .map(
      (skill, index) => `

      <div class="icon__container skill skill-${index}">
        <iconify-icon class="skills__icons " icon="${skill.icon}" with="45" height="45" ></iconify-icon>
      </div>
    `
    )
    .join("");
});
