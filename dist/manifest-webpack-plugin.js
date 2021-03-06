'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ManifestPlugin = function () {
  function ManifestPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ManifestPlugin);

    if (!options.path) {
      throw new Error('Manifest path must be set using `options.path`.');
    }

    this.path = options.path;
  }

  _createClass(ManifestPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      var writeManifest = function writeManifest(stats) {
        _fs2.default.writeFileSync(_this.path + '/manifest.json', JSON.stringify({ hash: stats.hash }, null, 2) + '\n');
      };

      compiler.plugin('done', writeManifest.bind(this));
    }
  }]);

  return ManifestPlugin;
}();

exports.default = ManifestPlugin;
