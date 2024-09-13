import type { APIRoute } from 'astro';
import {skillsData} from '@data/skillsData';

export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      name: skillsData
    })
  )
}
