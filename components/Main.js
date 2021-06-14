import styled from "@emotion/styled";
import { Container } from "./Container";
import ScrollAnimation from "react-animate-on-scroll";

export const Main = () => {
  return (
    <Container>
      <ScrollAnimation animateIn="fadeIn">
        <Title>Bem-vindo!</Title>
        <Description>
          Nós somos a Eureka, uma equipe versátil e experiente do audiovisual,
          pronta para o próximo desafio.
        </Description>
      </ScrollAnimation>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 104px;
  margin-bottom: 16px;
  margin-top: 55px;
  line-height: 0.75;
  float: left;
  color: #666;
  text-indent: 0px;
  height: 81px;
  width: 700px;
`;
const Description = styled.h2`
  font-size: 30px;
  width: 700px;
  color: #666;
  line-height: 1.3;
  font-weight: normal;
`;
