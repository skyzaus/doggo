import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { dog } = useParams();

  const dogDetails = dogs.find(d => d.name.toLowerCase() === dog.toLowerCase());
const style = {width: 250}
  if (!dogDetails) return <h2>Dog not found</h2>;
   
  return (
    <>
      <h1>{ dogDetails.name }</h1>
      <div key={dogDetails.name}>
          <img src={`/${dogDetails.src}.jpg`} alt={dogDetails.name} style={style}/>
          </div>
      <p>Age: { dogDetails.age } </p>
      <br />
      <h3>Facts about { dogDetails.name }:</h3>
      <ul>
        { dogDetails.facts.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </>
  );
}

export default DogDetails;