import React, { Component } from 'react';
import Sns from '../portfolio/Sns';
import Contact from  '../portfolio/Contact';
import Todo from '../portfolio/Todo';

class Portfolio extends Component{
    showPortfolio = id => {
        switch (parseInt(id)){
            case 1 : return <Sns/>;
            case 2 : return <Contact/>;
            case 3 : return <Todo/>;
            default : return 'NONE';
        }
    };
    render(){
        return(
            <div>
                <h1>Portfolio</h1>
                <div>{
                    this.showPortfolio(this.props.match.params.id)
                }
                </div>
                <p><a href="/">Home</a></p>
            </div>
        );
    }
}
export default Portfolio;