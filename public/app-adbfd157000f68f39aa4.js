webpackJsonp([15178676390636814000],{

/***/ "./.cache/api-runner-browser.js":
/***/ (function(module, exports) {

	"use strict";
	
	var plugins = [];
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   require('/path/to/plugin1/gatsby-browser.js'),
	//   require('/path/to/plugin2/gatsby-browser.js'),
	// ]
	
	module.exports = function (api, args, defaultReturn) {
	  // Run each plugin in series.
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  });
	
	  // Filter out undefined results.
	  results = results.filter(function (result) {
	    return typeof result !== "undefined";
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	};

/***/ }),

/***/ "./.cache/async-requires.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _exports$json;
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "component---src-pages-404-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),
	  "component---src-pages-blogs-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-blogs-js!./src/pages/Blogs.js"),
	  "component---src-pages-projects-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-projects-js!./src/pages/Projects.js"),
	  "component---src-pages-index-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),
	  "component---src-pages-page-components-blog-blog-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-blog-js!./src/pages/Page Components/Blog/Blog.js"),
	  "component---src-pages-page-components-blog-blog-post-summary-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-blog-post-summary-js!./src/pages/Page Components/Blog/BlogPostSummary.js"),
	  "component---src-pages-page-components-projects-project-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-projects-project-js!./src/pages/Page Components/Projects/Project.js"),
	  "component---src-pages-page-components-projects-project-item-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-projects-project-item-js!./src/pages/Page Components/Projects/ProjectItem.js"),
	  "component---src-pages-page-components-blog-actual-blog-posts-blog-post-gatsby-js-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-actual-blog-posts-blog-post-gatsby-js-js!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_GatsbyJS.js"),
	  "component---src-pages-page-components-blog-actual-blog-posts-blog-post-tdd-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-actual-blog-posts-blog-post-tdd-js!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_TDD.js"),
	  "component---src-pages-page-components-blog-actual-blog-posts-blog-post-terminal-styling-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-actual-blog-posts-blog-post-terminal-styling-js!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_TerminalStyling.js")
	};
	
	exports.json = (_exports$json = {
	  "layout-index.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),
	  "404.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")
	}, _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["blogs.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blogs!./.cache/json/blogs.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["projects.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---projects!./.cache/json/projects.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["404-html.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-blog-blog.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-blog!./.cache/json/page-components-blog-blog.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-blog-blog-post-summary.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-blog-post-summary!./.cache/json/page-components-blog-blog-post-summary.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-projects-project.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-projects-project!./.cache/json/page-components-projects-project.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-projects-project-item.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-projects-project-item!./.cache/json/page-components-projects-project-item.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-blog-actual-blog-posts-blog-post-gatsby-js.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-actual-blog-posts-blog-post-gatsby-js!./.cache/json/page-components-blog-actual-blog-posts-blog-post-gatsby-js.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-blog-actual-blog-posts-blog-post-tdd.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-actual-blog-posts-blog-post-tdd!./.cache/json/page-components-blog-actual-blog-posts-blog-post-tdd.json"), _exports$json["layout-index.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"), _exports$json["page-components-blog-actual-blog-posts-blog-post-terminal-styling.json"] = __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-actual-blog-posts-blog-post-terminal-styling!./.cache/json/page-components-blog-actual-blog-posts-blog-post-terminal-styling.json"), _exports$json);
	
	exports.layouts = {
	  "component---src-layouts-index-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")
	};

/***/ }),

/***/ "./.cache/component-renderer.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _loader = __webpack_require__("./.cache/loader.js");
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultLayout = function DefaultLayout(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    null,
	    children()
	  );
	};
	
	// Pass pathname in as prop.
	// component will try fetching resources. If they exist,
	// will just render, else will render null.
	
	var ComponentRenderer = function (_React$Component) {
	  _inherits(ComponentRenderer, _React$Component);
	
	  function ComponentRenderer(props) {
	    _classCallCheck(this, ComponentRenderer);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      location: props.location,
	      pageResources: _loader2.default.getResourcesForPathname(props.location.pathname)
	    };
	    return _this;
	  }
	
	  ComponentRenderer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    if (this.state.location.pathname !== nextProps.location.pathname) {
	      var pageResources = _loader2.default.getResourcesForPathname(nextProps.location.pathname);
	      if (!pageResources) {
	        // Page resources won't be set in cases where the browser back button
	        // or forward button is pushed as we can't wait as normal for resources
	        // to load before changing the page.
	        _loader2.default.getResourcesForPathname(nextProps.location.pathname, function (pageResources) {
	          _this2.setState({
	            location: nextProps.location,
	            pageResources: pageResources
	          });
	        });
	      } else {
	        this.setState({
	          location: nextProps.location,
	          pageResources: pageResources
	        });
	      }
	    }
	  };
	
	  ComponentRenderer.prototype.componentDidMount = function componentDidMount() {
	    var _this3 = this;
	
	    // Listen to events so when our page gets updated, we can transition.
	    // This is only useful on delayed transitions as the page will get rendered
	    // without the necessary page resources and then re-render once those come in.
	    _emitter2.default.on("onPostLoadPageResources", function (e) {
	      if (e.page.path === _loader2.default.getPage(_this3.state.location.pathname).path) {
	        _this3.setState({ pageResources: e.pageResources });
	      }
	    });
	  };
	
	  ComponentRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	    // Check if the component or json have changed.
	    if (!this.state.pageResources || nextState.pageResources) {
	      return true;
	    }
	    if (this.state.pageResources.component !== nextState.pageResources.component) {
	      return true;
	    }
	    if (this.state.pageResources.json !== nextState.pageResources.json) {
	      return true;
	    }
	    // Check if location has changed on a page using internal routing
	    // via matchPath configuration.
	    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && nextState.pageResources.page.matchPath) {
	      return true;
	    }
	    return false;
	  };
	
	  ComponentRenderer.prototype.render = function render() {
	    if (this.props.page) {
	      if (this.state.pageResources) {
	        return (0, _react.createElement)(this.state.pageResources.component, _extends({
	          key: this.props.location.pathname
	        }, this.props, this.state.pageResources.json));
	      } else {
	        return null;
	      }
	    } else if (this.props.layout) {
	      return (0, _react.createElement)(this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : DefaultLayout, _extends({
	        key: this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : "DefaultLayout"
	      }, this.props));
	    } else {
	      return null;
	    }
	  };
	
	  return ComponentRenderer;
	}(_react2.default.Component);
	
	ComponentRenderer.propTypes = {
	  page: _propTypes2.default.bool,
	  layout: _propTypes2.default.bool,
	  location: _propTypes2.default.object
	};
	
	exports.default = ComponentRenderer;
	module.exports = exports["default"];

/***/ }),

/***/ "./.cache/emitter.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mitt = __webpack_require__("./node_modules/mitt/dist/mitt.js");
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = (0, _mitt2.default)();
	module.exports = emitter;

/***/ }),

/***/ "./.cache/find-page.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/index.js");
	
	var pageCache = {}; // TODO add tests especially for handling prefixed links.
	
	
	module.exports = function (pages) {
	  var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  return function (pathname) {
	    // Remove the pathPrefix from the pathname.
	    var trimmedPathname = pathname.slice(pathPrefix.length);
	
	    // Remove any hashfragment
	    if (trimmedPathname.split("#").length > 1) {
	      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
	    }
	
	    if (pageCache[trimmedPathname]) {
	      return pageCache[trimmedPathname];
	    }
	
	    var foundPage = void 0;
	    // Array.prototype.find is not supported in IE so we use this somewhat odd
	    // work around.
	    pages.some(function (page) {
	      if (page.matchPath) {
	        // Try both the path and matchPath
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.matchPath
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      } else {
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path,
	          exact: true
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      }
	
	      return false;
	    });
	
	    return foundPage;
	  };
	};

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(11711201792954765000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/404-html.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(16647598582412890000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/404.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blogs!./.cache/json/blogs.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(9000096778695710000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blogs.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(9347362237655822000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/index.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(3954140758598355500, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/layout-index.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-actual-blog-posts-blog-post-gatsby-js!./.cache/json/page-components-blog-actual-blog-posts-blog-post-gatsby-js.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(2392123187101453000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-blog-actual-blog-posts-blog-post-gatsby-js.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-actual-blog-posts-blog-post-tdd!./.cache/json/page-components-blog-actual-blog-posts-blog-post-tdd.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(17500789359072008000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-blog-actual-blog-posts-blog-post-tdd.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-actual-blog-posts-blog-post-terminal-styling!./.cache/json/page-components-blog-actual-blog-posts-blog-post-terminal-styling.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(16390533727176036000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-blog-actual-blog-posts-blog-post-terminal-styling.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-blog-post-summary!./.cache/json/page-components-blog-blog-post-summary.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(15102840527131496000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-blog-blog-post-summary.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-blog-blog!./.cache/json/page-components-blog-blog.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(1292668577515777500, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-blog-blog.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-projects-project-item!./.cache/json/page-components-projects-project-item.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(8057786691487404000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-projects-project-item.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-components-projects-project!./.cache/json/page-components-projects-project.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(7834011537315858000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/page-components-projects-project.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---projects!./.cache/json/projects.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(6408524664133516000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/projects.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(7489246917808536000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./.cache/layouts/index.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./.cache/loader.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _findPage = __webpack_require__("./.cache/find-page.js");
	
	var _findPage2 = _interopRequireDefault(_findPage);
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findPage = void 0;
	
	var syncRequires = {};
	var asyncRequires = {};
	var pathScriptsCache = {};
	var resourceStrCache = {};
	var resourceCache = {};
	var pages = [];
	// Note we're not actively using the path data atm. There
	// could be future optimizations however around trying to ensure
	// we load all resources for likely-to-be-visited paths.
	var pathArray = [];
	var pathCount = {};
	var resourcesArray = [];
	var resourcesCount = {};
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var prefetcher = void 0;
	var inInitialRender = true;
	
	// Prefetcher logic
	if (true) {
	  prefetcher = __webpack_require__("./.cache/prefetcher.js")({
	    getNextQueuedResources: function getNextQueuedResources() {
	      return resourcesArray.slice(-1)[0];
	    },
	    createResourceDownload: function createResourceDownload(resourceName) {
	      fetchResource(resourceName, function () {
	        resourcesArray = resourcesArray.filter(function (r) {
	          return r !== resourceName;
	        });
	        prefetcher.onResourcedFinished(resourceName);
	      });
	    }
	  });
	  _emitter2.default.on("onPreLoadPageResources", function (e) {
	    prefetcher.onPreLoadPageResources(e);
	  });
	  _emitter2.default.on("onPostLoadPageResources", function (e) {
	    prefetcher.onPostLoadPageResources(e);
	  });
	}
	
	var sortResourcesByCount = function sortResourcesByCount(a, b) {
	  if (resourcesCount[a] > resourcesCount[b]) {
	    return 1;
	  } else if (resourcesCount[a] < resourcesCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var sortPagesByCount = function sortPagesByCount(a, b) {
	  if (pathCount[a] > pathCount[b]) {
	    return 1;
	  } else if (pathCount[a] < pathCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var fetchResource = function fetchResource(resourceName) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  if (resourceStrCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceStrCache[resourceName]);
	    });
	  } else {
	    // Find resource
	    var resourceFunction = resourceName.slice(0, 9) === "component" ? asyncRequires.components[resourceName] || asyncRequires.layouts[resourceName] : asyncRequires.json[resourceName];
	
	    // Download the resource
	    resourceFunction(function (err, executeChunk) {
	      resourceStrCache[resourceName] = executeChunk;
	      cb(err, executeChunk);
	    });
	  }
	};
	
	var getResourceModule = function getResourceModule(resourceName, cb) {
	  if (resourceCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceCache[resourceName]);
	    });
	  } else {
	    fetchResource(resourceName, function (err, executeChunk) {
	      if (err) {
	        cb(err);
	      } else {
	        var _module = preferDefault(executeChunk());
	        resourceCache[resourceName] = _module;
	        cb(err, _module);
	      }
	    });
	  }
	};
	
	var mountOrder = 1;
	var queue = {
	  empty: function empty() {
	    pathArray = [];
	    pathCount = {};
	    resourcesCount = {};
	    resourcesArray = [];
	    pages = [];
	  },
	  addPagesArray: function addPagesArray(newPages) {
	    pages = newPages;
	    var pathPrefix = "";
	    if (false) {
	      pathPrefix = __PATH_PREFIX__;
	    }
	    findPage = (0, _findPage2.default)(newPages, pathPrefix);
	  },
	  addDevRequires: function addDevRequires(devRequires) {
	    syncRequires = devRequires;
	  },
	  addProdRequires: function addProdRequires(prodRequires) {
	    asyncRequires = prodRequires;
	  },
	  dequeue: function dequeue(path) {
	    return pathArray.pop();
	  },
	  enqueue: function enqueue(path) {
	    // Check page exists.
	    if (!pages.some(function (p) {
	      return p.path === path;
	    })) {
	      return false;
	    }
	
	    var mountOrderBoost = 1 / mountOrder;
	    mountOrder += 1;
	    // console.log(
	    // `enqueue "${path}", mountOrder: "${mountOrder}, mountOrderBoost: ${mountOrderBoost}`
	    // )
	
	    // Add to path counts.
	    if (!pathCount[path]) {
	      pathCount[path] = 1;
	    } else {
	      pathCount[path] += 1;
	    }
	
	    // Add path to queue.
	    if (!queue.has(path)) {
	      pathArray.unshift(path);
	    }
	
	    // Sort pages by pathCount
	    pathArray.sort(sortPagesByCount);
	
	    // Add resources to queue.
	    var page = findPage(path);
	    if (page.jsonName) {
	      if (!resourcesCount[page.jsonName]) {
	        resourcesCount[page.jsonName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.jsonName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the JSON resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.jsonName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.jsonName);
	      }
	    }
	    if (page.componentChunkName) {
	      if (!resourcesCount[page.componentChunkName]) {
	        resourcesCount[page.componentChunkName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.componentChunkName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the component resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.componentChunkName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.componentChunkName);
	      }
	    }
	
	    // Sort resources by resourcesCount.
	    resourcesArray.sort(sortResourcesByCount);
	    if (true) {
	      prefetcher.onNewResourcesAdded();
	    }
	
	    return true;
	  },
	  getResources: function getResources() {
	    return {
	      resourcesArray: resourcesArray,
	      resourcesCount: resourcesCount
	    };
	  },
	  getPages: function getPages() {
	    return {
	      pathArray: pathArray,
	      pathCount: pathCount
	    };
	  },
	  getPage: function getPage(pathname) {
	    return findPage(pathname);
	  },
	  has: function has(path) {
	    return pathArray.some(function (p) {
	      return p === path;
	    });
	  },
	  getResourcesForPathname: function getResourcesForPathname(path) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    if (inInitialRender && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
	      // If we're loading from a service worker (it's already activated on
	      // this initial render) and we can't find a page, there's a good chance
	      // we're on a new page that this (now old) service worker doesn't know
	      // about so we'll unregister it and reload.
	      if (!findPage(path)) {
	        navigator.serviceWorker.getRegistrations().then(function (registrations) {
	          for (var _iterator = registrations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	              if (_i >= _iterator.length) break;
	              _ref = _iterator[_i++];
	            } else {
	              _i = _iterator.next();
	              if (_i.done) break;
	              _ref = _i.value;
	            }
	
	            var registration = _ref;
	
	            registration.unregister();
	          }
	          window.location.reload();
	        });
	      }
	    }
	    inInitialRender = false;
	    // In development we know the code is loaded already
	    // so we just return with it immediately.
	    if (false) {
	      var page = findPage(path);
	      if (!page) return;
	      var pageResources = {
	        component: syncRequires.components[page.componentChunkName],
	        json: syncRequires.json[page.jsonName],
	        layout: syncRequires.layouts[page.layoutComponentChunkName],
	        page: page
	      };
	      cb(pageResources);
	      return pageResources;
	      // Production code path
	    } else {
	      var _page = findPage(path);
	
	      if (!_page) {
	        console.log("A page wasn't found for \"" + path + "\"");
	        return;
	      }
	
	      // Use the path from the page so the pathScriptsCache uses
	      // the normalized path.
	      path = _page.path;
	
	      // Check if it's in the cache already.
	      if (pathScriptsCache[path]) {
	        process.nextTick(function () {
	          cb(pathScriptsCache[path]);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: pathScriptsCache[path]
	          });
	        });
	        return pathScriptsCache[path];
	      }
	
	      _emitter2.default.emit("onPreLoadPageResources", { path: path });
	      // Nope, we need to load resource(s)
	      var component = void 0;
	      var json = void 0;
	      var layout = void 0;
	      // Load the component/json/layout and parallel and call this
	      // function when they're done loading. When both are loaded,
	      // we move on.
	      var done = function done() {
	        if (component && json && (!_page.layoutComponentChunkName || layout)) {
	          pathScriptsCache[path] = { component: component, json: json, layout: layout };
	          var _pageResources = { component: component, json: json, layout: layout };
	          cb(_pageResources);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: _pageResources
	          });
	        }
	      };
	      getResourceModule(_page.componentChunkName, function (err, c) {
	        if (err) {
	          console.log("Loading the component for " + _page.path + " failed");
	        }
	        component = c;
	        done();
	      });
	      getResourceModule(_page.jsonName, function (err, j) {
	        if (err) {
	          console.log("Loading the JSON for " + _page.path + " failed");
	        }
	        json = j;
	        done();
	      });
	
	      _page.layoutComponentChunkName && getResourceModule(_page.layoutComponentChunkName, function (err, l) {
	        if (err) {
	          console.log("Loading the Layout for " + _page.path + " failed");
	        }
	        layout = l;
	        done();
	      });
	
	      return undefined;
	    }
	  },
	  peek: function peek(path) {
	    return pathArray.slice(-1)[0];
	  },
	  length: function length() {
	    return pathArray.length;
	  },
	  indexOf: function indexOf(path) {
	    return pathArray.length - pathArray.indexOf(path) - 1;
	  }
	};
	
	module.exports = queue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./.cache/pages.json":
/***/ (function(module, exports) {

	module.exports = [{"componentChunkName":"component---src-pages-404-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"404.json","path":"/404/"},{"componentChunkName":"component---src-pages-blogs-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"blogs.json","path":"/Blogs/"},{"componentChunkName":"component---src-pages-projects-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"projects.json","path":"/Projects/"},{"componentChunkName":"component---src-pages-index-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"index.json","path":"/"},{"componentChunkName":"component---src-pages-404-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"404-html.json","path":"/404.html"},{"componentChunkName":"component---src-pages-page-components-blog-blog-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-blog-blog.json","path":"/Page Components/Blog/Blog/"},{"componentChunkName":"component---src-pages-page-components-blog-blog-post-summary-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-blog-blog-post-summary.json","path":"/Page Components/Blog/BlogPostSummary/"},{"componentChunkName":"component---src-pages-page-components-projects-project-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-projects-project.json","path":"/Page Components/Projects/Project/"},{"componentChunkName":"component---src-pages-page-components-projects-project-item-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-projects-project-item.json","path":"/Page Components/Projects/ProjectItem/"},{"componentChunkName":"component---src-pages-page-components-blog-actual-blog-posts-blog-post-gatsby-js-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-blog-actual-blog-posts-blog-post-gatsby-js.json","path":"/Page Components/Blog/ActualBlogPosts/BlogPost_GatsbyJS/"},{"componentChunkName":"component---src-pages-page-components-blog-actual-blog-posts-blog-post-tdd-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-blog-actual-blog-posts-blog-post-tdd.json","path":"/Page Components/Blog/ActualBlogPosts/BlogPost_TDD/"},{"componentChunkName":"component---src-pages-page-components-blog-actual-blog-posts-blog-post-terminal-styling-js","layout":"index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-components-blog-actual-blog-posts-blog-post-terminal-styling.json","path":"/Page Components/Blog/ActualBlogPosts/BlogPost_TerminalStyling/"}]

/***/ }),

/***/ "./.cache/prefetcher.js":
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (_ref) {
	  var getNextQueuedResources = _ref.getNextQueuedResources,
	      createResourceDownload = _ref.createResourceDownload;
	
	  var pagesLoading = [];
	  var resourcesDownloading = [];
	
	  // Do things
	  var startResourceDownloading = function startResourceDownloading() {
	    var nextResource = getNextQueuedResources();
	    if (nextResource) {
	      resourcesDownloading.push(nextResource);
	      createResourceDownload(nextResource);
	    }
	  };
	
	  var reducer = function reducer(action) {
	    switch (action.type) {
	      case "RESOURCE_FINISHED":
	        resourcesDownloading = resourcesDownloading.filter(function (r) {
	          return r !== action.payload;
	        });
	        break;
	      case "ON_PRE_LOAD_PAGE_RESOURCES":
	        pagesLoading.push(action.payload.path);
	        break;
	      case "ON_POST_LOAD_PAGE_RESOURCES":
	        pagesLoading = pagesLoading.filter(function (p) {
	          return p !== action.payload.page.path;
	        });
	        break;
	      case "ON_NEW_RESOURCES_ADDED":
	        break;
	    }
	
	    // Take actions.
	    // Wait for event loop queue to finish.
	    setTimeout(function () {
	      if (resourcesDownloading.length === 0 && pagesLoading.length === 0) {
	        // Start another resource downloading.
	        startResourceDownloading();
	      }
	    }, 0);
	  };
	
	  return {
	    onResourcedFinished: function onResourcedFinished(event) {
	      // Tell prefetcher that the resource finished downloading
	      // so it can grab the next one.
	      reducer({ type: "RESOURCE_FINISHED", payload: event });
	    },
	    onPreLoadPageResources: function onPreLoadPageResources(event) {
	      // Tell prefetcher a page load has started so it should stop
	      // loading anything new
	      reducer({ type: "ON_PRE_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onPostLoadPageResources: function onPostLoadPageResources(event) {
	      // Tell prefetcher a page load has finished so it should start
	      // loading resources again.
	      reducer({ type: "ON_POST_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onNewResourcesAdded: function onNewResourcesAdded() {
	      // Tell prefetcher that more resources to be downloaded have
	      // been added.
	      reducer({ type: "ON_NEW_RESOURCES_ADDED" });
	    },
	    getState: function getState() {
	      return { pagesLoading: pagesLoading, resourcesDownloading: resourcesDownloading };
	    },
	    empty: function empty() {
	      pagesLoading = [];
	      resourcesDownloading = [];
	    }
	  };
	};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _apiRunnerBrowser = __webpack_require__("./.cache/api-runner-browser.js");
	
	var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/index.js");
	
	var _reactRouterScroll = __webpack_require__("./node_modules/react-router-scroll/lib/index.js");
	
	var _createBrowserHistory = __webpack_require__("./node_modules/history/createBrowserHistory.js");
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _domready = __webpack_require__("./node_modules/domready/ready.js");
	
	var _domready2 = _interopRequireDefault(_domready);
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _pages = __webpack_require__("./.cache/pages.json");
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _componentRenderer = __webpack_require__("./.cache/component-renderer.js");
	
	var _componentRenderer2 = _interopRequireDefault(_componentRenderer);
	
	var _asyncRequires = __webpack_require__("./.cache/async-requires.js");
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	var _loader = __webpack_require__("./.cache/loader.js");
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.___emitter = _emitter2.default;
	// emitter.on(`*`, (type, e) => console.log(`emitter`, type, e))
	
	_loader2.default.addPagesArray(_pages2.default);
	_loader2.default.addProdRequires(_asyncRequires2.default);
	window.asyncRequires = _asyncRequires2.default;
	
	window.___loader = _loader2.default;
	
	window.matchPath = _reactRouterDom.matchPath;
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser2.default)("onClientEntry");
	
	// Let plugins register a service worker. The plugin just needs
	// to return true.
	if ((0, _apiRunnerBrowser2.default)("registerServiceWorker").length > 0) {
	  __webpack_require__("./.cache/register-service-worker.js");
	}
	
	var navigateTo = function navigateTo(pathname) {
	  // If we're already at this path, do nothing.
	  if (window.location.pathname === pathname) {
	    return;
	  }
	
	  // Listen to loading events. If page resources load before
	  // a second, navigate immediately.
	  function eventHandler(e) {
	    if (e.page.path === _loader2.default.getPage(pathname).path) {
	      _emitter2.default.off("onPostLoadPageResources", eventHandler);
	      clearTimeout(timeoutId);
	      window.___history.push(pathname);
	    }
	  }
	
	  // Start a timer to wait for a second before transitioning and showing a
	  // loader in case resources aren't around yet.
	  var timeoutId = setTimeout(function () {
	    _emitter2.default.off("onPostLoadPageResources", eventHandler);
	    _emitter2.default.emit("onDelayedLoadPageResources", { pathname: pathname });
	    window.___history.push(pathname);
	  }, 1000);
	
	  if (_loader2.default.getResourcesForPathname(pathname)) {
	    // The resources are already loaded so off we go.
	    clearTimeout(timeoutId);
	    window.___history.push(pathname);
	  } else {
	    // They're not loaded yet so let's add a listener for when
	    // they finish loading.
	    _emitter2.default.on("onPostLoadPageResources", eventHandler);
	  }
	};
	
	// window.___loadScriptsForPath = loadScriptsForPath
	window.___navigateTo = navigateTo;
	
	var history = (0, _createBrowserHistory2.default)();
	
	// Call onRouteUpdate on the initial page load.
	(0, _apiRunnerBrowser2.default)("onRouteUpdate", {
	  location: history.location,
	  action: history.action
	});
	
	function attachToHistory(history) {
	  if (!window.___history) {
	    window.___history = history;
	
	    history.listen(function (location, action) {
	      (0, _apiRunnerBrowser2.default)("onRouteUpdate", { location: location, action: action });
	    });
	  }
	}
	
	function shouldUpdateScroll(prevRouterProps, _ref) {
	  var pathname = _ref.location.pathname;
	
	  var results = (0, _apiRunnerBrowser2.default)("shouldUpdateScroll", {
	    prevRouterProps: prevRouterProps,
	    pathname: pathname
	  });
	  if (results.length > 0) {
	    return results[0];
	  }
	
	  if (prevRouterProps) {
	    var oldPathname = prevRouterProps.location.pathname;
	
	    if (oldPathname === pathname) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var AltRouter = (0, _apiRunnerBrowser2.default)("replaceRouterComponent", { history: history })[0];
	var DefaultRouter = function DefaultRouter(_ref2) {
	  var children = _ref2.children;
	  return _react2.default.createElement(
	    _reactRouterDom.BrowserRouter,
	    { history: history },
	    children
	  );
	};
	
	_loader2.default.getResourcesForPathname(window.location.pathname, function () {
	  var Root = function Root() {
	    return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_reactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, (0, _react.createElement)((0, _reactRouterDom.withRouter)(_componentRenderer2.default), {
	      layout: true,
	      children: function children(layoutProps) {
	        return (0, _react.createElement)(_reactRouterDom.Route, {
	          render: function render(routeProps) {
	            attachToHistory(routeProps.history);
	            var props = layoutProps ? layoutProps : routeProps;
	
	            if (_loader2.default.getPage(props.location.pathname)) {
	              return (0, _react.createElement)(_componentRenderer2.default, _extends({
	                page: true
	              }, props));
	            } else {
	              return (0, _react.createElement)(_componentRenderer2.default, {
	                location: { page: true, pathname: "/404.html" }
	              });
	            }
	          }
	        });
	      }
	    })));
	  };
	
	  var NewRoot = (0, _apiRunnerBrowser2.default)("wrapRootComponent", { Root: Root }, Root)[0];
	  (0, _domready2.default)(function () {
	    return _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
	      (0, _apiRunnerBrowser2.default)("onInitialClientRender");
	    });
	  });
	});

/***/ }),

/***/ "./.cache/register-service-worker.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/";
	if ((undefined)) {
	  pathPrefix = ("") + "/";
	}
	
	if ("serviceWorker" in navigator) {
	  navigator.serviceWorker.register(pathPrefix + "sw.js").then(function (reg) {
	    reg.addEventListener("updatefound", function () {
	      // The updatefound event implies that reg.installing is set; see
	      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
	      var installingWorker = reg.installing;
	      console.log("installingWorker", installingWorker);
	      installingWorker.addEventListener("statechange", function () {
	        switch (installingWorker.state) {
	          case "installed":
	            if (navigator.serviceWorker.controller) {
	              // At this point, the old content will have been purged and the fresh content will
	              // have been added to the cache.
	              // We reload immediately so the user sees the new content.
	              // This could/should be made configurable in the future.
	              window.location.reload();
	            } else {
	              // At this point, everything has been precached.
	              // It's the perfect time to display a "Content is cached for offline use." message.
	              console.log("Content is now available offline!");
	              _emitter2.default.emit("sw:installed");
	            }
	            break;
	
	          case "redundant":
	            console.error("The installing service worker became redundant.");
	            break;
	        }
	      });
	    });
	  }).catch(function (e) {
	    console.error("Error during service worker registration:", e);
	  });
	}

/***/ }),

/***/ "./node_modules/domready/ready.js":
/***/ (function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? setTimeout(fn, 0) : fns.push(fn)
	  }
	
	});


/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	patch();
	
	function patch() {
	  var head = document.querySelector(`head`);
	  var ensure = __webpack_require__.e;
	  var chunks = __webpack_require__.s;
	  var failures;
	
	  __webpack_require__.e = function (chunkId, callback) {
	    var loaded = false;
	    var immediate = true;
	
	    var handler = function handler(error) {
	      if (!callback) return;
	
	      callback(__webpack_require__, error);
	      callback = null;
	    };
	
	    if (!chunks && failures && failures[chunkId]) {
	      handler(true);
	      return;
	    }
	
	    ensure(chunkId, function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (immediate) {
	        // webpack fires callback immediately if chunk was already loaded
	        // IE also fires callback immediately if script was already
	        // in a cache (AppCache counts too)
	        setTimeout(function () {
	          handler();
	        });
	      } else {
	        handler();
	      }
	    }
	
	    // This is |true| if chunk is already loaded and does not need onError call.
	    // This happens because in such case ensure() is performed in sync way
	    );if (loaded) {
	      return;
	    }
	
	    immediate = false;
	
	    onError(function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (chunks) {
	        chunks[chunkId] = void 0;
	      } else {
	        failures || (failures = {});
	        failures[chunkId] = true;
	      }
	
	      handler(true);
	    });
	  };
	
	  function onError(callback) {
	    var script = head.lastChild;
	
	    if (script.tagName !== `SCRIPT`) {
	      if (typeof console !== `undefined` && console.warn) {
	        console.warn(`Script is not a script`, script);
	      }
	
	      return;
	    }
	
	    script.onload = script.onerror = function () {
	      script.onload = script.onerror = null;
	      setTimeout(callback, 0);
	    };
	  }
	}
	//# sourceMappingURL=patch.js.map

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.js":
/***/ (function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(t,o){(n[t]||(n[t]=[])).push(o)},off:function(t,o){n[t]&&n[t].splice(n[t].indexOf(o)>>>0,1)},emit:function(t,o){(n[t]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(t,o)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(10675719465928060000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/404.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-blogs-js!./src/pages/Blogs.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(16299299449490784000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Blogs.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-actual-blog-posts-blog-post-gatsby-js-js!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_GatsbyJS.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return !/* require.ensure */(function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_GatsbyJS.js") })
	        }
	      }(__webpack_require__));
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-actual-blog-posts-blog-post-tdd-js!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_TDD.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return !/* require.ensure */(function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_TDD.js") })
	        }
	      }(__webpack_require__));
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-actual-blog-posts-blog-post-terminal-styling-js!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_TerminalStyling.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return !/* require.ensure */(function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Blog/ActualBlogPosts/BlogPost_TerminalStyling.js") })
	        }
	      }(__webpack_require__));
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-blog-js!./src/pages/Page Components/Blog/Blog.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(11142160957784123000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Blog/Blog.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-blog-blog-post-summary-js!./src/pages/Page Components/Blog/BlogPostSummary.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return !/* require.ensure */(function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Blog/BlogPostSummary.js") })
	        }
	      }(__webpack_require__));
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-projects-project-js!./src/pages/Page Components/Projects/Project.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(3454617377156542500, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Projects/Project.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-page-components-projects-project-item-js!./src/pages/Page Components/Projects/ProjectItem.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(4735067607592754000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Page Components/Projects/ProjectItem.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-projects-js!./src/pages/Projects.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(14006413935666534000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/Projects.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(2345137460201621000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/home/coder/Developer/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/home/coder/Developer/portfolio/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/coder/Developer/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/coder/Developer/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/index.js") })
	        }
	      });
	     }
	    

/***/ })

});
//# sourceMappingURL=app-adbfd157000f68f39aa4.js.map