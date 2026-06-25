import type { APIRoute } from "astro";
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

export const GET: APIRoute = ({ params }) => {
  const data = params.dataType;

  if (data === "all") {
    return new Response(JSON.stringify({ data: dataTypes }));
  }

  if (!data || !dataTypes[data]) {
    return new Response(JSON.stringify({ status: 404 }));
  }

  return new Response(JSON.stringify({ [data]: dataTypes[data] }));
};
