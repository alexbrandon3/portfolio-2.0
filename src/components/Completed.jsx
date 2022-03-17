import styled from "styled-components";
import market from "./images/marketocracy.png";
import movie from "./images/moviemania.png";
import planner from "./images/mealplanner.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Container = styled.div`
  height: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffffbf;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 25px;
  border-radius: 3px;
  background-color: #faf9f6;
`;

const ProjectCard = styled.a`
  text-decoration: none;
  color: black;
`;

const ProjectTitle = styled.h2`
  width: 400px;
  white-space: nowrap;
  font-size: 20px;
  padding: 5px;
`;

const Screenshot = styled.img`
  width: 400px;
  height: 200px;
  border: 1px solid black;
`;

const Desc = styled.p`
  width: 400px;
  padding: 5px;
`;

const IconContainer = styled.a`
  cursor: pointer;
  margin-top: 5px;
`;

const projects = [
  {
    id: 1,
    deployed: "https://marketplace-project3.herokuapp.com/",
    gitHub: "https://github.com/PhilipBrowning/project3-marketplace",
    img: market,
    title: "Marketocracy",
    desc: "A collaborative tool to unite the buyers and sellers of goods in the secondary market",
  },
  {
    id: 2,
    deployed: "https://github.com/mandy2324/Project-2",
    gitHub: "https://github.com/mandy2324/Project-2",
    img: movie,
    title: "Movie Mania",
    desc: "A collaborative project allowing its user to find and store favorite movies for their viewing pleasure. Unfortunately, the repo owner has undeployed this project.",
  },
  {
    id: 3,
    deployed: "https://philipbrowning.github.io/project1/",
    gitHub: "https://github.com/PhilipBrowning/project1",
    img: planner,
    title: "My Recipe Planner",
    desc: "My first collaborative project which allows the user to plan meals based on which core ingredients they are craving",
  },
];
const Completed = () => {
  return (
    <Container>
      <Wrapper>
        {projects.map((item) => (
          <ProjectContainer>
            <ProjectCard key={item.id} href={item.deployed} target="_blank">
              <ProjectTitle>{item.title}</ProjectTitle>
              <Screenshot src={item.img} />
              <Desc>{item.desc}</Desc>
            </ProjectCard>
            <IconContainer href={item.gitHub} target="_blank">
              <GitHubIcon />
            </IconContainer>
          </ProjectContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Completed;
