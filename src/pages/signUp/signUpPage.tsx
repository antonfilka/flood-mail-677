import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUpMutationFunc } from "../../api/auth";
import { Button, Input, Link, PageSection } from "../../common";
import { SignPageForm } from "../../components";
import { APP_ROUTES } from "../../constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validation.schema";

const formOptions = {
  resolver: zodResolver(schema),
};

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(formOptions);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signUp.mutate({
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    });
  };

  const navigate = useNavigate();

  const signUp = useMutation({
    mutationFn: signUpMutationFunc,
    onSuccess: () => {
      navigate(APP_ROUTES.SIGN_IN);
      console.log("Sign up successful");
    },
  });

  return (
    <PageSection>
      <SignPageForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          placeholder="Enter username"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <StyledErrorText>{errors.name.message}</StyledErrorText>
        )}
        <StyledInput
          placeholder="Enter email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <StyledErrorText>{errors.email.message}</StyledErrorText>
        )}
        <StyledInput
          placeholder="Enter password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <StyledErrorText>{errors.password.message}</StyledErrorText>
        )}
        <StyledInput
          placeholder="Repeat password"
          type="password"
          {...register("passwordRepeat", { required: true })}
        />
        {errors.passwordRepeat && (
          <StyledErrorText>{errors.passwordRepeat.message}</StyledErrorText>
        )}
        <StyledButton type="submit">Create Account</StyledButton>
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

const StyledErrorText = styled.p`
  width: 100%;
  float: left;
  color: ${(props) => props.theme.colors.red};
`;
