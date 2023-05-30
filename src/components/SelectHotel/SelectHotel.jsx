import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SliderThumbWithTooltip from "../Slider/Slider.jsx";
import {
  Page,
  ContainerSlider,
  SliderTitle,
  BodyTicket,
  ContainerTicket,
  HotelTitle,
} from "./style.jsx";

export default function SelectHotel() {
  const { destination_id } = useParams();
  const [hotels, setHotels] = useState([]);
  const [valor, setValor] = useState([0, 10000]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fletchData() {
      const getHotels = await axios.get(
        `http://localhost:5000/hotels/${destination_id}?min=${valor[0]}&max=${valor[1]}`
      );
      setHotels(getHotels.data);
    }
    fletchData();
  }, [valor]);

  function selectedHotel(id) {
    navigate(`/hotels/details/${id}`);
  }
  return (
    <Page>
      <ContainerSlider>
        <SliderTitle>Selecione o filtro de preços desejado:</SliderTitle>
        <SliderThumbWithTooltip setValor={setValor} />
        <p>
          Min: {valor[0]} <br /> Max: {valor[1]}
        </p>
      </ContainerSlider>
      <BodyTicket>
        {hotels.map((h, index) => {
            return (
                <ContainerTicket key={index}>
                  <img
                    onClick={() => selectedHotel(h.id)}
                    src={
                      "https://i.pinimg.com/736x/23/78/a1/2378a1d24ba86d3d7d8e67cd6358ee61.jpg"
                    }
                  />
                  <HotelTitle onClick={() => selectedHotel(h.id)}>
                    {h.name} <br />
                    Preço Diária: R${h.price},00 <br />
                  </HotelTitle>
                </ContainerTicket>)
        })}
      </BodyTicket>
    </Page>
  );
}
