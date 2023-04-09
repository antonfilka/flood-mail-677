import styled from "styled-components";

interface TextInterface {
  weight?: number;
  color?: string;
  size?: "small" | "medium" | "large";
}

const h1 = styled.h1<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "h1"]};
  text-align: center;
`;
const h2 = styled.h2<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "h2"]};
  text-align: center;
`;
const h3 = styled.h3<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "h3"]};
  text-align: center;
`;
const h4 = styled.h4<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "h4"]};
  text-align: center;
`;
const h5 = styled.h5<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "h5"]};
  text-align: center;
`;
const h6 = styled.h6<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "h6"]};
  text-align: center;
`;
const p = styled.p<TextInterface>`
  color: ${(props) => props.theme.colors[props.color || "bg"]};
  font-weight: ${(props) => props.weight || 500};
  font-size: ${(props) => props.theme.fontSizes[props.size || "p"]};
  text-align: center;
`;

export const Text = { h1, h2, h3, h4, h5, h6, p };
