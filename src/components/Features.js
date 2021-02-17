import React from 'react';
import PropTypes from 'prop-types';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div>
              <img src={item.image.publicURL} style={{ height: '160px' }} />
            </div>
          </div>
          <h3 className="is-size-4 has-text-weight-medium">{item.title}</h3>
          <p className="mt-4">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
