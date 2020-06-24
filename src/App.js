import React, { Component } from 'react';
import Store from './Store';
import Header from './Header';
import Main from './Main';
import Summary from './Summary';
import Feature from './Feature';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class App extends Component {
  state = { ...Store };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <div className="Main">
          <section>
            <Main
              currency={USCurrencyFormat}
              features={features}
              summary={summary}
              total={total}
            />
          </section>
          <Feature />
          <Summary
            featureHash={featureHash}
            selectedOption={selectedOption}
            currency={USCurrencyFormat}
          />
        </div>
      </div>
    );
  }
}

export default App;
