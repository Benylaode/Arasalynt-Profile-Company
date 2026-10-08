import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

/** Only mount on index pages. Detail pages have their own breadcrumbs. */
const SECTIONS = {
  'about-us': {path:'/about-us',title:'Tentang Kami',type:'AboutPage',description:'Mengenal Arsalynk, ekosistem teknologi enterprise, data analytics, dan kapabilitas bisnis terintegrasi di Indonesia.',ancestors:[] as {name:string;path:string}[]},
  'our-business': {path:'/our-business',title:'Our Business',type:'CollectionPage',description:'Ekosistem bisnis Arsalynk dengan spesialisasi teknologi, riset, data analytics, digital media, dan konsultasi bisnis.',ancestors:[] as {name:string;path:string}[]},
  'our-works': {path:'/our-works',title:'Our Works',type:'CollectionPage',description:'Portofolio Arsalynk: ERP, IoT, pengembangan perangkat lunak, analitik data, dan produksi media.',ancestors:[] as {name:string;path:string}[]},
  'insight-programs': {path:'/insight-programs',title:'Insight & Programs',type:'CollectionPage',description:'Studi kasus dan perspektif kepemimpinan Arsalynk tentang teknologi enterprise dan strategi bisnis.',ancestors:[] as {name:string;path:string}[]},
  'case-studies': {path:'/insight-programs/case-studies',title:'Case Studies',type:'CollectionPage',description:'Studi kasus implementasi solusi teknologi dan proyek Arsalynk untuk kebutuhan bisnis enterprise.',ancestors:[{name:'Insight & Programs',path:'/insight-programs'}]},
  'leadership-thoughts': {path:'/insight-programs/leadership-thoughts',title:'Leadership Thoughts',type:'Blog',description:'Perspektif kepemimpinan, strategi organisasi, dan transformasi digital dari ekosistem Arsalynk.',ancestors:[{name:'Insight & Programs',path:'/insight-programs'}]},
} as const;

export default function SectionPageJsonLd({section}:{section:keyof typeof SECTIONS}) {
  const page=SECTIONS[section];
  const url=`${SITE_URL}${page.path}`;
  const crumbs=[{name:'Home',path:'/'},...page.ancestors,{name:page.title,path:page.path}];
  return <JsonLd id={`section-schema-${section}`} data={{
    '@context':'https://schema.org',
    '@graph':[
      {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:crumbs.map(({name,path},i)=>({'@type':'ListItem',position:i+1,name,item:`${SITE_URL}${path}`}))},
      {'@type':page.type,'@id':`${url}#webpage`,url,name:`${page.title} | Arsalynk`,description:page.description,isPartOf:{'@id':`${SITE_URL}/#website`},about:{'@id':`${SITE_URL}/#organization`},breadcrumb:{'@id':`${url}#breadcrumb`},inLanguage:'id-ID'},
    ],
  }} />;
}
