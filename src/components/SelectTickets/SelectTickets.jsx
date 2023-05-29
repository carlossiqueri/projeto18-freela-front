import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ContainerTicket,
  BodyTicket,
  Page,
  FlightTitle,
  ContainerSlider,
  SliderTitle,
} from "./style.jsx";
import dayjs from "dayjs";
import SliderThumbWithTooltip from "../Slider/Slider.jsx";

export default function TicketsByCity() {
  const { destination_id } = useParams();
  const [flights, setFlights] = useState([]);
  const [valor, setValor] = useState([0, 10000]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fletchData() {
      const getTickets = await axios.get(
        `http://localhost:5000/tickets/${destination_id}?min=${valor[0]}&max=${valor[1]}`
      );

      console.log(getTickets.data);
      setFlights(getTickets.data);
    }

    fletchData();
  }, [valor]);

  function selectedTicket(id) {
    navigate(`/tickets/details/${id}`);
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
        {flights.map((f, index) => {
          return (
            <ContainerTicket key={index}>
              <img
                onClick={() => selectedTicket(f.id)}
                src={
                  "/src/assets/Icon Airplane Clipart PNG Images, Airplane Icon, Airplane Icons, Airplane, Vector PNG Image For Free Download.jpg"
                }
              />
              <FlightTitle onClick={() => selectedTicket(f.id)}>
                Destino: {f.destino} <br /> Data do Vôo:{" "}
                {dayjs(f.flight_date).format("YY-MM-DD")} <br /> Horário de
                Partida: {f.departure}
              </FlightTitle>
              <p>Preço: R${f.price},00</p>
              <p>Cidade de Origem: {f.origem}</p>
            </ContainerTicket>
          );
        })}
      </BodyTicket>
    </Page>
  );
}
