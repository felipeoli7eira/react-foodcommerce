import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonGoToCartDetails = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;
  background: ${({theme}) => theme.colors.red};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition: opacity .3s;

  &:hover {
    opacity: 0.9;
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    fill: ${({theme}) => theme.colors.white};
    width: 2rem;
    height: 2rem;
  }

  span:last-child {
    margin-left: 0.25rem;
    font-weight: 500;
    font-size: 1.5rem;

    color: ${({theme}) => theme.colors.yellow};
  }

  @media (max-width: 720px) {
    top: 2rem;
    bottom: initial;
    span:first-child {
      display: none;
    }
  }
`;
