"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[952],{"./src/components/Feedback/CircularProgress/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircularProgressPrimary:()=>CircularProgressPrimary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircularProgressContainer=styled_components_browser_esm.ZP.svg`
  transform: rotate(-90deg);

  circle {
    transition: all 100ms linear;
  }
`,CircularProgress=({value=0})=>(0,jsx_runtime.jsxs)(CircularProgressContainer,{width:"100",height:"100",viewBox:"0 0 100 100",children:[(0,jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"45",strokeWidth:"10",fill:"transparent",stroke:"#d1d5db"}),(0,jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"45",fill:"transparent",stroke:"#ef4444",strokeWidth:"10",strokeDashoffset:100-value,strokeDasharray:100,pathLength:100})]});CircularProgress.displayName="CircularProgress";const Feedback_CircularProgress=CircularProgress;try{FunctionComponent.displayName="CircularProgress",FunctionComponent.__docgenInfo={description:"",displayName:"CircularProgress",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Feedback/CircularProgress/index.tsx#CircularProgress"]={docgenInfo:CircularProgress.__docgenInfo,name:"CircularProgress",path:"src/components/Feedback/CircularProgress/index.tsx#CircularProgress"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Feedback/Circular Progress",component:Feedback_CircularProgress},CircularProgressPrimary={render:()=>(0,jsx_runtime.jsx)(Feedback_CircularProgress,{value:50})};CircularProgressPrimary.parameters={...CircularProgressPrimary.parameters,docs:{...CircularProgressPrimary.parameters?.docs,source:{originalSource:"{\n  render: () => <CircularProgress value={50} />\n}",...CircularProgressPrimary.parameters?.docs?.source}}};const __namedExportsOrder=["CircularProgressPrimary"]}}]);
//# sourceMappingURL=components-Feedback-CircularProgress-stories-index-stories.dfda54dc.iframe.bundle.js.map