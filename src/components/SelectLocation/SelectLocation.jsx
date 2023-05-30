import { useEffect, useState } from "react";
import {
  Body,
  Content,
  HeadlineContainer,
  Headline,
  SubHeadline,
} from "./style.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SelectLocation() {
  const [destination, setDestination] = useState("Veneza , Itália");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  
  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/destinations`)
      .then((res) => {
        setCities(res.data)
      })
      .catch((err) => console.log(err.data.response));
  }, []);

  function chooseCity(e) {
    e.preventDefault();
    const redirectCity = cities.filter((c) => c.name == destination)
    navigate(`/tickets/${redirectCity[0].id}`);
  }

  console.log(cities);

  return (
    <Body>
      <Content>
        <HeadlineContainer>
          <Headline>Dare to live a life you will remember.</Headline>
          <SubHeadline>
            A vida é muito curta e o mundo é muito grande. Comece agora!
          </SubHeadline>

          <form onSubmit={chooseCity}>
            <select
              value={destination}
              onChange={(d) => setDestination(d.target.value)}
            >
              {cities.map((c) => (
                <optgroup key={c.id}>
                  <option>{c.name}</option>
                </optgroup>
              ))}
            </select>
            <button>Step 1</button>
          </form>
        </HeadlineContainer>

        <img
          src={
            "https://i.pinimg.com/736x/a5/a6/76/a5a676538ddc6189d57507e2b5476f0c.jpg"
          }
        />
        <img src={"https://i.pinimg.com/564x/15/f0/e0/15f0e0372d1e04df5f325d00e5899069.jpg"} />
      </Content>
    </Body>
  );
}
