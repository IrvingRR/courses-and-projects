import styled from "styled-components";
import Image from '../../assets/background-image.jpg';

export const ContainerAuth = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background: linear-gradient(${({ theme }) => theme.backgroundGradient}, ${({ theme }) => theme.backgroundGradient}), url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.fontColor};
    transition: var(--transition);
    position: relative;

    h2 {
      font-size: var(--fs-xl);
    }

    .form-links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      a {
        color: ${({ theme }) => theme.fontColor};
      }
    }

    @media screen and (max-width: 500px) {
        .home-description {
          width: 80%;
          text-align: center;
        }
    }
`;