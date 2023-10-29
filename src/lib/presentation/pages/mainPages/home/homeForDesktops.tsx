import {
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import NavbarIndex from "../../../components/medialayouts/navbar/navbarIndex";
import leaves from "../../../../../../assets/images/leaves.png";
import sectionBgImage from "../../../../../../assets/images/sectionBgImage.png";
import FooterForDesktop from "../../../components/footer/medialayouts/footerForDesktop";
import './home.scss';
import VideoGridSession from "./video-grid-session";
import { OpportunitiesCardSession } from "./opportunities-card-session";
import { Banner } from "./banner";
import { Brands } from "./brands";
import { VideoPlayerSession } from "./videoPlayerSession";

function HomeForDesktops() {

 
  return (
    <>
     
      <VideoGridSession/>
      <OpportunitiesCardSession/>
      <Banner/>
      <Brands/>
      <VideoPlayerSession/>

      {/* <section className="py-5" style={{ background: "#eafdd7" }}>
        <Container >
          <FooterForDesktop />
        </Container>
      </section> */}
    </>
  );
}

export default HomeForDesktops;
