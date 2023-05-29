import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 579px;
  display: flex;
  justify-content: center;
  margin-top: 84px;
`;
export const Content = styled.div`
  display: flex;
  width: 1280px;
  height: 579px;
  img {
    width: 350px;
    height: 75%;
    border-radius: 50px;
    margin-right: 10px;
  }
`;
export const Headline = styled.h2`
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  color: #112b3c;
  text-shadow: 0px 12px 40px rgba(0, 0, 0, 0.04);
  margin-bottom: 32px;
`;

export const SubHeadline = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #808080;
`;

export const HeadlineContainer = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  select {
    width: 469px;
    height: 80px;
    background: #ffffff;
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.04);
    border-radius: 58px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: #112b3c;
    margin-top: 48px;
    border: none;
  }

  optgroup {
    font-weight: 700;
    font-size: 18px;
    color: #112b3c;
  }

  button {
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

export const ImagesContainer = styled.div`
  position: relative;
  width: 445px;
  height: 579px;
`;

