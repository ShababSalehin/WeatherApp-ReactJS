(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{2:function(e,t){e.exports={key:"c7f91f639eb28db7c2fff5108f7857e6",base:"https://api.openweathermap.org/data/2.5/"}},23:function(e,t,a){e.exports=a.p+"static/media/WeatherIcons.0a218296.gif"},26:function(e,t,a){e.exports=a(61)},31:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=(a(31),a(5)),l=a.n(o),s=a(18),m=a(19),u=a(20),h=a(25),d=a(24),p=a(2),v=a.n(p),E=a(21),y=a.n(E),b=a(4),f=a(22),g=a.n(f),w=a(3),k=a.n(w);var N=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),s=l[0],m=l[1],u=Object(n.useState)({}),h=Object(b.a)(u,2),d=h[0],p=h[1],E=function(e){g.a.get("".concat(v.a.base,"weather?q=").concat("[object Object]"!=e?e:c,"&units=metric&APPID=").concat(v.a.key)).then((function(e){p(e.data),i("")})).catch((function(e){console.log(e),p(""),i(""),m({message:"Not Found",query:c})}))},y="white",f=112,w=!0;return Object(n.useEffect)((function(){E("Mymensingh")}),[]),r.a.createElement("div",{className:"forecast"},r.a.createElement("div",{className:"forecast-icon"},r.a.createElement(k.a,{icon:e.icon,color:y,size:f,animate:w})),r.a.createElement("div",{className:"today-weather"},r.a.createElement("h3",null,e.weather),r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search any city",onChange:function(e){return i(e.target.value)},value:c}),r.a.createElement("div",{className:"img-box"}," ",r.a.createElement("img",{src:"https://images.avishkaar.cc/workflow/newhp/search-white.png",onClick:E}))),r.a.createElement("ul",null,"undefined"!=typeof d.main?r.a.createElement("div",null," ",r.a.createElement("li",{className:"cityHead"},r.a.createElement("p",null,d.name,", ",d.sys.country),r.a.createElement("img",{className:"temp",src:"https://openweathermap.org/img/wn/".concat(d.weather[0].icon,".png")})),r.a.createElement("li",null,"Temperature"," ",r.a.createElement("span",{className:"temp"},Math.round(d.main.temp),"\xb0c (",d.weather[0].main,")")),r.a.createElement("li",null,"Humidity"," ",r.a.createElement("span",{className:"temp"},Math.round(d.main.humidity),"%")),r.a.createElement("li",null,"Visibility"," ",r.a.createElement("span",{className:"temp"},Math.round(d.visibility)," mi")),r.a.createElement("li",null,"Wind Speed"," ",r.a.createElement("span",{className:"temp"},Math.round(d.wind.speed)," Km/h"))):r.a.createElement("li",null,s.query," ",s.message))))},S=a(23),D=a.n(S),O="white",j=112,A=!0,M=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:void 0,lon:void 0,errorMessage:void 0,temperatureC:void 0,temperatureF:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:"CLEAR_DAY",sunrise:void 0,sunset:void 0,errorMsg:void 0},e.getPosition=function(e){return new Promise((function(t,a){navigator.geolocation.getCurrentPosition(t,a,e)}))},e.getWeather=function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v.a.base,"weather?lat=").concat(a,"&lon=").concat(n,"&units=metric&APPID=").concat(v.a.key));case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,e.setState({lat:a,lon:n,city:c.name,temperatureC:Math.round(c.main.temp),temperatureF:Math.round(1.8*c.main.temp+32),humidity:c.main.humidity,main:c.weather[0].main,country:c.sys.country}),t.t0=e.state.main,t.next="Haze"===t.t0?10:"Clouds"===t.t0?12:"Rain"===t.t0?14:"Snow"===t.t0?16:"Dust"===t.t0?18:"Drizzle"===t.t0?20:"Fog"===t.t0?22:"Smoke"===t.t0?24:"Tornado"===t.t0?26:28;break;case 10:return e.setState({icon:"CLEAR_DAY"}),t.abrupt("break",29);case 12:return e.setState({icon:"CLOUDY"}),t.abrupt("break",29);case 14:return e.setState({icon:"RAIN"}),t.abrupt("break",29);case 16:return e.setState({icon:"SNOW"}),t.abrupt("break",29);case 18:return e.setState({icon:"WIND"}),t.abrupt("break",29);case 20:return e.setState({icon:"SLEET"}),t.abrupt("break",29);case 22:case 24:return e.setState({icon:"FOG"}),t.abrupt("break",29);case 26:return e.setState({icon:"WIND"}),t.abrupt("break",29);case 28:e.setState({icon:"CLEAR_DAY"});case 29:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?this.getPosition().then((function(t){e.getWeather(t.coords.latitude,t.coords.longitude)})).catch((function(t){e.getWeather(28.67,77.22),alert("You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather.")})):alert("Geolocation not available"),this.timerID=setInterval((function(){return e.getWeather(e.state.lat,e.state.lon)}),6e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return this.state.temperatureC?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"city"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,this.state.city),r.a.createElement("h3",null,this.state.country)),r.a.createElement("div",{className:"mb-icon"}," ",r.a.createElement(k.a,{icon:this.state.icon,color:O,size:j,animate:A}),r.a.createElement("p",null,this.state.main)),r.a.createElement("div",{className:"date-time"},r.a.createElement("div",{className:"dmy"},r.a.createElement("div",{id:"txt"}),r.a.createElement("div",{className:"current-time"},r.a.createElement(y.a,{format:"HH:mm:ss",interval:1e3,ticking:!0})),r.a.createElement("div",{className:"current-date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"temperature"},r.a.createElement("p",null,this.state.temperatureC,"\xb0",r.a.createElement("span",null,"C"))))),r.a.createElement(N,{icon:this.state.icon,weather:this.state.main})):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:D.a,style:{width:"50%",WebkitUserDrag:"none"}}),r.a.createElement("h3",{style:{color:"white",fontSize:"22px",fontWeight:"600"}},"Detecting your location"),r.a.createElement("h3",{style:{color:"white",marginTop:"10px"}},"Your current location wil be displayed on the App ",r.a.createElement("br",null)," & used for calculating Real time weather."))}}]),a}(r.a.Component);a(60);var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(M,null)),r.a.createElement("div",{className:"footer-info"},r.a.createElement("a",{target:"_blank",href:"#"},"Live Link")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.9030bb9f.chunk.js.map