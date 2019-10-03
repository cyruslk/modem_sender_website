import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tableArrayToJsx: null,
      typedCharac: null
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown);
    let renderKeyCodeTable = () => {
      let tableArray = [];
      for (var i = 0; i < 256; i++) {
        tableArray.push(String.fromCharCode(i))
      }
       let tableArrayToJsx = tableArray.map((ele, index) => {
        return (
          <div key={index}>
            <span>{ele}</span>
          </div>
        )
      })
      this.setState({
        tableArrayToJsx
      })
    }
    renderKeyCodeTable();
  }

  _handleKeyDown = (keyPressCode) => {
    let typedCharac = String.fromCharCode(keyPressCode.keyCode);
    console.log(typedCharac);
  }

  render() {
    if(!this.state.tableArrayToJsx){
      return (
        <div>loading</div>
      )
    }else{
      return (
        <div>
          {this.state.tableArrayToJsx}
        </div>
      )
    }
  }
}
export default App;
