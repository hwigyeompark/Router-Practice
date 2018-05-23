import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Greetings</h1>
                <ul>
                    <li><a href="/ko">Korean</a></li>
                    <li><a href="/en">English</a></li>
                    <li><a href="/portfolio/1">SNS</a></li>
                    <li><a href="/portfolio/2">Contact</a></li>
                    <li><a href="/portfolio/3">Todo</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;