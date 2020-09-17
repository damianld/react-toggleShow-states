import React from "react";
import "./App.css";

class Helloworld extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          <p>{this.props.mytext}</p>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Fazt" subtitle="loremp ispum" />
      <Helloworld mytext="Hola mundo" subtitle="componente 2" />
      <Helloworld mytext="Ola!" subtitle="el tercero" />
    </div>
  );
}

export default App;
