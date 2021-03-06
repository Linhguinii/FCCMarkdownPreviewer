import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const initialState =
`# Header
## Sub-header
[Link](https://www.linkedin.com/in/hoanglinh99/)

Inline code : \`<div></div>\`

Code Block:
\`\`\`\

let x=0;
\`\`\`\

List:
- Item 1
- Item 2
- Item 3

> Block Quote

![Image](https:goo.gl/Umyytc)

**Bolded text**
`;
// a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: initialState };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value });

  }

  render() {
    const markdown = marked(this.state.inputValue);
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", null, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, rows: 5, cols: 40 },
      initialState), /*#__PURE__*/

      React.createElement("h3", null, "Preview"), /*#__PURE__*/
      React.createElement("div", { className: "preview", id: "preview", dangerouslySetInnerHTML: { __html: markdown } })));


  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('editor-block'));