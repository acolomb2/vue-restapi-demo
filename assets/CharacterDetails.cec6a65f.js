import{u as l,o as i,a as d,b as r,c as s,d as t,e as a,t as c,f as u,g as h}from"./index.23d60eed.js";const m={class:"min-h-screen bg-gradient-to-b from-white to-gray-500 from-green-900 to-blue-700 py-8 text-white"},_=a("button",{class:"text-white cursor-pointer bg-black text-white ml-5 rounded-md hover:bg-gray-300 hover:text-black transition-all active:text-yellow-500",onclick:"history.back()"},"\u200E < Go Back \u200E ",-1),g={key:0,class:"flex flex-col items-center justify-center gap-6"},p=["src","alt"],x={class:"text-white-800 text-6xl font-bold"},w={__name:"CharacterDetails",setup(f){const o=l(),{fetchCharacter:n,currentCharacter:e}=h();return i(async()=>{await n(o.params.id),console.log(o.params.id)}),d(()=>{e.value=null}),(b,y)=>(r(),s("main",m,[_,t(e)?(r(),s("div",g,[a("img",{src:t(e).card.imageUrl,alt:t(e).card.name},null,8,p),a("h1",x,c(t(e).card.name),1),a("pre",null,c(t(e).card.originalText),1)])):u("",!0)]))}};export{w as default};