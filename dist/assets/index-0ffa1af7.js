import{j as c}from"./index-33d02da0.js";import{d,b as f,j as v,z as g,q as n,l as p,ax as w}from"./runtime-core.esm-bundler-b2c41dc4.js";import{_ as x}from"./Input-f6d78205.js";import{_ as h}from"./Button-643d1ca6.js";import{_ as C}from"./InputGroup-87a3cda6.js";import{_ as $}from"./Card-25731fbe.js";import"./browser-e8121bf8.js";import"./light-a4b7478e.js";import"./runtime-dom.esm-bundler-3825b271.js";import"./is-browser-fc34c9a6.js";import"./light-cd339fd5.js";import"./Suffix-6d4f391e.js";import"./Scrollbar-70a7a212.js";import"./VResizeObserver-83b1dbc1.js";import"./use-merged-state-950900ad.js";import"./use-memo-3ef194ef.js";import"./light-6b66b35a.js";import"./color-to-class-b0332f36.js";const b={class:"h-full"},J=d({__name:"index",setup(y){const o=f(""),{copy:s,isSupported:_}=c();function a(){var r,t,e;if(!_){(r=window.$message)==null||r.error("您的浏览器不支持Clipboard API");return}if(!o.value){(t=window.$message)==null||t.error("请输入要复制的内容");return}s(o.value),(e=window.$message)==null||e.success(`复制成功：${o.value}`)}return(r,t)=>{const e=x,i=h,m=C,u=$;return v(),g("div",b,[n(u,{title:"文本复制",class:"h-full shadow-sm rounded-16px"},{default:p(()=>[n(m,null,{default:p(()=>[n(e,{value:o.value,"onUpdate:value":t[0]||(t[0]=l=>o.value=l),placeholder:"请输入要复制的内容吧"},null,8,["value"]),n(i,{type:"primary",onClick:a},{default:p(()=>[w("复制")]),_:1})]),_:1})]),_:1})])}}});export{J as default};