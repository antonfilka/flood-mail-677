import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Link, PageSection } from "../../common";
import { SignPageForm } from "../../components";
import { APP_ROUTES } from "../../constants";

export function SignUpPage() {
  const navigate = useNavigate();

  const signUpButtonClickHandler = () => {
    navigate(APP_ROUTES.SIGN_IN);
  };

  return (
    <PageSection>
      <SignPageForm>
        <StyledInput placeholder="Enter email" type="email" />
        <StyledInput placeholder="Enter password" type="password" />
        <StyledInput placeholder="Repeat password" type="password" />
        <StyledButton onClick={signUpButtonClickHandler}>
          Create Account
        </StyledButton>
        <Link to={APP_ROUTES.SIGN_IN}>Back to Log In</Link>
      </SignPageForm>
    </PageSection>
  );
}

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const StyledInput = styled(Input)`
  margin: 5px 0;
`;
