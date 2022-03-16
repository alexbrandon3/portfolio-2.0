import styled from "styled-components";
import Myself from "./images/homePhoto.jpg";

const Container = styled.div`
  height: 160px;
  display: flex;
  position: sticky;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #34568b;
  position: fixed;
`;

const Left = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: inline;
  list-style: none;
`;

const ListOption = styled.li`
  float: left;
  padding-right: 28px;
`;

const ListLink = styled.a`
  cursor: pointer;
  color: #bebebe;
  text-decoration: none;
  ${({ selected }) =>
    selected &&
    `border-bottom: 1px solid #bebebe;
  `}
`;

const Center = styled.div`
  flex: 4;
  text-align: center;
  margin: 4px;
`;

const Me = styled.img`
  height: 150px;
  width: 150px;
  border: 3px solid #d0d0d0;
  margin: 0;
  border-radius: 50%;
  cursor: none;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Right = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NameContainer = styled.div`
  background-color: none;
  border-radius: 40px;
  padding: 8px 10px 8px 30px;
  width: 240px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 35px;
  background-color: none;
  color: white;
  padding: 0;
`;

const menuItems = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "About Me",
  },
  {
    id: 3,
    label: "Works in Progress",
  },
  {
    id: 4,
    label: "Completed Projects",
  },
];

const TopBar = ({ selectedTab, setSelectedTab }) => {
  console.log(selectedTab);
  return (
    <Container>
      <Wrapper>
        <Left>
          <List>
            {menuItems.map((item) => (
              <ListOption key={item.id}>
                <ListLink
                  key={item.id}
                  selected={selectedTab === item.label}
                  onClick={() => setSelectedTab(item.label)}
                  href="#alex"
                >
                  {item.label}
                </ListLink>
              </ListOption>
            ))}
          </List>
        </Left>
        <Center>
          <Me src={Myself} />
        </Center>
        <Right>
          <NameContainer>
            <Name>Alexander Brandon</Name>
          </NameContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TopBar;
