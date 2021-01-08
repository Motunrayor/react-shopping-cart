import styled from "styled-components"



const Button = styled.button`
border: 0.1rem #ffffff solid;
color: #ffffff;
padding: 1rem;
cursor: pointer;
border-radius: 5px;
background: #ff8000;
&:hover{
  background: #ffffff;
  border: 0.1rem #ff8000 solid;
  color: #ff8000;
}
`;

export default Button;
