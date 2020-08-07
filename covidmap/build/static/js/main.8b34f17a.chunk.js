(this.webpackJsonpcovidmap=this.webpackJsonpcovidmap||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),s=(a(99),a(25)),l=a.n(s),i=a(37),u=a(14),m=(a(101),a(237)),d=a(238),f=a(239),v=a(231),p=a(235),h=a(2),E=a(236);a(102);var b=function(e){var t=e.title,a=e.cases,n=e.isRed,r=e.active,o=e.total,s=Object(h.a)(e,["title","cases","isRed","active","total"]);return c.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(r&&"infobox--selected"," ").concat(n&&"infobox--red"," ")},c.a.createElement(p.a,null,c.a.createElement(E.a,{className:"infoBox__title",color:"textSecondary"},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!n&&"infoBox__cases--green"," ")},a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},o," Total")))},y=a(242),g=a(243),j=(a(106),a(17)),O=a(18),x=a.n(O),w=a(240),C=a(241),N={cases:{hex:"#cc1034",multiplier:500},recovered:{hex:"#7dd71d",multiplier:1e3},deaths:{hex:"#fb4443",multiplier:1500}},_=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},k=function(e){return e?"+".concat(x()(e).format("0.0a")):"No Cases"};var S=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(y.a,{center:n,zoom:r},c.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:N[t].hex,fillColor:N[t].hex,radius:Math.sqrt(e[t])*N[t].multiplier},c.a.createElement(C.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name",style:{fontWeight:"1000"}},e.country),c.a.createElement("div",{className:"info-confirmed",style:{color:"blue",fontWeight:"600"}},"Cases: ",x()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered",style:{color:"green",fontWeight:"600"}},"Recovered: ",x()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths",style:{color:"red",fontWeight:"600"}},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(107);var R=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,c.a.createElement("strong",null,x()(a).format("0.0a"))))})))},I=a(87),W={legend:{display:!1},elements:{points:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0.0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridlines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}};var B=function(e){var t=e.casesType,a=void 0===t?"cases":t,r=Object(h.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],d=s[1],f=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=f(e,a);d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),c.a.createElement("div",{className:r.className},(null===m||void 0===m?void 0:m.length)>0&&c.a.createElement(I.Line,{options:W,data:{datasets:["recovered"===a?{backgroundColor:"rgba(16,204,52,0.5)",borderColor:"#008000",data:m}:{backgroundColor:"rgba(204,16,52,0.5)",borderColor:"#cc1034",data:m}]}}))};a(204);var T=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],y=Object(n.useState)({}),g=Object(u.a)(y,2),j=g[0],O=g[1],x=Object(n.useState)([]),w=Object(u.a)(x,2),C=w[0],N=w[1],I=Object(n.useState)({lat:34.80746,lng:-40.4796}),W=Object(u.a)(I,2),T=W[0],D=W[1],M=Object(n.useState)(3),z=Object(u.a)(M,2),A=z[0],J=z[1],L=Object(n.useState)([]),Y=Object(u.a)(L,2),q=Y[0],F=Y[1],K=Object(n.useState)("cases"),V=Object(u.a)(K,2),$=V[0],G=V[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=_(e);N(a),r(t),F(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){E(a),O(e),D([e.countryInfo.lat,e.countryInfo.long]),J(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("Country info ----",j),c.a.createElement("div",{className:"app"},"   ",c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID 19 TRACKER"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(d.a,{variant:"outlined",value:h,onChange:H},c.a.createElement(f.a,{value:"worldwide"},"WorldWide"),a.map((function(e,t){return c.a.createElement(f.a,{key:t,value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(b,{isRed:!0,active:"cases"===$,onClick:function(e){return G("cases")},title:"Coronavirus Cases",total:k(j.cases),cases:k(j.todayCases)}),c.a.createElement(b,{active:"recovered"===$,onClick:function(e){return G("recovered")},title:"Recovered Cases",total:k(j.recovered),cases:k(j.todayRecovered)}),c.a.createElement(b,{isRed:!0,active:"deaths"===$,onClick:function(e){return G("deaths")},title:"Deaths Cases",total:k(j.deaths),cases:k(j.todayDeaths)})),c.a.createElement(S,{casesType:$,countries:q,center:T,zoom:A})),c.a.createElement(v.a,{className:"app__right"},c.a.createElement(p.a,null,c.a.createElement("h3",null,"Live Cases By Countries"),c.a.createElement(R,{countries:C}),c.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",$),c.a.createElement(B,{casesType:$,className:"app__graph"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.8b34f17a.chunk.js.map