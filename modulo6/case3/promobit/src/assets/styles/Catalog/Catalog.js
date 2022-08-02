import styled from "styled-components";

export const Catalog = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-start;
  justify-content: center;
  max-width: 100vw;
  gap: 30px;
  padding: 1%;
  @media screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-left: 3%;
  }
`;
export const MovieCard = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 50vh;
    border: 1px solid #e7e7e7;
    border-radius: 9px;
    box-shadow: 10px 10px 10px rgba(172, 168, 194, 0.459);
    cursor: pointer;
  }
  img:hover{
    border: none;
    box-shadow: 10px 10px 80px rgba(72, 71, 75, 0.692);
  }
  p{
    text-align: center;
    width: 10%;
    padding: 3%;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    background-color: #5C16C5;
  }
  h3 {
    width: 90%;
    font-weight: 700;
    font-size: 1em;
    line-height: 24px;
  }
  h4 {
    font-weight: 400;
    font-size: 0.8em;
    line-height: 24px;
    color: #646464;
  }
  @media screen and (max-width: 750px) {
    width: 40vw;
    img{
        width: 100%;
        height: 40vh;
    }
    p{
    text-align: center;
    width: 20%;
    padding: 3%;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 700;
    color: #fff;
    background-color: #5C16C5;
  }
  h3{
    font-size: 0.9rem;
  }
  }
`;