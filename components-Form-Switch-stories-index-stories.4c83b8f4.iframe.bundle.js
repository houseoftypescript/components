"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[249],{"./src/components/Form/Switch/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SwitchPrimary:()=>SwitchPrimary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledSwitchContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  width: 2.5rem;
  height: 1.4rem;
  box-sizing: border-box;
  background-color: ${props=>props.state?"#ef4444":"#d1d5db"};
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color linear 100ms;
`,StyledSwitchCircle=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0.2rem;
  left: ${props=>props.state?"1.3rem":"0.2rem"};
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border-radius: 0.8rem;
  transition: all linear 100ms;
`,Switch=({defaultState=!1})=>{const[state,setState]=(0,react.useState)(defaultState);return(0,jsx_runtime.jsx)(StyledSwitchContainer,{state,onClick:()=>{setState(!state)},children:(0,jsx_runtime.jsx)(StyledSwitchCircle,{state})})};Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{defaultState:{defaultValue:{value:"false"},description:"",name:"defaultState",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Switch/index.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Form/Switch/index.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Form/Switch",component:Switch},SwitchPrimary={render:()=>(0,jsx_runtime.jsx)(Switch,{})};SwitchPrimary.parameters={...SwitchPrimary.parameters,docs:{...SwitchPrimary.parameters?.docs,source:{originalSource:"{\n  render: () => <Switch />\n}",...SwitchPrimary.parameters?.docs?.source}}};const __namedExportsOrder=["SwitchPrimary"]}}]);
//# sourceMappingURL=components-Form-Switch-stories-index-stories.4c83b8f4.iframe.bundle.js.map