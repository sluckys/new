import React from 'react';
import logo from './logo-01.png';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      newItem: " ",
      list : []
    }
  }

  addItem(todoValue){
    if(todoValue !== " ") {
      const newItem ={
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState( {
        list,
        newItem: " "
      });
    }
  }
    deleteItem(id){
      const list = [...this.state.list];
      const updatelist = list.filter(item=> item.id !== id);
      this.setState({list :updatelist})
    }
    updateInput(input) {
      this.setState( {newItem:input});
        }

  render ( ) {
    return (
      <div>
          
      <img src={logo} width="70px" height="50px" className="logo"/>
      <h1 className="app-title"> LCO todo App</h1>
      <div className="container">
        Add an item......
        <br />
        <input
        type="text"
        className="input-text"
        placeholder="write a todo required"
        value={this.state.newItem}
        onChange={ e => this.updateInput(e.target.value)}
        />
        <button 
        className="add-btn"
        onClick={() => this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length}
        > ADD TODO</button>
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                       <input 
                       type="chcekbox"
                       name="idDone"
                       checked={item.isDone}
                       onChange={()=> {}}
                       />
                       {item.value}
                       <button 
                       className="btn"
                       onClick={( )=> this.deleteItem(item.id)}>
                         Delete
                       </button>
                </li>
              )
            })}
            <li>
              <input type="checkbox" name=" " id=" " />
              Record youtube videos
              <button className="btn">Delete</button>
            </li>
          </ul>
        </div>

      </div>
      </div>
    )
  }
}

export default App;