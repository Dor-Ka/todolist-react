import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import StyledSection from "../../common/Section";

function AuthorPage () {
    return (
  <Container>
    <Header title="O autorze" />
    <StyledSection title="Dorota Karpińska" body={<>coś tam ....</>} />
  </Container>
)};

export default AuthorPage;