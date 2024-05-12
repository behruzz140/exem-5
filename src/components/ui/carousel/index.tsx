import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "@containers";
import "./index.scss";

export default function index(img: any) {
  return (
    <Container>
      <div
        style={{
          display: "block",
          width: "100%",
          padding: 30,
          margin: "0 auto",
        }}
      >
        <Carousel>
          <Carousel.Item interval={2000}>
            <div className="relative">
              <img src={img.text} className="absolute -z-10" alt="car" />
              <img
                className="d-block w-100 relative z-0"
                src={img.img}
                alt="1"
              />
            </div>
            <Carousel.Caption className=" relative z-20"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="relative">
              <img src={img.text} className="absolute -z-10" alt="car" />
              <img
                className="d-block w-100 relative z-0"
                src={img.img}
                alt="1"
              />
            </div>
            <Carousel.Caption className=" relative z-20"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="relative">
              <img src={img.text} className="absolute -z-10" alt="car" />
              <img
                className="d-block w-100 relative z-0"
                src={img.img}
                alt="1"
              />
            </div>
            <Carousel.Caption className=" relative z-20"></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}
