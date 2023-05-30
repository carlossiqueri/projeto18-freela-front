import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  SelectedHotelContainer,
  ImagesContainer,
  ContainerCaracteristicas,
} from "./style.jsx";

export default function SelectedHotel() {
  const { hotel_id } = useParams();
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/hotels/details/${hotel_id}`)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <SelectedHotelContainer>
      <h1>{hotel[0]?.name}</h1>
      <h2>Galeria de imagens</h2>
      <ImagesContainer>
        <img
          src={
            "https://i.pinimg.com/736x/23/78/a1/2378a1d24ba86d3d7d8e67cd6358ee61.jpg"
          }
        />
        <img
          src={
            "https://i.pinimg.com/736x/23/78/a1/2378a1d24ba86d3d7d8e67cd6358ee61.jpg"
          }
        />
        <img
          src={
            "https://i.pinimg.com/736x/23/78/a1/2378a1d24ba86d3d7d8e67cd6358ee61.jpg"
          }
        />
        <img
          src={
            "https://i.pinimg.com/736x/23/78/a1/2378a1d24ba86d3d7d8e67cd6358ee61.jpg"
          }
        />
      </ImagesContainer>
      <ContainerCaracteristicas>
      <ul>
          <h2>Detalhes</h2>
          <li><b>Preço:</b> R${hotel[0]?.price},00</li>
          <li><b>Local:</b> {hotel[0]?.city}</li>
          <li><b>Descrição:</b> {hotel[0]?.description}</li>
        </ul>
          
        <ul>
          <h2>Comodidades</h2>
          <li>{hotel[0]?.coffe? "Café da manhã" : ""}</li>
          <li>{hotel[0]?.pool? "Piscina" : ""}</li>
          <li>{hotel[0]?.type}</li>
        </ul>
      </ContainerCaracteristicas>

    </SelectedHotelContainer>
  );
}
