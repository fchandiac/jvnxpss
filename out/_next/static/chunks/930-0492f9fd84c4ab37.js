"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{9368:function(e,t,n){n.d(t,{Z:function(){return R}});var o=n(3366),r=n(7462),i=n(7294),a=n(4780),s=n(1796),c=n(1964),l=n(8169),d=n(5893),p=(0,l.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=(0,l.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,l.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(8216),h=n(1657),v=n(948),b=n(4867);function g(e){return(0,b.Z)("MuiCheckbox",e)}var y=(0,n(1588).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const x=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=(0,v.ZP)(c.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,m.Z)(n.color)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),O=(0,d.jsx)(u,{}),Z=(0,d.jsx)(p,{}),k=(0,d.jsx)(f,{});var R=i.forwardRef((function(e,t){var n,s;const c=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=O,color:p="primary",icon:u=Z,indeterminate:f=!1,indeterminateIcon:v=k,inputProps:b,size:y="medium"}=c,R=(0,o.Z)(c,x),P=f?v:u,C=f?v:l,j=(0,r.Z)({},c,{color:p,indeterminate:f,size:y}),S=(e=>{const{classes:t,indeterminate:n,color:o}=e,i={root:["root",n&&"indeterminate",`color${(0,m.Z)(o)}`]},s=(0,a.Z)(i,g,t);return(0,r.Z)({},t,s)})(j);return(0,d.jsx)(w,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":f},b),icon:i.cloneElement(P,{fontSize:null!=(n=P.props.fontSize)?n:y}),checkedIcon:i.cloneElement(C,{fontSize:null!=(s=C.props.fontSize)?s:y}),ownerState:j,ref:t},R,{classes:S}))}))},480:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(3366),r=n(7462),i=n(7294),a=n(6010),s=n(4780),c=n(4423),l=n(5861),d=n(8216),p=n(948),u=n(1657),f=n(4867);function m(e){return(0,f.Z)("MuiFormControlLabel",e)}var h=(0,n(1588).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),v=n(5704),b=n(5893);const g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],y=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${h.label}`]:t.label},t.root,t[`labelPlacement${(0,d.Z)(n.labelPlacement)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})));var x=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiFormControlLabel"}),{className:p,componentsProps:f={},control:h,disabled:x,disableTypography:w,label:O,labelPlacement:Z="end"}=n,k=(0,o.Z)(n,g),R=(0,c.Z)();let P=x;"undefined"===typeof P&&"undefined"!==typeof h.props.disabled&&(P=h.props.disabled),"undefined"===typeof P&&R&&(P=R.disabled);const C={disabled:P};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof h.props[e]&&"undefined"!==typeof n[e]&&(C[e]=n[e])}));const j=(0,v.Z)({props:n,muiFormControl:R,states:["error"]}),S=(0,r.Z)({},n,{disabled:P,labelPlacement:Z,error:j.error}),M=(e=>{const{classes:t,disabled:n,labelPlacement:o,error:r}=e,i={root:["root",n&&"disabled",`labelPlacement${(0,d.Z)(o)}`,r&&"error"],label:["label",n&&"disabled"]};return(0,s.Z)(i,m,t)})(S);let E=O;return null==E||E.type===l.Z||w||(E=(0,b.jsx)(l.Z,(0,r.Z)({component:"span",className:M.label},f.typography,{children:E}))),(0,b.jsxs)(y,(0,r.Z)({className:(0,a.Z)(M.root,p),ownerState:S,ref:t},k,{children:[i.cloneElement(h,C),E]}))}))},3946:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(3366),r=n(7462),i=n(7294),a=n(6010),s=n(4780),c=n(1796),l=n(948),d=n(1657),p=n(9990),u=n(8216),f=n(4867);function m(e){return(0,f.Z)("MuiIconButton",e)}var h=(0,n(1588).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=n(5893);const b=["edge","children","className","color","disabled","disableFocusRipple","size"],g=(0,l.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t[`color${(0,u.Z)(n.color)}`],n.edge&&t[`edge${(0,u.Z)(n.edge)}`],t[`size${(0,u.Z)(n.size)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.active} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>(0,r.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,r.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${h.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})));var y=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:i=!1,children:c,className:l,color:p="default",disabled:f=!1,disableFocusRipple:h=!1,size:y="medium"}=n,x=(0,o.Z)(n,b),w=(0,r.Z)({},n,{edge:i,color:p,disabled:f,disableFocusRipple:h,size:y}),O=(e=>{const{classes:t,disabled:n,color:o,edge:r,size:i}=e,a={root:["root",n&&"disabled","default"!==o&&`color${(0,u.Z)(o)}`,r&&`edge${(0,u.Z)(r)}`,`size${(0,u.Z)(i)}`]};return(0,s.Z)(a,m,t)})(w);return(0,v.jsx)(g,(0,r.Z)({className:(0,a.Z)(O.root,l),centerRipple:!0,focusRipple:!h,disabled:f,ref:t,ownerState:w},x,{children:c}))}))},5819:function(e,t,n){n.d(t,{Z:function(){return R}});var o=n(3366),r=n(7462),i=n(7294),a=n(6010),s=n(4780),c=n(1796),l=n(948),d=n(1657),p=n(9773),u=n(9990),f=n(8974),m=n(1705),h=n(1588);var v=(0,h.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var b=(0,h.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var g=(0,h.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),y=n(4867);function x(e){return(0,y.Z)("MuiMenuItem",e)}var w=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=n(5893);const Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],k=(0,l.ZP)(u.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${v.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${v.inset}`]:{marginLeft:52},[`& .${g.root}`]:{marginTop:0,marginBottom:0},[`& .${g.inset}`]:{paddingLeft:36},[`& .${b.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${b.root} svg`]:{fontSize:"1.25rem"}}))));var R=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:u=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:b,role:g="menuitem",tabIndex:y}=n,w=(0,o.Z)(n,Z),R=i.useContext(p.Z),P={dense:u||R.dense||!1,disableGutters:v},C=i.useRef(null);(0,f.Z)((()=>{c&&C.current&&C.current.focus()}),[c]);const j=(0,r.Z)({},n,{dense:P.dense,divider:h,disableGutters:v}),S=(e=>{const{disabled:t,dense:n,divider:o,disableGutters:i,selected:a,classes:c}=e,l={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",a&&"selected"]},d=(0,s.Z)(l,x,c);return(0,r.Z)({},c,d)})(n),M=(0,m.Z)(C,t);let E;return n.disabled||(E=void 0!==y?y:-1),(0,O.jsx)(p.Z.Provider,{value:P,children:(0,O.jsx)(k,(0,r.Z)({ref:M,role:g,tabIndex:E,component:l,focusVisibleClassName:(0,a.Z)(S.focusVisible,b)},w,{ownerState:j,classes:S}))})}))},1849:function(e,t,n){n.d(t,{Z:function(){return $e}});var o=n(7462),r=n(3366),i=n(67),a=n(6600),s=n(7094);function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){return e instanceof c(e).Element||e instanceof Element}function d(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function p(e){return"undefined"!==typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.max,f=Math.min,m=Math.round;function h(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(d(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(o=m(n.width)/a||1),i>0&&(r=m(n.height)/i||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function v(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function y(e){return h(g(e)).left+v(e).scrollLeft}function x(e){return c(e).getComputedStyle(e)}function w(e){var t=x(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function O(e,t,n){void 0===n&&(n=!1);var o=d(t),r=d(t)&&function(e){var t=e.getBoundingClientRect(),n=m(t.width)/e.offsetWidth||1,o=m(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),i=g(t),a=h(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==b(t)||w(i))&&(s=function(e){return e!==c(e)&&d(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:v(e);var t}(t)),d(t)?((l=h(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=y(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function Z(e){var t=h(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function k(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||g(e)}function R(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:d(e)&&w(e)?e:R(k(e))}function P(e,t){var n;void 0===t&&(t=[]);var o=R(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=c(o),a=r?[i].concat(i.visualViewport||[],w(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(P(k(a)))}function C(e){return["table","td","th"].indexOf(b(e))>=0}function j(e){return d(e)&&"fixed"!==x(e).position?e.offsetParent:null}function S(e){for(var t=c(e),n=j(e);n&&C(n)&&"static"===x(n).position;)n=j(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&d(e)&&"fixed"===x(e).position)return null;var n=k(e);for(p(n)&&(n=n.host);d(n)&&["html","body"].indexOf(b(n))<0;){var o=x(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var M="top",E="bottom",$="right",B="left",L="auto",I=[M,E,$,B],z="start",F="end",D="viewport",A="popper",T=I.reduce((function(e,t){return e.concat([t+"-"+z,t+"-"+F])}),[]),H=[].concat(I,[L]).reduce((function(e,t){return e.concat([t,t+"-"+z,t+"-"+F])}),[]),N=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function V(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function W(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var q={placement:"bottom",modifiers:[],strategy:"absolute"};function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function _(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?q:r;return function(e,t,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},q,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:r,setOptions:function(n){var s="function"===typeof n?n(r.options):n;d(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:l(e)?P(e):e.contextElement?P(e.contextElement):[],popper:P(t)};var p=function(e){var t=V(e);return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=p.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:c,options:o}),l=function(){};a.push(s||l)}})),c.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(G(t,n)){r.rects={reference:O(t,S(n),"fixed"===r.options.strategy),popper:Z(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],a=i.fn,l=i.options,d=void 0===l?{}:l,p=i.name;"function"===typeof a&&(r=a({state:r,options:d,name:p,instance:c})||r)}else r.reset=!1,o=-1}}},update:W((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){d(),s=!0}};if(!G(e,t))return c;function d(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var U={passive:!0};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?X(r):null,a=r?Y(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case M:t={x:s,y:n.y-o.height};break;case E:t={x:s,y:n.y+n.height};break;case $:t={x:n.x+n.width,y:c};break;case B:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?J(i):null;if(null!=l){var d="y"===l?"height":"width";switch(a){case z:t[l]=t[l]-(n[d]/2-o[d]/2);break;case F:t[l]=t[l]+(n[d]/2-o[d]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,d=e.adaptive,p=e.roundOffsets,u=e.isFixed,f=a.x,h=void 0===f?0:f,v=a.y,b=void 0===v?0:v,y="function"===typeof p?p({x:h,y:b}):{x:h,y:b};h=y.x,b=y.y;var w=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),Z=B,k=M,R=window;if(d){var P=S(n),C="clientHeight",j="clientWidth";if(P===c(n)&&"static"!==x(P=g(n)).position&&"absolute"===s&&(C="scrollHeight",j="scrollWidth"),P=P,r===M||(r===B||r===$)&&i===F)k=E,b-=(u&&P===R&&R.visualViewport?R.visualViewport.height:P[C])-o.height,b*=l?1:-1;if(r===B||(r===M||r===E)&&i===F)Z=$,h-=(u&&P===R&&R.visualViewport?R.visualViewport.width:P[j])-o.width,h*=l?1:-1}var L,I=Object.assign({position:s},d&&Q),z=!0===p?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:m(t*o)/o||0,y:m(n*o)/o||0}}({x:h,y:b}):{x:h,y:b};return h=z.x,b=z.y,l?Object.assign({},I,((L={})[k]=O?"0":"",L[Z]=w?"0":"",L.transform=(R.devicePixelRatio||1)<=1?"translate("+h+"px, "+b+"px)":"translate3d("+h+"px, "+b+"px, 0)",L)):Object.assign({},I,((t={})[k]=O?b+"px":"",t[Z]=w?h+"px":"",t.transform="",t))}var te={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var o=X(e),r=[B,M].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[B,$].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=a}},ne={left:"right",right:"left",bottom:"top",top:"bottom"};function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var re={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return re[e]}))}function ae(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t){return t===D?se(function(e){var t=c(e),n=g(e),o=t.visualViewport,r=n.clientWidth,i=n.clientHeight,a=0,s=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:a+y(e),y:s}}(e)):l(t)?function(e){var t=h(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t,n=g(e),o=v(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=u(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=u(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+y(e),c=-o.scrollTop;return"rtl"===x(r||n).direction&&(s+=u(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(g(e)))}function le(e,t,n){var o="clippingParents"===t?function(e){var t=P(k(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&d(e)?S(e):e;return l(n)?t.filter((function(e){return l(e)&&ae(e,n)&&"body"!==b(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(t,n){var o=ce(e,n);return t.top=u(o.top,t.top),t.right=f(o.right,t.right),t.bottom=f(o.bottom,t.bottom),t.left=u(o.left,t.left),t}),ce(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function de(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function pe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ue(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?D:s,d=n.elementContext,p=void 0===d?A:d,u=n.altBoundary,f=void 0!==u&&u,m=n.padding,v=void 0===m?0:m,b=de("number"!==typeof v?v:pe(v,I)),y=p===A?"reference":A,x=e.rects.popper,w=e.elements[f?y:p],O=le(l(w)?w:w.contextElement||g(e.elements.popper),a,c),Z=h(e.elements.reference),k=K({reference:Z,element:x,strategy:"absolute",placement:r}),R=se(Object.assign({},x,k)),P=p===A?R:Z,C={top:O.top-P.top+b.top,bottom:P.bottom-O.bottom+b.bottom,left:O.left-P.left+b.left,right:P.right-O.right+b.right},j=e.modifiersData.offset;if(p===A&&j){var S=j[r];Object.keys(C).forEach((function(e){var t=[$,E].indexOf(e)>=0?1:-1,n=[M,E].indexOf(e)>=0?"y":"x";C[e]+=S[n]*t}))}return C}function fe(e,t,n){return u(e,f(t,n))}var me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,b=void 0===v?0:v,g=ue(t,{boundary:c,rootBoundary:l,padding:p,altBoundary:d}),y=X(t.placement),x=Y(t.placement),w=!x,O=J(y),k="x"===O?"y":"x",R=t.modifiersData.popperOffsets,P=t.rects.reference,C=t.rects.popper,j="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,L="number"===typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,F={x:0,y:0};if(R){if(i){var D,A="y"===O?M:B,T="y"===O?E:$,H="y"===O?"height":"width",N=R[O],V=N+g[A],W=N-g[T],q=h?-C[H]/2:0,G=x===z?P[H]:C[H],_=x===z?-C[H]:-P[H],U=t.elements.arrow,K=h&&U?Z(U):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[A],te=Q[T],ne=fe(0,P[H],K[H]),oe=w?P[H]/2-q-ne-ee-L.mainAxis:G-ne-ee-L.mainAxis,re=w?-P[H]/2+q+ne+te+L.mainAxis:_+ne+te+L.mainAxis,ie=t.elements.arrow&&S(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(D=null==I?void 0:I[O])?D:0,ce=N+re-se,le=fe(h?f(V,N+oe-se-ae):V,N,h?u(W,ce):W);R[O]=le,F[O]=le-N}if(s){var de,pe="x"===O?M:B,me="x"===O?E:$,he=R[k],ve="y"===k?"height":"width",be=he+g[pe],ge=he-g[me],ye=-1!==[M,B].indexOf(y),xe=null!=(de=null==I?void 0:I[k])?de:0,we=ye?be:he-P[ve]-C[ve]-xe+L.altAxis,Oe=ye?he+P[ve]+C[ve]-xe-L.altAxis:ge,Ze=h&&ye?function(e,t,n){var o=fe(e,t,n);return o>n?n:o}(we,he,Oe):fe(h?we:be,he,h?Oe:ge);R[k]=Ze,F[k]=Ze-he}t.modifiersData[o]=F}},requiresIfExists:["offset"]};var he={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=X(n.placement),c=J(s),l=[B,$].indexOf(s)>=0?"height":"width";if(i&&a){var d=function(e,t){return de("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:pe(e,I))}(r.padding,n),p=Z(i),u="y"===c?M:B,f="y"===c?E:$,m=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],h=a[c]-n.rects.reference[c],v=S(i),b=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,y=d[u],x=b-p[l]-d[f],w=b/2-p[l]/2+g,O=fe(y,w,x),k=c;n.modifiersData[o]=((t={})[k]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o)))&&ae(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[M,$,E,B].some((function(t){return e[t]>=0}))}var ge=_({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,l=c(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach((function(e){e.addEventListener("scroll",n.update,U)})),s&&l.addEventListener("resize",n.update,U),function(){i&&d.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),s&&l.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];d(r)&&b(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});d(o)&&b(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},te,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,d=n.boundary,p=n.rootBoundary,u=n.altBoundary,f=n.flipVariations,m=void 0===f||f,h=n.allowedAutoPlacements,v=t.options.placement,b=X(v),g=c||(b===v||!m?[oe(v)]:function(e){if(X(e)===L)return[];var t=oe(e);return[ie(e),t,ie(t)]}(v)),y=[v].concat(g).reduce((function(e,n){return e.concat(X(n)===L?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?H:c,d=Y(o),p=d?s?T:T.filter((function(e){return Y(e)===d})):I,u=p.filter((function(e){return l.indexOf(e)>=0}));0===u.length&&(u=p);var f=u.reduce((function(t,n){return t[n]=ue(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[X(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:d,rootBoundary:p,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,Z=!0,k=y[0],R=0;R<y.length;R++){var P=y[R],C=X(P),j=Y(P)===z,S=[M,E].indexOf(C)>=0,F=S?"width":"height",D=ue(t,{placement:P,boundary:d,rootBoundary:p,altBoundary:u,padding:l}),A=S?j?$:B:j?E:M;x[F]>w[F]&&(A=oe(A));var N=oe(A),V=[];if(i&&V.push(D[C]<=0),s&&V.push(D[A]<=0,D[N]<=0),V.every((function(e){return e}))){k=P,Z=!1;break}O.set(P,V)}if(Z)for(var W=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},q=m?3:1;q>0;q--){if("break"===W(q))break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},me,he,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),c=ve(a,o),l=ve(s,r,i),d=be(c),p=be(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}}]}),ye=n(7294),xe=n(8385),we=n(5893);const Oe=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Ze=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function ke(e){return"function"===typeof e?e():e}const Re={},Pe=ye.forwardRef((function(e,t){const{anchorEl:n,children:s,direction:c,disablePortal:l,modifiers:d,open:p,placement:u,popperOptions:f,popperRef:m,TransitionProps:h}=e,v=(0,r.Z)(e,Oe),b=ye.useRef(null),g=(0,i.Z)(b,t),y=ye.useRef(null),x=(0,i.Z)(y,m),w=ye.useRef(x);(0,a.Z)((()=>{w.current=x}),[x]),ye.useImperativeHandle(m,(()=>y.current),[]);const O=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(u,c),[Z,k]=ye.useState(O);ye.useEffect((()=>{y.current&&y.current.forceUpdate()})),(0,a.Z)((()=>{if(!n||!p)return;ke(n);let e=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{k(e.placement)}}];null!=d&&(e=e.concat(d)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));const t=ge(ke(n),b.current,(0,o.Z)({placement:O},f,{modifiers:e}));return w.current(t),()=>{t.destroy(),w.current(null)}}),[n,l,d,p,f,O]);const R={placement:Z};return null!==h&&(R.TransitionProps=h),(0,we.jsx)("div",(0,o.Z)({ref:g,role:"tooltip"},v,{children:"function"===typeof s?s(R):s}))}));var Ce=ye.forwardRef((function(e,t){const{anchorEl:n,children:i,container:a,direction:c="ltr",disablePortal:l=!1,keepMounted:d=!1,modifiers:p,open:u,placement:f="bottom",popperOptions:m=Re,popperRef:h,style:v,transition:b=!1}=e,g=(0,r.Z)(e,Ze),[y,x]=ye.useState(!0);if(!d&&!u&&(!b||y))return null;const w=a||(n?(0,s.Z)(ke(n)).body:void 0);return(0,we.jsx)(xe.Z,{disablePortal:l,container:w,children:(0,we.jsx)(Pe,(0,o.Z)({anchorEl:n,direction:c,disablePortal:l,modifiers:p,ref:t,open:b?!y:u,placement:f,popperOptions:m,popperRef:h},g,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:u||!d||b&&!y?null:"none"},v),TransitionProps:b?{in:u,onEnter:()=>{x(!1)},onExited:()=>{x(!0)}}:null,children:i}))})})),je=n(4168),Se=n(948),Me=n(1657);const Ee=(0,Se.ZP)(Ce,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var $e=ye.forwardRef((function(e,t){const n=(0,je.Z)(),r=(0,Me.Z)({props:e,name:"MuiPopper"});return(0,we.jsx)(Ee,(0,o.Z)({direction:null==n?void 0:n.direction},r,{ref:t}))}))},1964:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(3366),r=n(7462),i=n(7294),a=n(6010),s=n(4780),c=n(8216),l=n(948),d=n(9299),p=n(4423),u=n(9990),f=n(4867);function m(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,n(1588).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var h=n(5893);const v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,l.ZP)(u.Z)((({ownerState:e})=>(0,r.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),g=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var y=i.forwardRef((function(e,t){const{autoFocus:n,checked:i,checkedIcon:l,className:u,defaultChecked:f,disabled:y,disableFocusRipple:x=!1,edge:w=!1,icon:O,id:Z,inputProps:k,inputRef:R,name:P,onBlur:C,onChange:j,onFocus:S,readOnly:M,required:E,tabIndex:$,type:B,value:L}=e,I=(0,o.Z)(e,v),[z,F]=(0,d.Z)({controlled:i,default:Boolean(f),name:"SwitchBase",state:"checked"}),D=(0,p.Z)();let A=y;D&&"undefined"===typeof A&&(A=D.disabled);const T="checkbox"===B||"radio"===B,H=(0,r.Z)({},e,{checked:z,disabled:A,disableFocusRipple:x,edge:w}),N=(e=>{const{classes:t,checked:n,disabled:o,edge:r}=e,i={root:["root",n&&"checked",o&&"disabled",r&&`edge${(0,c.Z)(r)}`],input:["input"]};return(0,s.Z)(i,m,t)})(H);return(0,h.jsxs)(b,(0,r.Z)({component:"span",className:(0,a.Z)(N.root,u),centerRipple:!0,focusRipple:!x,disabled:A,tabIndex:null,role:void 0,onFocus:e=>{S&&S(e),D&&D.onFocus&&D.onFocus(e)},onBlur:e=>{C&&C(e),D&&D.onBlur&&D.onBlur(e)},ownerState:H,ref:t},I,{children:[(0,h.jsx)(g,(0,r.Z)({autoFocus:n,checked:i,defaultChecked:f,className:N.input,disabled:A,id:T&&Z,name:P,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;F(t),j&&j(e,t)},readOnly:M,ref:R,required:E,ownerState:H,tabIndex:$,type:B},"checkbox"===B&&void 0===L?{}:{value:L},k)),z?l:O]}))}))}}]);