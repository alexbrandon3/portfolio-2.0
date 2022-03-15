import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Container = styled.div`
  height: 150px;
`;
const Wrapper = styled.div`
  background-color: #d0d0d0;
  height: 100%;
  weight: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FooterItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const FooterItem = styled.a`
  padding: 5px;
`;

const Desc = styled.span``;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterItemContainer>
          <FooterItem
            href="http://www.linkedin.com/in/alex-brandon-ab6045214"
            target="_blank"
          >
            <LinkedInIcon
              style={{ color: "#34568b", fontSize: "70px", cursor: "pointer" }}
            />
          </FooterItem>
          <FooterItem href="https://github.com/alexbrandon3" target="_blank">
            <GitHubIcon
              style={{ color: "#34568b", fontSize: "70px", cursor: "pointer" }}
            />
          </FooterItem>
          <FooterItem href="mailto:alexlbrandon@gmail.com">
            <EmailIcon
              style={{ color: "#34568b", fontSize: "70px", cursor: "pointer" }}
            />
          </FooterItem>
        </FooterItemContainer>
        <FooterItemContainer>
          <PhoneIcon style={{ color: "#34568b" }} />
          <Desc>704.699.1667</Desc>
        </FooterItemContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
