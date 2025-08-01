(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/constant/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "navigationData": (()=>navigationData)
});
const navigationData = {
    Home: {
        href: "/",
        subItems: []
    },
    Solutions: {
        subItems: [
            {
                icon: "mdi:brain",
                title: "Technology Solutions",
                description: "Artificial Intelligence and Machine Learning solutions",
                href: "/technology-solutions",
                subItems: [
                    {
                        title: "AI Advisory & Implementation",
                        href: "/technology-solutions/ai-advisory",
                        description: "Strategic AI consulting and implementation"
                    },
                    {
                        title: "XR & Gaming Solutions",
                        href: "/technology-solutions/xr-gaming",
                        description: "Extended Reality and Gaming development"
                    },
                    {
                        title: "Digital Twins & Simulations",
                        href: "/technology-solutions/digital-twins",
                        description: "Digital twin technology and simulations"
                    }
                ]
            },
            {
                icon: "mdi:school",
                title: "Digital Learning",
                description: "Comprehensive digital learning solutions",
                href: "/digital-learning",
                subItems: [
                    {
                        title: "eLearning Development",
                        href: "/elearning-development",
                        description: "Custom eLearning platform development"
                    },
                    {
                        title: "Microlearning & Gamification",
                        href: "/microlearning",
                        description: "Bite-sized learning with gamification"
                    },
                    {
                        title: "Interactive Implementation & Support",
                        href: "/interactive-support",
                        description: "Implementation and ongoing support"
                    },
                    {
                        title: "LMS Implementation",
                        href: "/lms-implementation",
                        description: "Learning Management System setup"
                    }
                ]
            },
            {
                icon: "mdi:palette",
                title: "Creative Services",
                description: "Creative and multimedia services",
                href: "/creative-services",
                subItems: [
                    {
                        title: "VFX & Animation",
                        href: "/vfx-animation",
                        description: "Visual effects and animation services"
                    },
                    {
                        title: "Event Production",
                        href: "/event-production",
                        description: "Complete event production services"
                    },
                    {
                        title: "Audio & Podcast Services",
                        href: "/audio-podcast",
                        description: "Audio production and podcast services"
                    }
                ]
            }
        ]
    },
    Industries: {
        subItems: [
            {
                icon: "mdi:medical-bag",
                title: "Healthcare & Pharmaceuticals",
                description: "Healthcare technology solutions",
                href: "/healthcare-pharma",
                subItems: [
                    {
                        title: "Manufacturing & Automotive",
                        href: "/manufacturing-automotive",
                        description: "Industrial and automotive solutions"
                    },
                    {
                        title: "Financial Services",
                        href: "/financial-services",
                        description: "Fintech and banking solutions"
                    },
                    {
                        title: "Technology & Telecom",
                        href: "/tech-telecom",
                        description: "Technology and telecommunications"
                    },
                    {
                        title: "Energy & Utilities",
                        href: "/energy-utilities",
                        description: "Energy and utility solutions"
                    },
                    {
                        title: "Retail & E-Commerce",
                        href: "/retail-ecommerce",
                        description: "Retail and e-commerce platforms"
                    }
                ]
            }
        ]
    },
    Resources: {
        subItems: [
            {
                icon: "mdi:file-document",
                title: "Case Studies",
                description: "Real-world success stories",
                href: "/case-studies",
                subItems: [
                    {
                        title: "Blog & Insights",
                        href: "/blog-insights",
                        description: "Industry insights and trends"
                    },
                    {
                        title: "Whitepapers & Guides",
                        href: "/whitepapers-guides",
                        description: "In-depth research and guides"
                    },
                    {
                        title: "Events & Webinars",
                        href: "/events-webinars",
                        description: "Educational events and webinars"
                    }
                ]
            }
        ]
    },
    Company: {
        subItems: [
            {
                icon: "mdi:account-group",
                title: "About Us",
                description: "Learn about our company",
                href: "/about-us",
                subItems: [
                    {
                        title: "Our Team",
                        href: "/our-team",
                        description: "Meet our talented team"
                    },
                    {
                        title: "Careers",
                        href: "/careers",
                        description: "Join our growing team"
                    },
                    {
                        title: "Contact Us",
                        href: "/contact-us",
                        description: "Get in touch with us"
                    }
                ]
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ===== UTILITY FUNCTIONS =====
const getDropdownPosition = (navItem, dropdownWidth = 512, padding = 16)=>{
    if (!navItem) return {
        left: 0,
        right: "auto"
    };
    const navItemRect = navItem.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const itemCenter = navItemRect.left + navItemRect.width / 2;
    const idealLeft = itemCenter - dropdownWidth / 2;
    let finalLeft = Math.max(padding, idealLeft);
    if (idealLeft + dropdownWidth > viewportWidth - padding) {
        finalLeft = viewportWidth - dropdownWidth - padding;
    }
    return {
        left: finalLeft,
        right: "auto"
    };
};
const getDropdownTopPosition = (navContainer)=>{
    if (!navContainer) return 0;
    const navRect = navContainer.getBoundingClientRect();
    return navRect.bottom + 2;
};
const GetInTouchButton = ({ mobile = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "/contact",
        className: `${mobile ? "px-4 py-2 text-sm text-center w-full" : "px-6 py-3 text-sm"} bg-purple-600 rounded-full text-white font-medium tracking-wide hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg`,
        children: "Request a Consultation"
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 32,
        columnNumber: 3
    }, this);
_c = GetInTouchButton;
// ===== DROPDOWN COMPONENTS =====
const ThirdLevelDropdown = ({ items, isVisible, parentTitle, position })=>{
    if (!items?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute left-full top-0 ml-2 w-80 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden z-[10001] transition-all duration-300 ${isVisible ? "opacity-100 visible transform translate-x-0" : "opacity-0 invisible transform -translate-x-4"}`,
        style: {
            willChange: "transform, opacity",
            top: position?.top || 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-semibold text-purple-600 uppercase tracking-wide mb-3 px-1",
                    children: parentTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: items.map((subItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: subItem.href,
                            className: "flex items-start gap-3 p-3 hover:bg-purple-50 rounded-lg transition-all duration-200 group/subitem",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2 opacity-60 group-hover/subitem:opacity-100 transition-opacity duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-900 text-sm font-medium tracking-tight mb-1 group-hover/subitem:text-purple-700 transition-colors duration-200",
                                            children: subItem.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-xs font-light tracking-tight leading-4",
                                            children: subItem.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_c1 = ThirdLevelDropdown;
const SecondLevelMenuItem = ({ item, category, index, activeThirdLevel, setActiveThirdLevel, onMouseEnter, onMouseLeave })=>{
    _s();
    const [thirdLevelPosition, setThirdLevelPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0
    });
    const itemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasSubItems = item.subItems?.length > 0;
    const isThirdLevelActive = activeThirdLevel === `${category}-${index}`;
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SecondLevelMenuItem.useCallback[handleMouseEnter]": (e)=>{
            if (hasSubItems && itemRef.current) {
                const rect = itemRef.current.getBoundingClientRect();
                const dropdownContainer = itemRef.current.closest("[data-dropdown-container]");
                if (dropdownContainer) {
                    const containerRect = dropdownContainer.getBoundingClientRect();
                    const relativeTop = rect.top - containerRect.top;
                    setThirdLevelPosition({
                        top: Math.max(0, relativeTop)
                    });
                }
                setActiveThirdLevel(`${category}-${index}`);
            }
            onMouseEnter?.(e);
        }
    }["SecondLevelMenuItem.useCallback[handleMouseEnter]"], [
        hasSubItems,
        category,
        index,
        setActiveThirdLevel,
        onMouseEnter
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SecondLevelMenuItem.useCallback[handleMouseLeave]": (e)=>{
            const relatedTarget = e.relatedTarget;
            const isMovingToThirdLevel = relatedTarget?.closest("[data-third-level]");
            if (!isMovingToThirdLevel) {
                setActiveThirdLevel(null);
            }
            onMouseLeave?.(e);
        }
    }["SecondLevelMenuItem.useCallback[handleMouseLeave]"], [
        setActiveThirdLevel,
        onMouseLeave
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: itemRef,
        className: "relative",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        "data-second-level": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: item.href,
                className: "flex items-start gap-3 p-4 hover:bg-purple-50 border-r-2 border-transparent hover:border-purple-500 transition-all duration-200 group/item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg text-gray-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            icon: item.icon,
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-900 text-base font-medium tracking-tight",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    hasSubItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        icon: "mdi:chevron-right",
                                        className: "w-4 h-4 text-gray-400 group-hover/item:text-purple-500 transition-colors duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm font-light tracking-tight leading-5",
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            hasSubItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-third-level": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThirdLevelDropdown, {
                    items: item.subItems,
                    isVisible: isThirdLevelActive,
                    parentTitle: item.title,
                    position: thirdLevelPosition
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
};
_s(SecondLevelMenuItem, "emNXAfER+x8dK1QCx3m70HwL+bk=");
_c2 = SecondLevelMenuItem;
const DropdownContainer = ({ dropdownContainerRef, dropdownContentRef, activeDropdown, activeThirdLevel, setActiveThirdLevel })=>{
    _s1();
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DropdownContainer.useCallback[handleMouseLeave]": (e)=>{
            const relatedTarget = e.relatedTarget;
            const isStayingInDropdown = relatedTarget?.closest("[data-dropdown-container]") || relatedTarget?.closest("[data-third-level]");
            if (!isStayingInDropdown) {
                setActiveThirdLevel(null);
            }
        }
    }["DropdownContainer.useCallback[handleMouseLeave]"], [
        setActiveThirdLevel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownContainerRef,
        "data-dropdown-container": true,
        className: "fixed w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-xl overflow-visible z-[10000]",
        style: {
            willChange: "transform, opacity",
            left: 0,
            top: 0,
            visibility: "hidden"
        },
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: dropdownContentRef,
            className: "p-2 space-y-1",
            style: {
                willChange: "transform, opacity"
            },
            children: activeDropdown && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"][activeDropdown]?.subItems?.map((subItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecondLevelMenuItem, {
                    item: subItem,
                    category: activeDropdown,
                    index: index,
                    activeThirdLevel: activeThirdLevel,
                    setActiveThirdLevel: setActiveThirdLevel
                }, `${activeDropdown}-${index}`, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 212,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 206,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
};
_s1(DropdownContainer, "w2ie47khqaD2oInrV0bauqEQ94g=");
_c3 = DropdownContainer;
// ===== MOBILE COMPONENTS =====
const MobileThirdLevel = ({ items, isExpanded })=>{
    if (!items?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pl-8 space-y-1 pt-2 border-l-2 border-purple-100 ml-4",
            children: items.map((subItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: subItem.href,
                    className: "flex items-start gap-2 p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-xs mb-1",
                                    children: subItem.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 leading-4",
                                    children: subItem.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 235,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
};
_c4 = MobileThirdLevel;
const MobileSecondLevel = ({ item, index, expandedItems, toggleExpanded, categoryKey })=>{
    const hasSubItems = item.subItems?.length > 0;
    const itemKey = `${categoryKey}-${index}`;
    const isExpanded = expandedItems.includes(itemKey);
    const handleItemClick = (e)=>{
        if (hasSubItems) {
            e.preventDefault(); // Prevent navigation for items with subItems
            toggleExpanded(itemKey);
        }
    // If no subItems, allow normal navigation
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-l-2 border-gray-100 ml-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: hasSubItems ? "#" : item.href,
                        onClick: handleItemClick,
                        className: "flex-1 flex items-center gap-3 p-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                icon: item.icon,
                                className: "w-4 h-4 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-sm mb-1",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 leading-4",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    hasSubItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleExpanded(itemKey),
                        className: "p-2 text-gray-400 hover:text-purple-600 transition-colors duration-200",
                        "aria-label": `Toggle ${item.title} submenu`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            icon: isExpanded ? "mdi:chevron-up" : "mdi:chevron-down",
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            hasSubItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileThirdLevel, {
                items: item.subItems,
                isExpanded: isExpanded
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 302,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
};
_c5 = MobileSecondLevel;
const MobileMenuItem = ({ category, items, expandedCategories, toggleCategory, expandedItems, toggleExpanded })=>{
    const isCategoryExpanded = expandedCategories.includes(category);
    const hasItems = items?.length > 0;
    const handleCategoryClick = (e)=>{
        if (hasItems) {
            e.preventDefault(); // Prevent navigation for categories with items
            toggleCategory(category);
        }
    // If no items, allow normal navigation
    };
    if (!hasItems) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"][category]?.href || "#",
            className: "block text-gray-900 text-base font-medium tracking-tight hover:text-purple-600 transition-colors duration-300 py-2",
            children: category
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 329,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-gray-100 pb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCategoryClick,
                        className: "flex-1 text-left text-gray-900 text-base font-medium tracking-tight hover:text-purple-600 transition-colors duration-300 py-2",
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleCategory(category),
                        className: "p-1 text-gray-400 hover:text-purple-600 transition-colors duration-200",
                        "aria-label": `Toggle ${category} menu`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            icon: isCategoryExpanded ? "mdi:chevron-up" : "mdi:chevron-down",
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-hidden transition-all duration-300 ${isCategoryExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 pt-2",
                    children: items.map((subItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileSecondLevel, {
                            item: subItem,
                            index: index,
                            categoryKey: category,
                            expandedItems: expandedItems,
                            toggleExpanded: toggleExpanded
                        }, index, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 361,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
};
_c6 = MobileMenuItem;
const MobileMenu = ({ mobileMenuRef, navigationKeys, expandedCategories, toggleCategory, expandedItems, toggleExpanded })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mobileMenuRef,
        className: "mobile-menu lg:hidden w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-4 p-4 max-h-[70vh] overflow-y-auto",
        style: {
            willChange: "transform, opacity"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col space-y-4",
            children: [
                navigationKeys.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileMenuItem, {
                        category: item,
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"][item]?.subItems || [],
                        expandedCategories: expandedCategories,
                        toggleCategory: toggleCategory,
                        expandedItems: expandedItems,
                        toggleExpanded: toggleExpanded
                    }, item, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-4 border-t border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GetInTouchButton, {
                        mobile: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 402,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 390,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 386,
        columnNumber: 3
    }, this);
_c7 = MobileMenu;
// ===== DESKTOP COMPONENTS =====
const NavigationItem = ({ item, navItemsRef, chevronRefs, onMouseEnter })=>{
    const hasSubItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"][item]?.subItems?.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        onMouseEnter: ()=>onMouseEnter(item),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: (el)=>navItemsRef.current[item] = el,
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"][item]?.href || "#",
            className: "p-3 rounded-t-lg flex items-center gap-1 transition-all duration-300 text-gray-900 hover:text-purple-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base font-medium tracking-tight",
                    children: item
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                hasSubItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    ref: (el)=>chevronRefs.current[item] = el,
                    icon: "mdi:chevron-down",
                    className: "w-4 h-4 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 415,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 414,
        columnNumber: 5
    }, this);
};
_c8 = NavigationItem;
const DesktopNavigation = ({ navContainerRef, dropdownHooks, onMouseLeave })=>{
    const navigationKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: navContainerRef,
        "data-navigation-area": true,
        className: "hidden lg:flex items-center gap-6 relative",
        onMouseLeave: onMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dropdownHooks.activeIndicatorRef,
                className: "absolute bottom-0 h-0.5 bg-purple-500 transform origin-left",
                style: {
                    willChange: "transform"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            navigationKeys.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationItem, {
                    item: item,
                    navItemsRef: dropdownHooks.navItemsRef,
                    chevronRefs: dropdownHooks.chevronRefs,
                    onMouseEnter: dropdownHooks.handleDropdownEnter
                }, item, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GetInTouchButton, {}, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownContainer, {
                ...dropdownHooks
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 464,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
};
_c9 = DesktopNavigation;
// ===== CUSTOM HOOKS =====
const useDropdownAnimations = (navContainerRef)=>{
    _s2();
    const dropdownContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeIndicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chevronRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const navItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeThirdLevel, setActiveThirdLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const navigationKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"]);
    // Initialize GSAP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDropdownAnimations.useEffect": ()=>{
            if (dropdownContainerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(dropdownContainerRef.current, {
                    autoAlpha: 0,
                    y: -10,
                    force3D: true
                });
            }
            if (activeIndicatorRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(activeIndicatorRef.current, {
                    scaleX: 0,
                    force3D: true
                });
            }
        }
    }["useDropdownAnimations.useEffect"], []);
    const updateActiveIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdownAnimations.useCallback[updateActiveIndicator]": (itemName)=>{
            const navItem = navItemsRef.current[itemName];
            const indicator = activeIndicatorRef.current;
            const navContainer = navContainerRef.current;
            if (navItem && indicator && navContainer) {
                const navItemRect = navItem.getBoundingClientRect();
                const navContainerRect = navContainer.getBoundingClientRect();
                const left = navItemRect.left - navContainerRect.left;
                const width = navItemRect.width;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(indicator, {
                    x: left,
                    width: width,
                    scaleX: 1,
                    duration: 0.25,
                    ease: "power2.out",
                    force3D: true
                });
            }
        }
    }["useDropdownAnimations.useCallback[updateActiveIndicator]"], []);
    const hideActiveIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdownAnimations.useCallback[hideActiveIndicator]": ()=>{
            if (activeIndicatorRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(activeIndicatorRef.current, {
                    scaleX: 0,
                    duration: 0.15,
                    ease: "power2.in",
                    force3D: true
                });
            }
        }
    }["useDropdownAnimations.useCallback[hideActiveIndicator]"], []);
    const slideToContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdownAnimations.useCallback[slideToContent]": (itemName)=>{
            if (dropdownContentRef.current && activeDropdown !== itemName) {
                const direction = navigationKeys.indexOf(itemName) > navigationKeys.indexOf(activeDropdown) ? 1 : -1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dropdownContentRef.current, {
                    x: direction * -50,
                    autoAlpha: 0,
                    duration: 0.15,
                    ease: "power2.inOut",
                    force3D: true,
                    onComplete: {
                        "useDropdownAnimations.useCallback[slideToContent]": ()=>{
                            setActiveDropdown(itemName);
                            setActiveThirdLevel(null);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(dropdownContentRef.current, {
                                x: direction * 50,
                                autoAlpha: 0,
                                force3D: true
                            }, {
                                x: 0,
                                autoAlpha: 1,
                                duration: 0.2,
                                ease: "power2.out",
                                force3D: true
                            });
                        }
                    }["useDropdownAnimations.useCallback[slideToContent]"]
                });
            } else if (!activeDropdown) {
                setActiveDropdown(itemName);
                setActiveThirdLevel(null);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(dropdownContentRef.current, {
                    x: 0,
                    autoAlpha: 0,
                    force3D: true
                }, {
                    x: 0,
                    autoAlpha: 1,
                    duration: 0.2,
                    ease: "power2.out",
                    force3D: true
                });
            }
        }
    }["useDropdownAnimations.useCallback[slideToContent]"], [
        activeDropdown,
        navigationKeys
    ]);
    const handleDropdownEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdownAnimations.useCallback[handleDropdownEnter]": (itemName)=>{
            const hasSubItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"][itemName]?.subItems?.length > 0;
            if (!hasSubItems) return;
            const chevron = chevronRefs.current[itemName];
            updateActiveIndicator(itemName);
            if (!isDropdownOpen) {
                setIsDropdownOpen(true);
                setActiveDropdown(itemName);
                setActiveThirdLevel(null);
                if (dropdownContainerRef.current) {
                    const position = getDropdownPosition(navItemsRef.current[itemName]);
                    const topPosition = getDropdownTopPosition(navContainerRef.current);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(dropdownContainerRef.current, {
                        left: position.left,
                        right: position.right,
                        top: topPosition,
                        autoAlpha: 0,
                        y: -10
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dropdownContainerRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                        force3D: true
                    });
                }
            } else {
                slideToContent(itemName);
                if (dropdownContainerRef.current) {
                    const position = getDropdownPosition(navItemsRef.current[itemName]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dropdownContainerRef.current, {
                        left: position.left,
                        right: position.right,
                        duration: 0.25,
                        ease: "power2.out",
                        force3D: true
                    });
                }
            }
            if (chevron) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(chevron, {
                    rotation: 180,
                    duration: 0.15,
                    ease: "power1.inOut",
                    force3D: true
                });
            }
            Object.keys(chevronRefs.current).forEach({
                "useDropdownAnimations.useCallback[handleDropdownEnter]": (key)=>{
                    if (key !== itemName && chevronRefs.current[key]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(chevronRefs.current[key], {
                            rotation: 0,
                            duration: 0.15,
                            ease: "power1.inOut",
                            force3D: true
                        });
                    }
                }
            }["useDropdownAnimations.useCallback[handleDropdownEnter]"]);
        }
    }["useDropdownAnimations.useCallback[handleDropdownEnter]"], [
        isDropdownOpen,
        slideToContent,
        updateActiveIndicator
    ]);
    const handleDropdownLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdownAnimations.useCallback[handleDropdownLeave]": ()=>{
            setIsDropdownOpen(false);
            setActiveDropdown(null);
            setActiveThirdLevel(null);
            hideActiveIndicator();
            if (dropdownContainerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dropdownContainerRef.current, {
                    autoAlpha: 0,
                    y: -10,
                    duration: 0.2,
                    ease: "power2.in",
                    force3D: true
                });
            }
            Object.values(chevronRefs.current).forEach({
                "useDropdownAnimations.useCallback[handleDropdownLeave]": (chevron)=>{
                    if (chevron) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(chevron, {
                            rotation: 0,
                            duration: 0.15,
                            ease: "power1.inOut",
                            force3D: true
                        });
                    }
                }
            }["useDropdownAnimations.useCallback[handleDropdownLeave]"]);
        }
    }["useDropdownAnimations.useCallback[handleDropdownLeave]"], [
        hideActiveIndicator
    ]);
    return {
        dropdownContainerRef,
        dropdownContentRef,
        activeIndicatorRef,
        chevronRefs,
        navItemsRef,
        activeDropdown,
        isDropdownOpen,
        activeThirdLevel,
        setActiveThirdLevel,
        handleDropdownEnter,
        handleDropdownLeave
    };
};
_s2(useDropdownAnimations, "B5YVBXSSQlbUSpxCpOfsvXGacCo=");
const useMobileMenuAnimations = ()=>{
    _s3();
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedItems, setExpandedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleMobileMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenuAnimations.useCallback[toggleMobileMenu]": ()=>{
            const newState = !isMobileMenuOpen;
            setIsMobileMenuOpen(newState);
            if (mobileMenuRef.current) {
                if (newState) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(mobileMenuRef.current, {
                        autoAlpha: 0,
                        y: -20,
                        force3D: true
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                        force3D: true
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(mobileMenuRef.current, {
                        autoAlpha: 0,
                        y: -20,
                        duration: 0.2,
                        ease: "power2.in",
                        force3D: true
                    });
                }
            }
        }
    }["useMobileMenuAnimations.useCallback[toggleMobileMenu]"], [
        isMobileMenuOpen
    ]);
    const toggleCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenuAnimations.useCallback[toggleCategory]": (category)=>{
            setExpandedCategories({
                "useMobileMenuAnimations.useCallback[toggleCategory]": (prev)=>prev.includes(category) ? prev.filter({
                        "useMobileMenuAnimations.useCallback[toggleCategory]": (cat)=>cat !== category
                    }["useMobileMenuAnimations.useCallback[toggleCategory]"]) : [
                        ...prev,
                        category
                    ]
            }["useMobileMenuAnimations.useCallback[toggleCategory]"]);
        }
    }["useMobileMenuAnimations.useCallback[toggleCategory]"], []);
    const toggleExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMobileMenuAnimations.useCallback[toggleExpanded]": (itemId)=>{
            setExpandedItems({
                "useMobileMenuAnimations.useCallback[toggleExpanded]": (prev)=>prev.includes(itemId) ? prev.filter({
                        "useMobileMenuAnimations.useCallback[toggleExpanded]": (id)=>id !== itemId
                    }["useMobileMenuAnimations.useCallback[toggleExpanded]"]) : [
                        ...prev,
                        itemId
                    ]
            }["useMobileMenuAnimations.useCallback[toggleExpanded]"]);
        }
    }["useMobileMenuAnimations.useCallback[toggleExpanded]"], []);
    return {
        mobileMenuRef,
        isMobileMenuOpen,
        expandedCategories,
        expandedItems,
        toggleMobileMenu,
        toggleCategory,
        toggleExpanded
    };
};
_s3(useMobileMenuAnimations, "Y4GC9Oi4VruuEybZeE4WTs9QN0Y=");
// ===== MAIN COMPONENT =====
const Navigation = ()=>{
    _s4();
    const navContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigationKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationData"]);
    const dropdownHooks = useDropdownAnimations(navContainerRef);
    const mobileHooks = useMobileMenuAnimations();
    // Handle click outside to close dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleClickOutside = {
                "Navigation.useEffect.handleClickOutside": (event)=>{
                    if (dropdownHooks.dropdownContainerRef.current && !dropdownHooks.dropdownContainerRef.current.contains(event.target) && navContainerRef.current && !navContainerRef.current.contains(event.target)) {
                        dropdownHooks.handleDropdownLeave();
                    }
                }
            }["Navigation.useEffect.handleClickOutside"];
            if (dropdownHooks.isDropdownOpen) {
                document.addEventListener("mousedown", handleClickOutside);
                return ({
                    "Navigation.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
                })["Navigation.useEffect"];
            }
        }
    }["Navigation.useEffect"], [
        dropdownHooks.isDropdownOpen,
        dropdownHooks.handleDropdownLeave
    ]);
    // Handle escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleEscapeKey = {
                "Navigation.useEffect.handleEscapeKey": (event)=>{
                    if (event.key === "Escape") {
                        if (dropdownHooks.isDropdownOpen) {
                            dropdownHooks.handleDropdownLeave();
                        }
                        if (mobileHooks.isMobileMenuOpen) {
                            mobileHooks.toggleMobileMenu();
                        }
                    }
                }
            }["Navigation.useEffect.handleEscapeKey"];
            document.addEventListener("keydown", handleEscapeKey);
            return ({
                "Navigation.useEffect": ()=>document.removeEventListener("keydown", handleEscapeKey)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], [
        dropdownHooks.isDropdownOpen,
        mobileHooks.isMobileMenuOpen,
        dropdownHooks.handleDropdownLeave,
        mobileHooks.toggleMobileMenu
    ]);
    // Handle window resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleResize = {
                "Navigation.useEffect.handleResize": ()=>{
                    if (window.innerWidth >= 1024 && mobileHooks.isMobileMenuOpen) {
                        mobileHooks.toggleMobileMenu();
                    }
                }
            }["Navigation.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], [
        mobileHooks.isMobileMenuOpen,
        mobileHooks.toggleMobileMenu
    ]);
    // Prevent body scroll when mobile menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            document.body.style.overflow = mobileHooks.isMobileMenuOpen ? "hidden" : "";
            return ({
                "Navigation.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], [
        mobileHooks.isMobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 flex w-full top-0 z-[9998]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "w-full relative bg-white/95 backdrop-blur-sm border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-row justify-between items-center gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.svg",
                                    className: "h-8 w-fit",
                                    alt: "Logo",
                                    width: 100,
                                    height: 100
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 840,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopNavigation, {
                                    navContainerRef: navContainerRef,
                                    dropdownHooks: dropdownHooks,
                                    onMouseLeave: dropdownHooks.handleDropdownLeave
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 848,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: mobileHooks.toggleMobileMenu,
                                    className: "lg:hidden p-2 text-gray-900 hover:text-purple-600 transition-colors duration-300 rounded-lg hover:bg-purple-50",
                                    "aria-label": "Toggle mobile menu",
                                    "aria-expanded": mobileHooks.isMobileMenuOpen,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        icon: mobileHooks.isMobileMenuOpen ? "mdi:close" : "mdi:menu",
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 859,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 854,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 839,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 838,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 837,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 836,
                columnNumber: 7
            }, this),
            mobileHooks.isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black bg-opacity-50",
                        onClick: mobileHooks.toggleMobileMenu
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 872,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white h-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.svg",
                                            className: "h-8 w-fit",
                                            alt: "Logo",
                                            width: 100,
                                            height: 100
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 879,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: mobileHooks.toggleMobileMenu,
                                            className: "p-2 text-gray-900 hover:text-purple-600 transition-colors duration-300",
                                            "aria-label": "Close mobile menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                icon: "mdi:close",
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 890,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 886,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 877,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileMenu, {
                                mobileMenuRef: mobileHooks.mobileMenuRef,
                                navigationKeys: navigationKeys,
                                expandedCategories: mobileHooks.expandedCategories,
                                toggleCategory: mobileHooks.toggleCategory,
                                expandedItems: mobileHooks.expandedItems,
                                toggleExpanded: mobileHooks.toggleExpanded
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 894,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 876,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 871,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 907,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s4(Navigation, "7Yf213dLx1uo4BQ9zUCumvAwMtA=", false, function() {
    return [
        useDropdownAnimations,
        useMobileMenuAnimations
    ];
});
_c10 = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "GetInTouchButton");
__turbopack_context__.k.register(_c1, "ThirdLevelDropdown");
__turbopack_context__.k.register(_c2, "SecondLevelMenuItem");
__turbopack_context__.k.register(_c3, "DropdownContainer");
__turbopack_context__.k.register(_c4, "MobileThirdLevel");
__turbopack_context__.k.register(_c5, "MobileSecondLevel");
__turbopack_context__.k.register(_c6, "MobileMenuItem");
__turbopack_context__.k.register(_c7, "MobileMenu");
__turbopack_context__.k.register(_c8, "NavigationItem");
__turbopack_context__.k.register(_c9, "DesktopNavigation");
__turbopack_context__.k.register(_c10, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_62a6edea._.js.map