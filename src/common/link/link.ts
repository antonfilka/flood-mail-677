import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 100;
  color: ${(props) => props.theme.colors.primary};
`;
