import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture,rating}) {
return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4> 
      <img src={picture} alt={name} />
    </div>
);
}

const foodILike = [
  {
      id : 1,
      name : "kimchi",
      image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
      rating : 5
  },
  {
      id : 2,
      name : "bibmbab",
      image: "https://www.recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
      rating : 3

  }

]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>;
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  ratring : PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
