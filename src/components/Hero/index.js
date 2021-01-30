import styled, { css } from "styled-components";
import { breakAt, BreakpointSize } from "../Breakpoints";
const Root = styled.div`
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4) no-repeat center center;
    background-size: cover;
  `}
  color:#fff;
  padding: 0px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const Content = styled.div`
  ul {
    list-style: none;
    padding: 0px;

    li {
      margin-bottom: 8px;
    }
    li::before {
      content: "- ";
    }
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 60px 16px;
  ${breakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    margin: 0 auto;
    padding: 100px 0;
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Hero;
