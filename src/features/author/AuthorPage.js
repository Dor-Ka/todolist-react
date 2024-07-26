import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import StyledSection from "../../common/Section";

function AuthorPage () {
    return (
  <Container>
    <Header title="Cześć 👋" />
    <StyledSection 
      title="...tu Dorota 😉" 
      body={<>
      <p>Witam Cię na mojej stronie, która powstała w wyniku nauki programowania front-endowego.</p>
      <p>Aktualnie zgłębiam się w tajniki: HTML, CSS, JavaScript oraz React - stararam się opanować te technologie, by tworzyć coraz lepsze i bardziej zaawansowane projekty. </p>
      <p> W mojej przygodzie z kodowaniem towarzyszy mi mój czworonożny przyjaciel Ares 🐶 </p>
      <p> Zapraszam do zapoznania się z moimi projektami i śledzenia postępów w mojej programistycznej podróży!</p>
      </>}
     />
  </Container>
)};

export default AuthorPage;