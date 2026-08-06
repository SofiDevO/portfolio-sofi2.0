import { skillsData } from "@entities/skill/model/skillsData";
import { menuData } from "@entities/navigation/model/menuData";
import { portafolioData } from "@entities/project/model/portfolioData";
import { socialIconsData } from "@entities/social/model/socialIconsData";
import { userData } from "@entities/user/model/userData";
import { toolsData } from "@entities/skill/model/toolsData";

const dataTypes: Record<string, unknown> = {
  skills: skillsData,
  menu: menuData,
  portafolio: portafolioData,
  socialIcons: socialIconsData,
  tools: toolsData,
  user: userData,
};

/**
 * Returns data directly from local model objects without network fetch.
 * @param dataType - the requested data segment (defaults to "data" for all data)
 */
export async function getData(
  dataType: string = "data"
): Promise<any> {
  if (dataType === "data" || dataType === "all") {
    return dataTypes;
  }

  return dataTypes[dataType] ?? null;
}

