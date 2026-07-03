import type {Metadata} from 'next';import {notFound} from 'next/navigation';import {ServicePage} from '@/components/ServicePage';import {serviceData} from '@/lib/service-data';
export function generateStaticParams(){return Object.keys(serviceData).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const d=serviceData[slug];if(!d)return{};return{title:d.title,description:d.description,alternates:{canonical:'/'+slug},openGraph:{title:d.title,description:d.description,url:'/'+slug}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=serviceData[slug];if(!d)notFound();return <ServicePage data={d}/>}
