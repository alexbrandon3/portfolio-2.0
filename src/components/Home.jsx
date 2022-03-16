import styled from "styled-components";
import myself from "./images/homePic.jpeg";

const Container = styled.div`
  height: 550px;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #eae3c9;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Me = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 7%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: none;
`;

const Right = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;

const Header = styled.h1`
  color: #34568b;
  font-size: 60px;
  font-weight: 700;
`;

const About = styled.span``;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Me src={myself} />
        </Left>
        <Right>
          <Header>Resilience & Innovation</Header>
          <About>
            As a stroke survivor and former athlete with a background in
            accounting, my broad array of life experience provides me an edge in
            the form of an effective, methodical problem solving approach. My
            passion is developing applications which make life easier and more
            exciting.
          </About>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
