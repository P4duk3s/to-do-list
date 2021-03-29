import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '', 
      list: []
    };
  }

  onChangeValue = e => {
    this.setState({value: e.target.value});
  };

  onAddItem = () => {
    this.setState(state => {
      const list = [state.value, ...state.list]
      return {
        value: '',
        list
      };
    });
  };

  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
 
      return {
        list,
      };
    });
  };

  render() {
    return (
      <div>
        <h1 className="app-title">TO DO LIST</h1>
        <div className="container">
        <input
          type="text"
          placeholder="Give me a task!"
          onChange={this.onChangeValue} 
          value={this.state.value}
        >
        </input>
        <button
          className="add-btn"
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value.length}
        >
          +
        </button>
        <ul>
          {this.state.list.map((item, index) => {
            return(
              <li 
                key={item}>{item}
              <button
                className="btn"
                onClick={() => this.onRemoveItem(index)}
              >X</button></li>
            )
          })}
        </ul>
      </div>
      </div>
      
      
        
    );
  }
}

export default App;
