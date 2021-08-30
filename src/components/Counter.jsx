import React, { Component } from 'react';

class Counter extends Component {
    // state = {  
    //     count : this.props.counter.value
    //     // tags : ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']
    // }

    // render_tags(){
    //     if (this.state.tags.length === 0) return  <h1>There are Tag's List Available</h1>;
    //     return  <ul>{this.state.tags.map(tag => <li key = {tag}><h1>{ tag }</h1></li>)}</ul>
    //     }
    


    // handelIncrement = () => {
    //         this.setState({ count: this.state.count + 1 })
    //     }


    render() { 
        return  (
            <React.Fragment>
                {this.props.children}
                <span className={this.getBadgesClasses()}> {this.formatCount()}  </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm '>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm  m-4'>Delete</button>
                
              
               {/* <div>
                {this.render_tags()}
                {this.state.tags.length === 0 && <h2>Kindly Create the List of Tags Now.</h2>}
                </div> */}
            </React.Fragment>
        ); 
        
    }
    getBadgesClasses() {
        let colors = 'badge m-4 alert-';
        colors += this.props.counter.value === 0 ? 'warning' : 'primary';
        return colors;
    }

    formatCount(){
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;
