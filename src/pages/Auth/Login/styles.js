import { Button, Card, Col, Container, Input } from "reactstrap";
import styled from "styled-components";
import bgimage from "../../../assets/images/login-page/bg_yellow.svg";

export const LoginPageContainer = styled(Container)`
  background: url(${bgimage}) no-repeat;
  background-color: #ffffff;
`;

export const LoginPageFooterContainer = styled(Container)`
  background-color: #ffffff;
`;

export const LoginFooterLeftCol = styled(Col)`
  background-color: #ffd600;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 1;
`;

export const LoginFooterRightCol = styled(Col)`
  background-color: #0054a5;
  margin-left: -25px;
  z-index: 0;
`;

export const LoginFormCard = styled(Card)`
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  z-index: 3;
`;

export const LoginCardTitle = styled.div`
  color: #0054a5;
`;

export const LoginInput = styled(Input).attrs((props) => ({
  type: props.type,
}))`
  border-radius: 40px;
  border: solid 1px #0054a5;
  background-color: rgba(0, 84, 165, 0.1);
  padding: 22px;
`;

export const LoginButton = styled(Button)`
  padding: 10px 50px 10px 50px;
  border-radius: 72px;
  background-color: #0054a5;
`;
