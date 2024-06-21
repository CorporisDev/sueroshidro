"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderPopupHidros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
// components/ProductFeatures.js



function ProductFeatures() {
    // Estado para controlar si el modal está abierto y cuál contenido mostrar
    const { 0: isModalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: popupContent , 1: setPopupContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Función para abrir el modal y establecer el contenido específico
    const handleOpenModal = (content)=>{
        setPopupContent(content);
        setModalOpen(true);
    };
    // Función para cerrar el modal
    const handleCloseModal = ()=>{
        setModalOpen(false);
        setPopupContent("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "sectionContainer",
        style: {
            backgroundColor: "white"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "featureCard",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/suero-hidrosoluble-acido-hialuronico-y-colageno.png",
                                alt: "Suero Hidrosoluble Acido Hialuronico",
                                style: {
                                    height: 150
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Acido Hialuronico + Colageno"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Ideal para hidratar y mejorar la elasticidad de la piel."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>handleOpenModal("acidoHialuronico"),
                                className: "buttonhidro",
                                children: "Ver m\xe1s"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "featureCard",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/suero-hidrosoluble-acido-te-verde-aloe-verde.png",
                                alt: "Ultrasonido",
                                style: {
                                    height: 150
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Te verde + Aloe Vera"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Perfecto para calmar y revitalizar pieles sensibles e irritadas."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>handleOpenModal("aloeVera"),
                                className: "buttonhidro",
                                children: "Ver m\xe1s"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "featureCard",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/suero-hidrosoluble-nicinamida-vitamina-e.png",
                                alt: "Martillo Frio",
                                style: {
                                    height: 150
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Niacinamida + Vitamina E"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Perfecto para unificar el tono de la piel y reducir hiperpigmentaci\xf3n."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>handleOpenModal("niacinamida"),
                                className: "buttonhidro",
                                children: "Ver m\xe1s"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "featureCard",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/suero-hidrosoluble-rosa-mosqueta-vitamina-c.png",
                                alt: "Peeling Ultrasonico",
                                style: {
                                    height: 150
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Rosa mosqueta + Vitamina C"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Excelente para tratar signos de envejecimiento y cicatrices."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>handleOpenModal("rosaMosqueta"),
                                className: "buttonhidro",
                                children: "Ver m\xe1s"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderPopupHidros__WEBPACK_IMPORTED_MODULE_2__["default"], {
                isOpen: isModalOpen,
                onRequestClose: handleCloseModal,
                content: popupContent
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductFeatures);


/***/ })

};
;