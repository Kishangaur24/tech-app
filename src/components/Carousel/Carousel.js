import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import style from "./Carousel.module.css"
import sap1 from "../../assets/01.jpg"
import th1 from "../../assets/th.jpeg"
import th3 from "../../assets/th3.jpg"
function UncontrolledExample() {
  return (
    <div className={style.wrap}>
    <Carousel>
      <Carousel.Item>
       <img className={style.carouselImage}  src={sap1} alt='img1' />
        <Carousel.Caption>
          <h3 className={style.main}>"BOOST YOUR CAREER IN SAP"</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={style.carouselImage} src={th1} alt='img2'/>
        <Carousel.Caption>
          <h3 className={style.main}>WITH NO. 1 SAP TRAINING PROVIDER IN INDIA</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={style.carouselImage}  src={th3} alt='img3'/>
        <Carousel.Caption>
          <h3 className={style.main}>100% Placement assistence</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;