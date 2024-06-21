"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(627);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




// Imágenes que se mostrarán en el carrusel
const images = {
    acidoHialuronico: [
        "/img/hidrosoluble-acido-hialuronico-1.png",
        "/img/hidrosoluble-acido-hialuronico-2.png",
        "/img/hidrosoluble-acido-hialuronico-3.png", 
    ],
    aloeVera: [
        "/img/hidrosoluble-aloe-vera-1.png",
        "/img/hidrosoluble-aloe-vera-2.png",
        "/img/hidrosoluble-aloe-vera-3.png", 
    ],
    niacinamida: [
        "/img/hidrosoluble-niacinamida-1.png",
        "/img/hidrosoluble-niacinamida-2.png",
        "/img/hidrosoluble-niacinamida-3.png", 
    ],
    rosaMosqueta: [
        "/img/hidrosoluble-rosa-mosqueta-1.png",
        "/img/hidrosoluble-rosa-mosqueta-2.png",
        "/img/hidrosoluble-rosa-mosqueta-3.png", 
    ]
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next"); // Ajustar para tu entorno de Next.js
const OrderPopupHidros = ({ isOpen , onRequestClose , content  })=>{
    const { 0: currentIndex , 1: setCurrentIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const updateImageIndex = ()=>{
        if (images[content]) {
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % images[content].length);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const intervalId = setInterval(updateImageIndex, 3000); // Cambia cada 3 segundos
        return ()=>clearInterval(intervalId); // Limpieza al desmontar
    }, [
        content
    ]);
    const renderContent = ()=>{
        const contentImages = images[content];
        if (!contentImages) return null; // Si el contenido no es válido, no muestra nada
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                    src: contentImages[currentIndex],
                    alt: content
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledArticle, {
                    children: getContentDescription(content)
                })
            ]
        });
    };
    const getContentDescription = (content)=>{
        switch(content){
            case "acidoHialuronico":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Beneficios del Suero Hidrosoluble de \xc1cido Hialur\xf3nico + Col\xe1geno"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Hidrataci\xf3n Profunda:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "\xc1cido Hialur\xf3nico:"
                                }),
                                " Es conocido por su capacidad de retener grandes cantidades de agua, manteniendo la piel hidratada y suave."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Col\xe1geno:"
                                }),
                                " Contribuye a la hidrataci\xf3n y mejora la retenci\xf3n de humedad en la piel."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Mejora de la Elasticidad y Firmeza de la Piel:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "\xc1cido Hialur\xf3nico:"
                                }),
                                " Ayuda a mantener la elasticidad de la piel al mantenerla bien hidratada."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Col\xe1geno:"
                                }),
                                " Es una prote\xedna clave en la estructura de la piel que mejora su firmeza y elasticidad."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Reducci\xf3n de L\xedneas Finas y Arrugas:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "\xc1cido Hialur\xf3nico:"
                                }),
                                " Rellena y suaviza las l\xedneas finas y arrugas al hidratar profundamente la piel."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Col\xe1geno:"
                                }),
                                " Ayuda a rellenar las arrugas y mejora la textura de la piel al fortalecer su estructura."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Regeneraci\xf3n Celular:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "\xc1cido Hialur\xf3nico:"
                                }),
                                " Promueve la regeneraci\xf3n celular, ayudando a mantener la piel joven y saludable."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Col\xe1geno:"
                                }),
                                " Apoya la regeneraci\xf3n y reparaci\xf3n de la piel, mejorando su apariencia general."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Propiedades Antienvejecimiento:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "\xc1cido Hialur\xf3nico y Col\xe1geno:"
                                }),
                                " Juntos, estos ingredientes ayudan a mantener una piel de aspecto joven, reduciendo los signos visibles del envejecimiento."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Problemas que Puede Tratar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Piel Seca y Deshidratada:"
                                }),
                                " La combinaci\xf3n de \xe1cido hialur\xf3nico y col\xe1geno es excelente para hidratar profundamente la piel y mantenerla hidratada durante m\xe1s tiempo."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "P\xe9rdida de Elasticidad y Firmeza:"
                                }),
                                " Ayuda a mejorar la firmeza y elasticidad de la piel, haciendo que luzca m\xe1s joven y tonificada."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "L\xedneas Finas y Arrugas:"
                                }),
                                " Rellena las l\xedneas finas y arrugas, proporcionando una apariencia m\xe1s suave y juvenil."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Textura Irregular de la Piel:"
                                }),
                                " Mejora la textura de la piel, haci\xe9ndola m\xe1s suave y uniforme."
                            ]
                        })
                    ]
                });
            case "aloeVera":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Beneficios del Suero Hidrosoluble de Aloe Vera + T\xe9 Verde"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Propiedades Antiinflamatorias:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Aloe Vera:"
                                }),
                                " Es conocido por sus propiedades antiinflamatorias que ayudan a calmar la piel irritada y reducir el enrojecimiento."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "T\xe9 Verde:"
                                }),
                                " Tambi\xe9n tiene efectos antiinflamatorios que pueden ayudar a calmar la piel y reducir la inflamaci\xf3n."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Hidrataci\xf3n:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Aloe Vera:"
                                }),
                                " Es altamente hidratante y ayuda a retener la humedad en la piel, manteni\xe9ndola suave y flexible."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "T\xe9 Verde:"
                                }),
                                " Aunque no es tan hidratante como el aloe vera, ayuda a mejorar la retenci\xf3n de humedad en la piel."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Propiedades Antioxidantes:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Aloe Vera y T\xe9 Verde:"
                                }),
                                " Ambos ingredientes son ricos en antioxidantes que ayudan a proteger la piel contra el da\xf1o de los radicales libres, reduciendo los signos del envejecimiento prematuro."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Tratamiento del Acn\xe9:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Aloe Vera:"
                                }),
                                " Tiene propiedades antibacterianas y antiinflamatorias que pueden ayudar a reducir el acn\xe9 y prevenir brotes futuros."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "T\xe9 Verde:"
                                }),
                                " Contiene catequinas que tienen propiedades antimicrobianas y pueden ayudar a reducir el acn\xe9 y controlar la producci\xf3n de sebo."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Mejora de la Textura y el Tono de la Piel:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Aloe Vera:"
                                }),
                                " Ayuda a suavizar la piel y mejorar su textura."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "T\xe9 Verde:"
                                }),
                                " Puede ayudar a aclarar la piel y mejorar su tono, proporcionando un aspecto m\xe1s uniforme y radiante."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Cicatrizaci\xf3n y Regeneraci\xf3n de la Piel:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Aloe Vera:"
                                }),
                                " Promueve la cicatrizaci\xf3n de heridas y la regeneraci\xf3n celular, lo que puede ser beneficioso para tratar cicatrices y marcas de acn\xe9."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "T\xe9 Verde:"
                                }),
                                " Sus propiedades antiinflamatorias y antioxidantes tambi\xe9n pueden ayudar en la regeneraci\xf3n de la piel."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Problemas que Puede Tratar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Piel Seca y Deshidratada:"
                                }),
                                " La combinaci\xf3n de aloe vera y t\xe9 verde proporciona una hidrataci\xf3n profunda, ayudando a mantener la piel hidratada y suave."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Enrojecimiento e Irritaci\xf3n:"
                                }),
                                " Las propiedades calmantes de ambos ingredientes pueden reducir el enrojecimiento y la irritaci\xf3n de la piel."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Acn\xe9 y Brotes:"
                                }),
                                " Las propiedades antibacterianas y antiinflamatorias del aloe vera y el t\xe9 verde pueden ayudar a tratar el acn\xe9 y prevenir futuros brotes."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Da\xf1o por Radicales Libres:"
                                }),
                                " Los antioxidantes en el aloe vera y el t\xe9 verde protegen la piel del da\xf1o ambiental y de los radicales libres, reduciendo los signos del envejecimiento."
                            ]
                        })
                    ]
                });
            case "niacinamida":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Beneficios del Suero Hidrosoluble de Niacinamida + Vitamina E"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Mejora de la Barrera Cut\xe1nea:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Niacinamida:"
                                }),
                                " Ayuda a fortalecer la barrera natural de la piel, lo que reduce la p\xe9rdida de agua y mejora la hidrataci\xf3n general."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina E:"
                                }),
                                " Protege la barrera cut\xe1nea contra los da\xf1os causados por factores ambientales, como la contaminaci\xf3n y los rayos UV."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Propiedades Antiinflamatorias:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Niacinamida:"
                                }),
                                " Reduce la inflamaci\xf3n y el enrojecimiento, lo que es beneficioso para personas con acn\xe9, ros\xe1cea y otras condiciones inflamatorias de la piel."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina E:"
                                }),
                                " Tambi\xe9n tiene propiedades antiinflamatorias que ayudan a calmar la piel irritada."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Reducci\xf3n de Manchas y Hiperpigmentaci\xf3n:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Niacinamida:"
                                }),
                                " Inhibe la transferencia de melanina dentro de la piel, lo que puede ayudar a reducir las manchas oscuras y la hiperpigmentaci\xf3n."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina E:"
                                }),
                                " Promueve la reparaci\xf3n celular y puede ayudar a aclarar las manchas oscuras con el tiempo."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Antioxidante:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Niacinamida y Vitamina E:"
                                }),
                                " Ambas act\xfaan como antioxidantes, protegiendo la piel contra el da\xf1o de los radicales libres, que pueden causar envejecimiento prematuro y da\xf1os celulares."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Mejora de la Textura y Tono de la Piel:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Niacinamida:"
                                }),
                                " Mejora la elasticidad de la piel, suaviza la textura y puede ayudar a reducir la apariencia de l\xedneas finas y arrugas."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina E:"
                                }),
                                " Hidrata y suaviza la piel, mejorando su apariencia general."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Problemas que Puede Tratar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Acn\xe9 y Piel Grasa:"
                                }),
                                " La niacinamida ayuda a regular la producci\xf3n de sebo, lo que puede reducir los brotes de acn\xe9 y el exceso de grasa en la piel."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Hiperpigmentaci\xf3n:"
                                }),
                                " La combinaci\xf3n de niacinamida y vitamina E puede ayudar a reducir las manchas oscuras y la hiperpigmentaci\xf3n, proporcionando un tono de piel m\xe1s uniforme."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Enrojecimiento y Ros\xe1cea:"
                                }),
                                " Las propiedades antiinflamatorias de la niacinamida y la vitamina E pueden ayudar a calmar la piel y reducir el enrojecimiento asociado con la ros\xe1cea."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Signos de Envejecimiento:"
                                }),
                                " La combinaci\xf3n de estos ingredientes puede mejorar la elasticidad de la piel, reducir la apariencia de l\xedneas finas y arrugas, y mejorar la hidrataci\xf3n y la firmeza de la piel."
                            ]
                        })
                    ]
                });
            case "rosaMosqueta":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Beneficios del Suero Hidrosoluble de Rosa Mosqueta + Vitamina C"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Propiedades Antioxidantes:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Rosa Mosqueta:"
                                }),
                                " Rica en antioxidantes, protege la piel contra los da\xf1os causados por los radicales libres y el envejecimiento prematuro."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina C:"
                                }),
                                " Un potente antioxidante que ayuda a neutralizar los radicales libres y protege la piel del da\xf1o ambiental."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Mejora de la Textura y Tono de la Piel:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Rosa Mosqueta:"
                                }),
                                " Promueve la regeneraci\xf3n celular y mejora la textura de la piel, reduciendo la apariencia de cicatrices y manchas."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina C:"
                                }),
                                " Ayuda a aclarar la piel y a unificar el tono, reduciendo la hiperpigmentaci\xf3n y las manchas oscuras."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Estimulaci\xf3n de la Producci\xf3n de Col\xe1geno:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Rosa Mosqueta:"
                                }),
                                " Contiene \xe1cidos grasos esenciales que ayudan a mantener la elasticidad de la piel y promueven la producci\xf3n de col\xe1geno."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina C:"
                                }),
                                " Es crucial para la s\xedntesis de col\xe1geno, lo que mejora la firmeza y elasticidad de la piel."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Hidrataci\xf3n:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Rosa Mosqueta:"
                                }),
                                " Rica en \xe1cidos grasos, ayuda a mantener la piel hidratada y suave."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Vitamina C:"
                                }),
                                " Aunque no es un hidratante directo, ayuda a mantener la piel saludable y a mejorar la barrera cut\xe1nea."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Propiedades Anti-envejecimiento:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Rosa Mosqueta y Vitamina C:"
                                }),
                                " Juntos, estos ingredientes ayudan a reducir la apariencia de l\xedneas finas y arrugas, mejorando la firmeza y elasticidad de la piel."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Problemas que Puede Tratar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Hiperpigmentaci\xf3n y Manchas Oscuras:"
                                }),
                                " La combinaci\xf3n de rosa mosqueta y vitamina C es efectiva para reducir la hiperpigmentaci\xf3n y las manchas oscuras, proporcionando un tono de piel m\xe1s uniforme."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Signos de Envejecimiento:"
                                }),
                                " Ayuda a reducir la apariencia de l\xedneas finas y arrugas, mejorando la firmeza y elasticidad de la piel gracias a la estimulaci\xf3n de la producci\xf3n de col\xe1geno."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Cicatrices y Textura Irregular:"
                                }),
                                " La rosa mosqueta es conocida por su capacidad para mejorar la textura de la piel y reducir la apariencia de cicatrices."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Da\xf1o por Radicales Libres:"
                                }),
                                " Los antioxidantes presentes en la rosa mosqueta y la vitamina C protegen la piel contra el da\xf1o ambiental y de los radicales libres."
                            ]
                        })
                    ]
                });
            default:
                return null;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        contentLabel: "Informaci\xf3n del Producto",
        className: "modal",
        overlayClassName: "overlay",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "modal-content",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Informaci\xf3n del Producto"
                }),
                renderContent(),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: onRequestClose,
                    className: "close-button",
                    children: "Cerrar"
                })
            ]
        })
    });
};
const StyledImage = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const StyledArticle = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().article)`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;

  h3 {
    font-size: 1.8em;
    color: #444;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.4em;
    color: #555;
    margin-bottom: 8px;
  }

  p {
    font-size: 1em;
    color: #666;
    margin-bottom: 10px;

    strong {
      color: #444;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPopupHidros);


/***/ })

};
;