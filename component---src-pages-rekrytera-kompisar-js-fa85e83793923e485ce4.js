"use strict";(self.webpackChunkall_the_way_website=self.webpackChunkall_the_way_website||[]).push([[343],{1194:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(7294),r=t(2756),l=t(9357),i=(t(5190),t(5861)),c=t(7757),o=t.n(c),s=t(2816),m=t(6940),u=t(8181),d=t(3341),f=t(957),p=function(){var e=(0,a.useState)(""),n=e[0],t=e[1],r=(0,a.useState)(""),l=r[0],c=r[1],p=(0,a.useState)(""),h=p[0],v=p[1],E=(0,a.useState)(""),g=E[0],b=E[1],k=(0,a.useState)(""),w=k[0],y=k[1],C=(0,a.useState)(!1),S=C[0],Z=C[1],N=(0,a.useState)(!1),x=N[0],R=N[1],V={memberName:t,friendName:c,friendPhone:v,trainingReason:b},_=function(e){V[e.target.name](e.target.value)},P=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&h&&n&&g){e.next=3;break}return y("Vänligen fyll i alla fält"),e.abrupt("return");case 3:if(S){e.next=6;break}return y("Vänligen acceptera våra villkor"),e.abrupt("return");case 6:return R(!0),e.prev=7,e.next=10,fetch("https://all-the-way-backend.azurewebsites.net/api/emails/recruit",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({memberName:n,friendName:l,friendPhone:h,trainingReason:g})});case 10:if(e.sent.ok){e.next=13;break}throw new Error;case 13:"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"form_submission",formType:"friends"})),t(""),c(""),v(""),b(""),y(""),R(!1),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(7),console.log(e.t0),R(!1);case 26:case"end":return e.stop()}}),e,null,[[7,22]])})));return function(){return e.apply(this,arguments)}}();return a.createElement("div",{className:"recommendations-module--container--B0ER8"},a.createElement(f.Z,{className:"recommendations-module--content--lCsSb"},a.createElement("h1",null,"Rekommendera oss till en vän"),a.createElement(d.Z,{firstContent:a.createElement("div",null,a.createElement("h2",null,"Värdecheck ",a.createElement("span",null,"online")),a.createElement("p",null,"Vi är oerhört glada att du vill rekommendera oss till din vän."),a.createElement("p",{style:{fontSize:20}},"Berätta för din vän att vi ringer upp inom 48 timmar.")),secondContent:a.createElement("div",null,a.createElement("div",null,a.createElement(u.Z,{label:"Ditt för- och efternamn",type:"text",name:"memberName",value:n,onChange:_})),a.createElement("div",null,a.createElement(u.Z,{label:"Vännens för- och efternamn",type:"text",name:"friendName",value:l,onChange:_})),a.createElement("div",null,a.createElement(u.Z,{label:"Vännens telefonnummer",type:"phone",name:"friendPhone",value:h,onChange:_})),a.createElement("div",null,a.createElement(u.Z,{label:"Varför ska din vän träna hos oss?",name:"trainingReason",value:g,required:!0,type:"textarea",onChange:_})),a.createElement("div",{style:{marginTop:30}},a.createElement(m.Z,{name:"acceptTerms",onChange:function(e){Z(e.target.checked)},value:S,checked:S},"Jag godkänner att mina personuppgifter hanteras enligt GDPR.")),a.createElement(s.Z,{name:"send",onClick:P,disabled:x,light:!0},x?a.createElement("i",{className:"fas fa-spinner spinning"}):"Skicka"),w&&a.createElement("div",null,w))})))},h=function(e){var n=e.data,t=e.location,i=n.site.siteMetadata.title;return a.createElement(r.Z,{location:t,title:i},a.createElement(l.Z,{title:"Rekommendera oss"}),a.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-rekrytera-kompisar-js-fa85e83793923e485ce4.js.map