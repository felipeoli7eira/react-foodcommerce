import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .snack-container {
    position: relative;

    background-color: ${({theme}) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      width: 100%;
      display: inline-block;
      object-fit: cover;
      border-radius: 4px;
      height: 11.25rem;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0%.875rem;
    }

    div {
      margin-top: .875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        border: none;
        outline: none;
        background: none;

        background-color: ${({theme}) => theme.colors.red};
        color: white;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 1.3rem;
        transition: all .3s;
        display: grid;
        place-items: center;

        &:hover {
          background-color: ${darken(.1, '#AA2424')};
        }
      }
    }
  }
`;
