"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[565],{"./src/components/Feedback/Alert/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertError:()=>AlertError,AlertInfo:()=>AlertInfo,AlertSuccess:()=>AlertSuccess,AlertWarning:()=>AlertWarning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const colors={error:"#ef4444",success:"#22c55e",warning:"#eab308",info:"#3b82f6"},AlertContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  border-radius: 0.25rem;
  overflow: hidden;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${props=>colors[props.type]};
  color: #ffffff;
`,AlertTitle=styled_components_browser_esm.ZP.div`
  font-weight: 700;
`,AlertDescription=styled_components_browser_esm.ZP.div``,Alert=({type="info",children=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})})=>(0,jsx_runtime.jsx)(AlertContainer,{type,children});Alert.displayName="Alert";const Feedback_Alert=Object.assign(Alert,{Title:AlertTitle,Description:AlertDescription});try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Feedback/Alert/index.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Feedback/Alert/index.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Feedback/Alert",component:Feedback_Alert},AlertInfo={render:()=>(0,jsx_runtime.jsxs)(Feedback_Alert,{type:"info",children:[(0,jsx_runtime.jsx)(Feedback_Alert.Title,{children:"Title"}),(0,jsx_runtime.jsx)(Feedback_Alert.Description,{children:"Description"})]})},AlertError={render:()=>(0,jsx_runtime.jsxs)(Feedback_Alert,{type:"error",children:[(0,jsx_runtime.jsx)(Feedback_Alert.Title,{children:"Title"}),(0,jsx_runtime.jsx)(Feedback_Alert.Description,{children:"Description"})]})},AlertSuccess={render:()=>(0,jsx_runtime.jsxs)(Feedback_Alert,{type:"success",children:[(0,jsx_runtime.jsx)(Feedback_Alert.Title,{children:"Title"}),(0,jsx_runtime.jsx)(Feedback_Alert.Description,{children:"Description"})]})},AlertWarning={render:()=>(0,jsx_runtime.jsxs)(Feedback_Alert,{type:"warning",children:[(0,jsx_runtime.jsx)(Feedback_Alert.Title,{children:"Title"}),(0,jsx_runtime.jsx)(Feedback_Alert.Description,{children:"Description"})]})};AlertInfo.parameters={...AlertInfo.parameters,docs:{...AlertInfo.parameters?.docs,source:{originalSource:'{\n  render: () => <Alert type="info">\n      <Alert.Title>Title</Alert.Title>\n      <Alert.Description>Description</Alert.Description>\n    </Alert>\n}',...AlertInfo.parameters?.docs?.source}}},AlertError.parameters={...AlertError.parameters,docs:{...AlertError.parameters?.docs,source:{originalSource:'{\n  render: () => <Alert type="error">\n      <Alert.Title>Title</Alert.Title>\n      <Alert.Description>Description</Alert.Description>\n    </Alert>\n}',...AlertError.parameters?.docs?.source}}},AlertSuccess.parameters={...AlertSuccess.parameters,docs:{...AlertSuccess.parameters?.docs,source:{originalSource:'{\n  render: () => <Alert type="success">\n      <Alert.Title>Title</Alert.Title>\n      <Alert.Description>Description</Alert.Description>\n    </Alert>\n}',...AlertSuccess.parameters?.docs?.source}}},AlertWarning.parameters={...AlertWarning.parameters,docs:{...AlertWarning.parameters?.docs,source:{originalSource:'{\n  render: () => <Alert type="warning">\n      <Alert.Title>Title</Alert.Title>\n      <Alert.Description>Description</Alert.Description>\n    </Alert>\n}',...AlertWarning.parameters?.docs?.source}}};const __namedExportsOrder=["AlertInfo","AlertError","AlertSuccess","AlertWarning"]}}]);
//# sourceMappingURL=components-Feedback-Alert-stories-index-stories.61687579.iframe.bundle.js.map