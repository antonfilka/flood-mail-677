import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Link, PageSection } from "../../common";
import { SignPageForm } from "../../components";
import { APP_ROUTES } from "../../constants";
import { useStore } from "../../store";

export function SignInPage() {
  const userSignIn = useStore((state) => state.userSignIn);
  const navigate = useNavigate();

  const logInButtonClickHandler = () => {
    userSignIn({
      email: "anton.filippovich.m@gmail.com",
      username: "antofilka",
    });
    navigate(APP_ROUTES.HOME_PAGE);
  };

  return (
    <PageSection>
      <SignPageForm>
        <StyledInput placeholder="Enter email" type="email" />
        <StyledInput placeholder="Enter password" type="password" />
        <StyledButton onClick={logInButtonClickHandler}>Log In</StyledButton>
        <Link to={APP_ROUTES.SIGN_UP}>Registration</Link>
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
