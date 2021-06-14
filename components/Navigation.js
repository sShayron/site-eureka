import styled from "@emotion/styled";

export const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <ListLink href="#conceito">Conceito</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#servicos">Serviços</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#estrutura">Estrutura</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#bio">Bio</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#portifolio">Portifólio</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#clientes">Clientes</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#contato">Contato</ListLink>
        </ListItem>
      </List>
    </Nav>
  );
};

const Nav = styled.nav({
  borderTop: "1px solid #999",
});
const List = styled.ul({
  display: "flex",
  listStyle: "none",
  margin: "0",
  padding: "10px 5px",
  float: "left",
  width: "100%",
});
const ListItem = styled.li`
  margin-right: 20px;
`;
const ListLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #666;
  font-family: "Lato";
`;
