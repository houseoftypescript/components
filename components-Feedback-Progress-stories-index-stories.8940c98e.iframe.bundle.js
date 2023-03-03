"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[491],{"./src/components/Feedback/Progress/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressPrimary:()=>ProgressPrimary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var Progress_namespaceObject={};__webpack_require__.r(Progress_namespaceObject);__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressContainer=styled_components_browser_esm.ZP.div`
  border-radius: 0.25rem;
  height: 1rem;
  overflow: hidden;
  background-color: #d1d5db;
`,ProgressBar=styled_components_browser_esm.ZP.div`
  height: 1rem;
  overflow: hidden;
  background-color: #ef4444;
  transition: width linear 100ms;
  width: ${props=>props.value}%;
`,Progress=({value=0})=>(0,jsx_runtime.jsx)(ProgressContainer,{children:(0,jsx_runtime.jsx)(ProgressBar,{value})});Progress.displayName="Progress";try{Progress.displayName="Progress",Progress.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Feedback/Progress/index.tsx#Progress"]={docgenInfo:Progress.__docgenInfo,name:"Progress",path:"src/components/Feedback/Progress/index.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Feedback/Progress",component:Progress_namespaceObject.Progress},ProgressPrimary={render:()=>(0,jsx_runtime.jsx)(Progress_namespaceObject.Progress,{value:80})};ProgressPrimary.parameters={...ProgressPrimary.parameters,docs:{...ProgressPrimary.parameters?.docs,source:{originalSource:"{\n  render: () => <Progress value={80} />\n}",...ProgressPrimary.parameters?.docs?.source}}};const __namedExportsOrder=["ProgressPrimary"]}}]);
//# sourceMappingURL=components-Feedback-Progress-stories-index-stories.8940c98e.iframe.bundle.js.map