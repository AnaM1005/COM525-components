import React, { useState } from "react";
import styled from "styled-components";
import Data from "./assets/data.gif";

const StyledOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledGif = styled.div`
  display: flex;
  weight: 200px;
  height: 200px;
  justify-content: center;
  margin-top: -30vh;
`;

const StyledText = styled.p`
  display: flex;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #3c6e71;
  margin-top: -30vh;
  padding-top: 200px;
`;

const StyledButton = styled.button`
  height: 52px;
  width: 180px;
  justify-content: center;
  margin-top: 45vh;
  background: #3c6e71;
  color: #ffff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Montserrat';
  border: 2px solid #3c6e71;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: rgba(60, 110, 113, 0.2);
    border: 2px solid #3c6e71;
    color: #3c6e71;
  }
`;

const Loader = () => {
  const [showGifPage, setShowGifPage] = useState(false);
  const [showMainPage, setMainPage] = useState(true);

  const handleFormClick = (e) => {
    setMainPage(!showMainPage);
    setShowGifPage(!showGifPage);
  };

  return (
    <StyledOuterWrapper>
      {showMainPage && !showGifPage && (
        <form>
          <StyledButton onClick={handleFormClick}> GET QUOTES </StyledButton>
        </form>
      )}
      <StyledWrapper>
        {showGifPage && (
          <form>
            <StyledGif>
              <img src={Data} />
            </StyledGif>
            <StyledText>
              <p>Loading your quotes...</p>
            </StyledText>
          </form>
        )}
      </StyledWrapper>
    </StyledOuterWrapper>
  );
};

export default Loader;