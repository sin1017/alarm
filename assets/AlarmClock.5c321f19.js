import{d as D,u as f,r as m,e as g,f as L,o,c as i,g as A,w as u,v as X,h as C,F as d,i as h,a as n,t as v,j as P,b as w}from"./index.7cdeb596.js";const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEsElEQVR42u3bP07jTBjA4bFjBwlFCCE6RI9SQJM6HCMFTbgEh+AS0FDkGEudJhRRepRuFUWrCIn8sb9iq22+asYba5/nAK/lV/rJLmZCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+pizl8OHspTvfLsff1e6hCvVgXx9O67r+2+8MyWRZFoqs85WHbHqSl2/97tXr+93jNtnzUg2+nj7frvabya7e36R6Bhy7MisWF0Vv9Dl4+kgxP0nA19Pn25+7Xz8OoTpPux44fp2Qry/Ls/sUEeexBw5nL93VfjMRL/x2CNX5ar+ZDGcv3dizowc83y7HfpvhT7t6fzPfLsex50YP+LvaPTSyEWiZFG1ED7gK9aCZdUC7pGgjesCHUJ02sw5olxRtRA+4E/KvZtYB7ZKijegB5yGbNrMOaJcUbUQP+CQv35pZB7RLijaiB9zvXr2WWbFoZiXQDmVWLPrdq9fYc6MH/H73uL0oeqNOyNeNbAaOXCfk64uiN0pxJjp6wCGE8Dl4+rgsz+59ifnXlVmxSHWMMgS3kSCqpm8jAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAYlnK4cPZS3e+XY6/q91DFerBvj6c1nX9t98ZksmyLBRZ5ysP2fQkL9/63avX97vHbbLnpRp8PX2+Xe03k129v0n1DDh2ZVYsLore6HPw9JFifpKAr6fPtz93v34cQnWedj1w/DohX1+WZ/cpIs5jDxzOXrqr/WYiXvjtEKrz1X4zGc5eurFnRw94vl2O/TbDn3b1/ma+XY5jz40e8He1e2hkI9AyKdqIHnAV6kEz64B2SdFG9IAPoTptZh3QLinaiB5wJ+RfzawD2iVFG9EDzkM2bWYd0C4p2oge8ElevjWzDmiXFG1ED7jfvXots2LRzEqgHcqsWPS7V6+x50YP+P3ucXtR9EadkK8b2QwcuU7I1xdFb5TiTHT0gEMI4XPw9HFZnt37EvOvK7NikeoYZQhuI0FUTd9GAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAxLKUw4ezl+58uxx/V7uHKtSDfX04rev6b78zJJNlWSiyzlcesulJXr71u1ev73eP22TPSzX4evp8u9pvJrt6f5PqGXDsyqxYXBS90efg6SPF/CQBX0+fb3/ufv04hOo87Xrg+HVCvr4sz+5TRJzHHjicvXRX+81EvPDbIVTnq/1mMpy9dGPPjh7wfLsc+22GP+3q/c18uxzHnhs94O9q99DIRqBlUrQRPeAq1INm1gHtkqKN6AEfQnXazDqgXVK0ET3gTsi/mlkHtEuKNqIHnIds2sw6oF1StBE94JO8fGtmHdAuKdqIHnC/e/VaZsWimZVAO5RZseh3r15jz40e8Pvd4/ai6I06IV83shk4cp2Qry+K3ijFmejoAYcQwufg6eOyPLv3JeZfV2bFItUxyhDcRoKomr6NBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/rP0CCjUhEyGjVAAAAAElFTkSuQmCC",b=""+new URL("menu-ico2.07a8f9d1.png",import.meta.url).href,E=D({id:"alarmData",state:()=>({alarmDataList:[],songName:["\u3010\u30AA\u30EA\u30B7\u3099\u30CA\u30EBMV\u3011\u90AA\u9B54 \u6B4C\u3044\u307E\u3057\u305F\u3010Ado\u3011.mp3"," Monster.mp3","\u3010Ado\u3011\u3046\u3063\u305B\u3047\u308F.mp3"]}),getters:{},actions:{upDateAlarmData(e,s){this.alarmDataList.push({data:e,alarmSwitch:!0,play:!1,song:s})},timeCompare(e){this.alarmDataList.forEach((s,a)=>{this.alarmDataList[a].data!==!1&&e===this.alarmDataList[a].data&&this.alarmDataList[a].play!==!0&&this.alarmDataList[a].alarmSwitch!==!1&&(console.log("song",this.alarmDataList[a].song),this.playMusic(this.alarmDataList[a].song),this.alarmDataList[a].play=!0)})},playMusic(e){let s=new Audio(e);s.play(),setTimeout(()=>{s.pause()},5e4)},delAlarmList(e){console.log(e),console.log("list",this.alarmDataList);const s=this.alarmDataList.indexOf(e);s>-1&&this.alarmDataList.splice(s,1)}}});const S={class:"alarmInput"},V={class:"alarmInput_mediaBox"},y=A("label",{for:"alarmInput_switch"},[A("img",{src:x,alt:""})],-1),j=A("input",{type:"checkbox",id:"alarmInput_switch",class:"alarm_options"},null,-1),z={class:"alarm_menu"},B=["value"],H={class:"alarmList"},I={class:"alarmList_content"},F={class:"alarmList_mediaBox"},R=["for"],T=A("img",{src:b,alt:""},null,-1),k=[T],q=["id"],M={class:"alarm_list_menu"},U=["onUpdate:modelValue"],N=["onClick"],Z={__name:"Alarm",setup(e){const s=f(),a=E(),r=m("");a.alarmDataList.alarmSwitch=m("false");const c=m("\u3010\u30AA\u30EA\u30B7\u3099\u30CA\u30EBMV\u3011\u90AA\u9B54 \u6B4C\u3044\u307E\u3057\u305F\u3010Ado\u3011.mp3");return g(()=>{a.alarmDataList=JSON.parse(localStorage.getItem("alarmList"))||[]}),L(()=>{localStorage.setItem("alarmList",JSON.stringify(a.alarmDataList))}),setInterval(()=>{a.timeCompare(s.dataTime)},1e3),(O,l)=>(o(),i(d,null,[A("div",S,[u(A("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>r.value=t),type:"time",class:"clock_option"},null,512),[[X,r.value]]),A("div",V,[y,j,A("ul",z,[A("li",null,[u(A("select",{name:"song","onUpdate:modelValue":l[1]||(l[1]=t=>c.value=t),class:"songList"},[(o(!0),i(d,null,h(n(a).songName,t=>(o(),i("option",{value:t},v(t),9,B))),256))],512),[[C,c.value]])]),A("li",null,[A("span",{class:"add",onClick:l[2]||(l[2]=t=>n(a).upDateAlarmData(r.value,c.value))},"\uFF0B")])])])]),A("div",null,[A("ul",H,[(o(!0),i(d,null,h(n(a).alarmDataList,(t,p)=>(o(),i("li",I,[A("p",null,v(t.data),1),A("div",F,[A("label",{for:p,class:"list_switch"},k,8,R),A("input",{type:"checkbox",id:p,class:"alarm_options"},null,8,q),A("ul",M,[A("li",null,[u(A("input",{type:"checkbox",class:"ckBox","onUpdate:modelValue":_=>t.alarmSwitch=_},null,8,U),[[P,t.alarmSwitch]])]),A("li",null,[A("span",{onClick:_=>n(a).delAlarmList(t),class:"del"},"\u274C",8,N)])])])]))),256))])])],64))}};const K={class:"alarm"},Q={__name:"AlarmClock",setup(e){return(s,a)=>(o(),i("div",K,[w(Z)]))}};export{Q as default};
