import { skillsData } from "@entities/skill/model/skillsData";
import type { Skill } from "@types/index";

export const shuffle = <T>(array: T[]): T[] =>
  array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

const renderSkills = (skills: Skill[]): string =>
  skills
    .map(
      (skill, index) => `
      <div class="icon__container skill skill-${index}">
        <iconify-icon class="skills__icons" icon="${skill.icon}" width="45" height="45"></iconify-icon>
      </div>
    `
    )
    .join("");

export const initShuffleSkills = (): void => {
  const buttonShuffle = document.querySelector<HTMLElement>(".image__button");
  const skillIconsContainer = document.querySelector<HTMLElement>(".hero__skills");

  if (!skillIconsContainer) return;

  const initialSkills = shuffle(skillsData).slice(0, 7);
  skillIconsContainer.innerHTML = renderSkills(initialSkills);

  buttonShuffle?.addEventListener("click", () => {
    const shuffledSkills = shuffle(skillsData).slice(0, 7);
    skillIconsContainer.innerHTML = renderSkills(shuffledSkills);
  });
};
