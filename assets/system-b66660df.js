import{d as t,i as r,f as I,U as o}from"./index-711b10c0.js";import"./SvgIcon.vue_vue_type_script_setup_true_lang-343c3e9f.js";function u(){const{VITE_APP_NAME:s,VITE_APP_TITLE:e,VITE_APP_DESC:E}={VITE_BASE_URL:"/",VITE_APP_NAME:"SoybeanAdmin",VITE_APP_TITLE:"Soybean管理系统",VITE_APP_DESC:"SoybeanAdmin是一个中后台管理系统模版",VITE_AUTH_ROUTE_MODE:"static",VITE_ROUTE_HOME_PATH:"/dashboard/analysis",VITE_ICON_PREFFIX:"icon",VITE_ICON_LOCAL_PREFFIX:"icon-local",VITE_VISUALIZER:"N",VITE_COMPRESS:"N",VITE_COMPRESS_TYPE:"gzip",VITE_PWA:"N",VITE_SERVICE_ENV:"prod",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};return{name:s,title:e,desc:E}}function P(){return new o().getResult()}function i(){const s=t();function e(E){const{userRole:n}=s.userInfo;let _=n==="super";return _||(r(E)&&(_=E.includes(n)),I(E)&&(_=E===n)),_}return{hasPermission:e}}export{i as a,P as b,u};
