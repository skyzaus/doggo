import { Link } from "react-router-dom";

function DogList({ dogs }) {
  const style = {width: 150 }
    return (
    <div>
      <h1>Choose a dog to learn more!</h1>
      {dogs.map(dog => (
        <div key={dog.name}>
          <img src={`/${dog.src}.jpg`} alt={dog.name} style={style} />
         
          <Link to={`/dogs/${dog.name}`}>
            {dog.name}
          </Link>
          
        </div>

      ))}
    </div>
  );
}

export default DogList;