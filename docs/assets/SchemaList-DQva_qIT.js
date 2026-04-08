import{R as x,U as g,V as j,j as e,H as c,a8 as f,n as y,a9 as S,B as b,b4 as N,aa as C,X as v}from"./entry.client-CxqjQSXf.js";import{T as w}from"./Toc-C9IKABTC.js";import{P as A,A as V}from"./Item-CSB_7Tyf.js";import{s as m}from"./slugify-Cgpt3tma.js";import{S as H}from"./SchemaView-BxAvfkzz.js";import"./Select-DfiDqOfu.js";import"./index-Dj7cLXUT.js";import"./AiAssistantMenuItems-BMaeVpVP.js";import"./Markdown-BmX9AFK2.js";import"./useHighlighter-DVrb-yrK.js";import"./shiki-Blaava6y.js";import"./index-CnWd1oOv.js";import"./constants-B942wETt.js";import"./eye-DXKlswrO.js";const T=v(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function U(){const{input:l,type:p,versions:h,version:a,options:i}=x(),d=g(T,{input:l,type:p}),{data:n}=j(d),o=n.schema.title,t=n.schema.components?.schemas??[],u=Object.entries(h).length>1,r=i?.showVersionSelect==="always"||u&&i?.showVersionSelect!=="hide";return t.length?e.jsxs("div",{className:"grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsx(A,{name:"category",children:o}),e.jsxs(c,{children:[e.jsxs("title",{children:["Schemas ",r?a:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),e.jsxs("div",{className:"pt-(--padding-content-top) pb-(--padding-content-bottom)",children:[e.jsx(V,{title:o,heading:"Schemas",headingId:"schemas"}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:t.map(s=>e.jsxs(f,{className:"group",defaultOpen:!0,children:[e.jsxs(y,{registerNavigationAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:m(s.name),children:[s.name," ",e.jsx(S,{asChild:!0,children:e.jsx(b,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx(N,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(C,{className:"mt-4 CollapsibleContent",children:e.jsx(H,{schema:s.schema})})]},s.name))})]}),e.jsx(w,{entries:t.map(s=>({id:m(s.name),text:s.name,depth:1}))})]}):e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs("title",{children:["Schemas ",r?a:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),"No schemas found"]})}export{U as SchemaList};
//# sourceMappingURL=SchemaList-DQva_qIT.js.map
