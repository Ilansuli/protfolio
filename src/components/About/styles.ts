import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13rem;
  .blob {
    background-image: url("https://res.cloudinary.com/dmmsf57ko/image/upload/v1706302295/eoxe5a2fbzlddjqmacvl.png");
    width: 380px;
    height: 380px;
    background-size: cover;
    -webkit-background-position: center;
    background-position: center center;
    margin: 20px;
    box-shadow: 0 5px 5px 5px rgba(13, 110, 253, 0.2);
    animation: animate 8s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
    display: none;
    @media (min-width: 1100px) {
      display: block;
    }
  }

  @keyframes animate {
    0%,
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }
    .about-image {
      display: flex;
      max-width: 100%;
      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`;
