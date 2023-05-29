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
            "src/assets/Best Places to See the Northern Lights in Norway - Mapping Megan.jpg"
          }
        />
        <img src={"src/assets/16 of the Best Places to Visit in Italy.jpg"} />
      </Content>
    </Body>
  );
}
