import React, { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters] = useState([
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ]);

  const addToTeam = (character) => {
    if (money >= character.price) {
      setTeam([...team, character]);
      setMoney(money - character.price);
    }
  };

  const removeFromTeam = (character) => {
    setTeam(team.filter((member) => member !== character));
    setMoney(money + character.price);
  };

  const totalStats = team.reduce((totals, member) => {
    totals.cost += member.price;
    totals.strength += member.strength;
    totals.agility += member.agility;
    return totals;
  }, { cost: 0, strength: 0, agility: 0 });

  return (
    <div>
      <h1>Zombie Apocalypse Team</h1>
      <p>Money: ${money}</p>
      <div>
        <h2>Available Characters</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {zombieFighters.map((fighter) => (
            <div key={fighter.name} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h3>{fighter.name}</h3>
              <img src={fighter.img} alt={fighter.name} style={{ width: '150px', height: '150px' }} />
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => addToTeam(fighter)}>Add to Team</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Your Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {team.map((member, index) => (
            <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h3>{member.name}</h3>
              <img src={member.img} alt={member.name} style={{ width: '150px', height: '150px' }} />
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => removeFromTeam(member)}>Remove from Team</button>
            </div>
          ))}
        </div>
        <h3>Total Cost: ${totalStats.cost}</h3>
        <h3>Total Strength: {totalStats.strength}</h3>
        <h3>Total Agility: {totalStats.agility}</h3>
      </div>
    </div>
  );
}

export default App;
