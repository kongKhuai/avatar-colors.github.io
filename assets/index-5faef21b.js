import{_ as N}from"./LoadingEmptyWrapper.vue_vue_type_script_setup_true_lang-b940a7d2.js";import{x as g}from"./index-711b10c0.js";import"./SvgIcon.vue_vue_type_script_setup_true_lang-343c3e9f.js";import{N as E}from"./Popconfirm-dfc9b2aa.js";import{_ as L}from"./DataTable-4967f810.js";import{d as b,b as A,f as B,j as S,z as T,q as t,l as n,u as r,ax as l}from"./runtime-core.esm-bundler-b2c41dc4.js";import{_ as d}from"./Space-22b52c27.js";import{_ as s}from"./Button-643d1ca6.js";import{_ as w}from"./Card-25731fbe.js";import"./runtime-dom.esm-bundler-3825b271.js";import"./light-a4b7478e.js";import"./Scrollbar-70a7a212.js";import"./light-cd339fd5.js";import"./VResizeObserver-83b1dbc1.js";import"./use-compitable-d780974b.js";import"./browser-e8121bf8.js";import"./is-browser-fc34c9a6.js";import"./_commonjsHelpers-87174ba5.js";import"./index-33d02da0.js";import"./light-6b66b35a.js";import"./light-b4e02078.js";import"./_common-89f2509f.js";import"./light-ad9434f6.js";import"./Popover-511759dc.js";import"./Suffix-6d4f391e.js";import"./index-ffcef1ee.js";import"./flatten-c427e247.js";import"./index-cad90cf4.js";import"./get-82c961ad.js";import"./format-length-c9d165c6.js";import"./use-memo-3ef194ef.js";import"./cssr-f33a4f78.js";import"./utils-ae28b86b.js";import"./use-merged-state-950900ad.js";import"./next-frame-once-7035a838.js";import"./Warning-0740b5a5.js";import"./omit-b0e7e098.js";import"./Checkbox-8b40253f.js";import"./Dropdown-77ea532d.js";import"./render-ae2c70c2.js";import"./Select-56a067c7.js";import"./fade-in-scale-up.cssr-f6939416.js";import"./Tag-0846e0d4.js";import"./color-to-class-b0332f36.js";import"./Input-f6d78205.js";function z(m,o=0){const e=m-o;return Math.floor(Math.random()*e+o)}function D(m=!1,o=!1){const{bool:e,setTrue:a,setFalse:u}=g(m),{bool:p,setBool:c}=g(o);return{loading:e,startLoading:a,endLoading:u,empty:p,setEmpty:c}}const Lt=b({__name:"index",setup(m){const{loading:o,startLoading:e,endLoading:a,empty:u,setEmpty:p}=D(),c=[{title:"Name",key:"name",align:"center"},{title:"Age",key:"age",align:"center"},{title:"Address",key:"address",align:"center"},{key:"action",title:"Action",align:"center",render:()=>t(d,{justify:"center"},{default:()=>[t(s,{size:"small",onClick:()=>{}},{default:()=>[l("编辑")]}),t(E,{onPositiveClick:()=>{}},{default:()=>"确认删除",trigger:()=>t(s,{size:"small"},{default:()=>[l("删除")]})})]})}],i=A([]);function y(){return Array(100).fill(1).map((x,f)=>({name:`Name${f}`,age:z(30,20),address:"中国"}))}function _(){e(),setTimeout(()=>{i.value=y(),a(),p(!i.value.length)},1e3)}function h(){e(),setTimeout(()=>{i.value=[],a(),p(!i.value.length)},1e3)}return B(()=>{_()}),(x,f)=>{const k=L,v=N,C=w;return S(),T("div",null,[t(C,{title:"表格",class:"h-full shadow-sm rounded-16px"},{default:n(()=>[t(r(d),{vertical:!0},{default:n(()=>[t(r(d),null,{default:n(()=>[t(r(s),{onClick:_},{default:n(()=>[l("有数据")]),_:1}),t(r(s),{onClick:h},{default:n(()=>[l("空数据")]),_:1})]),_:1}),t(v,{class:"h-480px",loading:r(o),empty:r(u)},{default:n(()=>[t(k,{columns:c,data:i.value,"flex-height":!0,class:"h-480px"},null,8,["data"])]),_:1},8,["loading","empty"])]),_:1})]),_:1})])}}});export{Lt as default};
