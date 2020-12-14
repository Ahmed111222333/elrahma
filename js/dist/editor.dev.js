"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'datatables', 'datatables-editor'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // Node / CommonJS
    module.exports = function ($, dt) {
      if (!$) {
        $ = require('jquery');
      }

      factory($, dt || $.fn.dataTable || require('datatables'));
    };
  } else if (jQuery) {
    // Browser standard
    factory(jQuery, jQuery.fn.dataTable);
  }
})(function ($, DataTable) {
  'use strict';

  if (!DataTable.ext.editorFields) {
    DataTable.ext.editorFields = {};
  }

  var _fieldTypes = DataTable.Editor ? DataTable.Editor.fieldTypes : DataTable.ext.editorFields;

  _fieldTypes.qr = {
    create: function create(conf) {
      // Section 1 - DOM setup
      var safeId = DataTable.Editor.safeId(conf.id);
      var video = $('<video/>').css({
        display: 'none',
        'max-width': '100%',
        padding: '2% 0%'
      });
      var input = $('<input id="' + safeId + '"/>');
      var scan = $('<button>Scan</button>').css({
        margin: '0% 1%'
      });
      var container = $('<div/>').append(input).append(scan).append(video);
      conf.qrInput = input; // Section 2 - Instascan setup

      var scanner = new Instascan.Scanner({
        video: video[0]
      });
      scanner.addListener('scan', function (content) {
        input.val(content).css({
          border: 'blue 2px solid'
        });
        video.css({
          border: 'blue 2px solid'
        });
        setTimeout(function () {
          input.css({
            border: 'none'
          });
          video.css({
            border: 'none'
          });
        }, 500);
      }); // Section 3 - Toggle control

      scan.on('click', function () {
        if (this.innerHTML === 'Scan') {
          Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
              video.css({
                display: 'block'
              });
              scanner.start(cameras[0]);
            } else {
              console.error('No cameras found.');
            }
          })["catch"](function (e) {
            console.error(e);
          });
          this.innerHTML = 'Stop';
        } else if (this.innerHTML === 'Stop') {
          video.css({
            display: 'none'
          });
          scanner.stop();
          this.innerHTML = 'Scan';
        }
      }); // Section 4 - Close behaviour

      this.on('close', function () {
        video.css({
          display: 'none'
        });
        scanner.stop();
        this.innerHTML = 'Scan';
      });
      return container;
    },
    get: function get(conf) {
      return conf.qrInput.val();
    },
    set: function set(conf, val) {
      conf.qrInput.val(val !== null ? val : '');
    },
    enable: function enable(conf) {},
    disable: function disable(conf) {}
  };
});