import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SelectedTicketContainer } from "./style.jsx";

export function SelectedTicket (){
    const {flight_id} = useParams();
    const [flight, setFlight] = useState([]);
    const navigate= useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/tickets/details/${flight_id}`)
                .then((res) => {
                    setFlight(res.data);
                })
                .catch(err => console.log(err.response.data))
    }, [])

    function goToHotelsPage(id){
        navigate(`/hotels/${id}`);
    }
    return (
        <SelectedTicketContainer>
            <h1>Passagem para a cidade de {flight[0]?.destino}</h1>
            <ul>
                <li>Cidade de Destino: {flight[0]?.destino}</li>
                <li>Cidade de Origem: {flight[0]?.origem}</li>
                <li>Companhia Aérea: {flight[0]?.compania_aerea}</li>
                <li>Horário de partida: {flight[0]?.departure}</li>
                <li>Horário previsto da chegada: {flight[0]?.arrival}</li>
                <li>Preço da Passagem: R${flight[0]?.price},00</li>
            </ul>
            <button onClick={() => {goToHotelsPage(flight[0]?.destino_id)}}>Step 2</button>
        </SelectedTicketContainer>
    )
}