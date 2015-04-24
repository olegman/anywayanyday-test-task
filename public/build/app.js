var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/var/www/anywayanyday-test-task/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./bootstrap.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	var _React = __webpack_require__(/*! react */ 1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _App = __webpack_require__(/*! components/app */ 2);
	
	var _App2 = _interopRequireWildcard(_App);
	
	var _Api = __webpack_require__(/*! libs/api */ 3);
	
	var _Api2 = _interopRequireWildcard(_Api);
	
	_React2['default'].render(_React2['default'].createElement(_App2['default'], null), document.body);

/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/*!****************************!*\
  !*** ./components/app.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _React = __webpack_require__(/*! react */ 1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Search = __webpack_require__(/*! components/search */ 9);
	
	var _Search2 = _interopRequireWildcard(_Search);
	
	var _Flights = __webpack_require__(/*! components/flights */ 10);
	
	var _Flights2 = _interopRequireWildcard(_Flights);
	
	var _Overlay = __webpack_require__(/*! components/overlay */ 11);
	
	var _Overlay2 = _interopRequireWildcard(_Overlay);
	
	var App = _React2['default'].createClass({
	    displayName: 'App',
	
	    render: function render() {
	        return _React2['default'].createElement(
	            'div',
	            { id: 'app' },
	            _React2['default'].createElement('div', { className: 'col-right' }),
	            _React2['default'].createElement('div', { className: 'col-left' }),
	            _React2['default'].createElement(
	                'div',
	                { className: 'col-center' },
	                _React2['default'].createElement(_Search2['default'], null),
	                _React2['default'].createElement(_Flights2['default'], null),
	                _React2['default'].createElement(_Overlay2['default'], null)
	            )
	        );
	    }
	});
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!*********************!*\
  !*** ./libs/api.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 6)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	var _Promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _ServerActions = __webpack_require__(/*! actions/server */ 13);
	
	var _ServerActions2 = _interopRequireWildcard(_ServerActions);
	
	var _$ = __webpack_require__(/*! jquery */ 5);
	
	var _$2 = _interopRequireWildcard(_$);
	
	var _Helper = __webpack_require__(/*! libs/helper */ 12);
	
	var _Helper2 = _interopRequireWildcard(_Helper);
	
	var Api = (function () {
	    function Api() {
	        _classCallCheck(this, Api);
	
	        _$2['default'].ajaxSetup({
	            type: 'GET',
	            jsonp: 'callback',
	            dataType: 'jsonp'
	        });
	    }
	
	    _createClass(Api, [{
	        key: 'startSearch',
	
	        // TODO: handle error callback for request via plugin: https://github.com/jaubourg/jquery-jsonp or timeout.
	
	        value: function startSearch() {
	            return new _Promise(function (resolve, reject) {
	                _$2['default'].ajax({
	                    url: 'http://api.anywayanyday.com/api/NewRequest3/',
	                    data: {
	                        Route: '' + (_Helper2['default'].getTodayDate() + _Helper2['default'].getTodayMonth()) + 'MOWLEDAD1CN0IN0SCE',
	                        _Serialize: 'JSON'
	                    },
	                    success: function success(response) {
	                        if (response.Error) {
	                            reject(response.Error);
	                        } else {
	                            resolve(response);
	                        }
	                    }
	                });
	            }).then(function (data) {
	                _ServerActions2['default'].recieveSearchSynonim(data);
	            });
	        }
	    }, {
	        key: 'getSearchStatus',
	        value: function getSearchStatus(idSynonym) {
	            return new _Promise(function (resolve, reject) {
	                _$2['default'].ajax({
	                    url: 'http://api.anywayanyday.com/api/RequestState/',
	                    data: {
	                        R: idSynonym,
	                        _Serialize: 'JSON'
	                    },
	                    success: function success(response) {
	                        if (response.Error) {
	                            reject(response.Error);
	                        } else {
	                            resolve(response);
	                        }
	                    }
	                });
	            }).then(function (data) {
	                _ServerActions2['default'].recieveSearchStatus(data);
	            });
	        }
	    }, {
	        key: 'getFlights',
	        value: function getFlights(idSynonym) {
	            return new _Promise(function (resolve, reject) {
	                _$2['default'].ajax({
	                    url: 'http://api.anywayanyday.com/api/Fares2/',
	                    data: {
	                        R: idSynonym,
	                        L: 'RU',
	                        C: 'RUB',
	                        Limit: 200,
	                        DebugFullNames: true,
	                        _Serialize: 'JSON'
	                    },
	                    success: function success(response) {
	                        if (response.Error) {
	                            reject(response.Error);
	                        } else {
	                            resolve(response);
	                        }
	                    }
	                });
	            }).then(function (data) {
	                _ServerActions2['default'].recieveFlights(data);
	            });
	        }
	    }]);
	
	    return Api;
	})();
	
	exports['default'] = new Api();
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!*******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/helpers/interop-require-wildcard.js ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 5 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ },
/* 6 */
/*!*******************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/helpers/create-class.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 7 */
/*!***********************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/helpers/class-call-check.js ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */
/*!**************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/core-js/promise.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 21), __esModule: true };

/***/ },
/* 9 */
/*!*******************************!*\
  !*** ./components/search.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _React = __webpack_require__(/*! react */ 1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ViewActions = __webpack_require__(/*! actions/view */ 14);
	
	var _ViewActions2 = _interopRequireWildcard(_ViewActions);
	
	var _SearchStore = __webpack_require__(/*! stores/search */ 15);
	
	var _SearchStore2 = _interopRequireWildcard(_SearchStore);
	
	var _Helper = __webpack_require__(/*! libs/helper */ 12);
	
	var _Helper2 = _interopRequireWildcard(_Helper);
	
	var Search = _React2['default'].createClass({
	    displayName: 'Search',
	
	    getInitialState: function getInitialState() {
	        return _SearchStore2['default'].get();
	    },
	    componentDidMount: function componentDidMount() {
	        _SearchStore2['default'].addChangeListener(this._onChange);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        _SearchStore2['default'].removeChangeListener(this._onChange);
	    },
	    _onChange: function _onChange() {
	        this.setState(_SearchStore2['default'].get());
	    },
	    startSearch: function startSearch(e) {
	        _ViewActions2['default'].startSearch();
	        e.preventDefault();
	    },
	    toggleAutoupdate: function toggleAutoupdate(e) {
	        _ViewActions2['default'].toggleAutoupdate(e.target.checked);
	    },
	    render: function render() {
	        return _React2['default'].createElement(
	            'div',
	            { className: 'search' },
	            _React2['default'].createElement(
	                'button',
	                { className: 'button', onClick: this.startSearch },
	                'Искать'
	            ),
	            _React2['default'].createElement(
	                'span',
	                null,
	                'рейсы по маршруту Москва — Санкт-Петербург, на сегодняшнее число (' + _Helper2['default'].getTodayDate() + '.' + _Helper2['default'].getTodayMonth() + ')'
	            ),
	            _React2['default'].createElement(
	                'div',
	                null,
	                _React2['default'].createElement(
	                    'label',
	                    { htmlFor: 'fuu' },
	                    'Автообновление'
	                ),
	                _React2['default'].createElement('input', { onChange: this.toggleAutoupdate, checked: this.state.autoupdate, id: 'fuu', type: 'checkbox' })
	            )
	        );
	    }
	});
	
	exports['default'] = Search;
	module.exports = exports['default'];

/***/ },
/* 10 */
/*!********************************!*\
  !*** ./components/flights.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _React = __webpack_require__(/*! react */ 1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _classNames = __webpack_require__(/*! classnames */ 20);
	
	var _classNames2 = _interopRequireWildcard(_classNames);
	
	var _FlightsStore = __webpack_require__(/*! stores/flights */ 16);
	
	var _FlightsStore2 = _interopRequireWildcard(_FlightsStore);
	
	var _ViewActions = __webpack_require__(/*! actions/view */ 14);
	
	var _ViewActions2 = _interopRequireWildcard(_ViewActions);
	
	var Flights = _React2['default'].createClass({
	    displayName: 'Flights',
	
	    getInitialState: function getInitialState() {
	        return _FlightsStore2['default'].get();
	    },
	    componentDidMount: function componentDidMount() {
	        _FlightsStore2['default'].addChangeListener(this._onChange);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        _FlightsStore2['default'].removeChangeListener(this._onChange);
	    },
	    _onChange: function _onChange() {
	        this.setState(_FlightsStore2['default'].get());
	    },
	    selectAirline: function selectAirline(e) {
	        var airline = e.target.innerHTML;
	        _ViewActions2['default'].selectAirline(airline);
	        e.preventDefault();
	    },
	    render: function render() {
	        var _this = this;
	
	        var classes = _classNames2['default']({
	            flights: true
	        });
	        var activeAirline = _FlightsStore2['default'].getActiveAirline();
	        var airlines = this.state.flights.map(function (airline) {
	            return _React2['default'].createElement(
	                'li',
	                { key: 'airline-' + airline.Code, className: airline.Code == activeAirline ? 'active' : null },
	                _React2['default'].createElement(
	                    'a',
	                    { href: '#', onClick: _this.selectAirline },
	                    airline.Code
	                )
	            );
	        });
	        var fares = _FlightsStore2['default'].getFaresByAirline(activeAirline).map(function (fare) {
	            return _React2['default'].createElement(
	                'li',
	                { key: fare.Id },
	                '' + fare.Id + ', ' + fare.TotalAmountRub + ' руб.'
	            );
	        });
	        return _React2['default'].createElement(
	            'div',
	            { className: classes },
	            _React2['default'].createElement(
	                'ul',
	                { className: 'nav' },
	                airlines
	            ),
	            _React2['default'].createElement(
	                'ul',
	                { className: 'fares' },
	                fares
	            )
	        );
	    }
	});
	
	exports['default'] = Flights;
	module.exports = exports['default'];

/***/ },
/* 11 */
/*!********************************!*\
  !*** ./components/overlay.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _React = __webpack_require__(/*! react */ 1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _classNames = __webpack_require__(/*! classnames */ 20);
	
	var _classNames2 = _interopRequireWildcard(_classNames);
	
	var _OverlayStore = __webpack_require__(/*! stores/overlay */ 17);
	
	var _OverlayStore2 = _interopRequireWildcard(_OverlayStore);
	
	var Overlay = _React2['default'].createClass({
	    displayName: 'Overlay',
	
	    getInitialState: function getInitialState() {
	        return _OverlayStore2['default'].get();
	    },
	    componentDidMount: function componentDidMount() {
	        _OverlayStore2['default'].addChangeListener(this._onChange);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        _OverlayStore2['default'].removeChangeListener(this._onChange);
	    },
	    _onChange: function _onChange() {
	        this.setState(_OverlayStore2['default'].get());
	    },
	    render: function render() {
	        var classes = _classNames2['default']({
	            overlay: true,
	            visible: this.state.isShow
	        });
	        return _React2['default'].createElement(
	            'div',
	            { className: classes },
	            _React2['default'].createElement(
	                'div',
	                { className: 'loading' },
	                _React2['default'].createElement(
	                    'div',
	                    { className: 'spinner' },
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null),
	                    _React2['default'].createElement('div', null)
	                ),
	                _React2['default'].createElement(
	                    'div',
	                    { className: 'progress' },
	                    this.state.status
	                )
	            )
	        );
	    }
	});
	
	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },
/* 12 */
/*!************************!*\
  !*** ./libs/helper.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 6)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var Helper = (function () {
	    function Helper() {
	        _classCallCheck(this, Helper);
	    }
	
	    _createClass(Helper, [{
	        key: 'getTodayMonth',
	        value: function getTodayMonth() {
	            var month = new Date().getMonth() + 1;
	            return month < 10 ? '0' + month : '' + month;
	        }
	    }, {
	        key: 'getTodayDate',
	        value: function getTodayDate() {
	            var date = new Date().getDate();
	            return date < 10 ? '0' + date : '' + date;
	        }
	    }]);
	
	    return Helper;
	})();
	
	exports['default'] = new Helper();
	module.exports = exports['default'];

/***/ },
/* 13 */
/*!***************************!*\
  !*** ./actions/server.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! app-dispatcher */ 18);
	
	var _AppDispatcher2 = _interopRequireWildcard(_AppDispatcher);
	
	var _ActionTypes = __webpack_require__(/*! constants */ 19);
	
	var ServerActions = {
	    recieveSearchSynonim: function recieveSearchSynonim(data) {
	        _AppDispatcher2['default'].handleServerAction({
	            type: _ActionTypes.ActionTypes.RECIEVE_SEARCH_SYNONIM,
	            data: data
	        });
	    },
	    recieveSearchStatus: function recieveSearchStatus(data) {
	        _AppDispatcher2['default'].handleServerAction({
	            type: _ActionTypes.ActionTypes.RECIEVE_SEARCH_STATUS,
	            data: data
	        });
	    },
	    recieveFlights: function recieveFlights(data) {
	        _AppDispatcher2['default'].handleServerAction({
	            type: _ActionTypes.ActionTypes.RECIEVE_FLIGHTS,
	            data: data
	        });
	    }
	};
	
	exports['default'] = ServerActions;
	module.exports = exports['default'];

/***/ },
/* 14 */
/*!*************************!*\
  !*** ./actions/view.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! app-dispatcher */ 18);
	
	var _AppDispatcher2 = _interopRequireWildcard(_AppDispatcher);
	
	var _ActionTypes = __webpack_require__(/*! constants */ 19);
	
	var ViewActions = {
	    startSearch: function startSearch() {
	        _AppDispatcher2['default'].handleViewAction({
	            type: _ActionTypes.ActionTypes.START_SEARCH
	        });
	    },
	    selectAirline: function selectAirline(airline) {
	        _AppDispatcher2['default'].handleViewAction({
	            type: _ActionTypes.ActionTypes.SELECT_AIRLINE,
	            airline: airline
	        });
	    },
	    toggleAutoupdate: function toggleAutoupdate(checked) {
	        _AppDispatcher2['default'].handleViewAction({
	            type: _ActionTypes.ActionTypes.TOGGLE_AUTOUPDATE,
	            checked: checked
	        });
	    }
	};
	
	exports['default'] = ViewActions;
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!**************************!*\
  !*** ./stores/search.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 22)['default'];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 23)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 6)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! app-dispatcher */ 18);
	
	var _AppDispatcher2 = _interopRequireWildcard(_AppDispatcher);
	
	var _ActionTypes = __webpack_require__(/*! constants */ 19);
	
	var _Storage2 = __webpack_require__(/*! libs/storage */ 24);
	
	var _Storage3 = _interopRequireWildcard(_Storage2);
	
	var _Api = __webpack_require__(/*! libs/api */ 3);
	
	var _Api2 = _interopRequireWildcard(_Api);
	
	var _FlightsStore = __webpack_require__(/*! stores/flights */ 16);
	
	var _FlightsStore2 = _interopRequireWildcard(_FlightsStore);
	
	var AUTOUPDATE_POLL_INTERVAL = 5 * 60 * 1000; // 5 min
	var SEARCH_STATUS_POLL_INTERVAL = 500;
	var autoupdateTimerId = null;
	var searchStatusTimerId = null;
	
	var SearchStore = (function (_Storage) {
	    function SearchStore(options) {
	        _classCallCheck(this, SearchStore);
	
	        _get(Object.getPrototypeOf(SearchStore.prototype), 'constructor', this).call(this, options);
	    }
	
	    _inherits(SearchStore, _Storage);
	
	    _createClass(SearchStore, [{
	        key: 'getSynonymId',
	
	        // Public methods
	        value: function getSynonymId() {
	            return this.get().idSynonym;
	        }
	    }, {
	        key: 'getAutoupdate',
	        value: function getAutoupdate() {
	            return this.get().autoupdate;
	        }
	    }]);
	
	    return SearchStore;
	})(_Storage3['default']);
	
	var store = new SearchStore({
	    idSynonym: null,
	    autoupdate: true
	});
	
	function _startSearch() {
	    clearInterval(searchStatusTimerId);
	    _Api2['default'].startSearch();
	}
	
	store.dispatchToken = _AppDispatcher2['default'].register(function (_ref) {
	    var action = _ref.action;
	
	    var state = store.get();
	
	    switch (action.type) {
	
	        case _ActionTypes.ActionTypes.START_SEARCH:
	            _startSearch();
	            break;
	
	        case _ActionTypes.ActionTypes.RECIEVE_SEARCH_SYNONIM:
	            state.idSynonym = action.data.IdSynonym;
	            _Api2['default'].getSearchStatus(state.idSynonym);
	            searchStatusTimerId = setInterval(_Api2['default'].getSearchStatus.bind(null, state.idSynonym), SEARCH_STATUS_POLL_INTERVAL);
	            store.set(state);
	            break;
	
	        case _ActionTypes.ActionTypes.RECIEVE_SEARCH_STATUS:
	            if (action.data.Completed == 100) {
	                clearInterval(searchStatusTimerId);
	            }
	            break;
	
	        case _ActionTypes.ActionTypes.TOGGLE_AUTOUPDATE:
	            state.autoupdate = action.checked;
	            if (state.autoupdate && _FlightsStore2['default'].getFlights().length) {
	                _startSearch();
	            } else {
	                clearInterval(searchStatusTimerId);
	                clearInterval(autoupdateTimerId);
	            }
	            store.set(state);
	            break;
	
	        case _ActionTypes.ActionTypes.RECIEVE_FLIGHTS:
	            if (state.autoupdate) {
	                clearInterval(searchStatusTimerId);
	                clearInterval(autoupdateTimerId);
	                autoupdateTimerId = setTimeout(_Api2['default'].startSearch, AUTOUPDATE_POLL_INTERVAL);
	            }
	            break;
	
	        default:
	        // do nothing
	    }
	});
	
	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 16 */
/*!***************************!*\
  !*** ./stores/flights.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 22)['default'];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 23)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 6)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! app-dispatcher */ 18);
	
	var _AppDispatcher2 = _interopRequireWildcard(_AppDispatcher);
	
	var _ActionTypes = __webpack_require__(/*! constants */ 19);
	
	var _Storage2 = __webpack_require__(/*! libs/storage */ 24);
	
	var _Storage3 = _interopRequireWildcard(_Storage2);
	
	var _Api = __webpack_require__(/*! libs/api */ 3);
	
	var _Api2 = _interopRequireWildcard(_Api);
	
	var _SearchStore = __webpack_require__(/*! stores/search */ 15);
	
	var _SearchStore2 = _interopRequireWildcard(_SearchStore);
	
	var FlightsStore = (function (_Storage) {
	    function FlightsStore(options) {
	        _classCallCheck(this, FlightsStore);
	
	        _get(Object.getPrototypeOf(FlightsStore.prototype), 'constructor', this).call(this, options);
	    }
	
	    _inherits(FlightsStore, _Storage);
	
	    _createClass(FlightsStore, [{
	        key: 'getActiveAirline',
	
	        // Public Methods
	        value: function getActiveAirline() {
	            return this.get().activeAirline;
	        }
	    }, {
	        key: 'getFaresByAirline',
	        value: function getFaresByAirline(airline) {
	            var flights = this.get().flights;
	            for (var i = 0; i < flights.length; i++) {
	                if (flights[i].Code == airline) {
	                    return flights[i].Fares;
	                }
	            }
	            return [];
	        }
	    }, {
	        key: 'getFlights',
	        value: function getFlights() {
	            return this.get().flights;
	        }
	    }]);
	
	    return FlightsStore;
	})(_Storage3['default']);
	
	var store = new FlightsStore({
	    activeAirline: null,
	    flights: []
	});
	
	// Private Methods
	function _sortFlights(data) {
	    for (var i = 0; i < data.length; i++) {
	        data[i].Fares.sort(function (a, b) {
	            return a.TotalAmount - b.TotalAmount;
	        });
	    }
	}
	
	store.dispatchToken = _AppDispatcher2['default'].register(function (_ref) {
	    var action = _ref.action;
	
	    var state = store.get();
	
	    switch (action.type) {
	
	        case _ActionTypes.ActionTypes.RECIEVE_SEARCH_STATUS:
	            if (action.data.Completed == 100) {
	                _Api2['default'].getFlights(_SearchStore2['default'].getSynonymId());
	            }
	            break;
	
	        case _ActionTypes.ActionTypes.RECIEVE_FLIGHTS:
	            if (state.activeAirline === null) {
	                state.activeAirline = action.data.Airlines[0].Code;
	            }
	            _sortFlights(action.data.Airlines);
	            state.flights = action.data.Airlines;
	            store.set(state);
	            break;
	
	        case _ActionTypes.ActionTypes.SELECT_AIRLINE:
	            state.activeAirline = action.airline;
	            store.set(state);
	            break;
	
	        default:
	        // do nothing
	    }
	});
	
	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 17 */
/*!***************************!*\
  !*** ./stores/overlay.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 22)['default'];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 23)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! app-dispatcher */ 18);
	
	var _AppDispatcher2 = _interopRequireWildcard(_AppDispatcher);
	
	var _ActionTypes = __webpack_require__(/*! constants */ 19);
	
	var _Storage2 = __webpack_require__(/*! libs/storage */ 24);
	
	var _Storage3 = _interopRequireWildcard(_Storage2);
	
	var OverlayStore = (function (_Storage) {
	    function OverlayStore(options) {
	        _classCallCheck(this, OverlayStore);
	
	        _get(Object.getPrototypeOf(OverlayStore.prototype), 'constructor', this).call(this, options);
	    }
	
	    _inherits(OverlayStore, _Storage);
	
	    return OverlayStore;
	})(_Storage3['default']);
	
	var store = new OverlayStore({
	    status: null,
	    isShow: false
	});
	
	store.dispatchToken = _AppDispatcher2['default'].register(function (_ref) {
	    var action = _ref.action;
	
	    var state = store.get();
	
	    switch (action.type) {
	
	        case _ActionTypes.ActionTypes.START_SEARCH:
	            state.status = 0;
	            state.isShow = true;
	            store.set(state);
	            break;
	
	        case _ActionTypes.ActionTypes.RECIEVE_SEARCH_STATUS:
	            state.status = action.data.Completed;
	            store.set(state);
	            break;
	
	        case _ActionTypes.ActionTypes.RECIEVE_FLIGHTS:
	            state.isShow = false;
	            store.set(state);
	            break;
	
	        default:
	        // do nothing
	    }
	});
	
	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 18 */
/*!***************************!*\
  !*** ./app-dispatcher.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 22)['default'];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 23)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 6)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _PayloadSources = __webpack_require__(/*! constants */ 19);
	
	var _Dispatcher2 = __webpack_require__(/*! flux */ 25);
	
	var AppDispatcher = (function (_Dispatcher) {
	    function AppDispatcher() {
	        _classCallCheck(this, AppDispatcher);
	
	        _get(Object.getPrototypeOf(AppDispatcher.prototype), 'constructor', this).call(this);
	    }
	
	    _inherits(AppDispatcher, _Dispatcher);
	
	    _createClass(AppDispatcher, [{
	        key: 'handleServerAction',
	
	        /**
	         * @param {object} action The details of the action, including the action's
	         * type and additional data coming from the server.
	         */
	        value: function handleServerAction(action) {
	            var payload = {
	                source: _PayloadSources.PayloadSources.SERVER_ACTION,
	                action: action
	            };
	            this.dispatch(payload);
	        }
	    }, {
	        key: 'handleViewAction',
	
	        /**
	         * @param {object} action The details of the action, including the action's
	         * type and additional data coming from the view.
	         */
	        value: function handleViewAction(action) {
	            var payload = {
	                source: _PayloadSources.PayloadSources.VIEW_ACTION,
	                action: action
	            };
	            this.dispatch(payload);
	        }
	    }]);
	
	    return AppDispatcher;
	})(_Dispatcher2.Dispatcher);
	
	exports['default'] = new AppDispatcher();
	module.exports = exports['default'];

/***/ },
/* 19 */
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _keyMirror = __webpack_require__(/*! keymirror */ 26);
	
	var _keyMirror2 = _interopRequireWildcard(_keyMirror);
	
	exports['default'] = {
	    ActionTypes: _keyMirror2['default']({
	        START_SEARCH: null,
	        RECIEVE_SEARCH_SYNONIM: null,
	        RECIEVE_SEARCH_STATUS: null,
	        RECIEVE_FLIGHTS: null,
	        SELECT_AIRLINE: null,
	        TOGGLE_AUTOUPDATE: null
	    }),
	
	    PayloadSources: _keyMirror2['default']({
	        SERVER_ACTION: null,
	        VIEW_ACTION: null
	    })
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/*!*************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/classnames/index.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	  Copyright (c) 2015 Jed Watson.
	  
	  Licensed under the MIT License (MIT), see
	  https://github.com/JedWatson/classnames/blob/master/LICENSE
	*/
	
	function classNames() {
		var classes = '';
		var arg;
	
		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}
	
			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 21 */
/*!***************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/fn/promise.js ***!
  \***************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.string.iterator */ 27);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 28);
	__webpack_require__(/*! ../modules/es6.promise */ 29);
	module.exports = __webpack_require__(/*! ../modules/$ */ 30).core.Promise;

/***/ },
/* 22 */
/*!***************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/helpers/inherits.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 23 */
/*!**********************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/helpers/get.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 31)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    desc = parent = getter = undefined;
	    _again = false;
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 24 */
/*!*************************!*\
  !*** ./libs/storage.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 22)['default'];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 23)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 6)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 7)['default'];
	
	var _Symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 32)['default'];
	
	var _Object$assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 33)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! app-dispatcher */ 18);
	
	var _AppDispatcher2 = _interopRequireWildcard(_AppDispatcher);
	
	var _ActionTypes = __webpack_require__(/*! constants */ 19);
	
	var _EventEmitter2 = __webpack_require__(/*! events */ 34);
	
	var CHANGE_EVENT = 'change';
	var state = _Symbol('state');
	
	/**
	 * Реализация хранилища из Flux архитектуры.
	 * @constructor
	 * @param {object} initState - пустое состояние, со значениями по умолчанию.
	 */
	
	var Storage = (function (_EventEmitter) {
	    function Storage() {
	        var initState = arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Storage);
	
	        _get(Object.getPrototypeOf(Storage.prototype), 'constructor', this).call(this);
	        this[state] = initState;
	    }
	
	    _inherits(Storage, _EventEmitter);
	
	    _createClass(Storage, [{
	        key: 'emitChange',
	        value: function emitChange() {
	            this.emit(CHANGE_EVENT);
	        }
	    }, {
	        key: 'addChangeListener',
	        value: function addChangeListener(callback) {
	            this.on(CHANGE_EVENT, callback);
	        }
	    }, {
	        key: 'removeChangeListener',
	        value: function removeChangeListener(callback) {
	            this.removeListener(CHANGE_EVENT, callback);
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            return _Object$assign({}, this[state]);
	        }
	    }, {
	        key: 'set',
	        value: function set(newState) {
	            this[state] = newState;
	            this.emitChange();
	        }
	    }]);
	
	    return Storage;
	})(_EventEmitter2.EventEmitter);
	
	exports['default'] = Storage;
	module.exports = exports['default'];

/***/ },
/* 25 */
/*!*******************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/flux/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(/*! ./lib/Dispatcher */ 35)


/***/ },
/* 26 */
/*!************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/keymirror/index.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	
	"use strict";
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;


/***/ },
/* 27 */
/*!********************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/es6.string.iterator.js ***!
  \********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(/*! ./$ */ 30).set
	  , at    = __webpack_require__(/*! ./$.string-at */ 36)(true)
	  , ITER  = __webpack_require__(/*! ./$.uid */ 37).safe('iter')
	  , $iter = __webpack_require__(/*! ./$.iter */ 38)
	  , step  = $iter.step;
	
	// 21.1.3.27 String.prototype[@@iterator]()
	$iter.std(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = at.call(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 28 */
/*!*****************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/web.dom.iterable.js ***!
  \*****************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 39);
	var $           = __webpack_require__(/*! ./$ */ 30)
	  , Iterators   = __webpack_require__(/*! ./$.iter */ 38).Iterators
	  , ITERATOR    = __webpack_require__(/*! ./$.wks */ 40)('iterator')
	  , ArrayValues = Iterators.Array
	  , NodeList    = $.g.NodeList;
	if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){
	  $.hide(NodeList.prototype, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = ArrayValues;

/***/ },
/* 29 */
/*!************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/es6.promise.js ***!
  \************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(/*! ./$ */ 30)
	  , ctx     = __webpack_require__(/*! ./$.ctx */ 41)
	  , cof     = __webpack_require__(/*! ./$.cof */ 42)
	  , $def    = __webpack_require__(/*! ./$.def */ 43)
	  , assert  = __webpack_require__(/*! ./$.assert */ 44)
	  , $iter   = __webpack_require__(/*! ./$.iter */ 38)
	  , SPECIES = __webpack_require__(/*! ./$.wks */ 40)('species')
	  , RECORD  = __webpack_require__(/*! ./$.uid */ 37).safe('record')
	  , forOf   = $iter.forOf
	  , PROMISE = 'Promise'
	  , global  = $.g
	  , process = global.process
	  , asap    = process && process.nextTick || __webpack_require__(/*! ./$.task */ 45).set
	  , P       = global[PROMISE]
	  , Base    = P
	  , isFunction     = $.isFunction
	  , isObject       = $.isObject
	  , assertFunction = assert.fn
	  , assertObject   = assert.obj
	  , test;
	
	// helpers
	function getConstructor(C){
	  var S = assertObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  if(isObject(it))then = it.then;
	  return isFunction(then) ? then : false;
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function notify(record, isReject){
	  var chain = record.c;
	  if(isReject || chain.length)asap(function(){
	    var promise = record.p
	      , value   = record.v
	      , ok      = record.s == 1
	      , i       = 0;
	    if(isReject && isUnhandled(promise)){
	      setTimeout(function(){
	        if(isUnhandled(promise)){
	          if(cof(process) == 'process'){
	            process.emit('unhandledRejection', value, promise);
	          } else if(global.console && isFunction(console.error)){
	            console.error('Unhandled promise rejection', value);
	          }
	        }
	      }, 1e3);
	    } else while(chain.length > i)!function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError(PROMISE + '-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }(chain[i++]);
	    chain.length = 0;
	  });
	}
	function $reject(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  notify(record, true);
	}
	function $resolve(value){
	  var record = this
	    , then, wrapper;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      wrapper = {r: record, d: false}; // wrap
	      then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record);
	    }
	  } catch(err){
	    $reject.call(wrapper || {r: record, d: false}, err); // wrap
	  }
	}
	
	// constructor polyfill
	if(!(isFunction(P) && isFunction(P.resolve) && P.resolve(test = new P(function(){})) == test)){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    assertFunction(executor);
	    var record = {
	      p: assert.inst(this, P, PROMISE),       // <- promise
	      c: [],                                  // <- chain
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false                                // <- handled rejection
	    };
	    $.hide(this, RECORD, record);
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  $.mix(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = assertObject(assertObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   isFunction(onFulfilled) ? onFulfilled : true,
	        fail: isFunction(onRejected)  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = assertFunction(res);
	        react.rej = assertFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      record.s && notify(record);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * (P != Base), {Promise: P});
	cof.set(P, PROMISE);
	__webpack_require__(/*! ./$.species */ 46)(P);
	
	// statics
	$def($def.S, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new (getConstructor(this))(function(res, rej){
	      rej(r);
	    });
	  },
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isObject(x) && RECORD in x && $.getProto(x) === this.prototype
	      ? x : new (getConstructor(this))(function(res){
	        res(x);
	      });
	  }
	});
	$def($def.S + $def.F * !__webpack_require__(/*! ./$.iter-detect */ 47)(function(iter){
	  P.all(iter)['catch'](function(){});
	}), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 30 */
/*!**************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.js ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value)); // eslint-disable-line no-use-before-define
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(/*! ./$.fw */ 48)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  it: function(it){
	    return it;
	  },
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  assertDefined: assertDefined,
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  mix: function(target, src){
	    for(var key in src)hide(target, key, src[key]);
	    return target;
	  },
	  each: [].forEach
	});
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 31 */
/*!*****************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \*****************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 49), __esModule: true };

/***/ },
/* 32 */
/*!*************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/core-js/symbol.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 51), __esModule: true };

/***/ },
/* 33 */
/*!********************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/core-js/object/assign.js ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 50), __esModule: true };

/***/ },
/* 34 */
/*!********************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/events/events.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];
	
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 35 */
/*!****************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/flux/lib/Dispatcher.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(/*! ./invariant */ 52);
	
	var _lastID = 1;
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };
	
	
	module.exports = Dispatcher;


/***/ },
/* 36 */
/*!************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.string-at.js ***!
  \************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(/*! ./$ */ 30);
	module.exports = function(TO_STRING){
	  return function(pos){
	    var s = String($.assertDefined(this))
	      , i = $.toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 37 */
/*!******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.uid.js ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol(' + key + ')_' + (++sid + Math.random()).toString(36);
	}
	uid.safe = __webpack_require__(/*! ./$ */ 30).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 38 */
/*!*******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.iter.js ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(/*! ./$ */ 30)
	  , ctx               = __webpack_require__(/*! ./$.ctx */ 41)
	  , cof               = __webpack_require__(/*! ./$.cof */ 42)
	  , $def              = __webpack_require__(/*! ./$.def */ 43)
	  , assertObject      = __webpack_require__(/*! ./$.assert */ 44).obj
	  , SYMBOL_ITERATOR   = __webpack_require__(/*! ./$.wks */ 40)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = {}
	  , IteratorPrototype = {};
	// Safari has byggy iterators w/o `next`
	var BUGGY = 'keys' in [] && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor.prototype
	    , iter  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT] || value;
	  // Define iterator
	  if($.FW)setIterator(proto, iter);
	  if(iter !== value){
	    var iterProto = $.getProto(iter.call(new Constructor));
	    // Set @@toStringTag to native iterators
	    cof.set(iterProto, NAME + ' Iterator', true);
	    // FF fix
	    if($.FW)$.has(proto, FF_ITERATOR) && setIterator(iterProto, $.that);
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = $.that;
	  return iter;
	}
	function getIterator(it){
	  var Symbol  = $.g.Symbol
	    , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
	  return assertObject(getIter.call(it));
	}
	function closeIterator(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)assertObject(ret.call(iterator));
	}
	function stepCall(iterator, fn, value, entries){
	  try {
	    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    closeIterator(iterator);
	    throw e;
	  }
	}
	var $iter = module.exports = {
	  BUGGY: BUGGY,
	  Iterators: Iterators,
	  prototype: IteratorPrototype,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  stepCall: stepCall,
	  close: closeIterator,
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol
	      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
	    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
	  },
	  get: getIterator,
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || $iter.prototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  },
	  define: defineIterator,
	  std: function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	    function createIter(kind){
	      return function(){
	        return new Constructor(this, kind);
	      };
	    }
	    $iter.create(Constructor, NAME, next);
	    var entries = createIter('key+value')
	      , values  = createIter('value')
	      , proto   = Base.prototype
	      , methods, key;
	    if(DEFAULT == 'value')values = defineIterator(Base, NAME, values, 'values');
	    else entries = defineIterator(Base, NAME, entries, 'entries');
	    if(DEFAULT){
	      methods = {
	        entries: entries,
	        keys:    IS_SET ? values : createIter('key'),
	        values:  values
	      };
	      $def($def.P + $def.F * BUGGY, NAME, methods);
	      if(FORCE)for(key in methods){
	        if(!(key in proto))$.hide(proto, key, methods[key]);
	      }
	    }
	  },
	  forOf: function(iterable, entries, fn, that){
	    var iterator = getIterator(iterable)
	      , f = ctx(fn, that, entries ? 2 : 1)
	      , step;
	    while(!(step = iterator.next()).done){
	      if(stepCall(iterator, f, step.value, entries) === false){
	        return closeIterator(iterator);
	      }
	    }
	  }
	};

/***/ },
/* 39 */
/*!*******************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/es6.array.iterator.js ***!
  \*******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 30)
	  , setUnscope = __webpack_require__(/*! ./$.unscope */ 53)
	  , ITER       = __webpack_require__(/*! ./$.uid */ 37).safe('iter')
	  , $iter      = __webpack_require__(/*! ./$.iter */ 38)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	$iter.std(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
	    return step(1);
	  }
	  if(kind == 'key'  )return step(0, index);
	  if(kind == 'value')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'value');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 40 */
/*!******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.wks.js ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$ */ 30).g
	  , store  = {};
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(/*! ./$.uid */ 37).safe('Symbol.' + name));
	};

/***/ },
/* 41 */
/*!******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.ctx.js ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var assertFunction = __webpack_require__(/*! ./$.assert */ 44).fn;
	module.exports = function(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 42 */
/*!******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.cof.js ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(/*! ./$ */ 30)
	  , TAG      = __webpack_require__(/*! ./$.wks */ 40)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 43 */
/*!******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.def.js ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 30)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = type & $def.P && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    $.hide(exports, key, exp);
	  }
	}
	module.exports = $def;

/***/ },
/* 44 */
/*!*********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.assert.js ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ./$ */ 30);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 45 */
/*!*******************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.task.js ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(/*! ./$ */ 30)
	  , ctx    = __webpack_require__(/*! ./$.ctx */ 41)
	  , cof    = __webpack_require__(/*! ./$.cof */ 42)
	  , invoke = __webpack_require__(/*! ./$.invoke */ 54)
	  , global             = $.g
	  , isFunction         = $.isFunction
	  , html               = $.html
	  , document           = global.document
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , postMessage        = global.postMessage
	  , addEventListener   = global.addEventListener
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if($.has(queue, id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!isFunction(setTask) || !isFunction(clearTask)){
	  setTask = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(cof(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    };
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document.createElement('script')){
	    defer = function(id){
	      html.appendChild(document.createElement('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 46 */
/*!**********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.species.js ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ./$ */ 30);
	module.exports = function(C){
	  if($.DESC && $.FW)$.setDesc(C, __webpack_require__(/*! ./$.wks */ 40)('species'), {
	    configurable: true,
	    get: $.that
	  });
	};

/***/ },
/* 47 */
/*!**************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.iter-detect.js ***!
  \**************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(/*! ./$.wks */ 40)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 48 */
/*!*****************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.fw.js ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 49 */
/*!******************************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.statics-accept-primitives */ 55);
	module.exports = __webpack_require__(/*! ../../modules/$ */ 30).core.Object.getOwnPropertyDescriptor;

/***/ },
/* 50 */
/*!*********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/fn/object/assign.js ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 56);
	module.exports = __webpack_require__(/*! ../../modules/$ */ 30).core.Object.assign;

/***/ },
/* 51 */
/*!********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/fn/symbol/index.js ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.symbol */ 57);
	module.exports = __webpack_require__(/*! ../../modules/$ */ 30).core.Symbol;

/***/ },
/* 52 */
/*!***************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/flux/lib/invariant.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 53 */
/*!**********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.unscope.js ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var $           = __webpack_require__(/*! ./$ */ 30)
	  , UNSCOPABLES = __webpack_require__(/*! ./$.wks */ 40)('unscopables');
	if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
	module.exports = function(key){
	  if($.FW)[][UNSCOPABLES][key] = true;
	};

/***/ },
/* 54 */
/*!*********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.invoke.js ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 55 */
/*!*************************************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/es6.object.statics-accept-primitives.js ***!
  \*************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(/*! ./$ */ 30)
	  , $def     = __webpack_require__(/*! ./$.def */ 43)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	function wrapObjectMethod(METHOD, MODE){
	  var fn  = ($.core.Object || {})[METHOD] || Object[METHOD]
	    , f   = 0
	    , o   = {};
	  o[METHOD] = MODE == 1 ? function(it){
	    return isObject(it) ? fn(it) : it;
	  } : MODE == 2 ? function(it){
	    return isObject(it) ? fn(it) : true;
	  } : MODE == 3 ? function(it){
	    return isObject(it) ? fn(it) : false;
	  } : MODE == 4 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : MODE == 5 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : function(it){
	    return fn(toObject(it));
	  };
	  try {
	    fn('z');
	  } catch(e){
	    f = 1;
	  }
	  $def($def.S + $def.F * f, 'Object', o);
	}
	wrapObjectMethod('freeze', 1);
	wrapObjectMethod('seal', 1);
	wrapObjectMethod('preventExtensions', 1);
	wrapObjectMethod('isFrozen', 2);
	wrapObjectMethod('isSealed', 2);
	wrapObjectMethod('isExtensible', 3);
	wrapObjectMethod('getOwnPropertyDescriptor', 4);
	wrapObjectMethod('getPrototypeOf', 5);
	wrapObjectMethod('keys');
	wrapObjectMethod('getOwnPropertyNames');

/***/ },
/* 56 */
/*!******************************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/es6.object.assign.js ***!
  \******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(/*! ./$.def */ 43);
	$def($def.S, 'Object', {assign: __webpack_require__(/*! ./$.assign */ 58)});

/***/ },
/* 57 */
/*!***********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/es6.symbol.js ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $        = __webpack_require__(/*! ./$ */ 30)
	  , setTag   = __webpack_require__(/*! ./$.cof */ 42).set
	  , uid      = __webpack_require__(/*! ./$.uid */ 37)
	  , $def     = __webpack_require__(/*! ./$.def */ 43)
	  , keyOf    = __webpack_require__(/*! ./$.keyof */ 59)
	  , has      = $.has
	  , hide     = $.hide
	  , getNames = $.getNames
	  , toObject = $.toObject
	  , Symbol   = $.g.Symbol
	  , Base     = Symbol
	  , setter   = false
	  , TAG      = uid.safe('tag')
	  , SymbolRegistry = {}
	  , AllSymbols     = {};
	
	function wrap(tag){
	  var sym = AllSymbols[tag] = $.set($.create(Symbol.prototype), TAG, tag);
	  $.DESC && setter && $.setDesc(Object.prototype, tag, {
	    configurable: true,
	    set: function(value){
	      hide(this, tag, value);
	    }
	  });
	  return sym;
	}
	
	// 19.4.1.1 Symbol([description])
	if(!$.isFunction(Symbol)){
	  Symbol = function Symbol(description){
	    if(this instanceof Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(description));
	  };
	  hide(Symbol.prototype, 'toString', function(){
	    return this[TAG];
	  });
	}
	$def($def.G + $def.W, {Symbol: Symbol});
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  pure: uid.safe,
	  set: $.set,
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = __webpack_require__(/*! ./$.wks */ 40)(it);
	    symbolStatics[it] = Symbol === Base ? sym : wrap(sym);
	  }
	);
	
	setter = true;
	
	$def($def.S, 'Symbol', symbolStatics);
	
	$def($def.S + $def.F * (Symbol != Base), 'Object', {
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: function getOwnPropertyNames(it){
	    var names = getNames(toObject(it)), result = [], key, i = 0;
	    while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
	    return result;
	  },
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: function getOwnPropertySymbols(it){
	    var names = getNames(toObject(it)), result = [], key, i = 0;
	    while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
	    return result;
	  }
	});
	
	setTag(Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag($.g.JSON, 'JSON', true);

/***/ },
/* 58 */
/*!*********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.assign.js ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ./$ */ 30);
	// 19.1.2.1 Object.assign(target, source, ...)
	/*eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/*eslint-enable no-unused-vars */
	  var T = Object($.assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = $.ES5Object(arguments[i++])
	      , keys   = $.getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 59 */
/*!********************************************************************************************!*\
  !*** /var/www/anywayanyday-test-task/~/babel-runtime/~/core-js/library/modules/$.keyof.js ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ./$ */ 30);
	module.exports = function(object, el){
	  var O      = $.toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map