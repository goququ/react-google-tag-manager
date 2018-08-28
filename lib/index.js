'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _build_parts = require('./build_parts');

var _build_parts2 = _interopRequireDefault(_build_parts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GTMParts(args) {
    var parts = (0, _build_parts2.default)(args);

    function noScriptAsReact() {
        // eslint-disable-next-line
        return _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: parts.iframe } });
    }

    function noScriptAsHTML() {
        return '<noscript>' + parts.iframe + '</noscript>';
    }

    function scriptAsReact() {
        // eslint-disable-next-line
        return _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: parts.script } });
    }

    function scriptAsHTML() {
        return '<script>' + parts.script + '</script>';
    }

    return {
        noScriptAsReact: noScriptAsReact,
        noScriptAsHTML: noScriptAsHTML,
        scriptAsReact: scriptAsReact,
        scriptAsHTML: scriptAsHTML
    };
}

exports.default = GTMParts;