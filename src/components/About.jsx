import styled from "styled-components";
import Photo from "./images/aboutPhoto.jpg";

const Container = styled.div`
  height: 600px;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffcccb;
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
  width: 60%;
`;

const Title = styled.h1`
  transform: rotate(-90deg);
  font-size: 45px;
  text-decoration: underline 2px;
  padding: 2px;
  height: 100%;
  width: 15%;
  white-space: nowrap;
  color: #34568b;
`;

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StoryTitle = styled.h2`
  margin-bottom: 10px;
`;

const Story = styled.p`
  text-indent: 30px;
  padding-right: 30px;
  line-height: 20x;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const Pic = styled.img`
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-right: 20px;
  cursor: none;
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>MY STORY</Title>
          <StoryContainer>
            <StoryTitle>An unorthodox road to software devlopment</StoryTitle>
            <Story>
              It's December 24, 2018 and I am an exceptionally healthy young man
              looking forward to a promising career as an accountant. I sit down
              to watch TV when out of nowhere, an intense, searing pain erupts
              between my shoulderblades. Six hours later, I would be admitted to
              the emergency room after losing all control over my body from the
              neck down. Christmas morning, after my second consecutive 3-hour
              long full body MRI in eight hours, I would awaken to a diagnosis
              of four strokes and a prognosis of no hope of recovery with the
              expectation of quadriplegia. Despite my case being investigated by
              neurologists across the country, the origin of my strokes remains
              unknown.
            </Story>
            <Story>
              Fortunately for me, my prognosis was no concrete sentencing. Four
              days after the stroke event, I regained the ability to shift my
              shoulder ever so slightly. All I did for days on end was move that
              shoulder in hopes the rest of my body would follow suit, and days
              later control over the rest of my right arm returned to me, then
              my left arm, then my legs. The years passed since my strokes have
              been a constant, grueling struggle to reclaim my independence and
              while I exerted every ounce of physical energy into my recovery,
              it would not be long before I realized I'd need to find an outlet
              to occupy my mind during my downtime.
            </Story>
            <Story>
              Enter: coding. When speaking about what my future with an old
              friend who happened to be a software developer, he suggested I
              learn to code, so I began learning the C# language, and I began
              learning to solve simple algorithmic problems and writing basic
              programs. It was love at first sight, and before I knew it I had
              solved my first LeetCode problem. The satisfaction coding brought
              me was so great, I enrolled myself in the Full Stack Web
              Development Program with the University of North Carolina at
              Chapel Hill.
            </Story>
            <Story>
              Now finished with the program, my interest in coding is cemented
              and I am far enough along with my recovery to finally return to
              work. It is my hope now to start a new career as a software
              developer with a company who will offer a challenging, engaging
              opportunity which will catalyze my growth as a developer.
            </Story>
          </StoryContainer>
        </Left>
        <Right>
          <Pic src={Photo} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;
