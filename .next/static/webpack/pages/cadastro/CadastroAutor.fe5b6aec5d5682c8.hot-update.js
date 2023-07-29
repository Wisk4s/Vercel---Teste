"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cadastro/CadastroAutor",{

/***/ "./src/components/FormAutor.js":
/*!*************************************!*\
  !*** ./src/components/FormAutor.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormAutor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction FormAutor() {\n    _s();\n    const [nome, setNome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [canal, setCanal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [urlCanal, setUrlCanal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const salvarAutor = (evento)=>{\n        evento.preventDefault();\n        const novoAutor = {\n            id: Math.random().toString(36).slice(2, 7),\n            nome: nome,\n            canal: canal,\n            urlCanal: urlCanal\n        };\n        const temRegistro = JSON.parse(localStorage.getItem(\"listadeautores\")) != null;\n        const autores = temRegistro ? JSON.parse(localStorage.getItem(\"listadeautores\")) : [];\n        autores.unshift(novoAutor);\n        localStorage.setItem(\"listadeautores\", JSON.stringify(autores));\n        setNome(\"\");\n        setCanal(\"\");\n        setUrlCanal(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-zinc-950 ml-72 rounded p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl p-6 pl-0 pt-0\",\n                children: \"Cadastro de Autores\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                lineNumber: 28,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"grid grid-cols-1 gap-2\",\n                onSubmit: salvarAutor,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"nome\",\n                        children: \"Nome Completo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        required: true,\n                        className: \"text-black\",\n                        type: \"text\",\n                        value: nome,\n                        onChange: (e)=>setNome(e.target.value),\n                        id: \"nome\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"canal\",\n                        children: \"Nome do Canal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        required: true,\n                        className: \"text-black\",\n                        type: \"text\",\n                        value: canal,\n                        onChange: (e)=>setCanal(e.target.value),\n                        id: \"canal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"url\",\n                        children: \"URL do Canal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        required: true,\n                        className: \"text-black\",\n                        type: \"text\",\n                        value: urlCanal,\n                        onChange: (e)=>setUrlCanal(e.target.value),\n                        id: \"url\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-6 bg-zinc-950 p-6 text-xl rounded-md border-b-4 border-zinc-950\",\n                        children: \"Cadastrar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\arthu\\\\Downloads\\\\videoplayer-20230729T171050Z-001\\\\videoplayer\\\\src\\\\components\\\\FormAutor.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(FormAutor, \"F6DfxhJlvRzah07uQX63/ZzhgwM=\");\n_c = FormAutor;\nvar _c;\n$RefreshReg$(_c, \"FormAutor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQXV0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUVqQixTQUFTQyxZQUFZOztJQUVoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNUSxjQUFjLENBQUNDLFNBQVc7UUFDNUJBLE9BQU9DLGNBQWM7UUFDckIsTUFBTUMsWUFBWTtZQUNkQyxJQUFJQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsR0FBRztZQUN4Q2QsTUFBTUE7WUFDTkUsT0FBT0E7WUFDUEUsVUFBVUE7UUFDZDtRQUNBLE1BQU1XLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLHNCQUFzQixJQUFJO1FBQzlFLE1BQU1DLFVBQVVMLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1FBQ3JGQyxRQUFRQyxPQUFPLENBQUNaO1FBQ2hCUyxhQUFhSSxPQUFPLENBQUMsa0JBQWtCTixLQUFLTyxTQUFTLENBQUNIO1FBQ3REbkIsUUFBUTtRQUNSRSxTQUFTO1FBQ1RFLFlBQVk7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ21CO1FBQUlDLFdBQVU7OzBCQUNyQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdCOzs7Ozs7MEJBQ3RDLDhEQUFDRTtnQkFBS0YsV0FBVTtnQkFBeUJHLFVBQVV0Qjs7a0NBQ2pELDhEQUFDdUI7d0JBQU1DLFNBQVE7a0NBQU87Ozs7OztrQ0FDdEIsOERBQUNDO3dCQUFNQyxRQUFRO3dCQUFDUCxXQUFVO3dCQUFhUSxNQUFLO3dCQUFPQyxPQUFPbEM7d0JBQU1tQyxVQUFVQyxDQUFBQSxJQUFLbkMsUUFBUW1DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFBR3hCLElBQUc7Ozs7OztrQ0FDM0csOERBQUNtQjt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQU1DLFFBQVE7d0JBQUNQLFdBQVU7d0JBQWFRLE1BQUs7d0JBQU9DLE9BQU9oQzt3QkFBT2lDLFVBQVVDLENBQUFBLElBQUtqQyxTQUFTaUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUFHeEIsSUFBRzs7Ozs7O2tDQUM3Ryw4REFBQ21CO3dCQUFNQyxTQUFRO2tDQUFNOzs7Ozs7a0NBQ3JCLDhEQUFDQzt3QkFBTUMsUUFBUTt3QkFBQ1AsV0FBVTt3QkFBYVEsTUFBSzt3QkFBT0MsT0FBTzlCO3dCQUFVK0IsVUFBVUMsQ0FBQUEsSUFBSy9CLFlBQVkrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQUd4QixJQUFHOzs7Ozs7a0NBQ25ILDhEQUFDNEI7d0JBQU9iLFdBQVU7a0NBQXFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0YsQ0FBQztHQXJDdUIxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtQXV0b3IuanM/NmNjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQXV0b3IoKSB7XHJcblxyXG4gICAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjYW5hbCwgc2V0Q2FuYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt1cmxDYW5hbCwgc2V0VXJsQ2FuYWxdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBjb25zdCBzYWx2YXJBdXRvciA9IChldmVudG8pID0+IHtcclxuICAgICAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBub3ZvQXV0b3IgPSB7XHJcbiAgICAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA3KSxcclxuICAgICAgICAgICAgbm9tZTogbm9tZSwgXHJcbiAgICAgICAgICAgIGNhbmFsOiBjYW5hbCxcclxuICAgICAgICAgICAgdXJsQ2FuYWw6IHVybENhbmFsXHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIGNvbnN0IHRlbVJlZ2lzdHJvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RhZGVhdXRvcmVzXCIpKSAhPSBudWxsXHJcbiAgICAgICAgY29uc3QgYXV0b3JlcyA9IHRlbVJlZ2lzdHJvID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RhZGVhdXRvcmVzXCIpKSA6IFtdXHJcbiAgICAgICAgYXV0b3Jlcy51bnNoaWZ0KG5vdm9BdXRvcilcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RhZGVhdXRvcmVzXCIsIEpTT04uc3RyaW5naWZ5KGF1dG9yZXMpKVxyXG4gICAgICAgIHNldE5vbWUoXCJcIilcclxuICAgICAgICBzZXRDYW5hbChcIlwiKVxyXG4gICAgICAgIHNldFVybENhbmFsKFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctemluYy05NTAgbWwtNzIgcm91bmRlZCBwLTZcIj5cclxuICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBwLTYgcGwtMCBwdC0wXCI+Q2FkYXN0cm8gZGUgQXV0b3JlczwvaDI+XHJcbiAgPGZvcm0gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMlwiIG9uU3VibWl0PXtzYWx2YXJBdXRvcn0+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWVcIj5Ob21lIENvbXBsZXRvPC9sYWJlbD5cclxuICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bm9tZX0gb25DaGFuZ2U9e2UgPT4gc2V0Tm9tZShlLnRhcmdldC52YWx1ZSl9IGlkPVwibm9tZVwiIC8+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cImNhbmFsXCI+Tm9tZSBkbyBDYW5hbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgcmVxdWlyZWQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2NhbmFsfSBvbkNoYW5nZT17ZSA9PiBzZXRDYW5hbChlLnRhcmdldC52YWx1ZSl9IGlkPVwiY2FuYWxcIiAvPlxyXG4gICAgPGxhYmVsIGh0bWxGb3I9XCJ1cmxcIj5VUkwgZG8gQ2FuYWw8L2xhYmVsPlxyXG4gICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt1cmxDYW5hbH0gb25DaGFuZ2U9e2UgPT4gc2V0VXJsQ2FuYWwoZS50YXJnZXQudmFsdWUpfSBpZD1cInVybFwiIC8+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTYgYmctemluYy05NTAgcC02IHRleHQteGwgcm91bmRlZC1tZCBib3JkZXItYi00IGJvcmRlci16aW5jLTk1MFwiPkNhZGFzdHJhcjwvYnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb3JtQXV0b3IiLCJub21lIiwic2V0Tm9tZSIsImNhbmFsIiwic2V0Q2FuYWwiLCJ1cmxDYW5hbCIsInNldFVybENhbmFsIiwic2FsdmFyQXV0b3IiLCJldmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsIm5vdm9BdXRvciIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJ0ZW1SZWdpc3RybyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhdXRvcmVzIiwidW5zaGlmdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwicmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormAutor.js\n"));

/***/ })

});