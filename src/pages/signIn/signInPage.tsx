import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInMutationFunc } from "../../api/auth";
import { Button, Input, Link, PageSection } from "../../common";
import { SignPageForm } from "../../components";
import { APP_ROUTES } from "../../constants";
import { useStore } from "../../store";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Email must be valid" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const formOptions = {
  resolver: zodResolver(schema),
};

type Inputs = {
  email: string;
  password: string;
};

export function SignInPage() {
  const [authError, setAuthError] = useState(false);
  const userSignIn = useStore((state) => state.userSignIn);
  const adminSignIn = useStore((state) => state.adminSignIn);
  const navigate = useNavigate();

  const signIn = useMutation({
    mutationFn: signInMutationFunc,
    onSuccess: (data, params) => {
      console.log("Sign in successful");
      setAuthError(false);
      const userData = {
        email: params.email,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      };
      if (data.admin) {
        adminSignIn(userData);
      } else {
        userSignIn(userData);
      }
      navigate(APP_ROUTES.HOME_PAGE);
      console.log("Sign in successful");
    },
    onError: () => {
      setAuthError(true);
    },
  });

  const logInButtonClickHandler: SubmitHandler<Inputs> = (data) => {
    signIn.mutate({
      email: data.email.trim(),
      password: data.password.trim(),
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(formOptions);

  return (
    <PageSection>
      <SignPageForm onSubmit={handleSubmit(logInButtonClickHandler)}>
        <StyledInput
          placeholder="Enter email"
          type="email"
          {...register("email", { required: true })}
        />
        <StyledInput
          placeholder="Enter password"
          type="password"
          {...register("password", { required: true })}
        />
        {authError && (
          <StyledErrorText>Email or password is invalid</StyledErrorText>
        )}
        <StyledButton type="submit">
          {signIn.isLoading ? "Loading..." : "Log In"}
        </StyledButton>
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

const StyledErrorText = styled.p`
  width: 100%;
  float: left;
  color: ${(props) => props.theme.colors.red};
`;
