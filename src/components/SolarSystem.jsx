import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => {
          const id = planet.name;
          const img = planet.image;
          return <PlanetCard key={ id } planetName={ id } planetImage={ img } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
