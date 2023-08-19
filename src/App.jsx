import { useContext, useEffect, useRef, useState } from "react";

import { useQuery } from "react-query";
import Store from "./store/store.js";

import {fetchTerrain} from "./service.js"
function useIncrement() {
  const [count1, setCount] = useState(0);
  const increment = () => {
    setCount(count1 => count1 + 1);
  }
  return [count1, increment];
}


function App() {
  //  data
  // hook userRef
  const {name} = useContext(Store);
  console.log(name);
  //const inputRef = useRef();
  const {status,data,error} = useQuery("terrain",fetchTerrain);
  const [count1, increment] = useIncrement(0);
  console.log(data);
  useEffect(() => {
    document.title = "Document " + count1;
  }, [count1])

  const [count, setCount] = useState(0);

  console.log(count);

  const [nouveau, setNouveau] = useState("Same");
  const [voitures, setVoitures] = useState([
    {
      id: 1,
      name: "BMW"
    },
    {
      id: 2,
      name: "Tesla"
    },
    {
      id: 3,
      name: "beaugati"
    }
  ]);

  // comportements
  const handleDelete = (id) => {
    let voitureCopy = [...voitures];

    const voituresUpdate = voitureCopy.filter((voiture) => voiture.id != id);

    setVoitures(voituresUpdate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputRef.current.value);
    let voitureCopy = [...voitures];
    voitureCopy.push({ id: voitureCopy.length + 1, name: nouveau });
    setVoitures(voitureCopy);
    setNouveau("");
  };
  const handleChange = (event) => {
    setNouveau(event.target.value);
  };

  // rendre

  return (
    <div>
      <h1>Liste</h1>

      <button onClick={increment}>{count1}</button>
      <ul>
        {voitures.map((voiture) => (
          <li key={voiture.id}>
            {voiture.name}{" "}
            <button onClick={() => handleDelete(voiture.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveau}
          type="text"
          placeholder="ajouter un voiture"
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
}

export default App;
