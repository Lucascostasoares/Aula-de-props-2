import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componente/menu';
import imagem1 from './componente/imagem1';
import imagem2 from './componente/imagem2';
import imagem3 from './componente/imagem3';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      component: [
        'imagem1',
        'imagem2',
        'imagem3',
      ],
      renderizado: ''
    }
  }
  mudançadeimagem = (imagem) => {
    this.setState({
      selecionado: imagem,
    });
  }


  renderizarComponent = () => {
    switch (this.state.renderizado){
      case 'imagem1':
        return('imagem1');      
        break;
      case 'imagem2':
        return('imagem2');      
        break;
      case 'imagem3':
        return('imagem3');      
        break;
      return null;

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo alt=" logo />
          <p>
            Edit <code>src//App.js</code> and save  to reload.
          </p>
          <Menu component={this.state.component} />
        </header>
      </div>
    )
  }
}


export default App;
