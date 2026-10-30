import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

/** Only mount on index pages. Detail pages have their own breadcrumbs. */
const SECTIONS = {
  'about-us': {path:'/about-us',title:'About Us',type:'AboutPage',description:'Discover Arsalynk, an integrated enterprise technology ecosystem, deep learning intelligence, and scalable digital architecture.',ancestors:[] as {name:string;path:string}[]},
  'our-solution': {path:'/our-solution',title:'Our Solution',type:'CollectionPage',description:'Arsalynk enterprise solutions: custom ERP architecture, deep learning AI, connected IoT ecosystems, and scalable web development.',ancestors:[] as {name:string;path:string}[]},
  'our-business': {path:'/our-solution',title:'Our Solution',type:'CollectionPage',description:'Arsalynk specialized enterprise solution suite: ERP systems, deep learning data engineering, smart IoT, and digital web apps.',ancestors:[] as {name:string;path:string}[]},
  'our-works': {path:'/our-solution',title:'Our Solution',type:'CollectionPage',description:'Arsalynk enterprise technology solutions, workflow automation, and custom software architecture.',ancestors:[] as {name:string;path:string}[]},
  'insight-programs': {path:'/insight-programs',title:'Insight & Programs',type:'CollectionPage',description:'Enterprise case studies and executive leadership perspectives on modern technology and operating models.',ancestors:[] as {name:string;path:string}[]},
  'case-studies': {path:'/insight-programs/case-studies',title:'Case Studies',type:'CollectionPage',description:'Documented real-world case studies of enterprise technology deployments, ERP systems, and IoT telematics.',ancestors:[{name:'Insight & Programs',path:'/insight-programs'}]},
  'leadership-thoughts': {path:'/insight-programs/leadership-thoughts',title:'Leadership Thoughts',type:'Blog',description:'Executive perspectives on workflow architecture, data governance, and organizational resilience.',ancestors:[{name:'Insight & Programs',path:'/insight-programs'}]},
  'contact-us': {path:'/contact-us',title:'Contact Us',type:'ContactPage',description:'Connect with Arsalynk enterprise technology specialists via official WhatsApp, corporate email, or our Jakarta office.',ancestors:[] as {name:string;path:string}[]},
} as const;

export default function SectionPageJsonLd({section}:{section:keyof typeof SECTIONS}) {
  const page=SECTIONS[section];
  const url=`${SITE_URL}${page.path}`;
  const crumbs=[{name:'Home',path:'/'},...page.ancestors,{name:page.title,path:page.path}];
  return <JsonLd id={`section-schema-${section}`} data={{
    '@context':'https://schema.org',
    '@graph':[
      {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:crumbs.map(({name,path},i)=>({'@type':'ListItem',position:i+1,name,item:`${SITE_URL}${path}`}))},
      {'@type':page.type,'@id':`${url}#webpage`,url,name:`${page.title} | Arsalynk`,description:page.description,isPartOf:{'@id':`${SITE_URL}/#website`},about:{'@id':`${SITE_URL}/#organization`},breadcrumb:{'@id':`${url}#breadcrumb`},inLanguage:['en-US','id-ID']},
    ],
  }} />;
}
