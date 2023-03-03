"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[898],{"./src/components/Feedback/Spinner/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpinnerPrimary:()=>SpinnerPrimary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpinnerContainer=styled_components_browser_esm.ZP.svg`
  transform: rotate(-90deg);
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(269deg);
    }
  }
`,Spinner=()=>(0,jsx_runtime.jsxs)(SpinnerContainer,{width:"100",height:"100",viewBox:"0 0 100 100",children:[(0,jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"45",strokeWidth:"10",stroke:"#d1d5db",fill:"transparent"}),(0,jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"45",fill:"transparent",stroke:"#ef4444",strokeWidth:"10",strokeDashoffset:50,strokeDasharray:100,pathLength:100})]});Spinner.displayName="Spinner";const Feedback_Spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Feedback/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Feedback/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Feedback/Spinner",component:Feedback_Spinner},SpinnerPrimary={render:()=>(0,jsx_runtime.jsx)(Feedback_Spinner,{})};SpinnerPrimary.parameters={...SpinnerPrimary.parameters,docs:{...SpinnerPrimary.parameters?.docs,source:{originalSource:"{\n  render: () => <Spinner />\n}",...SpinnerPrimary.parameters?.docs?.source}}};const __namedExportsOrder=["SpinnerPrimary"]}}]);
//# sourceMappingURL=components-Feedback-Spinner-stories-index-stories.acaf9a74.iframe.bundle.js.map