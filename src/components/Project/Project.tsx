import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import DownloadApp from "../../assets/download.png";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";
import eyeIcon from "../../assets/eye-icon.svg";
import tanstackQueryIcon from "../../assets/tanstack-query-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import vitejsIcon from "../../assets/vitejs-icon.svg";
import reduxIcon from "../../assets/redux-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import vuexIcon from "../../assets/vuex-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import styledCmpIcon from "../../assets/styled-cmps-icon.svg";
import muiIcon from "../../assets/mui-icon.svg";

const ProjectList = styled.ul`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* gap: 30px; */
  margin-bottom: 10px;
`;

const ProjectItemList = styled.li`
  display: block;
  animation: scaleUp 0.25s ease forwards;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  margin-block-end: 2rem;
  @media (min-width: 980px) {
    display: grid;
    grid-auto-columns: 1fr 1.5fr;
    grid-auto-flow: column;
    gap: 3rem;
  }
`;

const ProjectImgWrapper = styled.article``;

const ProjectImg = styled.figure`
  cursor: pointer;
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;
  @media (min-width: 580px) {
    border-radius: 16px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
    transition: 0.25s ease;
  }
`;
const ProjectLink = styled.a`
  width: 100%;
  &:hover figure::before {
    background: hsla(0, 0%, 0%, 0.5);
  }
  &:hover .icon-box {
    scale: 1;
    opacity: 1;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
const IconBox = styled.div`
  width: 62px;
  scale: 0.8;
  background: hsl(0, 0%, 22%);
  color: hsl(45, 100%, 72%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  font-size: 20px;
  padding: 18px;
  border-radius: 12px;
  opacity: 0;
  z-index: 1;
  transition: 0.25s ease;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.25s ease;
`;
const Title = styled.header`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 1.3;
  margin-block: 1rem;
`;
const EyeIconWrapper = styled.div`
  display: block;
  height: 100%;
  width: 100%;
`;

const ProjectDescWrapper = styled.article``;
const ProjectDesc = styled.p``;
const ProjectTech = styled.ul`
  display: flex;
  margin-block: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
`;
const ProjectTechItem = styled.li`
  font-weight: 600;
`;
const TechIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export function Project() {
  const projects = [
    {
      title: "Satisfy",
      imgSrc:
        "https://res.cloudinary.com/dmmsf57ko/image/upload/v1683730488/DemoPlaylist_ly217i.jpg",
      link: "https://satisfy-2v03.onrender.com/#/station",
      desc: "Satisfy is a project based on the famous Spotify app that allows users to sign up, log in, and build their own playlists with their desired songs. The app also features real-time synchronization with mobile devices using sockets and is fully responsive. Additionally, the app utilizes YouTube`s API to retrieve song information and integrate YouTube videos.",
      techIcons: [vueIcon, vuexIcon, vitejsIcon, sassIcon],
    },

    {
      title: "O-pea",
      imgSrc:
        "https://res.cloudinary.com/dmmsf57ko/image/upload/v1688390118/WhatsApp_Image_2023-07-03_at_16.06.17_yz12iz.jpg",
      link: "https://o-pea-m2qy.onrender.com/",
      desc: "O-pea is an end-to-end Project that revolutionizes recipe discovery by offering a convenient and personalized experience. With a focus on pantry-based cooking, it allows users to explore an extensive database of recipes tailored to the ingredients they already have. Say goodbye to food waste and hello to delicious meals with O-pea`s intuitive interface and smart ingredient matching system.",
      techIcons: [reactIcon, reduxIcon, vitejsIcon, sassIcon],
    },
    {
      title: "AppSus - Gmail & Keep",
      imgSrc:
        "https://res.cloudinary.com/dmmsf57ko/image/upload/v1683720247/AppSus-email_yqs8bs.jpg",
      link: "https://ilansuli.github.io/AppSus/#/",
      desc: "Check out Appsus, a suite of web applications inspired by Google`s popular services, Gmail and Keep. Each app has it`s full CRUDL support, a responsive design and with a special feature to integrate between the apps, transforming an email to a note. The applications were built using Vue.js, a versatile and easy-to-use JavaScript framework for building user interfaces.",
      techIcons: [vueIcon, vuexIcon, sassIcon],
    },

    {
      title: "Gan Shel Shoshanim",
      imgSrc:
        "https://res.cloudinary.com/dmmsf57ko/image/upload/v1709806469/hcoclje1hkke4on1vh93.jpg",
      link: "https://ganshelshoshanim.com/",

      desc: "A corporate website for a business that specialize in the development and establishment of exquisite gardens. Discover a world where imagination meets horticultural expertise, where every landscape is meticulously crafted to evoke beauty, serenity, and harmony.",
      techIcons: [
        reactIcon,
        vitejsIcon,
        tanstackQueryIcon,
        muiIcon,
        styledCmpIcon,
      ],
    },
    {
      title: "Fitty - In development",
      imgSrc:
        "https://res.cloudinary.com/dmmsf57ko/image/upload/v1706282938/takavq458jc8zexbe9xf.jpg",
      link: undefined,
      desc: "A dropshipping application that makes comparison between users' with the same body-measurements and suggests clothes accordingly.",
      techIcons: [
        reactIcon,
        vitejsIcon,
        tanstackQueryIcon,
        muiIcon,
        styledCmpIcon,
      ],
    },
  ];
  return (
    <Container id="project">
      <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
        <h2>My Latest Projects</h2>
      </ScrollAnimation>
      {/* <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}> */}
      <ProjectList>
        {projects.map(({ link, imgSrc, title, desc, techIcons }) => (
          <ProjectItemList key={link}>
            <ProjectImgWrapper>
              <ProjectLink href={link}>
                <ProjectImg>
                  {title !== "Fitty - In development" && (
                    <IconBox className="icon-box">
                      <EyeIconWrapper>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ionicon s-ion-icon"
                          viewBox="0 0 512 512"
                          style={{
                            width: "100%",
                            height: "100%",
                            stroke: "hsl(45, 100%, 72%)",
                            display: "block",
                          }}
                        >
                          <title>Eye</title>
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ionicon-fill-none ionicon-stroke-width"
                            style={{ strokeWidth: "50px", fill: "none" }}
                          ></path>
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            strokeMiterlimit="10"
                            className="ionicon-fill-none ionicon-stroke-width"
                            style={{ strokeWidth: "50px", fill: "none" }}
                          ></circle>
                        </svg>
                      </EyeIconWrapper>
                    </IconBox>
                  )}
                  <Img src={imgSrc}></Img>
                </ProjectImg>
              </ProjectLink>
            </ProjectImgWrapper>
            <ProjectDescWrapper>
              <Title>{title}</Title>
              <ProjectDesc>{desc}</ProjectDesc>
              <ProjectTech>
                {techIcons.map((t, index) => (
                  <>
                    <ProjectTechItem key={index}>
                      <TechIcon src={t} />
                    </ProjectTechItem>
                  </>
                ))}
              </ProjectTech>
            </ProjectDescWrapper>
          </ProjectItemList>
        ))}
      </ProjectList>
      {/* </ScrollAnimation> */}
    </Container>
  );
}
