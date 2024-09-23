import{j as e,F as n,L as t,S as s,H as r,I as a,M as o,r as i,u as l,a as u,N as c,T as d,C as m,s as f,b as h,d as p,e as j,f as g,h as b,O as x,i as w,k as v,l as q,p as y,m as k,n as _,o as C,P as S,A as I,q as T,t as F,v as P,D as R,w as L,x as $,y as E,z as D,B as M,E as V,G as z,$ as A,J as G,K as H,Q as X,R as N,U,V as O,W as B,X as W,Y as K,Z as Y,_ as J,a0 as Z,a1 as Q,a2 as ee,a3 as ne,a4 as te,a5 as se,a6 as re,a7 as ae,a8 as oe}from"shared";function ie({field:i,onChange:l}){const{label:u,error:c,value:d,name:m,required:f,description:h,type:p}=i,j={},g="integer"===p||"decimal"===p?"number":"text";"integer"===p&&(j.step="1"),"decimal"===p&&(j.step="any");const b="anonymous_requester_email"===p?"email":void 0;return e.jsxs(n,{children:[e.jsxs(t,{children:[u,f&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),h&&e.jsx(r,{dangerouslySetInnerHTML:{__html:h}}),e.jsx(a,{name:m,type:g,defaultValue:d,validation:c?"error":void 0,required:f,onChange:e=>{l&&l(e.target.value)},autoComplete:b,...j}),c&&e.jsx(o,{validation:"error",children:c})]})}const le=f(n)`
  .ck.ck-editor {
    margin-top: ${e=>e.theme.space.xs};
  }
`,ue=f(o)`
  .ck.ck-editor + & {
    margin-top: ${e=>e.theme.space.xs};
  }
`;function ce({field:n,hasWysiwyg:a,baseLocale:o,hasAtMentions:f,userRole:p,brandId:j,onChange:g}){const{label:b,error:x,value:w,name:v,required:q,description:y}=n,k=function({hasWysiwyg:n,baseLocale:t,hasAtMentions:s,userRole:r,brandId:a}){const o=i.useRef(!1),{addToast:f}=l(),{t:h}=u();return i.useCallback((async i=>{if(n&&i&&!o.current){o.current=!0;const{createEditor:n}=await import("wysiwyg").then((function(e){return e.m}));(await n(i,{editorType:"supportRequests",hasAtMentions:s,userRole:r,brandId:a,baseLocale:t})).plugins.get("Notification").on("show",((n,t)=>{n.stop();const s=t.message instanceof Error?t.message.message:t.message,{type:r,title:a}=t;f((({close:n})=>e.jsxs(c,{type:r,children:[e.jsx(d,{children:a}),s,e.jsx(m,{"aria-label":h("new-request-form.close-label","Close"),onClick:n})]})))}))}}),[n,t,s,r,a,f,h])}({hasWysiwyg:a,baseLocale:o,hasAtMentions:f,userRole:p,brandId:j});return e.jsxs(le,{children:[e.jsxs(t,{children:[b,q&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),y&&e.jsx(r,{dangerouslySetInnerHTML:{__html:y}}),e.jsx(h,{ref:k,name:v,defaultValue:w,validation:x?"error":void 0,required:q,onChange:e=>g(e.target.value),rows:6,isResizable:!0}),x&&e.jsx(ue,{validation:"error",children:x})]})}function de(){const{t:n}=u();return e.jsxs(e.Fragment,{children:[e.jsx(s,{"aria-hidden":"true",children:"-"}),e.jsx(s,{hidden:!0,children:n("new-request-form.dropdown.empty-option","Select an option")})]})}function me({field:n,onChange:t}){const{label:r,options:a,error:o,value:l,name:u,required:c,description:d}=n,m=null==l?"":l.toString(),f=i.useRef(null);return i.useEffect((()=>{if(f.current&&c){const e=f.current.querySelector("[role=combobox]");e?.setAttribute("aria-required","true")}}),[f,c]),e.jsxs(p,{children:[e.jsxs(j,{children:[r,c&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),d&&e.jsx(g,{dangerouslySetInnerHTML:{__html:d}}),e.jsxs(b,{ref:f,inputProps:{name:u,required:c},isEditable:!1,validation:o?"error":void 0,inputValue:m,selectionValue:m,renderValue:({selection:n})=>n?.label||e.jsx(de,{}),onChange:({selectionValue:e})=>{void 0!==e&&t(e)},children:[!c&&e.jsx(x,{value:"",label:"-",children:e.jsx(de,{})}),a.map((n=>e.jsx(x,{value:n.value.toString(),label:n.name},n.value)))]}),o&&e.jsx(w,{validation:"error",children:o})]})}function fe({field:a,onChange:l}){const{label:u,error:c,value:d,name:m,required:f,description:h}=a,[p,j]=i.useState(d);return e.jsxs(n,{children:[e.jsx("input",{type:"hidden",name:m,value:"off"}),e.jsxs(v,{name:m,required:f,defaultChecked:d,value:p?"on":"off",onChange:e=>{const{checked:n}=e.target;j(n),l(n)},children:[e.jsxs(t,{children:[u,f&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),h&&e.jsx(r,{dangerouslySetInnerHTML:{__html:h}})]}),c&&e.jsx(o,{validation:"error",children:c})]})}const he="[]";function pe(e){return`[${e.join("::")}]`}function je(e){return e.startsWith("[")&&e.endsWith("]")}function ge(e){const n=pe(e.slice(0,-1));return{type:"SubGroup",name:e[e.length-1],backOption:{type:"previous",label:"Back",value:n},options:[]}}function be({options:e,hasEmptyOption:n}){const t=i.useMemo((()=>function(e,n){const t={[he]:{type:"RootGroup",options:n?[{label:"-",value:""}]:[]}};return e.forEach((e=>{const{name:n,value:s}=e;if(n.includes("::")){const[e,r]=function(e){const n=e.split("::");return[n.slice(0,-1),n.slice(-1)[0]]}(n),a=pe(e);t[a]||(t[a]=ge(e)),t[a]?.options.push({value:s,label:n.split("::").join(" > "),menuLabel:r});for(let n=0;n<e.length;n++){const s=e.slice(0,n),r=e.slice(0,n+1),a=pe(s),o=pe(r);t[a]||(t[a]=ge(s)),void 0===t[a]?.options.find((e=>e.value===o))&&t[a]?.options.push({type:"next",label:r[r.length-1],value:o})}}else t[he].options.push({value:s,label:n})})),t}(e,n)),[e,n]),[s,r]=i.useState(function(e){const n={type:"RootGroup",options:[]};return Object.values(e).forEach((({options:e})=>{n.options.push(...e.filter((({type:e})=>void 0===e)))})),n}(t));i.useEffect((()=>{r(t[he])}),[t]);return{currentGroup:s,isGroupIdentifier:je,setCurrentGroupByIdentifier:e=>{const n=t[e];n&&r(n)}}}function xe({field:n}){const{label:t,options:r,error:a,value:o,name:l,required:u,description:c}=n,{currentGroup:d,isGroupIdentifier:m,setCurrentGroupByIdentifier:f}=be({options:r,hasEmptyOption:!1}),[h,v]=i.useState(o||[]),y=i.useRef(null);i.useEffect((()=>{if(y.current&&u){const e=y.current.querySelector("[role=combobox]");e?.setAttribute("aria-required","true")}}),[y,u]);return e.jsxs(p,{children:[h.map((n=>e.jsx("input",{type:"hidden",name:`${l}[]`,value:n},n))),e.jsxs(j,{children:[t,u&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),c&&e.jsx(g,{dangerouslySetInnerHTML:{__html:c}}),e.jsxs(b,{ref:y,isMultiselectable:!0,inputProps:{required:u},isEditable:!1,validation:a?"error":void 0,onChange:e=>{if(Array.isArray(e.selectionValue)){const n=e.selectionValue.slice(-1).toString();m(n)?f(n):v(e.selectionValue)}},selectionValue:h,maxHeight:"auto",children:["SubGroup"===d.type&&e.jsx(x,{...d.backOption}),"SubGroup"===d.type?e.jsx(q,{"aria-label":d.name,children:d.options.map((n=>e.jsx(x,{...n,children:n.menuLabel??n.label},n.value)))}):d.options.map((n=>e.jsx(x,{...n},n.value)))]}),a&&e.jsx(w,{validation:"error",children:a})]})}const we="return-focus-to-ticket-form-field";function ve({field:n,newRequestPath:t}){const s=i.createRef();return i.useEffect((()=>{sessionStorage.getItem(we)&&(sessionStorage.removeItem(we),s.current?.firstChild?.focus())}),[]),e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"hidden",name:n.name,value:n.value}),n.options.length>1&&e.jsxs(p,{children:[e.jsx(j,{children:n.label}),e.jsx(b,{isEditable:!1,onChange:({selectionValue:e})=>{if(e&&"number"==typeof e){const n=new URL(window.location.href);n.searchParams.set("ticket_form_id",e),sessionStorage.setItem(we,"true"),window.location.assign(`${t}${n.search}`)}},ref:s,children:n.options.map((t=>e.jsx(x,{value:t.value,label:t.name,isSelected:n.value===t.value,children:t.name},t.value)))})]})]})}function qe({field:n}){const{value:t,name:s}=n;return e.jsx("input",{type:"hidden",name:s,value:t})}function ye(e){const n=i.useRef(!1),t=i.useRef(!1);return{formRefCallback:i.useCallback((s=>{s&&!n.current&&(n.current=!0,s.submit=async()=>{if(!1===t.current){t.current=!0;const n=await async function(){const e=await fetch("/api/v2/help_center/sessions.json"),{current_session:n}=await e.json();return n.csrf_token}(),r=document.createElement("input");r.type="hidden",r.name="authenticity_token",r.value=n,s.appendChild(r);const a=e.filter((e=>"partialcreditcard"===e.type));for(const e of a){const n=s.querySelector(`input[name="${e.name}"]`);n&&n instanceof HTMLInputElement&&4===n.value.length&&(n.value=`XXXXXXXXX${n.value}`)}HTMLFormElement.prototype.submit.call(s)}})}),[e]),handleSubmit:e=>{e.preventDefault(),e.target.submit()}}}const ke=2048,_e="tf_",Ce=["true","false"],Se=["pre","strong","b","p","blockquote","ul","ol","li","h2","h3","h4","i","em","br"];function Ie(e,n){if(!Number.isNaN(Number(e))){const t=`request[custom_fields][${e}]`;return n.ticketFields.find((e=>e.name===t))}switch(e){case"anonymous_requester_email":return n.emailField;case"due_at":return n.dueDateField;case"collaborators":return n.ccField;case"organization_id":return n.organizationField;default:return n.ticketFields.find((n=>n.name===`request[${e}]`))}}function Te({ticketFields:e,ccField:n,dueDateField:t,emailField:s,organizationField:r}){return i.useMemo((()=>function(e){const{href:n}=location,t=new URL(n).searchParams,s={...e,ticketFields:[...e.ticketFields]};if(n.length>ke)return e;if(t.get("parent_id"))return e;for(const[e,n]of t){if(!e.startsWith(_e))continue;const t=Ie(e.substring(_e.length),s);if(!t)continue;const r=y.sanitize(n,{ALLOWED_TAGS:Se});switch(t.type){case"partialcreditcard":continue;case"multiselect":t.value=r.split(",").filter((e=>t.options.some((n=>n.value===e))));break;case"checkbox":Ce.includes(r)&&(t.value="true"===r?"on":"false"===r?"off":"");break;default:t.value=r}}return s}({ticketFields:e,ccField:n,dueDateField:t,emailField:s,organizationField:r})),[e,n,t,s,r])}const Fe=f.div`
  flex: 1;
`;function Pe({file:n,onRemove:t}){const{t:s}=u(),r=e=>{"Enter"!==e.code&&"Space"!==e.code&&"Delete"!==e.code&&"Backspace"!==e.code||(e.preventDefault(),t())},a="pending"===n.status?n.file_name:n.value.file_name,o=s("new-request-form.attachments.stop-upload","Stop upload"),i=s("new-request-form.attachments.remove-file","Remove file");return e.jsx(k.Item,{children:e.jsx(_,{type:"generic",title:a,onKeyDown:e=>{"Delete"!==e.code&&"Backspace"!==e.code||(e.preventDefault(),t())},children:"pending"===n.status?e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:a}),e.jsx(C,{content:o,children:e.jsx(_.Close,{"aria-label":o,onClick:()=>{t()},onKeyDown:r})}),e.jsx(S,{value:n.progress,"aria-label":s("new-request-form.attachments.uploading","Uploading {{fileName}}",{fileName:a})})]}):e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:e.jsx(I,{isExternal:!0,href:n.value.url,target:"_blank",children:a})}),e.jsx(C,{content:i,children:e.jsx(_.Delete,{"aria-label":i,onClick:()=>{t()},onKeyDown:r})}),e.jsx(S,{value:100,"aria-hidden":"true"})]})})})}async function Re(){const e=await fetch("/api/v2/users/me.json"),{user:{authenticity_token:n}}=await e.json();return n}function Le({field:s}){const{label:r,error:f,name:h,attachments:p}=s,{files:j,addPendingFile:g,setPendingFileProgress:b,setUploaded:x,removePendingFile:w,removeUploadedFile:v}=function(e){const[n,t]=i.useState(e);return{files:n,addPendingFile:i.useCallback(((e,n,s)=>{t((t=>[...t,{status:"pending",id:e,file_name:n,progress:0,xhr:s}]))}),[]),setPendingFileProgress:i.useCallback(((e,n)=>{t((t=>t.map((t=>"pending"===t.status&&t.id===e?{...t,progress:n}:t))))}),[]),removePendingFile:i.useCallback((e=>{t((n=>n.filter((n=>"pending"!==n.status||n.id!==e))))}),[]),removeUploadedFile:i.useCallback((e=>{t((n=>n.filter((n=>"uploaded"!==n.status||n.value.id!==e))))}),[]),setUploaded:i.useCallback(((e,n)=>{t((t=>t.map((t=>"pending"===t.status&&t.id===e?{status:"uploaded",value:n}:t))))}),[])}}(p.map((e=>({status:"uploaded",value:e})))??[]),{addToast:q}=l(),{t:y}=u(),k=i.useCallback((n=>{q((({close:t})=>e.jsxs(c,{type:"error",children:[e.jsx(d,{children:y("new-request-form.attachments.upload-error-title","Upload error")}),y("new-request-form.attachments.upload-error-description","There was an error uploading {{fileName}}. Try again or upload another file.",{fileName:n}),e.jsx(m,{"aria-label":y("new-request-form.close-label","Close"),onClick:t})]})))}),[q,y]),_=i.useCallback((async e=>{const n=await Re();for(const t of e){const e=new XMLHttpRequest,s=new URL(`${window.location.origin}/api/v2/uploads.json`);if(s.searchParams.append("filename",t.name),e.open("POST",s),t.type)e.setRequestHeader("Content-Type",t.type);else{const n=T.getType(t.name);e.setRequestHeader("Content-Type",n||"application/octet-stream")}e.setRequestHeader("X-CSRF-Token",n),e.responseType="json";const r=crypto.randomUUID();g(r,t.name,e),e.upload.addEventListener("progress",(({loaded:e,total:n})=>{const t=Math.round(e/n*100);t<=90&&b(r,t)})),e.addEventListener("load",(()=>{if(e.status>=200&&e.status<300){const{upload:{attachment:{file_name:n,content_url:t},token:s}}=e.response;x(r,{id:s,file_name:n,url:t})}else k(t.name),w(r)})),e.addEventListener("error",(()=>{k(t.name),w(r)})),e.send(t)}}),[g,w,b,x,k]),{getRootProps:C,getInputProps:S,isDragActive:I}=F({onDrop:_});return e.jsxs(n,{children:[e.jsx(t,{children:r}),f&&e.jsx(o,{validation:"error",children:f}),e.jsxs(P,{...C(),isDragging:I,children:[I?e.jsx("span",{children:y("new-request-form.attachments.drop-files-label","Drop files here")}):e.jsx("span",{children:y("new-request-form.attachments.choose-file-label","Choose a file or drag and drop here")}),e.jsx(a,{...S()})]}),j.map((n=>e.jsx(Pe,{file:n,onRemove:()=>{(async e=>{if("pending"===e.status)e.xhr.abort(),w(e.id);else{const n=await Re(),t=e.value.id;v(e.value.id),await fetch(`/api/v2/uploads/${t}.json`,{method:"DELETE",headers:{"X-CSRF-Token":n}})}})(n)}},"pending"===n.status?n.id:n.value.id))),j.map((n=>"uploaded"===n.status&&e.jsx("input",{type:"hidden",name:h,value:JSON.stringify(n.value)},n.value.id)))]})}function $e(e,n){return n.filter((n=>n.child_fields.some((n=>n.id===e))))}function Ee(e,n,t){return e.filter((e=>{const s=t.find((n=>n.id===e.parent_field_id));if(!s)return!1;const r=$e(s.id,n);return s.value===e.value&&(0===r.length||Ee(r,n,t).length>0)}))}function De(e,n){return 0===n.length?e:e.reduce(((t,s)=>{const r=$e(s.id,n);if(0===r.length)return[...t,s];const a=Ee(r,n,e);return a.length>0?[...t,{...s,required:a.some((e=>e.child_fields.some((e=>e.id==s.id&&e.is_required))))}]:t}),[])}function Me({field:l,locale:u,valueFormat:c,onChange:d}){const{label:m,error:f,value:h,name:p,required:j,description:g}=l,[b,x]=i.useState(h?new Date(h):void 0),w=e=>{if(void 0===e)return"";const n=e.toISOString();return"dateTime"===c?n:n.split("T")[0]};return e.jsxs(n,{children:[e.jsxs(t,{children:[m,j&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),g&&e.jsx(r,{dangerouslySetInnerHTML:{__html:g}}),e.jsx(R,{value:b,onChange:e=>{const n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0));x(n);const t=w(n);void 0!==t&&d(t)},locale:u,children:e.jsx(a,{required:j,lang:u,onChange:e=>{""===e.target.value&&(x(void 0),d(""))},validation:f?"error":void 0})}),f&&e.jsx(o,{validation:"error",children:f}),e.jsx("input",{type:"hidden",name:p,value:w(b)})]})}const Ve=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ze=f(E)`
  padding: ${e=>`${e.theme.space.xxs} ${e.theme.space.sm}`};

  // Removes white spaces for inline elements
  font-size: 0;

  // Same as height of Tag size="large" + base space (4px)
  // to give some vertical space between tags
  --line-height: ${e=>8*e.theme.space.base+e.theme.space.base}px;
  line-height: var(--line-height);
`,Ae=f.span`
  display: inline-block;
  margin-right: ${e=>e.theme.space.sm};
`,Ge=f(D)`
  ${e=>$({theme:e.theme,shadowWidth:"sm",selector:"&:focus"})}
`,He=f.div`
  display: inline-block;
  position: relative;
`,Xe=f(E)`
  display: inline-block;
  min-width: 200px;
  opacity: 0;
  user-select: none;
  height: var(--line-height);
  line-height: var(--line-height);
`,Ne=f(a)`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--line-height);
  line-height: var(--line-height);
`;function Ue({field:a}){const{label:l,value:c,name:d,error:m,description:f}=a,{t:h}=u(),p=c?c.split(",").map((e=>e.trim())):[],[j,g]=i.useState(p),[b,x]=i.useState(""),w=i.useRef(null),v=i.useRef(null),{getContainerProps:q,getGridProps:y,getGridRowProps:k,getGridCellProps:_,getTagCloseProps:S,getInputProps:I,getAnnouncementProps:T,announcement:F}=function({tags:e,onTagsChange:n,inputValue:t,onInputValueChange:s,inputRef:r,gridRowRef:a,i18n:o}){const[l,u]=i.useState(0),[c,d]=i.useState(""),m=i.useCallback(((e,n)=>{u(n)}),[u]),{getGridProps:f,getGridCellProps:h}=L({matrix:[e],rowIndex:0,colIndex:l,onChange:m}),p=n=>e.includes(n),j=t=>{n([...e,t]),d(o.addedTag(t))},g=t=>{const s=e[t];n(e.filter(((e,n)=>n!==t))),d(o.removedTag(s)),u(0),setTimeout((()=>{const e=a.current?.querySelector('[tabindex="0"]');e?.focus()}),100)},b=e=>{e.target===e.currentTarget&&r.current?.focus()},x=()=>{u(0)},w=e=>{const n=e.target.value;!n||"Space"!==e.code&&"Enter"!==e.code&&"Comma"!==e.code&&"Tab"!==e.code||(e.preventDefault(),p(n)||j(n),s(""))},v=e=>{const n=e.target.value,[t,r]=[n.slice(0,-1),n.slice(-1)];" "===r||","===r?(t.length>0&&!p(t)&&j(t),s("")):s(n)},q=t=>{t.preventDefault();const s=t.clipboardData.getData("text"),r=new Set(s.split(/[\s,;]+/).filter((n=>!e.includes(n))));n([...e,...r]),d(o.addedTags([...r]))},y=e=>n=>{"Backspace"===n.code&&(n.preventDefault(),g(e))},k=e=>()=>{g(e)};return{getContainerProps:()=>({onClick:b,onBlur:x,tabIndex:-1}),getGridProps:f,getGridRowProps:()=>({role:"row"}),getGridCellProps:e=>h({rowIndex:0,colIndex:e,onKeyDown:y(e)}),getTagCloseProps:e=>({onClick:k(e)}),getInputProps:()=>({value:t,onChange:v,onKeyDown:w,onPaste:q}),announcement:c,getAnnouncementProps:()=>({"aria-live":"polite","aria-relevant":"text"})}}({tags:j,onTagsChange:g,inputValue:b,onInputValueChange:x,inputRef:w,gridRowRef:v,i18n:{addedTag:e=>h("new-request-form.cc-field.email-added","{{email}} has been added",{email:e}),removedTag:e=>h("new-request-form.cc-field.email-removed","{{email}} has been removed",{email:e}),addedTags:e=>h("new-request-form.cc-field.emails-added","{{emails}} have been added",{emails:e})}}),P=(n,t,s)=>e.jsxs(Ge,{size:"large","aria-label":h("new-request-form.cc-field.email-label","{{email}} - Press Backspace to remove",{email:s}),hue:t?void 0:"red",children:[!t&&e.jsx(D.Avatar,{children:e.jsx(M,{})}),e.jsx("span",{children:s}),e.jsx(D.Close,{...S(n)})]});return e.jsxs(n,{children:[e.jsx(t,{children:l}),f&&e.jsx(r,{children:f}),e.jsxs(ze,{...q(),children:[j.length>0&&e.jsx("span",{...y({"aria-label":h("new-request-form.cc-field.container-label","Selected CC emails")}),children:e.jsx("span",{ref:v,...k(),children:j.map(((n,t)=>{const s=Ve.test(n);return s?e.jsx(Ae,{..._(t),children:P(t,s,n)},t):e.jsx(C,{content:h("new-request-form.cc-field.invalid-email","Invalid email address"),children:e.jsx(Ae,{..._(t),children:P(t,s,n)})},t)}))})}),e.jsxs(He,{children:[e.jsx(Xe,{isBare:!0,"aria-hidden":"true",tabIndex:-1,children:b}),e.jsx(Ne,{ref:w,isBare:!0,...I()})]})]}),m&&e.jsx(o,{validation:"error",children:m}),j.map((n=>e.jsx("input",{type:"hidden",name:d,value:n},n))),e.jsx(s,{hidden:!0,...T(),children:F})]})}const Oe=f(s)`
  margin-left: ${e=>e.theme.space.xxs};
  font-weight: ${e=>e.theme.fontWeights.medium};
`;function Be({field:a,onChange:i}){const{t:l}=u(),{label:c,error:d,value:m,name:f,required:h,description:p}=a,j=function(e){return e?e.replaceAll("X",""):""}(m);return e.jsxs(n,{children:[e.jsxs(t,{children:[c,h&&e.jsx(s,{"aria-hidden":"true",children:"*"}),e.jsx(Oe,{children:l("new-request-form.credit-card-digits-hint","(Last 4 digits)")})]}),p&&e.jsx(r,{dangerouslySetInnerHTML:{__html:p}}),e.jsx(V,{start:e.jsx(z,{}),name:f,type:"text",value:j,onChange:e=>i(e.target.value),validation:d?"error":void 0,required:h,maxLength:4,placeholder:"XXXX"}),d&&e.jsx(o,{validation:"error",children:d})]})}function We({field:n,onChange:t}){const{label:r,options:a,error:o,value:l,name:u,required:c,description:d}=n,{currentGroup:m,isGroupIdentifier:f,setCurrentGroupByIdentifier:h}=be({options:a,hasEmptyOption:!0}),v=l??"",[y,k]=i.useState(!1),_=i.useRef(null);i.useEffect((()=>{if(_.current&&c){const e=_.current.querySelector("[role=combobox]");e?.setAttribute("aria-required","true")}}),[_,c]);return e.jsxs(p,{children:[e.jsxs(j,{children:[r,c&&e.jsx(s,{"aria-hidden":"true",children:"*"})]}),d&&e.jsx(g,{dangerouslySetInnerHTML:{__html:d}}),e.jsxs(b,{ref:_,inputProps:{required:c,name:u},isEditable:!1,validation:o?"error":void 0,onChange:e=>{"string"==typeof e.selectionValue&&f(e.selectionValue)?h(e.selectionValue):("string"==typeof e.selectionValue&&t(e.selectionValue),void 0!==e.isExpanded&&k(e.isExpanded))},selectionValue:v,inputValue:v,renderValue:({selection:n})=>n?.label??e.jsx(de,{}),isExpanded:y,children:["SubGroup"===m.type&&e.jsx(x,{...m.backOption}),"SubGroup"===m.type?e.jsx(q,{"aria-label":m.name,children:m.options.map((n=>e.jsx(x,{...n,children:n.menuLabel??n.label},n.value)))}):m.options.map((n=>""===n.value?e.jsx(x,{...n,children:e.jsx(de,{})},n.value):e.jsx(x,{...n},n.value)))]}),o&&e.jsx(w,{validation:"error",children:o})]})}const Ke=A`
  from {
    grid-template-rows: 0fr;
  }
  to {
    grid-template-rows: 1fr;
  }
`,Ye=f.div`
  display: grid;
  animation: ${Ke} 200ms forwards;
`,Je=f.div`
  overflow: hidden;
`,Ze=f.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Qe=f.li`
  margin: ${e=>e.theme.space.sm} 0;
`;function en({query:n,locale:t}){const s=function(e,n){const[t,s]=i.useState(e);return i.useEffect((()=>{const t=setTimeout((()=>s(e)),n);return()=>{clearTimeout(t)}}),[e,n]),t}(n,500),[r,a]=i.useState([]),o=i.useRef({}),{t:l}=u();return i.useEffect((()=>{const e=s?.trim().toLocaleLowerCase();if(!e||!function(e){const n=e.charCodeAt(0);return n>=19968&&n<=195103?e.length>=2:e.length>=3}(e))return void a([]);const n=new URL(`${window.location.origin}/api/v2/help_center/deflection/suggestions.json`);n.searchParams.append("locale",t),n.searchParams.append("query",e);const r=o.current[n.toString()];r?a(r):fetch(n).then((e=>e.json())).then((({results:e})=>{o.current[n.toString()]=e,a(e)}))}),[s,t]),r.length>0?e.jsx(Ye,{"data-test-id":"suggested-articles",children:e.jsxs(Je,{children:[e.jsx("h2",{children:l("new-request-form.suggested-articles","Suggested articles")}),e.jsx(Ze,{children:r.map((n=>e.jsx(Qe,{children:e.jsx(I,{href:n.html_url,children:n.name})},n.html_url)))})]})}):null}const nn=f.h3`
  font-size: ${e=>e.theme.fontSizes.md};
  font-weight: ${e=>e.theme.fontWeights.bold};
`,tn=f(H)`
  color: ${e=>G("successHue",700,e.theme)};
`,sn=f(X)`
  position: absolute;
  top: ${e=>5.5*e.theme.space.base}px;
  inset-inline-start: ${e=>4*e.theme.space.base+"px"};
`,rn=f(I)`
  display: inline-block;
  margin-top: ${(props) => props.theme.space.sm};
`;
function AnswerBotModal({ authToken, interactionAccessToken, articles, requestId, hasRequestManagement, isSignedIn, helpCenterPath, requestsPath, requestPath, }) {
    const [expandedIndex, setExpandedIndex] = reactExports.useState(0);
    const modalContainer = useModalContainer();
    const { t } = useTranslation();
    const getExpandedArticleId = () => {
        return String(articles[expandedIndex]?.article_id);
    };
    const getUnsolvedRedirectUrl = () => {
        if (!isSignedIn) {
            const searchParams = new URLSearchParams();
            searchParams.set("return_to", requestsPath);
            return `${helpCenterPath}?${searchParams.toString()}`;
        }
        else if (hasRequestManagement) {
            return requestPath;
        }
        else {
            return helpCenterPath;
        }
    };
    const addUnsolvedNotificationAndRedirect = () => {
        addFlashNotification({
            type: "success",
            message: t("new-request-form.answer-bot-modal.request-submitted", "Your request was successfully submitted"),
        });
        window.location.assign(getUnsolvedRedirectUrl());
    };
    const solveRequest = async () => {
        const response = await fetch("/api/v2/answer_bot/resolution", {
            method: "POST",
            body: JSON.stringify({
                article_id: getExpandedArticleId(),
                interaction_access_token: interactionAccessToken,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            addFlashNotification({
                type: "success",
                message: t("new-request-form.answer-bot-modal.request-closed", "Nice. Your request has been closed."),
            });
        }
        else {
            addFlashNotification({
                type: "error",
                message: t("new-request-form.answer-bot-modal.solve-error", "There was an error closing your request"),
            });
        }
        window.location.href = helpCenterPath;
    };
    const markArticleAsIrrelevant = async () => {
        await fetch("/api/v2/answer_bot/rejection", {
            method: "POST",
            body: JSON.stringify({
                article_id: getExpandedArticleId(),
                interaction_access_token: interactionAccessToken,
                reason_id: 0,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        addUnsolvedNotificationAndRedirect();
    };
    return (jsxRuntimeExports.jsxs(Modal, { appendToNode: modalContainer, onClose: () => {
            addUnsolvedNotificationAndRedirect();
        }, children: [jsxRuntimeExports.jsxs(StyledHeader, { tag: "h2", children: [jsxRuntimeExports.jsx(StyledSuccessIcon, {}), t("new-request-form.answer-bot-modal.request-submitted", "Your request was successfully submitted")] }), jsxRuntimeExports.jsxs(Body, { children: [jsxRuntimeExports.jsx(H3, { children: t("new-request-form.answer-bot-modal.title", "While you wait, do any of these articles answer your question?") }), jsxRuntimeExports.jsx("p", { children: t("new-request-form.answer-bot-modal.footer-content", "If it does, we can close your recent request {{requestId}}", {
                            requestId: `\u202D#${requestId}\u202C`,
                        }) }), jsxRuntimeExports.jsx(Accordion, { level: 4, expandedSections: [expandedIndex], onChange: (index) => {
                            setExpandedIndex(index);
                        }, children: articles.map(({ article_id, html_url, snippet, title }) => (jsxRuntimeExports.jsxs(Accordion.Section, { children: [jsxRuntimeExports.jsx(Accordion.Header, { children: jsxRuntimeExports.jsx(Accordion.Label, { children: title }) }), jsxRuntimeExports.jsxs(Accordion.Panel, { children: [jsxRuntimeExports.jsx(Paragraph, { dangerouslySetInnerHTML: { __html: snippet } }), jsxRuntimeExports.jsx(ArticleLink, { isExternal: true, href: `${html_url}?auth_token=${authToken}`, target: "_blank", children: t("new-request-form.answer-bot-modal.view-article", "View article") })] })] }, article_id))) })] }), jsxRuntimeExports.jsxs(Footer$1, { children: [jsxRuntimeExports.jsx(FooterItem, { children: jsxRuntimeExports.jsx(Button, { onClick: () => {
                                markArticleAsIrrelevant();
                            }, children: t("new-request-form.answer-bot-modal.mark-irrelevant", "No, I need help") }) }), jsxRuntimeExports.jsx(FooterItem, { children: jsxRuntimeExports.jsx(Button, { isPrimary: true, onClick: () => {
                                solveRequest();
                            }, children: t("new-request-form.answer-bot-modal.solve-request", "Yes, close my request") }) })] }), jsxRuntimeExports.jsx(Close$1, { "aria-label": t("new-request-form.close-label", "Close") })] }));
}

function getCustomObjectKey(targetType) {
    return targetType.replace("zen:custom_object:", "");
}
const EMPTY_OPTION = {
    value: "",
    name: "-",
};
function LookupField({ field, userId, organizationId, onChange, }) {
    const { id: fieldId, label, error, value, name, required, description, relationship_target_type, } = field;
    const [options, setOptions] = reactExports.useState([]);
    const [selectedOption, setSelectedOption] = reactExports.useState(null);
    const [inputValue, setInputValue] = reactExports.useState(value);
    const [isLoadingOptions, setIsLoadingOptions] = reactExports.useState(false);
    const { t } = useTranslation();
    const customObjectKey = getCustomObjectKey(relationship_target_type);
    const loadingOption = {
        name: t("new-request-form.lookup-field.loading-options", "Loading items..."),
        id: "loading",
    };
    const noResultsOption = {
        name: t("new-request-form.lookup-field.no-matches-found", "No matches found"),
        id: "no-results",
    };
    const fetchSelectedOption = reactExports.useCallback(async (selectionValue) => {
        try {
            const res = await fetch(`/api/v2/custom_objects/${customObjectKey}/records/${selectionValue}`);
            if (res.ok) {
                const { custom_object_record } = await res.json();
                const newSelectedOption = {
                    name: custom_object_record.name,
                    value: custom_object_record.id,
                };
                setSelectedOption(newSelectedOption);
                setInputValue(custom_object_record.name);
            }
        }
        catch (error) {
            console.error(error);
        }
    }, [customObjectKey]);
    const fetchOptions = reactExports.useCallback(async (inputValue) => {
        const searchParams = new URLSearchParams();
        searchParams.set("name", inputValue.toLocaleLowerCase());
        searchParams.set("source", "zen:ticket");
        searchParams.set("field_id", fieldId.toString());
        searchParams.set("requester_id", userId.toString());
        if (organizationId !== null)
            searchParams.set("organization_id", organizationId);
        setIsLoadingOptions(true);
        try {
            const response = await fetch(`/api/v2/custom_objects/${customObjectKey}/records/autocomplete?${searchParams.toString()}`);
            const data = await response.json();
            if (response.ok) {
                let fetchedOptions = data.custom_object_records.map(({ name, id }) => ({
                    name,
                    value: id,
                }));
                if (selectedOption) {
                    fetchedOptions = fetchedOptions.filter((option) => option.value !== selectedOption.value);
                    fetchedOptions = [selectedOption, ...fetchedOptions];
                }
                setOptions(fetchedOptions);
            }
            else {
                setOptions([]);
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoadingOptions(false);
        }
    }, [customObjectKey, fieldId, organizationId, selectedOption, userId]);
    const debouncedFetchOptions = reactExports.useMemo(() => debounce(fetchOptions, 300), [fetchOptions]);
    reactExports.useEffect(() => {
        return () => debouncedFetchOptions.cancel();
    }, [debouncedFetchOptions]);
    const handleChange = reactExports.useCallback(({ inputValue, selectionValue }) => {
        if (selectionValue !== undefined) {
            if (selectionValue == "") {
                setSelectedOption(EMPTY_OPTION);
                setInputValue(EMPTY_OPTION.name);
                setOptions([]);
                onChange(EMPTY_OPTION.value);
            }
            else {
                const selectedOption = options.find((option) => option.value === selectionValue);
                if (selectedOption) {
                    setInputValue(selectedOption.name);
                    setSelectedOption(selectedOption);
                    setOptions([selectedOption]);
                    onChange(selectedOption.value);
                }
            }
        }
        if (inputValue !== undefined) {
            setInputValue(inputValue);
            debouncedFetchOptions(inputValue);
        }
    }, [debouncedFetchOptions, onChange, options]);
    reactExports.useEffect(() => {
        if (value) {
            fetchSelectedOption(value);
        }
    }, []); //we don't set dependency array as we want this hook to be called only once
    const onFocus = () => {
        setInputValue("");
        fetchOptions("*");
    };
    return (jsxRuntimeExports.jsxs(Field$1, { children: [jsxRuntimeExports.jsxs(Label$1, { children: [label, required && jsxRuntimeExports.jsx(Span, { "aria-hidden": "true", children: "*" })] }), description && (jsxRuntimeExports.jsx(Hint$1, { dangerouslySetInnerHTML: { __html: description } })), jsxRuntimeExports.jsxs(Combobox, { inputProps: { required }, "data-test-id": "lookup-field-combobox", validation: error ? "error" : undefined, inputValue: inputValue, selectionValue: selectedOption?.value, isAutocomplete: true, placeholder: t("new-request-form.lookup-field.placeholder", "Search {{label}}", { label: label.toLowerCase() }), onFocus: onFocus, onChange: handleChange, renderValue: () => selectedOption ? selectedOption?.name : EMPTY_OPTION.name, children: [selectedOption?.name !== EMPTY_OPTION.name && (jsxRuntimeExports.jsx(Option, { value: "", label: "-", children: jsxRuntimeExports.jsx(EmptyValueOption, {}) })), isLoadingOptions && (jsxRuntimeExports.jsx(Option, { isDisabled: true, value: loadingOption.name }, loadingOption.id)), !isLoadingOptions &&
                        inputValue?.length > 0 &&
                        options.length === 0 && (jsxRuntimeExports.jsx(Option, { isDisabled: true, value: noResultsOption.name }, noResultsOption.id)), !isLoadingOptions &&
                        options.length !== 0 &&
                        options.map((option) => (jsxRuntimeExports.jsx(Option, { value: option.value, label: option.name }, option.value)))] }), error && jsxRuntimeExports.jsx(Message$1, { validation: "error", children: error }), jsxRuntimeExports.jsx("input", { type: "hidden", name: name, value: selectedOption?.value })] }));
}

const StyledParagraph = styled(Paragraph) `
  margin: ${(props) => props.theme.space.md} 0;
`;
const Form = styled.form `
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.space.md};
`,dn=f.div`
  margin-top: ${e=>e.theme.space.md};
`;function mn({requestForm:n,wysiwyg:t,newRequestPath:s,parentId:r,parentIdPath:a,locale:o,baseLocale:l,hasAtMentions:c,userRole:d,userId:m,brandId:f,organizations:h,answerBotModal:p}){const{ticket_fields:j,action:g,http_method:b,accept_charset:x,errors:w,parent_id_field:v,ticket_form_field:q,email_field:y,cc_field:k,organization_field:_,due_date_field:C,end_user_conditions:S,attachments_field:T,inline_attachments_fields:F,description_mimetype_field:P}=n,{answerBot:R}=p,{ticketFields:L,emailField:$,ccField:E,organizationField:D,dueDateField:M}=Te({ticketFields:j,emailField:y,ccField:k,organizationField:_,dueDateField:C}),[V,z]=i.useState(L),[A,G]=i.useState(D),[H,X]=i.useState(M),N=De(V,S),{formRefCallback:U,handleSubmit:O}=ye(V),{t:B}=u(),W=h.length>0&&h[0]?.id?h[0]?.id?.toString():null,K=i.useCallback(((e,n)=>{z(V.map((t=>t.name===e.name?{...t,value:n}:t)))}),[V]);return e.jsxs(e.Fragment,{children:[r&&e.jsx(un,{children:e.jsx(I,{href:a,children:B("new-request-form.parent-request-link","Follow-up to request {{parentId}}",{parentId:`‭#${r}‬`})})}),e.jsx(un,{"aria-hidden":"true",children:B("new-request-form.required-fields-info","Fields marked with an asterisk (*) are required.")}),e.jsxs(cn,{ref:U,action:g,method:b,acceptCharset:x,noValidate:!0,onSubmit:O,children:[w&&e.jsx(ne,{type:"error",children:w}),v&&e.jsx(qe,{field:v}),q.options.length>0&&e.jsx(ve,{field:q,newRequestPath:s}),$&&e.jsx(ie,{field:$},$.name),E&&e.jsx(Ue,{field:E}),A&&e.jsx(me,{field:A,onChange:e=>{!function(e){null!==A&&G({...A,value:e})}(e)}},A.name),N.map((n=>{switch(n.type){case"subject":return e.jsxs(e.Fragment,{children:[e.jsx(ie,{field:n,onChange:e=>K(n,e)},n.name),e.jsx(en,{query:n.value,locale:o})]});case"text":case"integer":case"decimal":case"regexp":return e.jsx(ie,{field:n,onChange:e=>K(n,e)},n.name);case"partialcreditcard":return e.jsx(Be,{field:n,onChange:e=>K(n,e)});case"description":return e.jsxs(e.Fragment,{children:[e.jsx(ce,{field:n,hasWysiwyg:t,baseLocale:l,hasAtMentions:c,userRole:d,brandId:f,onChange:e=>K(n,e)},n.name),e.jsx("input",{type:"hidden",name:P.name,value:t?"text/html":"text/plain"})]});case"textarea":return e.jsx(ce,{field:n,hasWysiwyg:!1,baseLocale:l,hasAtMentions:c,userRole:d,brandId:f,onChange:e=>K(n,e)},n.name);case"priority":case"basic_priority":case"tickettype":return e.jsxs(e.Fragment,{children:[e.jsx(me,{field:n,onChange:e=>K(n,e)},n.name),"task"===n.value&&e.jsx(Me,{field:H,locale:l,valueFormat:"dateTime",onChange:e=>{!function(e){null!==H&&X({...H,value:e})}(e)}})]});case"checkbox":return e.jsx(fe,{field:n,onChange:e=>K(n,e)});case"date":return e.jsx(Me,{field:n,locale:l,valueFormat:"date",onChange:e=>K(n,e)});case"multiselect":return e.jsx(xe,{field:n});case"tagger":return e.jsx(We,{field:n,onChange:e=>K(n,e)},n.name);case"lookup":return e.jsx(ln,{field:n,userId:m,organizationId:null!==A?A.value:W,onChange:e=>K(n,e)},n.name);default:return e.jsx(e.Fragment,{})}})),T&&e.jsx(Le,{field:T}),F.map((({type:n,name:t,value:s},r)=>e.jsx("input",{type:n,name:t,value:s},r))),e.jsx(dn,{children:(0===q.options.length||q.value)&&e.jsx(J,{isPrimary:!0,type:"submit",children:B("new-request-form.submit","Submit")})})]}),R.auth_token&&R.interaction_access_token&&R.articles.length>0&&R.request_id&&e.jsx(an,{authToken:R.auth_token,interactionAccessToken:R.interaction_access_token,articles:R.articles,requestId:R.request_id,...p})]})}async function fn(n,t,s){const{baseLocale:r}=t;te(r),await se(r,(()=>function(e){switch(e){case"./translations/locales/af.json":return import("new-request-form-translations").then((function(e){return e.a}));case"./translations/locales/ar-x-pseudo.json":return import("new-request-form-translations").then((function(e){return e.b}));case"./translations/locales/ar.json":return import("new-request-form-translations").then((function(e){return e.c}));case"./translations/locales/az.json":return import("new-request-form-translations").then((function(e){return e.d}));case"./translations/locales/be.json":return import("new-request-form-translations").then((function(e){return e.e}));case"./translations/locales/bg.json":return import("new-request-form-translations").then((function(e){return e.f}));case"./translations/locales/bn.json":return import("new-request-form-translations").then((function(e){return e.g}));case"./translations/locales/bs.json":return import("new-request-form-translations").then((function(e){return e.h}));case"./translations/locales/ca.json":return import("new-request-form-translations").then((function(e){return e.i}));case"./translations/locales/cs.json":return import("new-request-form-translations").then((function(e){return e.j}));case"./translations/locales/cy.json":return import("new-request-form-translations").then((function(e){return e.k}));case"./translations/locales/da.json":return import("new-request-form-translations").then((function(e){return e.l}));case"./translations/locales/de-de.json":return import("new-request-form-translations").then((function(e){return e.m}));case"./translations/locales/de-x-informal.json":return import("new-request-form-translations").then((function(e){return e.n}));case"./translations/locales/de.json":return import("new-request-form-translations").then((function(e){return e.o}));case"./translations/locales/el.json":return import("new-request-form-translations").then((function(e){return e.p}));case"./translations/locales/en-001.json":return import("new-request-form-translations").then((function(e){return e.q}));case"./translations/locales/en-150.json":return import("new-request-form-translations").then((function(e){return e.r}));case"./translations/locales/en-au.json":return import("new-request-form-translations").then((function(e){return e.s}));case"./translations/locales/en-ca.json":return import("new-request-form-translations").then((function(e){return e.t}));case"./translations/locales/en-gb.json":return import("new-request-form-translations").then((function(e){return e.u}));case"./translations/locales/en-my.json":return import("new-request-form-translations").then((function(e){return e.v}));case"./translations/locales/en-ph.json":return import("new-request-form-translations").then((function(e){return e.w}));case"./translations/locales/en-se.json":return import("new-request-form-translations").then((function(e){return e.x}));case"./translations/locales/en-us.json":return import("new-request-form-translations").then((function(e){return e.y}));case"./translations/locales/en-x-dev.json":return import("new-request-form-translations").then((function(e){return e.z}));case"./translations/locales/en-x-keys.json":return import("new-request-form-translations").then((function(e){return e.A}));case"./translations/locales/en-x-obsolete.json":return import("new-request-form-translations").then((function(e){return e.B}));case"./translations/locales/en-x-pseudo.json":return import("new-request-form-translations").then((function(e){return e.C}));case"./translations/locales/en-x-test.json":return import("new-request-form-translations").then((function(e){return e.D}));case"./translations/locales/es-419.json":return import("new-request-form-translations").then((function(e){return e.E}));case"./translations/locales/es-es.json":return import("new-request-form-translations").then((function(e){return e.F}));case"./translations/locales/es.json":return import("new-request-form-translations").then((function(e){return e.G}));case"./translations/locales/et.json":return import("new-request-form-translations").then((function(e){return e.H}));case"./translations/locales/eu.json":return import("new-request-form-translations").then((function(e){return e.I}));case"./translations/locales/fa-af.json":return import("new-request-form-translations").then((function(e){return e.J}));case"./translations/locales/fa.json":return import("new-request-form-translations").then((function(e){return e.K}));case"./translations/locales/fi.json":return import("new-request-form-translations").then((function(e){return e.L}));case"./translations/locales/fil.json":return import("new-request-form-translations").then((function(e){return e.M}));case"./translations/locales/fo.json":return import("new-request-form-translations").then((function(e){return e.N}));case"./translations/locales/fr-ca.json":return import("new-request-form-translations").then((function(e){return e.O}));case"./translations/locales/fr.json":return import("new-request-form-translations").then((function(e){return e.P}));case"./translations/locales/ga.json":return import("new-request-form-translations").then((function(e){return e.Q}));case"./translations/locales/he.json":return import("new-request-form-translations").then((function(e){return e.R}));case"./translations/locales/hi.json":return import("new-request-form-translations").then((function(e){return e.S}));case"./translations/locales/hr.json":return import("new-request-form-translations").then((function(e){return e.T}));case"./translations/locales/hu.json":return import("new-request-form-translations").then((function(e){return e.U}));case"./translations/locales/hy.json":return import("new-request-form-translations").then((function(e){return e.V}));case"./translations/locales/id.json":return import("new-request-form-translations").then((function(e){return e.W}));case"./translations/locales/is.json":return import("new-request-form-translations").then((function(e){return e.X}));case"./translations/locales/it-ch.json":return import("new-request-form-translations").then((function(e){return e.Y}));case"./translations/locales/it.json":return import("new-request-form-translations").then((function(e){return e.Z}));case"./translations/locales/ja.json":return import("new-request-form-translations").then((function(e){return e._}));case"./translations/locales/ka.json":return import("new-request-form-translations").then((function(e){return e.$}));case"./translations/locales/kk.json":return import("new-request-form-translations").then((function(e){return e.a0}));case"./translations/locales/kl-dk.json":return import("new-request-form-translations").then((function(e){return e.a1}));case"./translations/locales/ko.json":return import("new-request-form-translations").then((function(e){return e.a2}));case"./translations/locales/ku.json":return import("new-request-form-translations").then((function(e){return e.a3}));case"./translations/locales/lt.json":return import("new-request-form-translations").then((function(e){return e.a4}));case"./translations/locales/lv.json":return import("new-request-form-translations").then((function(e){return e.a5}));case"./translations/locales/mk.json":return import("new-request-form-translations").then((function(e){return e.a6}));case"./translations/locales/mn.json":return import("new-request-form-translations").then((function(e){return e.a7}));case"./translations/locales/ms.json":return import("new-request-form-translations").then((function(e){return e.a8}));case"./translations/locales/mt.json":return import("new-request-form-translations").then((function(e){return e.a9}));case"./translations/locales/my.json":return import("new-request-form-translations").then((function(e){return e.aa}));case"./translations/locales/nl-be.json":return import("new-request-form-translations").then((function(e){return e.ab}));case"./translations/locales/nl.json":return import("new-request-form-translations").then((function(e){return e.ac}));case"./translations/locales/no.json":return import("new-request-form-translations").then((function(e){return e.ad}));case"./translations/locales/pl.json":return import("new-request-form-translations").then((function(e){return e.ae}));case"./translations/locales/pt-br.json":return import("new-request-form-translations").then((function(e){return e.af}));case"./translations/locales/pt.json":return import("new-request-form-translations").then((function(e){return e.ag}));case"./translations/locales/ro.json":return import("new-request-form-translations").then((function(e){return e.ah}));case"./translations/locales/ru.json":return import("new-request-form-translations").then((function(e){return e.ai}));case"./translations/locales/sk.json":return import("new-request-form-translations").then((function(e){return e.aj}));case"./translations/locales/sl.json":return import("new-request-form-translations").then((function(e){return e.ak}));case"./translations/locales/sq.json":return import("new-request-form-translations").then((function(e){return e.al}));case"./translations/locales/sr-me.json":return import("new-request-form-translations").then((function(e){return e.am}));case"./translations/locales/sr.json":return import("new-request-form-translations").then((function(e){return e.an}));case"./translations/locales/sv.json":return import("new-request-form-translations").then((function(e){return e.ao}));case"./translations/locales/th.json":return import("new-request-form-translations").then((function(e){return e.ap}));case"./translations/locales/tr.json":return import("new-request-form-translations").then((function(e){return e.aq}));case"./translations/locales/uk.json":return import("new-request-form-translations").then((function(e){return e.ar}));case"./translations/locales/ur.json":return import("new-request-form-translations").then((function(e){return e.as}));case"./translations/locales/uz.json":return import("new-request-form-translations").then((function(e){return e.at}));case"./translations/locales/vi.json":return import("new-request-form-translations").then((function(e){return e.au}));case"./translations/locales/zh-cn.json":return import("new-request-form-translations").then((function(e){return e.av}));case"./translations/locales/zh-tw.json":return import("new-request-form-translations").then((function(e){return e.aw}));default:return new Promise((function(n,t){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./translations/locales/${r}.json`))),re.render(e.jsx(ae,{theme:oe(n),children:e.jsx(mn,{...t})}),s)}export{fn as renderNewRequestForm};
