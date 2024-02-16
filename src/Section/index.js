import { Page, Title, Header, Body } from "./styled";


const Section = ({ title, body, extraHeaderContent }) => (
  <Page>
    <Header>
      <Title> {title}</Title>
      {extraHeaderContent}
    </Header>

    <Body>
      {body}
    </Body>
  </Page>
);

export default Section;