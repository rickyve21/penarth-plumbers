import type {MetadataRoute} from 'next';import {site,services} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const paths=['','areas-served','contact','privacy-policy','terms',...services.map(s=>s.slug)];return paths.map((p,i)=>({url:`${site.url}/${p}`,lastModified:new Date(),changeFrequency:i===0?'weekly':'monthly',priority:i===0?1:p==='contact'?.8:.7}))}
