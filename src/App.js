import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import GreetingKo from "./routes/GreetingKo";
import GreetingEn from "./routes/GreetingEn";
import Portfolio from "./routes/Portfolio";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/ko' component={GreetingKo} />
            <Route path='/en' component={GreetingEn} />
            <Route path='/portfolio/:id' component={Portfolio} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
