import React from 'react';
import buildParts from './build_parts';

function GTMParts(args) {
    const parts = buildParts(args);

    function noScriptAsReact() {
        // eslint-disable-next-line
        return <noscript dangerouslySetInnerHTML={{ __html: parts.iframe }} />;
    }

    function noScriptAsHTML() {
        return `<noscript>${parts.iframe}</noscript>`;
    }

    function scriptAsReact() {
        // eslint-disable-next-line
        return <script dangerouslySetInnerHTML={{ __html: parts.script }} />;
    }

    function scriptAsHTML() {
        return `<script>${parts.script}</script>`;
    }

    return {
        noScriptAsReact,
        noScriptAsHTML,
        scriptAsReact,
        scriptAsHTML
    };
}

export default GTMParts;
