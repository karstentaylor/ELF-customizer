import React from 'react';
import FeaturesStore from './FeaturesStore';
import Options from './Options';
import slugify from 'slugify';

function Features(props) {
  return Object.keys(FeaturesStore).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = FeaturesStore[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return <Options feature={feature} format={props.format} itemHash={itemHash} key={itemHash} option={item} selected={props.selected} updateFeature={props.updateFeature} />
    })
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
};

export default Features;
