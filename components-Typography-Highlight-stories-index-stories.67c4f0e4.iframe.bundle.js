"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[273],{"./src/components/Typography/Highlight/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HighlightWord:()=>HighlightWord,HighlightWords:()=>HighlightWords,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledHighlight=styled_components_browser_esm.ZP.span`
  display: inline;
  padding: 0.25rem;
  color: white;
  background-color: #ef4444;
  border-radius: 0.25rem;
`,Highlight=({word="",words=[],children=""})=>0===word.length&&0===words.length?(0,jsx_runtime.jsx)("p",{children}):words.length>0?(0,jsx_runtime.jsx)("p",{children:children?.split(" ").map((w=>words.includes(w)?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledHighlight,{children:w})," "]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[w," "]})))}):(0,jsx_runtime.jsx)("p",{children:children?.split(" ").map((w=>word===w?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledHighlight,{children:w})," "]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[w," "]})))});Highlight.displayName="Highlight";try{Highlight.displayName="Highlight",Highlight.__docgenInfo={description:"",displayName:"Highlight",props:{word:{defaultValue:{value:""},description:"",name:"word",required:!1,type:{name:"string"}},words:{defaultValue:{value:"[]"},description:"",name:"words",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Highlight/index.tsx#Highlight"]={docgenInfo:Highlight.__docgenInfo,name:"Highlight",path:"src/components/Typography/Highlight/index.tsx#Highlight"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Typography/Highlight",component:Highlight},pangram="The quick brown fox jumps over the lazy dog",HighlightWord={render:()=>(0,jsx_runtime.jsx)(Highlight,{word:"fox",children:pangram})},HighlightWords={render:()=>(0,jsx_runtime.jsx)(Highlight,{words:["fox","dog"],children:pangram})};HighlightWord.parameters={...HighlightWord.parameters,docs:{...HighlightWord.parameters?.docs,source:{originalSource:'{\n  render: () => <Highlight word="fox">{pangram}</Highlight>\n}',...HighlightWord.parameters?.docs?.source}}},HighlightWords.parameters={...HighlightWords.parameters,docs:{...HighlightWords.parameters?.docs,source:{originalSource:"{\n  render: () => <Highlight words={['fox', 'dog']}>{pangram}</Highlight>\n}",...HighlightWords.parameters?.docs?.source}}};const __namedExportsOrder=["HighlightWord","HighlightWords"]}}]);
//# sourceMappingURL=components-Typography-Highlight-stories-index-stories.67c4f0e4.iframe.bundle.js.map