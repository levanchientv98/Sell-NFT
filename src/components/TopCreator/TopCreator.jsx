import React from "react";
import styled from "styled-components";
import Michael from "image/Ellipse 6.svg";
import Tibao from "image/Ellipse 6 (1).svg";
import Teressa from "image/Ellipse 6 (2).svg";
import Hawn from "image/Ellipse 6 (3).svg";
import Alisson from "image/Ellipse 6 (4).svg";
import Erricson from "image/Ellipse 6 (5).svg";



const TopCreatorStyled = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  padding-top: 30px;
  gap:40px;
  width: 100%;
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
   
  

  .topCreator{
    display: flex;
    width: 70%;
    flex-direction:column;
    justify-content: space-between ;
    padding: 0 24px;
    margin: 0 60px;
    background: #FFFFFF;
    border-radius: 16px;
  }
  .tilte-topCreator{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
    gap: 7.5vw;
  } 

  .topPerson{
    display:flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 0
  }

  li{
    list-style: none;
  }
  
`;

const ItemPersonStyled = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 28px;
    align-items: center;
  .name-id{
    width:30%;
  }

  .btn-follow{
    background: rgba(84, 41, 255, 0.1);
    border-radius: 20px;
    border:none;
    width: 77px;
    height: 32px;
    color: #5429FF;
    font-weight: 500;
    font-size: 12px;
    font-family: "DM Sans", sans-serif;
  }

  button:hover{
    color: #FFF;
    background: #5429FF;
  }

  .number{
    font-weight: 700;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
    color: #27262E;

  }
`;

const fakeData = [
  { id: "@jordan_", name: "Michael Jordan", avatar: Michael },
  { id: "@johnti60", name: "John Tibao", avatar: Tibao },
  { id: "@teressa", name: "Teressa", avatar: Teressa },
  { id: "@j_hawn", name: "Johan Hawn", avatar: Hawn },
  { id: "@m_alisson", name: "Maria Alisson", avatar: Alisson },
  { id: "@erricsonsam", name: "Sam Erricson", avatar: Erricson }

]
const listPerson = fakeData.map((d, index) => <li key={d.number}>

  <ItemPersonStyled>
    <div className="number">{index + 1}.</div>
    <img src={d.avatar} alt="avatar" />

    <div className="name-id">
      <div className="name">
        {d.name}
      </div>
      <div className="id">
        {d.id}
      </div>

    </div>

    <button className="btn-follow">Follow</button>
  </ItemPersonStyled>


</li>);

export const TopCreator = () => {
  return (
    <TopCreatorStyled>

      <div className="topCreator">
        <div className="tilte-topCreator">
          <h2>Top Creator</h2>
          <p>See All</p>
        </div>
        <ul className="topPerson">{listPerson}</ul>
      </div>
    </TopCreatorStyled>);

};