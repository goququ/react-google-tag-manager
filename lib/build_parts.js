'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function convertToKeyValueString(obj) {
    return JSON.stringify(obj).slice(1, -1);
}

function buildParts(_ref) {
    var id = _ref.id,
        _ref$dataLayerName = _ref.dataLayerName,
        dataLayerName = _ref$dataLayerName === undefined ? 'dataLayer' : _ref$dataLayerName,
        _ref$additionalEvents = _ref.additionalEvents,
        additionalEvents = _ref$additionalEvents === undefined ? {} : _ref$additionalEvents,
        _ref$scheme = _ref.scheme,
        scheme = _ref$scheme === undefined ? '' : _ref$scheme,
        previewVariables = _ref.previewVariables;

    if (id === undefined) {
        throw new Error('No GTM id provided');
    }

    var iframe = '\n        <iframe src="' + scheme + '//www.googletagmanager.com/ns.html?id=' + id + '"\n            height="0" width="0" style="display:none;visibility:hidden"></iframe>';

    var script = '\n        (function(w,d,s,l,i){w[l]=w[l]||[];\n            w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\', ' + convertToKeyValueString(additionalEvents) + '});\n            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';\n            j.async=true;j.src=\'' + scheme + '//www.googletagmanager.com/gtag/js?id=\'+i+dl\n            ' + (previewVariables ? '+"' + previewVariables + '"' : '') + ';\n            f.parentNode.insertBefore(j,f);\n        })(window,document,\'script\',\'' + dataLayerName + '\',\'' + id + '\');';

    return {
        iframe: iframe,
        script: script
    };
}

exports.default = buildParts;