import{a5 as o,a6 as r,r as n,s as e,j as t,a7 as c,a8 as s}from"shared";const i="HC_FLASH_NOTIFICATIONS";function l(n){return{...o,rtl:"rtl"===document.dir,colors:{...o.colors,background:n.background_color,foreground:n.text_color,primaryHue:n.brand_color},components:{"buttons.anchor":r`
        color: ${n.link_color};

        :hover,
        :active,
        :focus {
          color: ${n.hover_link_color};
        }

        &:visited {
          color: ${n.visited_link_color};
        }
      `,"buttons.button":r`
        ${o=>o.isPrimary&&r`
            color: ${n.brand_text_color};
          `}
      `}}}const a=n.createContext(null),d=e.div`
  z-index: 2147483647;
  position: fixed;
`;function u({children:o}){const[r,e]=n.useState();return t.jsxs(t.Fragment,{children:[t.jsx(d,{ref:o=>{e(o)}}),r&&t.jsx(a.Provider,{value:r,children:o})]})}function h({theme:o,children:r}){return t.jsx(c,{theme:o,children:t.jsx(s,{zIndex:2147483647,children:t.jsx(u,{children:r})})})}export{i as F,a as M,h as T,l as c};
