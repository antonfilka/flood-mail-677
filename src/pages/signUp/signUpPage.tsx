import styled from "styled-components";
import { Button, Input, Link } from "../../common";
import { APP_ROUTES } from "../../constants";

export function SignUpPage() {
  return (
    <StyledPageSection>
      <StyledForm>
        <StyledInput placeholder="Enter email" type="email" />
        <StyledInput placeholder="Enter password" type="password" />
        <StyledInput placeholder="Repeat password" type="password" />
        <StyledButton>Create Account</StyledButton>
        <Link to={APP_ROUTES.SIGN_IN}>Back to Log In</Link>
      </StyledForm>
    </StyledPageSection>
  );
}

const StyledPageSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
`;

const StyledForm = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.default};
`;

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const StyledInput = styled(Input)`
  margin: 5px 0;
`;
