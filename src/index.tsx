import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createElement } from 'inferno-create-element';
import { render } from 'inferno';

class Other extends React.Component<{name: string}, {}> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Other name="World" />
  </React.StrictMode>
);

render(
  createElement('div', { className: 'test' }, "I'm a child!"),
  document.getElementById("app")
);
