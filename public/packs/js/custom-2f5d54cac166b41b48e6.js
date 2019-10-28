/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/custom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/custom.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/custom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/********************************************************
 *
 * Custom Javascript code for Flexor Bootstrap theme
 *
 *******************************************************/
$(document).ready(function () {
  // Bootstrap collapse
  $('[data-toggle="collapse"]').on({
    'click': function click() {
      var $this = $(this),
          target = $this.data('target') || null;

      if ($(target).size() > 0) {
        $this.toggleClass('target-open', !$(target).hasClass('in'));
      }
    }
  }); // Tooltip & popovers

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover(); // Dropdowns on hover on desktop

  var navbarToggle = '.navbar-toggle'; // name of navbar toggle, BS3 = '.navbar-toggle', BS4 = '.navbar-toggler'

  $('.dropdown, .dropup').each(function () {
    var dropdown = $(this),
        dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
        dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false; // Mouseover

    dropdown.hover(function () {
      var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none';

      if (!$(this).closest('.dropdown').hasClass('open')) {
        return;
      }

      if (dropdownHoverAll == true || dropdownHoverAll == false && notMobileMenu) {
        dropdownToggle.trigger('click');
      }
    });
  }); // Background image via data tag

  $('[data-block-bg-img]').each(function () {
    // @todo - invoke backstretch plugin if multiple images
    var $this = $(this),
        bgImg = $this.data('block-bg-img');
    $this.css('backgroundImage', 'url(' + bgImg + ')').addClass('block-bg-img');
  }); // jQuery counterUp

  if (jQuery().counterUp) {
    $('[data-counter-up]').counterUp({
      delay: 20
    });
  } //Scroll Top link


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrolltop').fadeIn();
    } else {
      $('.scrolltop').fadeOut();
    }
  });
  $('.scrolltop').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  }); // OwlCarousel

  $('[data-toggle="owlcarousel"], [data-toggle="owl-carousel"]').each(function () {
    var $this = $(this),
        owlCarouselSettings = $this.data('owlcarousel-settings') || {};
    $this.owlCarousel(owlCarouselSettings);
  }); //initialise Stellar.js

  $(window).stellar({
    responsive: true
  });
});

/***/ })

/******/ });
//# sourceMappingURL=custom-2f5d54cac166b41b48e6.js.map