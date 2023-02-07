import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import instance from "axios"; // this make http requests easier

function TinderCards() {
  const [people, setPeople] = useState([]);

  const baseURL = "http://localhost:4000";
  // setPeople(people.push(newPeople));

  // kind of call back function after render function // if you want to call something after render method
  // IF we use an empty array at another argument of useEffect() function it will be called only one time after
  //  render function "for Example : useEffect(()=>{},[]);"
  useEffect(() => {
    async function fetchData() {
      await instance.get(`${baseURL}/tinder/card`).then((response) => {
        setPeople(response.data);
      });
    }
    fetchData();
  }, []);

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("retrieving : " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
    // setLastDirection(direction);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((people) => (
          <TinderCard
            className="swipe"
            key={people.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, people.name)}
            onCardLeftScreen={() => outOfFrame(people.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${people.imgUrl})` }}
            >
              <h3>{people.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
