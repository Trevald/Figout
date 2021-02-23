import{p as t,a as e,o as i,c as n,w as s,b as a,F as o,r as l,d as r,t as c,e as h,f as d,v as C,g as u,h as m,i as p}from"./vendor.f038e781.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(i){const n=new URL(t,location),s=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((i,a)=>{const o=new URL(t,n);if(self[e].moduleMap[o])return i(self[e].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${e}.moduleMap['${o}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${t}`)),s(r)},onload(){i(self[e].moduleMap[o]),s(r)}});document.head.appendChild(r)})),self[e].moduleMap={}}}("assets/");const g={name:"GitHubBanner"},v=s("data-v-16859980");t("data-v-16859980");const L={href:"https://github.com/Trevald/figout",class:"github-corner","aria-label":"View source on GitHub"},b=a("svg",{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"},[a("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),a("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),a("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1);e();const w=v(((t,e,s,a,o,l)=>(i(),n("a",L,[b]))));g.render=w,g.__scopeId="data-v-16859980";const f={name:"Result",props:{parentClassList:Array,childrenClassLists:Array},computed:{parentClassNames(){return this.parentClassList?this.parentClassList.join(" "):""}},methods:{getChildClassNames(t){return this.childrenClassLists[t]}}},z=s("data-v-adfca518");t("data-v-adfca518");const k={class:"box"};e();const H=z(((t,e,s,r,c,h)=>(i(),n("div",k,[a("ul",{class:h.parentClassNames},[(i(!0),n(o,null,l(s.childrenClassLists,((t,e)=>(i(),n("li",{key:e,class:h.getChildClassNames(e)},null,2)))),128))],2)]))));f.render=H,f.__scopeId="data-v-adfca518";const S={name:"AlignmentIcon",props:{direction:String,distribution:String,isSelected:Boolean},computed:{classList(){const t=["icon","frame",this.direction,this.distribution];return this.isSelected&&t.push("selected"),t.join(" ")}}},y=a("span",{class:"a"},null,-1),M=a("span",{class:"b"},null,-1),V=a("span",{class:"c"},null,-1);S.render=function(t,e,s,a,o,l){return i(),n("div",{class:l.classList},[y,M,V],2)};const B={name:"Alignment",props:{direction:String,distribution:String,horizontal:String,vertical:String},components:{AlignmentIcon:S},computed:{classList(){this.direction;return[`is-${this.distribution}`,this.direction]},horizontalPositions:()=>["left","center","right"],verticalPositions:()=>["top","middle","bottom"],options(){return this.isSpaceBetween()?[["left","top"],["center","middle"],["right","bottom"]]:[["left","top"],["center","top"],["right","top"],["left","middle"],["center","middle"],["right","middle"],["left","bottom"],["center","bottom"],["right","bottom"]]}},methods:{getLabel:t=>`${t[0],t[1]}`,isSelected(t){const{horizontal:e,vertical:i}=x(t);return this.isSpaceBetween()&&"horizontal"===this.direction?i===this.vertical:this.isSpaceBetween()&&"vertical"===this.direction?e===this.horizontal:e===this.horizontal&&i===this.vertical},setAlignment(t){const{horizontal:e,vertical:i}=x(t);if(this.isSpaceBetween())switch(this.direction){case"horizontal":this.emitAlignment({vertical:i});break;case"vertical":this.emitAlignment({horizontal:e})}else this.emitAlignment({horizontal:e,vertical:i})},emitAlignment(t){const e=t.horizontal||this.horizontal,i=t.vertical||this.vertical;this.$emit("changeAlignment",{horizontal:e,vertical:i})},isSpaceBetween(){return"space-between"===this.distribution}}},x=t=>({horizontal:t[0],vertical:t[1]}),A={class:"alignment"},I={class:"sr-only"};B.render=function(t,e,s,h,d,C){const u=r("AlignmentIcon");return i(),n("div",A,[a("div",{class:["selector",C.classList]},[(i(!0),n(o,null,l(C.options,((t,e)=>(i(),n("button",{type:"button",key:e,onClick:e=>C.setAlignment(t),title:"getLabel(option)"},[a("span",I,c(C.getLabel(t)),1),a(u,{direction:s.direction,distribution:s.distribution,"is-selected":C.isSelected(t)},null,8,["direction","distribution","is-selected"])],8,["onClick"])))),128))],2)])};const Z={name:"Icon",props:{size:{type:String,default:"medium"},name:{type:String}},computed:{classNames(){return this.size}},methods:{iconIs(t){return this.name.toLowerCase()===t.toLowerCase()}}},P=s("data-v-8f452246");t("data-v-8f452246");const T={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},$={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},j={key:2,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},_={key:3,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"},N={key:4,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"},O={key:5,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"};e();const R=P(((t,e,s,a,o,l)=>(i(),n("svg",{class:l.classNames,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[l.iconIs("chevron-up")?(i(),n("path",T)):h("",!0),l.iconIs("chevron-right")?(i(),n("path",$)):h("",!0),l.iconIs("chevron-down")?(i(),n("path",j)):h("",!0),l.iconIs("chevron-left")?(i(),n("path",_)):h("",!0),l.iconIs("arrow-right")?(i(),n("path",N)):h("",!0),l.iconIs("arrow-down")?(i(),n("path",O)):h("",!0)],2))));Z.render=R,Z.__scopeId="data-v-8f452246";const U={name:"ChildSize",components:{Icon:Z},props:{values:Array},data:()=>({activeButtons:[],buttons:["chevron-up","chevron-right","chevron-down","chevron-left"],horizontalButtons:["chevron-right","chevron-left"],verticalButtons:["chevron-up","chevron-down"]}),computed:{getBoxClassNames(){const t=[this.values[0],this.values[1]];return this.activeButtons.length>0&&t.push("active"),t},horizontal(){return this.values[0]},vertical(){return this.values[1]}},methods:{handleClick(t){const e=this.getDirection(t);switch(e){case"horizontal":this.emitSizeChange([this.toggleValue(e),this.vertical]);break;case"vertical":this.emitSizeChange([this.horizontal,this.toggleValue(e)])}},toggleValue(t){return this[t]===`${t}-hug-content`?`${t}-fill-container`:`${t}-hug-content`},emitSizeChange(t){this.$emit("sizeChange",t)},isActive(t){return this.activeButtons.includes(t)},setActive(t){this.isHorizontal(t)?(this.activeButtons.push(this.horizontalButtons[0]),this.activeButtons.push(this.horizontalButtons[1])):(this.activeButtons.push(this.verticalButtons[0]),this.activeButtons.push(this.verticalButtons[1]))},getDirection(t){return this.isHorizontal(t)?"horizontal":"vertical"},isHorizontal(t){return this.horizontalButtons.includes(t)},isVertical(t){return this.verticalButtons.includes(t)},setInactive(t){this.activeButtons.length=0},getButtonClassNames(t){const e=[];return this.isActive(t)&&e.push("active"),e}}},E=s("data-v-e12c5b44");t("data-v-e12c5b44");const F={class:"child-size-wrapper"},D={class:"child-size"};e();const G=E(((t,e,s,c,h,d)=>{const C=r("Icon");return i(),n("div",F,[a("div",D,[(i(!0),n(o,null,l(h.buttons,((t,e)=>(i(),n("button",{key:e,type:"button",class:["no-style",d.getButtonClassNames(t)],onClick:e=>d.handleClick(t),onMouseover:e=>d.setActive(t),onMouseout:e=>d.setInactive(t),name:t},[a(C,{size:"small",name:t},null,8,["name"])],42,["onClick","onMouseover","onMouseout","name"])))),128)),a("div",{class:["box-size",d.getBoxClassNames]},null,2)])])}));U.render=G,U.__scopeId="data-v-e12c5b44";const q={name:"Settings",components:{Alignment:B,ChildSize:U,Icon:Z},data:()=>({parent:{direction:"horizontal",distribution:"packed",horizontal:"center",vertical:"middle"},children:[["horizontal-hug-content","vertical-hug-content"],["horizontal-hug-content","vertical-hug-container"],["horizontal-hug-content","vertical-hug-content"]],distributions:["space-between","packed"]}),methods:{isParentSelected(t,e){return this.parent[t]===e},setAlignment(t){this.parent.horizontal=t.horizontal,this.parent.vertical=t.vertical,this.emitParent()},setParentValue(t,e){this.parent[t]=e,this.emitParent()},sizeChange(t,e){this.children[e]=t,this.emitChildren()},emitParent(){const t=["frame",this.parent.direction,this.parent.distribution,this.parent.horizontal,this.parent.vertical];this.$emit("parentChange",t)},emitChildren(){const t=this.children;this.$emit("childrenChange",t)}},mounted(){this.emitParent(),this.emitChildren()}},J={class:"box"},K={class:"settings"},Q={class:"direction frame horizontal"},W={class:"distribution"},X={class:"child-sizes frame horizontal space-between"};q.render=function(t,e,s,h,u,m){const p=r("Icon"),g=r("Alignment"),v=r("ChildSize");return i(),n("div",J,[a("div",K,[a("div",Q,[a("button",{type:"button",class:["only-icon",{selected:m.isParentSelected("direction","vertical")}],title:"Vertical",onClick:e[1]||(e[1]=t=>m.setParentValue("direction","vertical"))},[a(p,{name:"arrow-down"})],2),a("button",{type:"button",class:["only-icon",{selected:m.isParentSelected("direction","horizontal")}],title:"Horizontal",onClick:e[2]||(e[2]=t=>m.setParentValue("direction","horizontal"))},[a(p,{name:"arrow-right"})],2)]),a(g,{class:"alignment",direction:u.parent.direction,distribution:u.parent.distribution,horizontal:u.parent.horizontal,vertical:u.parent.vertical,onChangeAlignment:m.setAlignment},null,8,["direction","distribution","horizontal","vertical","onChangeAlignment"]),a("div",W,[d(a("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>u.parent.distribution=t),onChange:e[4]||(e[4]=(...t)=>m.emitParent&&m.emitParent(...t))},[(i(!0),n(o,null,l(u.distributions,((t,e)=>(i(),n("option",{key:e},c(t),1)))),128))],544),[[C,u.parent.distribution]])]),a("div",X,[(i(!0),n(o,null,l(u.children,((t,e)=>(i(),n(v,{key:e,values:t,onSizeChange:t=>{m.sizeChange(t,e)}},null,8,["values","onSizeChange"])))),128))])])])};const Y={name:"Source",props:{parentClassList:Array,childrenClassLists:Array},data:()=>({parentClassListOld:[],childrenClassListsOld:[]}),computed:{code(){const t=this.addHello([...this.parentClassList],[...this.parentClassListOld]),e=this.addHelloToChildren();let i=`&#x3C;ul class="${t.join(" ")}"&#x3E;\n`;for(let n=0;n<e.length;++n)i+=`    &#x3C;li class="${e[n].join(" ")}"&#x3E;&#x3C;/li&#x3E;\n`;return i+="&#x3C;/ul&#x3E;",this.parentClassListOld=[...this.parentClassList],this.childrenClassListsOld=[...this.childrenClassLists],i}},methods:{addHelloToChildren(){if(this.childrenClassLists.length===this.childrenClassListsOld.length){console.log("addHelloToChildren");const t=[];for(let e=0;e<this.childrenClassLists.length;e++)t.push(this.addHello([...this.childrenClassLists[e]],[...this.childrenClassListsOld[e]]));return t}return[...this.childrenClassLists]},addHello(t,e){if(t.length===e.length)for(let i=0;i<t.length;i++)t[i]!==e[i]&&(t[i]=`<span class="hello">${t[i]}</span>`);return t}}},tt={class:"box"};Y.render=function(t,e,s,o,l,r){return i(),n("div",tt,[a("pre",{innerHTML:r.code},null,8,["innerHTML"])])};const et={name:"ThemeSwitch",data:()=>({theme:"dark"}),methods:{changeTheme(){document.documentElement.dataset.theme=this.theme}},mounted(){this.changeTheme()}},it={class:"theme-switch"},nt=a("label",{for:"input-theme-light",title:"Switch to light theme"},[a("span",{class:"sr-only"},"Light theme"),a("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",class:"icon-light","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.99998 1.60001C8.21215 1.60001 8.41563 1.68429 8.56566 1.83432C8.71569 1.98435 8.79998 2.18783 8.79998 2.40001V3.20001C8.79998 3.41218 8.71569 3.61566 8.56566 3.76569C8.41563 3.91572 8.21215 4.00001 7.99998 4.00001C7.7878 4.00001 7.58432 3.91572 7.43429 3.76569C7.28426 3.61566 7.19998 3.41218 7.19998 3.20001V2.40001C7.19998 2.18783 7.28426 1.98435 7.43429 1.83432C7.58432 1.68429 7.7878 1.60001 7.99998 1.60001ZM11.2 8.00001C11.2 8.8487 10.8628 9.66263 10.2627 10.2627C9.6626 10.8629 8.84867 11.2 7.99998 11.2C7.15128 11.2 6.33735 10.8629 5.73723 10.2627C5.13712 9.66263 4.79998 8.8487 4.79998 8.00001C4.79998 7.15131 5.13712 6.33738 5.73723 5.73726C6.33735 5.13715 7.15128 4.80001 7.99998 4.80001C8.84867 4.80001 9.6626 5.13715 10.2627 5.73726C10.8628 6.33738 11.2 7.15131 11.2 8.00001ZM10.8288 11.96L11.3944 12.5256C11.5453 12.6713 11.7473 12.752 11.9571 12.7501C12.1669 12.7483 12.3675 12.6642 12.5158 12.5159C12.6642 12.3675 12.7483 12.1669 12.7501 11.9571C12.7519 11.7474 12.6713 11.5453 12.5256 11.3944L11.96 10.8288C11.8091 10.6831 11.607 10.6024 11.3973 10.6043C11.1875 10.6061 10.9868 10.6902 10.8385 10.8386C10.6902 10.9869 10.6061 11.1875 10.6042 11.3973C10.6024 11.607 10.683 11.8091 10.8288 11.96ZM12.5248 3.47441C12.6748 3.62443 12.759 3.82787 12.759 4.04001C12.759 4.25214 12.6748 4.45558 12.5248 4.60561L11.96 5.17121C11.8862 5.24761 11.7979 5.30856 11.7003 5.35049C11.6027 5.39241 11.4977 5.41448 11.3915 5.41541C11.2853 5.41633 11.1799 5.39609 11.0816 5.35586C10.9833 5.31564 10.894 5.25624 10.8189 5.18112C10.7437 5.10601 10.6843 5.01669 10.6441 4.91837C10.6039 4.82005 10.5837 4.71471 10.5846 4.60848C10.5855 4.50226 10.6076 4.39729 10.6495 4.29968C10.6914 4.20208 10.7524 4.1138 10.8288 4.04001L11.3944 3.47441C11.5444 3.32443 11.7478 3.24018 11.96 3.24018C12.1721 3.24018 12.3756 3.32443 12.5256 3.47441H12.5248ZM13.6 8.80001C13.8121 8.80001 14.0156 8.71572 14.1657 8.56569C14.3157 8.41566 14.4 8.21218 14.4 8.00001C14.4 7.78783 14.3157 7.58435 14.1657 7.43432C14.0156 7.28429 13.8121 7.20001 13.6 7.20001H12.8C12.5878 7.20001 12.3843 7.28429 12.2343 7.43432C12.0843 7.58435 12 7.78783 12 8.00001C12 8.21218 12.0843 8.41566 12.2343 8.56569C12.3843 8.71572 12.5878 8.80001 12.8 8.80001H13.6ZM7.99998 12C8.21215 12 8.41563 12.0843 8.56566 12.2343C8.71569 12.3843 8.79998 12.5878 8.79998 12.8V13.6C8.79998 13.8122 8.71569 14.0157 8.56566 14.1657C8.41563 14.3157 8.21215 14.4 7.99998 14.4C7.7878 14.4 7.58432 14.3157 7.43429 14.1657C7.28426 14.0157 7.19998 13.8122 7.19998 13.6V12.8C7.19998 12.5878 7.28426 12.3843 7.43429 12.2343C7.58432 12.0843 7.7878 12 7.99998 12ZM4.03998 5.17121C4.11425 5.24553 4.20244 5.3045 4.29951 5.34475C4.39657 5.385 4.50061 5.40573 4.60569 5.40577C4.71077 5.40581 4.81483 5.38514 4.91192 5.34497C5.00902 5.30479 5.09725 5.24588 5.17158 5.17161C5.2459 5.09733 5.30487 5.00914 5.34512 4.91208C5.38537 4.81501 5.4061 4.71097 5.40614 4.60589C5.40617 4.50081 5.38551 4.39675 5.34534 4.29966C5.30516 4.20256 5.24625 4.11433 5.17198 4.04001L4.60558 3.47441C4.45469 3.32868 4.25261 3.24804 4.04285 3.24987C3.8331 3.25169 3.63245 3.33582 3.48412 3.48415C3.33579 3.63248 3.25166 3.83313 3.24984 4.04289C3.24801 4.25264 3.32865 4.45472 3.47438 4.60561L4.03998 5.17121ZM5.17118 11.96L4.60558 12.5256C4.45469 12.6713 4.25261 12.752 4.04285 12.7501C3.8331 12.7483 3.63245 12.6642 3.48412 12.5159C3.33579 12.3675 3.25166 12.1669 3.24984 11.9571C3.24801 11.7474 3.32865 11.5453 3.47438 11.3944L4.03998 10.8288C4.19086 10.6831 4.39294 10.6024 4.6027 10.6043C4.81245 10.6061 5.0131 10.6902 5.16143 10.8386C5.30976 10.9869 5.39389 11.1875 5.39571 11.3973C5.39754 11.607 5.3169 11.8091 5.17118 11.96ZM3.19998 8.80001C3.41215 8.80001 3.61563 8.71572 3.76566 8.56569C3.91569 8.41566 3.99998 8.21218 3.99998 8.00001C3.99998 7.78783 3.91569 7.58435 3.76566 7.43432C3.61563 7.28429 3.41215 7.20001 3.19998 7.20001H2.39998C2.1878 7.20001 1.98432 7.28429 1.83429 7.43432C1.68426 7.58435 1.59998 7.78783 1.59998 8.00001C1.59998 8.21218 1.68426 8.41566 1.83429 8.56569C1.98432 8.71572 2.1878 8.80001 2.39998 8.80001H3.19998Z"})])],-1),st=a("label",{for:"input-theme-dark",title:"Switch to dark theme"},[a("span",{class:"sr-only"},"Dark theme"),a("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",class:"icon-dark","aria-hidden":"true"},[a("path",{d:"M13.8345 10.6344C12.6493 11.1705 11.3289 11.3327 10.0492 11.0994C8.76945 10.8661 7.5912 10.2484 6.6714 9.32864C5.7516 8.40884 5.13392 7.2306 4.90064 5.9509C4.66737 4.67119 4.82958 3.35078 5.36566 2.16559C4.42211 2.592 3.59609 3.24094 2.95846 4.05676C2.32084 4.87257 1.89064 5.83089 1.70479 6.8495C1.51893 7.86811 1.58296 8.91661 1.89139 9.90503C2.19981 10.8935 2.74342 11.7923 3.47558 12.5245C4.20774 13.2566 5.10659 13.8002 6.09502 14.1087C7.08344 14.4171 8.13194 14.4811 9.15055 14.2953C10.1692 14.1094 11.1275 13.6792 11.9433 13.0416C12.7591 12.404 13.408 11.5779 13.8345 10.6344Z"})])],-1);et.render=function(t,e,s,o,l,r){return i(),n("form",it,[d(a("input",{type:"radio",id:"input-theme-light",name:"input-theme",value:"light","onUpdate:modelValue":e[1]||(e[1]=t=>l.theme=t),onChange:e[2]||(e[2]=(...t)=>r.changeTheme&&r.changeTheme(...t))},null,544),[[u,l.theme]]),d(a("input",{type:"radio",id:"input-theme-dark",name:"input-theme",value:"dark","onUpdate:modelValue":e[3]||(e[3]=t=>l.theme=t),onChange:e[4]||(e[4]=(...t)=>r.changeTheme&&r.changeTheme(...t))},null,544),[[u,l.theme]]),nt,st])};const at={components:{GitHubBanner:g,Result:f,Settings:q,Source:Y,ThemeSwitch:et},data:()=>({parentClassList:[],childrenClassLists:[]}),methods:{parentChange(t){this.parentClassList=t},childrenChange(t){this.childrenClassLists=t}}},ot=s("data-v-fb0cc726");t("data-v-fb0cc726");const lt={class:"container"},rt=a("h1",null,[a("svg",{viewBox:"0 0 168 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M0.0823866 44H9.92614V27.6335H26.1136V19.6193H9.92614V11.267H27.8835V3.27273H0.0823866V44ZM31.7202 44H41.4446V13.4545H31.7202V44ZM36.5924 9.89489C39.3566 9.89489 41.5838 7.80682 41.5838 5.24148C41.5838 2.67613 39.3566 0.607952 36.5924 0.607952C33.848 0.607952 31.6009 2.67613 31.6009 5.24148C31.6009 7.80682 33.848 9.89489 36.5924 9.89489ZM60.7529 55.8324C69.9603 55.8324 76.2444 51.6364 76.2444 44.1193V13.4545H66.5597V18.6847H66.2813C65.108 15.8807 62.4432 13.0568 57.6307 13.0568C51.2472 13.0568 45.4603 17.9688 45.4603 28.6875C45.4603 39.0682 50.9688 43.5824 57.6705 43.5824C62.1648 43.5824 65.1677 41.4943 66.3211 38.6705H66.6591V44.0398C66.6591 47.6989 64.2728 49.0909 61.0114 49.0909C57.8893 49.0909 56.0199 47.8977 55.5029 46.267L46.2955 46.7841C47.0114 51.875 52.0427 55.8324 60.7529 55.8324ZM61.0512 36.5028C57.4518 36.5028 55.4432 33.5795 55.4432 28.6875C55.4432 23.8153 57.4319 20.6534 61.0512 20.6534C64.6109 20.6534 66.679 23.7358 66.679 28.6875C66.679 33.5994 64.591 36.5028 61.0512 36.5028ZM95.5825 44.5767C105.188 44.5767 111.014 38.233 111.014 28.8267C111.014 19.4006 105.188 13.0568 95.5825 13.0568C85.9774 13.0568 80.1507 19.4006 80.1507 28.8267C80.1507 38.233 85.9774 44.5767 95.5825 44.5767ZM95.6421 37.2386C92.0427 37.2386 90.0541 33.8182 90.0541 28.767C90.0541 23.696 92.0427 20.2557 95.6421 20.2557C99.1222 20.2557 101.111 23.696 101.111 28.767C101.111 33.8182 99.1222 37.2386 95.6421 37.2386ZM134.583 30.8153C134.583 34.375 132.316 36.3636 129.433 36.3636C126.45 36.3636 124.62 34.3352 124.6 31.0142V13.4545H114.876V32.9233C114.896 39.8239 119.092 44.3977 125.376 44.3977C129.95 44.3977 133.35 42.0511 134.703 38.3125H135.021V44H144.288V13.4545H134.583V30.8153ZM166.599 13.4545H161.09V6.13636H151.366V13.4545H147.329V20.6136H151.366V35.4688C151.306 41.6534 155.323 44.7557 162.184 44.4375C164.531 44.3182 166.221 43.8409 167.156 43.5625L165.684 36.5426C165.266 36.642 164.292 36.8409 163.556 36.8409C161.985 36.8409 161.09 36.2045 161.09 34.3949V20.6136H166.599V13.4545Z"})])],-1),ct=a("p",null,[m(" Human friendly layout helper. Inspired by "),a("a",{href:"https://figma.com",target:"figma"},"Figmas"),m(" auto-layout. "),a("a",{href:"./figout.css",download:""},"Download CSS")],-1),ht={class:"sandbox"},dt={class:"byline frame horizontal space-between"},Ct=a("p",null,[a("a",{href:"https://twitter.com/trevald",target:"twitter",title:"Follow on Twitter"},"@trevald")],-1);e();const ut=ot(((t,e,s,l,c,h)=>{const d=r("Result"),C=r("Settings"),u=r("Source"),m=r("ThemeSwitch"),p=r("GitHubBanner");return i(),n(o,null,[a("div",lt,[rt,ct,a("div",ht,[a(d,{parentClassList:c.parentClassList,childrenClassLists:c.childrenClassLists},null,8,["parentClassList","childrenClassLists"]),a(C,{onParentChange:h.parentChange,onChildrenChange:h.childrenChange},null,8,["onParentChange","onChildrenChange"]),a(u,{parentClassList:c.parentClassList,childrenClassLists:c.childrenClassLists},null,8,["parentClassList","childrenClassLists"])]),a("div",dt,[Ct,a(m)])]),a(p)],64)}));at.render=ut,at.__scopeId="data-v-fb0cc726";p(at).mount("#app");