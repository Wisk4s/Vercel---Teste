"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListaCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ListaCard(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ml-72 bg-rose-600 m-6 rounded p-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-xl p-6 pl-0 pt-0",
                children: props.titulo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "grid grid-cols-3 gap-6",
                children: props.children
            })
        ]
    });
}


/***/ }),

/***/ 8318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ videos),
/* harmony export */   "R": () => (/* binding */ autores)
/* harmony export */ });
const autores = [
    {
        id: Math.random().toString(36).slice(2, 7),
        nome: "Cod3r Cursos",
        canal: "cod3r",
        urlCanal: "https://www.youtube.com/@cod3r"
    },
    {
        id: Math.random().toString(36).slice(2, 7),
        nome: "Dimitri",
        canal: "Programa\xe7\xe3o Web",
        urlCanal: "https://www.youtube.com/@programacaoweb"
    },
    {
        id: Math.random().toString(36).slice(2, 7),
        nome: "Diego Fernandes",
        canal: "Rocketseat",
        urlCanal: "https://www.youtube.com/@rocketseat"
    }
];
const videos = [
    {
        id: "0L8cQ9nRtuE",
        titulo: "How to make your Embedded YouTube Videos Responsive (HTML & CSS Code provided)",
        descricao: `By default embedded YouTube Videos aren't responsive. Here's how to fix that, with a little CSS and an extra div tag. This works on both vanilla HTML & React JS / Gatsby JS.`,
        linguagem: "Javascript",
        autor: "A Designer Who Codes",
        url: "https://www.youtube.com/watch?v=0L8cQ9nRtuE"
    },
    {
        id: "S6dPnlSG86w",
        titulo: "Tailwind CSS + Next.JS 13 Tutorial - Building the YouTube UI \uD83D\uDE80",
        descricao: "In this video, I build the YouTube UI using Tailwind CSS and Next.JS 13. I build it entirely from scratch without any preparation to capture my raw thinking process when it comes to building UI’s.",
        linguagem: "NextJS",
        autor: "Shadee Merhi",
        url: "https://www.youtube.com/watch?v=S6dPnlSG86w"
    },
    {
        id: "iWpLD2wTsZ4",
        titulo: "Curso Next.js: Dynamic Routes - #13",
        descricao: "Neste v\xeddeo voc\xea vai aprender a como criar rotas din\xe2micas com #Next.js. As rotas din\xe2micas, ou dynamic routes, servem para carregar dados que vem de uma API, teremos que criar quantas p\xe1ginas forem necess\xe1rias para abrigar os recursos retornados",
        linguagem: "Javascript",
        autor: "Matheus Battisti",
        url: "https://www.youtube.com/watch?v=iWpLD2wTsZ4"
    }
];


/***/ })

};
;