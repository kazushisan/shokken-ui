import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* stylelint-disable */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    color: rgba(#000, 0.6);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }

  /* stylelint-enable */
  input::placeholder {
    color: rgba(#000, 0.2);
  }
    
  h1 {
    font-size: 22px;
    font-weight: bold;
    color: rgba(#000, 0.9);
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: rgba(#000, 0.8);
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: rgba(#000, 0.8);
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: rgba(#000, 0.7);
  }

  h5,
  h6 {
    font-size: 14px;
    color: rgba(#000, 0.6);
  }
`

export default GlobalStyle