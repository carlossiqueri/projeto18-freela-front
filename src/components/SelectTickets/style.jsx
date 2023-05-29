import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
`;

export const BodyTicket = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 120px;
`;
export const ContainerTicket = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  text-align: center;
  img {
    border-radius: 50px;
    margin-bottom: 30px;
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.04);
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 17px;
    color: #112b3c;
    margin-bottom: 10px;
  }
`;

export const FlightTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #112b3c;
  margin-bottom: 10px;
`;

export const ContainerSlider = styled.div`
  margin-top: 140px;
  width: 600px;
  height: 800px;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 17px;
    color: #112b3c;
    margin-top: 50px;
  }
`;

export const SliderTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #112b3c;
  margin-bottom: 50px;
`;

export const SelectedTicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 120px;
    font-weight: 700;
    font-size: 40px;
    line-height: 26px;
    color: #112b3c;
    margin-bottom: 50px;
  }
  ul {
    margin-top: 10px;
  }
  li {
    list-style-type: circle;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 28px;
    line-height: 17px;
    color: #112b3c;
  }

  button{
    width: 269px;
    height: 60px;
    background: #e61c5d;
    border-radius: 58px;
    border: none;
    font-size: 16px;
    color: #ffffff;
    margin-top: 15px;
    :hover {
      cursor: pointer;
      background-color: #ed3470;
    }
  }
`;

