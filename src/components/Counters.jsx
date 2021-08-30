import React, { Component } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Counter from './Counter'

class Counters extends Component {
   
    render() { 
        return (
                <div>
                    <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2 mt-5'>Reset</button>
                    {this.props.counters.map(counter => (
                    <Counter key = {counter.id} onDelete={this.props.onDelete} counter={counter} onIncrement={this.props.onIncrement} >
                        <h6>This is Product </h6>
                    </Counter>
                    ))}
                </div>
              );
    }
}
 
export default Counters;