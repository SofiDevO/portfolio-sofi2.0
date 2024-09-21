import type { APIRoute } from 'astro';
import { skillsData } from '@data/skillsData';
import { menuData } from '@src/data/menuData';
import { portafolioData } from '@src/data/portfolioData';
import { socialIconsData } from '@src/data/socialIconsData';
import { userData } from '@src/data/userData';
import { toolsData } from '@src/data/ToolsData';

const dataTypes = {
    "skills": skillsData,
    "menu": menuData,
    "portafolio": portafolioData,
    "socialIcons": socialIconsData,
    "tools": toolsData,
    "user": userData
}

export const GET: APIRoute = ({ params }) => {
    const data = params.dataType
    
    if(data === "all") {
        return new Response(
            JSON.stringify({data: dataTypes})
        )
    }

    if (!dataTypes[data]) {
        return new Response(JSON.stringify({ status: 404 }));
    } 

    return new Response(
        JSON.stringify({
        [data]: dataTypes[data]
        })
    )
}
