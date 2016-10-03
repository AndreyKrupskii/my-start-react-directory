import React    from 'react';
import ReactDom from 'react-dom/server';
import App      from './../../client/components/App.component';

const componetHtml = ReactDom.renderToString(<App />);

module.exports = componetHtml;