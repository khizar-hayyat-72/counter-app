import React, { Component } from 'react';
import './App.css';
import Counters from './components/Counters';
import NavBar from './components/Navbar'



class App extends Component {
  state = { 
    counters : [
        {id : 1 , value: 0},
        {id : 2 , value: 0},
        {id : 3 , value: 0},
        {id : 4 , value: 0}
    ]
 }

handelIncrement = counter =>{
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})

}

handelReset = () =>{
    const counter = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counter})
 }

 handelDelete = (counterId) => {
     let counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters })
 }
  render() { 
    return ( 
      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className = 'container'>
        <Counters onIncrement={this.handelIncrement} onReset={this.handelReset} onDelete={this.handelDelete} counters={this.state.counters}/>
      </main>
    </React.Fragment>
     );
  }
}
 
export default App;




















