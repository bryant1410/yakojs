!function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i=r(1),n=i.addons.Label,a=i.spark,o=(i.pie,i.donut,i.bubble,i.bar,function(t,e){document.getElementsByClassName(t)[0].innerHTML=e}),a=i.spark,s=a({mixin:n}),d=[{data:[494,306,350,389,367,295,281,404,256,378,389,127,214,103,425,99,413,320,204,276,307,107,436,485,227,42,439,167,55,33],strokeColor:"#f2ee2",fill:"#424c2d",scattered:{strokeColor:"#38c98f",fill:"white",strokeWidth:2,radius:3}},{data:[282,336,181,329,209,338,16,215,251,270,49,389,216,218,11,485,145,60,33,299,333,126,464,69,329,257,328,282,247,397],strokeColor:"#ab2ab1",fill:"#be514",scattered:{strokeColor:"#ab2ab1",fill:"white",strokeWidth:2,radius:3}}],u=[{label:"Auto Generated 3",data:[187,292,117,391,250,325,358,236,497,125,132,446,267,86,431,186,13,328,258,88,359,293,127,229,137,422,144,95,397,485],strokeColor:"#ac6583"}],l=s.attr({chart:{width:800,height:100},title:"just a test",data:d}),c=[{data:[36,409,109,245,355,410,257,316,179,19],strokeColor:"red",strokeWidth:2,scattered:{strokeColor:"red",fill:"white",strokeWidth:2,radius:2}},{data:[273,354,307,68,483,70,253,507,325,474],strokeColor:"blue",strokeWidth:2,scattered:{strokeColor:"blue",fill:"white",strokeWidth:2,radius:2}}];o("spark-spark",l);var l=s.attr({chart:{width:800,height:100},title:"just a test",data:u});o("spark-line",l);var l=s.attr({chart:{width:800,height:100,line:!1},title:"just a test",data:d});o("spark-area",l);var l=s.attr({chart:{width:800,height:100},title:"just a test",data:c,yAxis:{multi:!0},xAxis:{format:"dateTime",interval:"4h",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}});o("spark-multi",l);var l=s.attr({chart:{width:800,height:100,line:!1,fill:!1,scattered:!0},title:"just a test",data:d});o("spark-scattered",l);var l=s.attr({chart:{width:800,height:100,scattered:!0},title:"just a test",data:c,yAxis:!0,xAxis:{format:"dateTime",interval:"1D",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}});o("spark-label-scattered",l)},function(t,e,r){var i=r(2);i.addons={Label:r(3),ReturnAsObject:r(4)},t.exports=i},function(t,e,r){t.exports=r(5)},function(t){t.exports={preRender:function(t){var e=this,r=e.attributes.opts,i=r.chart,n=i.xAxis||r.xAxis,a=i.yAxis||r.yAxis,o=[];return a&&o.push(e.describeYAxis(t,a)),n&&o.push(e.describeXAxis(t,n)),{prepend:o}},_getExternalProps:function(t,e,r){if(e&&(t.paddingLeft=t.paddingRight=30),r&&(t.paddingTop=t.paddingBottom=20),!t.pHeight&&e&&(t.pHeight=t.height-t.paddingTop-t.paddingBottom),!t.pWidth&&r&&(t.pWidth=t.width-t.paddingLeft-t.paddingRight),"bar"==t.type&&(t.tickSize=t.pWidth/t.len),"bubble-scattered"==t.type){var i=r.labels?r.labels.length:2;t.tickSize=t.pWidth/i,t.prefLen=i,r.labels||console.warn("Attempting to use labels with `bubble graph` type:scattered, without defining custom labels")}},describeYAxis:function(t,e){var r=this,i=[],n=[],a=rows=t.rows,o=t.max,s=t.ySecs;e=e||{},"bubble-scattered"==t.type&&(o=[o[1]]),e.hasOwnProperty("multi")&&e.multi||(a=rows=1,o instanceof Array||o instanceof Object||(o=[o]),s=[s]);for(var d=t.pHeight,u=t.paddingY||t.paddingTop,l=t.paddingX||t.paddingLeft-5;a--;){var c=r.make("g"),p=fSplits=s[a],h=d/p,f=(a+1)%2===0?t.width-a*l:(a+1)*l;for(n=[],p+=1;p--;)n.push(r.make("text",{y:u+h*p,x:f,"font-size":e.fontSize||12,"text-anchor":(a+1)%2===0?"start":"end",fill:e.color||"#333"},null,o[a]/fSplits*(fSplits-p)));f=(a+1)%2===0?f-5:f+5,n.push(r.make("path",{d:"M"+f+" 0L"+f+" "+(d+u),"stroke-width":"1",stroke:e.multi?t.color[a]:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),i.push(r._append(c,n))}return i},describeXAxis:function(t,e){var r=this,i=r.make("g"),n=[],a=t.pHeight,o=t.tickSize,s=t.paddingX||t.paddingLeft,d=t.paddingY?2*t.paddingY-8:t.paddingTop+t.paddingBottom-8,u=a+d,l="dateTime"==e.format?!0:!1;if(l)var c=e.interval,p=r._utcMultiplier(e.interval),h=(/\d+/.test(c)?c.match(/\d+/)[0]:1,e.dateTimeLabelFormat),f=e.minUTC||t.xAxis.minUTC;var g=1;if("bar"!=t.type&&l||(g=0),"timeSeries"==t.type&&l)for(var o=t.tickSize,m=t.xAxis.maxUTC,b=(m-f)/p,x=0;b>x;x++){var v=p*x*o+s;n.push(r.make("text",{y:u,x:v,"font-size":e.fontSize||12,"text-anchor":e.textAnchor||"middle",fill:e.color||"#333"},null,l?r._formatTimeStamp(h,f+p*x):e.labels[x]||0))}else for(var x=g;x<(t.prefLen||t.len)-g;x++)n.push(r.make("text",{y:u,x:o*x+s+("bar"==t.type?o/4:0),"font-size":e.fontSize||12,"text-anchor":e.textAnchor||("bar"==t.type?"start":"middle"),fill:e.color||"#333"},null,l?r._formatTimeStamp(h,f+p*x):e.labels[x]||0));return n.push(r.make("path",{d:"M"+t.paddingLeft+" "+(u-12)+" L"+(t.width-t.paddingRight)+" "+(u-12),"stroke-width":"1",stroke:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),[r._append(i,n)]},_utcMultiplier:function(t){var e=1e3,r=60,i=60,n=24,a=30,o=12,s=0;return/s$/.test(t)?s=e:/m$/.test(t)?s=r*e:/h$/.test(t)?s=r*i*e:/D$/.test(t)?s=r*i*n*e:/M$/.test(t)?s=r*i*n*a*e:/Y$/.test(t)&&(s=r*i*n*a*o*e),s},_formatTimeStamp:function(t,e){var r=new Date(e);return/YYYY/.test(t)?t=t.replace("YYYY",r.getFullYear()):/YY/.test(t)&&(t=t.replace("YY",r.getFullYear().toString().replace(/^\d{1,2}/,""))),t=/hh/.test(t)&&/ap/.test(t)?r.getHours()>11?t.replace(/hh/,r.getHours()-12===0?12:r.getHours()-12).replace(/ap/,"pm"):t.replace(/hh/,0===r.getHours()?12:r.getHours()).replace(/ap/,"am"):t.replace(/hh/,0===r.getHours()?12:r.getHours()),t=t.replace(/MM/,r.getMonth()+1).replace(/DD/,r.getDate()),t=/mm/.test(t)&&/ss/.test(t)?t.replace(/mm/,1==r.getMinutes().toString().length?"0"+r.getMinutes():r.getMinutes()).replace(/ss/,1==r.getSeconds().toString().length?"0"+r.getSeconds():r.getSeconds()):t.replace(/mm/,r.getMinutes()).replace(/ss/,r.getSeconds())}}},function(t){{var e=function(t){return t instanceof Array};t.exports={make:function(t,e,r,i){var n={};return n[t]=e,i&&(n[t].textContent=i),n},append:function(t,r){if(""===t)return r;e(r)||(r=[r]);var i=Object.keys(t)[0];return e(t)?t[i].push(r):t[i]=r,t}}}},function(t,e,r){function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),a=i(n),o=r(7),s=i(o),d=r(8),u=i(d),l=r(9),c=i(l),p=r(10),h=i(p),f=r(11),g=i(f),m=r(12),b=i(m),x=r(13),v=i(x),y=r(14),k=i(y),_=r(15),C=i(_),R=function(t,e){return"object"==typeof e?new(e.mixin?b["default"](b["default"](t,e.mixin),e):b["default"](t,e)):new t(e)};e["default"]={name:"yakojs",VERSION:"0.4.2",spark:function(t){return R(a["default"],t)},pie:function(t){return R(s["default"],t)},donut:function(t){return R(u["default"],t)},bubble:function(t){return R(h["default"],t)},bar:function(t){return R(c["default"],t)},svg:g["default"],timeSeries:{bubble:{point:function(t){return R(v["default"],t)},scatter:function(t){return R(k["default"],t)}},line:function(t){return R(C["default"],t)}}},t.exports=e["default"]},function(t,e,r){{var i=r(16),n=(r(17),r(18)),a=r(19);t.exports=i.extend({componentName:"spark",_startCycle:function(){var t=this,e=t.attributes.data,r=t.attributes.opts,i=r.chart,n=i.xAxis||r.xAxis,a=i.yAxis||r.yAxis,o=t._append,s=[];return t._isArray(e)||(e=[e]),n&&(i.xAxis=n),a&&(i.yAxis=a),t._lifeCycleManager(e,i,function(r){for(var i=0;i<r.rows;i++){a&&a.multi&&(r.heightRatio=r.pHeight/r.max[i]);var n=t.make("g");s.push(o(n,t._describePath(e[i],r.paddingLeft,r.paddingTop,r,i)))}return s})},_getRatio:function(t){var e=this,r=e.attributes.data;if(0!==t.paddingLeft&&0!==t.paddingRight&&(t.innerPadding=5),!t.xAxis&&!t.yAxis)for(var i=0;i<t.len;i++){var n=r[i],a=0;if("object"==typeof n){var o=n.strokeWidth||2;t.innerPaddingBottom=t.innerPaddingTop<o?o:t.innerPaddingTop}if("object"==typeof n&&n.scattered&&t.scattered){var s=n.scattered;a=(s.strokeWidth?s.strokeWidth:2)+(s.radius?s.radius:2),t.innerPadding=t.innerPadding<a+5?a+5:t.innerPadding,t.innerPaddingBottom=t.innerPadding>t.innerPaddingBottom?t.innerPadding:t.innerPaddingBottom,t.innerPaddingTop=t.innerPaddingBottom}}t.pHeight=t.height-t.paddingTop-t.paddingBottom-t.innerPaddingTop-t.innerPaddingBottom,t.pWidth=t.width-t.paddingLeft-t.paddingRight-t.innerPadding,t.heightRatio=t.pHeight/t.max,t.tickSize=e._sigFigs(t.pWidth/(t.len-1),8)},_describeScatteredGraph:a.describeScatter,_describePath:function(t,e,r,i,a){a=a||0;var o=this,s=n.describeAttributeD(t.data,e,r,i,a),d=o.make("path",{d:s,stroke:t.strokeColor||o._randomColor(),"stroke-width":t.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:"none"},{_ref:a}),u=[];return t.fill&&i.fill&&u.push(o.make("path",{d:s+n.describeCloseAttributeD(t.data,e,r,i,a),stroke:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round",fill:t.fill},{_ref:a})),i.line&&u.push(d),i.scattered&&u.push(o._describeScatteredGraph(t,t.data,e,r,i,a)),u}})}},function(t,e,r){{var i=r(20);t.exports=i.extend({componentName:"pie",_describePath:function(t,e,r){if(!e)return"";for(var i=[],n=0,a=r.fills||0,o=r.strokeColors||0,s=r.width/2,d=r.height/2,u=0;u<e.length;u++){var l=n+360*e[u];i.push(this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:o[u]||r.strokeColor||this._randomColor(),d:this._describePie(s,d,t,n,l),fill:a[u]||this._randomColor()})),n=l}return i}})}},function(t,e,r){{var i=r(20);t.exports=i.extend({componentName:"donut",_describePath:function(t,e,r){if(!e)return"";for(var i=[],n=r.outerRadius||t,a=r.innerRadius||n/2,o=0,s=r.fills||0,d=r.strokeColors||0,u=r.height/2,l=r.width/2,c=0;c<e.length;c++){var p=o+360*e[c];i.push(this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:d[c]||r.strokeColor||this._randomColor(),fill:s[c]||this._randomColor(),d:this._describeDonut(l,u,n,a,o,p)})),o=p}return i},_describeDonut:function(t,e,r,i,n,a){0==n&&360==a&&(n=1);var o={start:this._polarToCartesian(t,e,r,a),end:this._polarToCartesian(t,e,r,n)},s={start:this._polarToCartesian(t,e,i,a),end:this._polarToCartesian(t,e,i,n)},d=180>=a-n?"0":"1";return["M",o.start.x,o.start.y,"A",r,r,0,d,0,o.end.x,o.end.y,"L",s.end.x,s.end.y,"A",i,i,0,d,1,s.start.x,s.start.y,"L",o.start.x,o.start.y,"Z"].join(" ")}})}},function(t,e,r){{var i=r(16);t.exports=i.extend({componentName:"bar",_startCycle:function(){var t=this.attributes.data,e=this,r=this.attributes.opts.chart;return r.type="bar",e._lifeCycleManager(t,r,function(r){return e._describeBar(t,r)})},_describeBar:function(t,e){if(!t.length)return"";t="object"==typeof t[0]?t:[t];for(var r=e.height-e.paddingTop-e.paddingBottom,i=e.width-e.paddingLeft-e.paddingRight,n=t[0].data.length,a=t.length,o=i/n,s=[],d=0;n>d;d++)if(e.stack)for(var u=r*e.maxSet[d]/e.max,l=r-u+e.paddingTop,c=0;a>c;c++)s.push(this.make("rect",{x:o*d+o/4+e.paddingLeft,y:l,width:o/a,height:t[c].data[d]/e.maxSet[d]*u,fill:t[c].fill||this._randomColor()})),l+=t[c].data[d]/e.maxSet[d]*u;else for(var p=o*d+o/4+e.paddingLeft,c=0;a>c;c++){p+=o/(a+1)*c;var u=r*t[c].data[d]/e.max;s.push(this.make("rect",{x:p,y:r-u+e.paddingTop,width:o/(a+1),height:u,fill:t[c].fill||this._randomColor()}))}return s}})}},function(t,e,r){function i(t){return t&&t.__esModule?t:{"default":t}}var n=r(16),a=i(n),o=r(21),s=i(o);t.exports=a["default"].extend({componentName:"bubble",_startCycle:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data,i=(t.postRender,"");return"scattered"==e.type?(e.type="bubble-scattered",t._lifeCycleManager(r,e,function(e){return t._describeBubbleChart(r,e)})):(e.type="bubble-point",t._lifeCycleManager(r,e,function(n){return i=t._describeBubble(r,e.height,e.width,n),i.unshift(t._describeXAxis(e.height,e.width,n)),i}))},_getRatio:s["default"].getRatioByNumberArray,_describeBubbleChart:s["default"].describeBubbleByNumberArray,_describeXAxis:s["default"].describeXAxisForBubbleLine,_describeBubble:s["default"].describeLineByNumberArray})},function(t,e,r){function i(t){return t&&t.__esModule?t:{"default":t}}var n=r(18),a=i(n),o=r(22),s=i(o),d=r(23),u=i(d),l=r(24),c=i(l),p=r(25),h=i(p);t.exports={path:a["default"],arc:s["default"],rect:u["default"],composer:c["default"],create:function(t){var e=new h["default"];return e.create(t)}}},function(t){t.exports=function(t,e){if(e instanceof Array){for(var r=0;r<e.length;r++)t=t.extend(e[r]);return t}return t.extend(e)}},function(t,e,r){function i(t){return t&&t.__esModule?t:{"default":t}}var n=r(16),a=i(n),o=r(21),s=i(o);t.exports=a["default"].extend({componentName:"bubble.point",_startCycle:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data,i=(t.postRender,"");e.type="bubble-point",e.complex=!0,e.parentType="bubble";var n=function(t,e){return t.date-e.date};return r.sort(n),t._lifeCycleManager(r,e,function(n){return i=t._describeBubble(r,e.height,e.width,n),i.unshift(t._describeXAxis(e.height,e.width,n)),i})},_getRatio:s["default"].getRatioByTimeSeries,_describeXAxis:s["default"].describeXAxisForBubbleLine,_describeBubble:s["default"].describeLineByObject})},function(t,e,r){function i(t){return t&&t.__esModule?t:{"default":t}}var n=r(16),a=i(n),o=r(21),s=i(o);t.exports=a["default"].extend({componentName:"bubble.scatter",_startCycle:function(){{var t=this,e=t.attributes.opts.chart,r=t.attributes.data;t.postRender}return e.type="bubble-scattered",e.complex=!0,e.parentType="bubble",t._lifeCycleManager(r,e,function(e){return t._describeBubbleChart(r,e)})},_getRatio:s["default"].getRatioByObject,_describeBubbleChart:s["default"].describeBubbleByObject})},function(t,e,r){var i=(r(19),r(16));t.exports=i.extend({componentName:"line",_scale:function(t,e){t=t[0],e=e||0;for(var r,i,n,a=e.chart||e,o=0,s=a.yAxis||0,d=a.xAxis||0,u=Number.MAX_VALUE,l=this,c=0,p=l._getSplits,h=[],f=t.data,g=function(t,e){return parseInt(t[n])-parseInt(e[n])},m=Object.keys(t.labels),b=m.length,x=f.length,v=[],y=0;b>y;y++){var h=t.labels[m[y]].strokeColor=t.labels[m[y]].strokeColor||l._randomColor();v.push(h)}s&&(a.paddingLeft=a.paddingRight=30),d&&(a.paddingTop=a.paddingBottom=20);var k,_=a.height-a.paddingTop-a.paddingBottom,C=a.width-a.paddingLeft-a.paddingRight;if(s&&s.multi){u={},o={},c={},k={};for(var R=0;b>R;R++)n=m[R],r=f.slice(0).sort(g),u[R]=r[0][n],i=p(r[x-1][n]),o[R]=i.max,c[R]=i.splits,k[R]=_/o[R],delete r}else{for(var R=0;b>R;R++)n=m[R],r=f.slice(0).sort(g),u=u>parseInt(r[0][n])?r[0][n]:u,o=o<parseInt(r[x-1][n])?r[x-1][n]:o,delete r;s&&(i=p(o),o=i.max,c=i.splits),k=_/o}return{min:u,max:o,len:x,rows:b,ySecs:c,labels:m,pHeight:_,pWidth:C,heightRatio:k,color:v}},_startCycle:function(){var t=this,e=t.attributes.data,r=t.attributes.opts,i=r.chart;return t._isArray(e)||(e=[e]),t._lifeCycleManager(e,i,function(r){return t._describeSeries(e[0],r.paddingLeft,r.paddingTop,r)})},_getRatio:function(t){var e=this;t.type="timeSeries";var r=t._data[0].data[t.len-1].timestamp;t.xAxis.maxUTC=r=new Date(r).getTime();var i=t.xAxis.minUTC||0;i||(i=t._data[0].data[0].timestamp,t.xAxis.minUTC=i=new Date(i).getTime()),t.tickSize=e._sigFigs(t.pWidth/(r-i),8)},_describeCloseAttributeD:function(t,e,r,i,n){return["V",e-n,"H",i,"L",i,e-t*r-n].join(" ")},_describePathAndCircle:function(t,e,r,i,n,a,o,s){for(var d=n.height,u={},l=n.tickSize,c=n.xAxis.minUTC,p={},h=n.rows,f=n.labels,g=this,m=[],b={},x=0;h>x;x++){var v=e[f[x]];p[x]="",u[x]=n.yAxis&&n.yAxis.multi?n.pHeight/n.max[x]:n.heightRatio,v.strokeColor=v.strokeColor||g._randomColor()}for(var y=0;y<t.length;y++)for(var k=new Date(t[y].timestamp).getTime(),_=(k-c)*l,C=0;h>C;C++){var R=t[y][f[C]]||0;R&&o&&(""==p[C]?(s&&(b[C]=R),p[C]="M "+r+" "+(d-R*u[C]-i)):p[C]+=" L "+(_+r)+" "+(d-R*u[C]-i));var v=e[f[C]];if(R&&a&&v.scattered){var T=v.scattered.strokeColor||v.strokeColor;m.push(g.make("circle",{cx:_+r,cy:d-R*u[C]-i,r:v.scattered.radius||"3",stroke:T,"stroke-width":v.scattered.strokeWidth||"3",fill:"white"},{_ref:C}))}}for(var S=0;h>S;S++){var v=e[f[S]];m.unshift(g.make("path",{d:p[S],stroke:v.strokeColor,"stroke-width":v.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:"none"},{_ref:S})),s&&v.fill&&m.push(g.make("path",{d:p[S]+g._describeCloseAttributeD(b[S],d,u[S],r,i),stroke:v.strokeColor,"stroke-width":v.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:v.fill},{_ref:S}))}return m},_describeSeries:function(t,e,r,i){var n=this,a=n._describePathAndCircle(t.data,t.labels,e,r,i,i.scattered,i.line,i.fill);return a}})},function(t,e,r){{var i=r(26);t.exports=i.extend({init:function(t){var e=this;return e.element="string"==typeof t?"#"===t[0]?e.make("div",{id:t.replace(/^#/,""),width:"100%"}):e.make("div",{"class":t.replace(/^\./,""),width:"100%"}):"",e.token=e._makeToken(),e.attributes={},e},_prepare:function(){var t=this,e={type:"chart",width:"100",height:"100",paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,innerPadding:0,innerPaddingLeft:0,innerPaddingRight:0,innerPaddingTop:0,innerPaddingBottom:0,invert:[],line:!0,fill:!0,scattered:!1};return t._extend(e,t.attributes.opts.chart),t.attributes.opts.chart=e,t},attr:function(t){var e=this;return t=t||0,"undefined"==typeof t.chart&&(t={chart:t,data:t.data||t.points},delete t.chart.data,delete t.chart.points),e.props.data=e.attributes.data=t.data||t.points||[],e.props.opts=e.attributes.opts=t,e.postRender(e.finalize(e._prepare()._startCycle()))},_addChartLayoutProps:function(t){var e=t.height,r=t.width,i=t.paddingTop,n=t.paddingLeft,a=t.paddingRight,o=t.paddingBottom;return t.layout={x:n,y:i,height:e-i-o,width:r-n-a,yToPixel:t.heightRatio||null,xToPixel:t.widthRatio||t.tickSize||null},null},finalize:function(t){var e=this,r=e._append,i=prepend="",n=e.props.scale,a=e.props.opts,o=e.make("svg",{width:n.width,height:n.height,viewBox:"0 0 "+n.width+" "+n.height});if(e._addChartLayoutProps(n),a.prepend||a.append){var s=Object.freeze(e._deepCopy(n));i=e._getUserContent(a.append,t,s)||"",prepend=e._getUserContent(a.prepend,t,s)||""}return r(e.element,r(o,prepend+t+i))},_getUserContent:function(t,e,r){if(!t)return"";var i=t(e,r)||"";return"object"==typeof i&&(i=i.stringify()),i}})}},function(t){var e=function(t){console.warn(t)};t.exports={label:function(){e("You're attempting to use labels without the `Label` addons.  Check documentation https://github.com/alfredkam/yakojs/blob/master/doc.md")}}},function(t,e,r){var i=r(27),n=t.exports={getScale:function(t){var e=t.data||0,r=i.scale(e);return r.paddingY=t.paddingY||5,r.tickSize=i.sigFigs(t.width/(r.len-1),8),r.heightRatio=(t.height-2*r.paddingY)/r.max,r.height=t.height,r.width=t.width,r.innerPadding=t.innerPadding||0,r.innerPaddingTop=t.innerPaddingTop||0,r.innerPaddingBottom=t.innerPaddingBottom||0,r},describeAttributeD:function(t,e,r,i,n){var a=i.height,o=i.heightRatio,s=i.tickSize,d=i.hasInverse||{},u="";d.y&&(max="object"==typeof i.max?i.max[n]:i.max);for(var l=0;l<t.length;l++){var c=(d.y?a-(max-t[l])*o:a-t[l]*o)-r-i.innerPaddingTop;u+=0===l?"M "+(e+i.innerPadding)+" "+c:" L "+(s*l+e)+" "+c}return""===u&&(u="M 0 0"),u},describeCloseAttributeD:function(t,e,r,i){var n=i.height,a=i.heightRatio;return["V",n-r,"H",e,"L",e+i.innerPadding,n-t[0]*a-r-i.innerPaddingTop].join(" ")},getOpenPath:function(t,e){return n.describeAttributeD(e,0,t.paddingY,t)},getClosedPath:function(t,e){return n.describeAttributeD(e,0,t.paddingY,t)+n.describeCloseAttributeD(e,0,t.paddingY,t)},beginPath:function(){var t=this,e="";return t.moveTo=function(r,i){return e+="M"+r+" "+i,t},t.lineTo=function(r,i){return e+="L"+r+" "+i,t},t.endPath=function(){return e},t}}},function(t){t.exports={describeScatter:function(t,e,r,i,n,a){var o=n.height,s=n.heightRatio,d=this,u=n.tickSize,l=t.scattered||0,c=l.strokeWidth||2,p=l.strokeColor||d._randomColor(),h=l.radius||2,f=l.fill||"white",g=[];a=a||0;for(var m=0;m<e.length;m++)g.push(d.make("circle",{cx:0===m?m+n.innerPadding+r:u*m+r,cy:o-e[m]*s-i-n.innerPaddingTop,r:h,stroke:p,"stroke-width":c,fill:f},{_ref:a}));return g}}},function(t,e,r){var i=r(16),n=r(22);t.exports=i.extend({_startCycle:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data;return t._lifeCycleManager(r,e,function(e){return t._describePath(e.outerRadius,e.relativeDataSet,e)})},_defineBaseScaleProperties:function(t,e){var r=this,i=r._sumOfData(t),n={total:i,relativeDataSet:r._dataSetRelativeToTotal(t,i),outerRadius:e.outerRadius||(e.height<e.width?e.height:e.width)/2};return r._extend(n,e),n},_polarToCartesian:n.polarToCartesian,_describeArc:n.describeArc,_describePie:n.describePie,_describePath:function(){return""}})},function(t){t.exports={getConfigForScatterTimeSeries:function(t){return t.type="bubble-scattered",t.complex=!0,t.parentType="bubble",t},getConfigForLine:function(t){return t.type="bubble-point",t.complex=!0,t.parentType="bubble",t},describeXAxisForBubbleLine:function(t,e,r){var i=r.axis||r.xAxis,n=t/2;return this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":i.strokeWidth||2,stroke:i.strokeColor||"transparent",d:"M"+r.paddingLeft+" "+n+" H"+e})},describeBubbleByObject:function(t,e){for(var r,i=e.height,n=e.width,a=e.heightRatio,o=e.widthRatio,s=e.len,d=e.max,u=e.innerPaddingLeft,l=e.paddingLeft,c=e.innerPaddingTop,p=e.paddingTop,h=this,f=e.fill||0,g=(e.strokeColor||0,e.strokeWidth||0,[]),m=e.minRadius||0,b=e.hasInverse,x=0;s>x;x++){var v=t[x],y=v.data;e.hasEvents&&(r={c:x});var k=(e.maxRadius-m)*(y[2]/d[2]);k=k?k+m:0,g.push(h.make("circle",{cx:b.x?y[0]*o+u+l:n-y[0]*o-u-l,cy:b.y?p+c+y[1]*a:i-y[1]*a-c-p,r:k,fill:v.fill||f||h._randomColor()},r))}return g},describeBubbleByNumberArray:function(t,e){for(var r,i=e.height,n=e.width,a=e.heightRatio,o=e.widthRatio,s=this,d=e.len,u=e.max,l=e.fills||0,c=[],p=e.minRadius||0,h=0;h<e.rows;h++)for(var f=0;d>f;f++){var g=t[h].data[f];e.hasEvents&&(r={r:h,c:f});var m=(e.maxRadius-p)*(g[2]/u[2]);m=m?m+p:0,c.push(s.make("circle",{cx:n-g[0]*o-e.paddingLeft,cy:i-g[1]*a-e.paddingTop,r:e.maxRadius*(g[2]/u[2]),fill:t[h].fill||l[f]||s._randomColor()},r))}return c},describeLineByObject:function(t,e,r,i){if(!t)return"";for(var n,a=i.strokeColors,o=i.strokeWidths,s=(i.fill,i.tickSize),d=i.startTick,u=i.minRadius,l=i.maxRadius,c=(t.length,[]),p=a||0,h=o||0,f=i.fill||0,g=e/2,u=u||0,m=0;m<t.length;m++){var b=t[m];i.hasEvents&&(n={c:m});var x=(l-u)*b.data/i.max;x=x?x+u:0,c.push(this.make("circle",{cx:(b.date.getTime()-d)*s+i.paddingLeft,cy:g,r:x,fill:b.fill||f,stroke:b.strokeColor||p||"transparent","stroke-width":b.strokeWidth||h||0},n))}return c},describeLineByNumberArray:function(t,e,r,i){if(!t)return"";for(var n,a=i.bubble,o=(t.length,[]),s=a.fills||0,d=(a.strokeColor,a.strokeWidths),u=a.minRadius,u=u||0,l=l||0,d=d||0,c=e/2,p=0;p<t.length;p++){i.hasEvents&&(n={c:p});var h=(a.maxRadius-u)*(t[p]/i.max);h=h?h+u:0,o.push(this.make("circle",{cx:i.tickSize*p+i.paddingLeft,cy:c,r:h,fill:s[p]||a.fill||this._randomColor(),stroke:l[p]||a.strokeColor||this._randomColor(),"stroke-width":d[p]||a.strokeWidth||2},n))}return o},getRatioByNumberArray:function(t){var e=t._data,r=t.height,i=t.width,n=t.len,a=t.paddingTop,o=t.paddingLeft,s=t.paddingRight,d=t.paddingBottom,u=e,l=(i>r?r:i)/3;if(t.type&&"bubble-scattered"==t.type)l=t.maxRadius=parseInt(t.maxRadius)||Math.sqrt(i*r/n)/2,t.paddingLeft=l>o?l:o,t.paddingRight=l>s?l:s,t.paddingTop=l>a?l:a,t.paddingBottom=l>d?l:d,t.widthRatio=(i-t.paddingLeft-t.paddingRight)/t.max[0],t.heightRatio=(r-t.paddingTop-t.paddingBottom)/t.max[1],t.minRadius=t.minRadius||0;else{t.bubble=t.bubble||{},t.xAxis=t.xAxis||{},l=t.bubble.maxRadius=parseInt(t.bubble.maxRadius)||l,t.bubble.minRadius=t.bubble.minRadius||0;var c=n-1==0?1:n-1,p=(i-t.paddingLeft-t.paddingRight)/c;t.bubble.maxRadius=l>p?p+t.paddingLeft:l,t.paddingLeft=t.paddingLeft||t.bubble.maxRadius*(u[0]/t.max),t.paddingRight=t.paddingRight||t.bubble.maxRadius*(u[n-1]/t.max),t.tickSize=(i-t.paddingLeft-t.paddingRight)/c}},getRatioByObject:function(t){var e=(t._data,t.height),r=t.width,i=t.len,n=t.innerPaddingLeft,a=t.innerPaddingTop,o=t.innerPaddingRight,s=t.innerPaddingBottom,d=t.minRadius,u=t.maxRadius=parseInt(t.maxRadius)||Math.sqrt(r*e/i)/2;t.minRadius=d||0,t.innerPaddingLeft=u>n?u:n,t.innerPaddingRight=u>o?u:o,t.innerPaddingTop=u>a?u:a,t.innerPaddingBottom=u>s?u:s,t.widthRatio=(r-t.innerPaddingLeft-t.innerPaddingRight)/t.max[0],t.heightRatio=(e-t.innerPaddingTop-t.innerPaddingBottom)/t.max[1]},getRatioByTimeSeries:function(t){var e=t._data,r=(t.height,t.width),i=t.len,n=(t.paddingTop,t.paddingLeft,t.paddingRight,t.paddingBottom,t.axis),a=e;t.axis=n||{};var o=t.maxRadius=parseInt(t.maxRadius)||o,s=t.minRadius=t.minRadius||0;t.startTick=startTick=(t.startDate||a[0].date).getTime(),t.endTick=endTick=(t.endDate||a[i-1].date).getTime();var d=endTick-startTick;d=0==d?1e3:d;var u=r/d,l=(o-s)*a[0].data/t.max,c=(o-s)*a[i-1].data/t.max;l=l?l+s:0,c=c?c+s:0;var p=a[0].date.getTime(),h=a[i-1].date.getTime(),f=(p-startTick)*u-l,g=(h-endTick)*u+c;t.paddingLeft=0>f?Math.abs(f):0,t.paddingRight=g>0?g:0,t.tickSize=(r-t.paddingLeft-t.paddingRight)/d}}},function(t){var e=t.exports={polarToCartesian:function(t,e,r,i){var n=(i-90)*Math.PI/180;return{x:t+r*Math.cos(n),y:e+r*Math.sin(n)}},describeArc:function(t,r,i,n,a){0==n&&360==a&&(n=1);var o=e.polarToCartesian(t,r,i,a),s=e.polarToCartesian(t,r,i,n),d=180>=a-n?"0":"1";return["M",o.x,o.y,"A",i,i,0,d,0,s.x,s.y].join(" ")},describePie:function(t,r,i,n,a){return e.describeArc(t,r,i,n,a)+" L"+t+" "+r}}},function(){},function(t){var e=t.exports={makePairs:function(t,e){if(!t)return"";if(arguments.length<2?(e=t,t=""):t+="-",!e)return"";for(var r=Object.keys(e),i=r.length,n="";i--;)n+=" "+t+r[i]+'="'+e[r[i]]+'"';return n},append:function(t,e){return""===t?e:(isArray(e)||(e=[e]),t.replace(/(.*)(<\/.*>$)/g,function(t,r,i){return r+e.join("")+i}))},make:function(t,r,i,n){var a="<"+t;return"svg"===t&&(a+=' version="1.1" xmlns="http://www.w3.org/2000/svg"'),a+=e.makePairs(r),a+=e.makePairs("data",i),a+=">"+(n||0===n?n:"")+"</"+t+">"},stringify:function(){}}},function(t,e,r){function i(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),o=r(24),s=i(o),d=r(28),u=i(d),l=function(){function t(){n(this,t);return this}return a(t,[{key:"getNode",value:function(){var t=void 0===arguments[0]?null:arguments[0],e=null,r=this;return t||(t=r),{node:t,parent:e}}},{key:"create",value:function(t){var e=this;return e.element=t,e}},{key:"append",value:function(e){var r=this,i=r.getNode(),n=i.node;if(n.children=n.children||[],Array.isArray(e))n.children.push(e);else{var a=new t;e=a.create(e),n.children.push(e)}return e}},{key:"attr",value:function(t,e){var r=this,i=r.getNode(),n=i.node;return n.attrs=n.attrs||{},"object"==typeof t?u["default"](n.attrs,t):n.attrs[t]=e,r}},{key:"forEach",value:function(t){var e=this,r=e.getNode(),i=r.node,n=i.children||[];return n.forEach(t),e}},{key:"stringify",value:function(){var t=this,e=t.getNode(),r=e.node,i=(r.children||[]).map(function(t){return t.stringify()});return s["default"].make(r.element,r.attrs,{},i.join(""))}}]),t}();t.exports=l},function(t,e,r){r(29);var i=r(30),n=r(17),a=r(27),o=function(t){return t instanceof Array};t.exports=i.extend({init:function(){return this},props:{},_sumOfData:a.sumOfData,_dataSetRelativeToTotal:a.dataSetRelativeToTotal,_randomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},_append:function(t,e){return""===t?e:(o(e)||(e=[e]),t.replace(/(.*)(<\/.*>$)/g,function(t,r,i){return r+e.join("")+i}))},make:function(t,e,r,i){var n="<"+t;return"svg"===t&&(n+=' version="1.1" xmlns="http://www.w3.org/2000/svg"'),n+=this._makePairs(e),n+=this._makePairs("data",r),n+=">"+(i||0===i?i:"")+"</"+t+">"},_deepCopy:function(t){return JSON.parse(JSON.stringify(t))},postRender:function(t){return t},_isArray:o,_getRatio:function(t){t.heightRatio=t.height-(t.paddingTop+t.paddingBottom)/t.max},_defineBaseScaleProperties:function(t,e){var r=this,i=this.attributes.opts,e=i.chart,a=e.xAxis||i.xAxis,o=e.yAxis||i.yAxis,s=r._scale(t,e);r._extend(s,e),s._data=t;var d={x:"x",y:"y"},u={};if(s.invert)for(var l in s.invert)d[s.inveinvert[l]]&&(u[d[s.invert[l]]]=!0);return s.hasInverse=u,"bubble-point"!=e.type&&(o||a)&&(r._getExternalProps(s,o,a),r.describeYAxis||n.label()),r._getRatio(s),r.props.scale=s,s},_lifeCycleManager:function(t,e,r){var i=this,n=i._defineBaseScaleProperties(t,e);i._call&&i._call(n);var a=i.preRender?i.preRender(Object.freeze(i._deepCopy(n))):0,o=a.prepend?a.prepend:[];return o=o.concat(r(n)),o=o.concat(a.append?a.append:[])},_makePairs:function(t,e){if(!t)return"";if(arguments.length<2?(e=t,t=""):t+="-",!e)return"";for(var r=Object.keys(e),i=r.length,n="";i--;)n+=" "+t+r[i]+'="'+e[r[i]]+'"';return n},_extend:function(t,e){var r=this;if(e&&t){for(var i=Object.keys(e),n=i.length;n--;)"object"!=typeof e[i[n]]||o(e[i[n]])?t[i[n]]=e[i[n]]:(t[i[n]]||(t[i[n]]={}),r._extend(t[i[n]],e[i[n]]));return this}},isFn:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},_makeToken:function(){return Math.random().toString(36).substr(2)},_sigFigs:a.sigFigs,_getSplits:a.getSplits,_scale:a.scale})},function(t){var e=function(t,e){return t-e},r=t.exports={sigFigs:function(t,e){var r=Math.pow(10,e-Math.floor(Math.log(t)/Math.LN10)-1);return Math.round(t*r)/r},sumOfData:function(t){return t.reduce(function(t,e){return t+e})},dataSetRelativeToTotal:function(t,e){return t.map(function(t){return t/e})},getSplits:function(t){if(t=Math.ceil(t,0),0===t)return{max:2,splits:2};var e=[3,2,5],r=t.toString().length,i=splits=0,n=function(t){for(var r=0;3>r;r++)if(t%e[r]===0)return e[r];return 0},a=function(t){var e=parseInt(t.toString()[0]);return 1==e?2:n(e)};return r>2?(i=Math.ceil10(t,r-1),splits=a(i),splits||(i+=Math.pow(10,r-1),splits=a(i))):2==r?(i=t.toString(),i[1]<=5&&(1==i[0]||2==i[0]||5==i[0]||7==i[0])&&0!=i[1]?i=parseInt(i[0]+"5"):(i=Math.ceil10(t,1),i=70==i?75:i),splits=n(i)):(i=t,splits=n(i),(5==i||3==i||2==i)&&(splits=1),splits||(i+=1,splits=a(i))),{max:i,splits:splits}},getScaleForMulti:function(t,i,n){for(var a={},o=[],s=[],d=0;i>d;d++)temp=t[d].slice(0).sort(e),o[d]=temp[0],ans=r.getSplits(temp[n-1]),s[d]=ans.max,a[d]=ans.splits;return{min:o,max:s,ySecs:a}},getStackedScale:function(t,e,i,n,a,o){for(var s=[],d=0,u=0;i>u;u++){for(var l=0,c=0;e>c;c++)l+=t[c][u];s.push(l),o=l>o?l:o,a=a>l?l:a}return n&&(ans=r.getSplits(o),o=ans.max,d=ans.splits),{min:a,max:o,ySecs:d,maxSet:s}},getBubbleScatterScale:function(t,e,i,n){for(var a=0,o=[],s=[],d=0;3>d;d++)o[d]=Number.MAX_VALUE,s[d]=0;for(var u=0;i>u;u++)for(var l=0;e>l;l++)for(var c=0;3>c;c++)s[c]=s[c]<t[l][u][c]?t[l][u][c]:s[c],o[c]=o[c]>t[l][u][c]?t[l][u][c]:o[c];return n&&(ans=r.getSplits(s[1]),s[1]=ans.max,a=ans.splits),{min:o,max:s,ySecs:a}},getSimpleScale:function(t,i,n,a,o,s){for(var d=0,u=0;i>u;u++)temp=t[u].slice(0).sort(e),o=o>temp[0]?temp[0]:o,s=s<temp[n-1]?temp[n-1]:s;return a&&(ans=r.getSplits(s),s=ans.max,d=ans.splits),{min:o,max:s,ySecs:d}},scale:function(t,e){e=e||0,t="object"==typeof t[0]?t:[t];var i,n=0,a=e.yAxis||(e.chart?e.chart.yAxis:0),o=Number.MAX_VALUE,s=[],d=0,u=(r.getSplits,[]);if(t[0].data||0==t[0].data){i=[];for(var l=0;l<t.length;l++)i.push(t[l].data),u.push(t[l].strokeColor);t=e.complex?[i]:i}var c=t.length,p=t[0].length;if(a&&a.multi){var h=r.getScaleForMulti(t,c,p);o=h.min,n=h.max,d=h.ySecs}else if(e.stack){var h=r.getStackedScale(t,c,p,a,o,n);o=h.min,n=h.max,d=h.ySecs,s=h.maxSet}else if("bubble-scattered"==e.type){var h=r.getBubbleScatterScale(t,c,p,a);o=h.min,n=h.max,d=h.ySecs}else{var h=r.getSimpleScale(t,c,p,a,o,n);o=h.min,n=h.max,d=h.ySecs}return{min:o,max:n,maxSet:s,len:p,rows:c,ySecs:d,color:u}}}},function(t){t.exports=function(t){var e=this;arguments.length>1&&(e=arguments[0],t=arguments[1]);for(var r=Object.keys(t),i=0;i<r.length;i++)e[r[i]]=t[r[i]];return e}},function(){function t(t,e,r){return"undefined"==typeof r||0===+r?Math[t](e):(e=+e,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))
}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})},function(t){function e(t){return"function"==typeof t}function r(t){return/\b_super\b/.test(t)}var i=t.exports=function(){};i.extend=function(t){function i(){this.init&&this.init.apply(this,arguments)}var n=this.prototype,a=this.prototype.init;this.prototype.init=null;var o=new this;this.prototype.init=a;for(var s in t){var d=t[s];o[s]=e(d)&&e(n[s])&&r(d)?function(t,e){return function(){var r=this._super;this._super=n[t];var i=e.apply(this,arguments);return this._super=r,i}}(s,d):d}return i.prototype=o,i.prototype.constructor=i,i.extend=arguments.callee,i}}]);,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})},function(t){function e(t){return"function"==typeof t}function r(t){return/\b_super\b/.test(t)}var i=t.exports=function(){};i.extend=function(t){function i(){this.init&&this.init.apply(this,arguments)}var n=this.prototype,a=this.prototype.init;this.prototype.init=null;var o=new this;this.prototype.init=a;for(var s in t){var d=t[s];o[s]=e(d)&&e(n[s])&&r(d)?function(t,e){return function(){var r=this._super;this._super=n[t];var i=e.apply(this,arguments);return this._super=r,i}}(s,d):d}return i.prototype=o,i.prototype.constructor=i,i.extend=arguments.callee,i}}]);