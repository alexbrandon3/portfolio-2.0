import styled from "styled-components";
import sloppy from "./images/sclss.png";
import social from "./images/smmss.png";

const Container = styled.div`
  height: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #708090;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const ProjectContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 150px;
  border-radius: 3px;
  background-color: #faf9f6;
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

const projects = [
  {
    id: 1,
    ref: "https://github.com/alexbrandon3/fishing-ecommerce",
    img: sloppy,
    title: "Sloppy Custom Lures Website",
    desc: "A commercial website I am designing for a client who produces custom fishing lures",
  },
  {
    id: 2,
    ref: "https://github.com/alexbrandon3/social-media-mockup",
    img: social,
    title: "Social Media Mockup",
    desc: "A collaborative passion project intended to model the functionaity of popular social media websites",
  },
];

const WIP = () => {
  return (
    <Container>
      <Wrapper>
        {projects.map((item) => (
          <ProjectContainer key={item.id} href={item.ref} target="_blank">
            <ProjectTitle>{item.title}</ProjectTitle>
            <Screenshot src={item.img} />
            <Desc>{item.desc}</Desc>
          </ProjectContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default WIP;
