import { Page, Title, Header, Body } from "./styled";


const StyledSection = ({ title, body, extraHeaderContent }) => (
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

export default StyledSection;