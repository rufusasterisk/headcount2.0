import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/CardContainer.css';

const borderColors = ['blue-border', 'green-border'];

const defineBorderColor = (displayArrayCard, comparisonArray) => {
  return (comparisonArray.findIndex( (comparisonArrayCard) => {
    return comparisonArrayCard.location === displayArrayCard.location;
  }));
};

const CardContainer = ({ dataArray, onCardClick, comparisonArray }) => (
  <section>
    {dataArray.map((district) => {
      return (
        <Card
          key={district.location}
          borderColorClass={borderColors[defineBorderColor(
            district, comparisonArray)]}
          districtName={district.location}
          districtObject={district.data}
          onCardClick={onCardClick} />
      );
    }
    )}
  </section>
);

CardContainer.propTypes = {
  dataArray: PropTypes.array,
  onCardClick: PropTypes.func,
  comparisonArray: PropTypes.array
};

export default CardContainer;
