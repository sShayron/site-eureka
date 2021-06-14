import styled from "@emotion/styled";
import { Flex } from "rebass";
import { Container } from "./Container";
import ScrollAnimation from "react-animate-on-scroll";

export const Conceito = () => {
  return (
    <Background>
      <Container>
        <Flex flexDirection="row" paddingY={32}>
          <div>
            <ScrollAnimation animateIn="fadeIn">
              <SectionTitle>Conceito</SectionTitle>
            </ScrollAnimation>
            <div>
              <ScrollAnimation animateIn="fadeIn" delay={500}>
                <SectionDescription>
                  Priorizamos a comunicação com o cliente, por isso estamos sob
                  o conceito alteração Zero, uma estratégia que minimiza o
                  desgaste das alterações, gera mais agilidade e produtividade
                  ao processo, além de melhores custos.
                </SectionDescription>
              </ScrollAnimation>
            </div>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" delay={1000}>
              <img src="./conceito.png" />
            </ScrollAnimation>
          </div>
        </Flex>
      </Container>
    </Background>
  );
};

const SectionTitle = styled.h3`
  font-size: 32px;
  color: #fff;
`;
const SectionDescription = styled.p`
  color: #fff;
  font-size: 20px;
  padding-right: 62px;
  line-height: 2;
`;
const Background = styled.div`
  background: #1f1f1f;
  min-height: 450px;
  align-items: center;
  display: flex;
`;
