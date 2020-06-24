import React from 'react';
import Options from './Options';
import slugify from 'slugify';

class Feature extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        <Options
          itemHash={itemHash}
          item={this.item}
          currency={this.props.currency}
          feature={this.feature}
        />;
      });
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
    });
}

export default Feature;
