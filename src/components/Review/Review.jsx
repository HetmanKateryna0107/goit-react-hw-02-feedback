import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Review.module.css';

export class Review extends Component {
 state={counter:this.props.defaultValue ?? 0 }

 handlePlus = () => {
    this.setState((prevState)=>({counter: prevState.counter + 1}))
 }
 handleUpdate =(event) =>{
const {name} = event.target
switch (name){
    case 'good':
}
 }

    render(){
        const {counter} =this.state;
    return (
        <div >
          <h2>Pleace leave feedback</h2>
          <button name='good' onClick={this.handleUpdate} className={css.btn}>Good</button>
          <button name='neutral'onClick={this.handleUpdate} className={css.btn}>Neutral</button>
          <button name='bad' onClick={this.handleUpdate} className={css.btn}>Bad</button>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {counter}</li>
            <li>Neutral: {counter}</li>
            <li>Bad: {counter}</li>
          </ul>
        </div>
      );
 }

   
};
// Review.PropTypes