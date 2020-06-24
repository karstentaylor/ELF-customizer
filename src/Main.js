import React from 'react';

class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="main-section">
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.props.features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {this.props.summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.currency.format(this.props.total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default Main;

//features component in 11
