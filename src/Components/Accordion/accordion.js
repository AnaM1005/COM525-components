import React, { useState } from "react";
import { Data } from "./data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import Arrow from "./assets/expand.png";
import Arrow2 from "./assets/hide.png";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Header = styled.h1`
    text-align: center;
    color: #16697a;
    margin-top: -70vh;
`;

const Container = styled.div`
  position: absolute;
  width: 800px;
  height: 40px;
  top: 20%;
`;

const Wrap = styled.div`
  background: #fff;
  color: #4A4E69;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 2px solid #4a4e69;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  h2 {
    padding: 10px;
    font-size: 24px;
    font-weight: 500;
    color: #4A4E69;
  }
  span {
    margin-right: 2rem;
    &:after {
      transform: translateX(-50%) rotate(180deg);
    }

  }
`;

const Dropdown = styled.div`
  background: #fff;
  color: #4a4e69;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    max-width: 100%;
    font-size: 20px;
  }
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
          <Header>
              <h1>FAQ</h1>
          </Header>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>
                    {clicked === index ? (
                      <img src={Arrow2} />
                    ) : (
                      <img src={Arrow} />
                    )}
                  </span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;