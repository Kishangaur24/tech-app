import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import style from "./Carousel.module.css"
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src='https://img.freepik.com/premium-photo/internet-business-technology-network-concept-sap-system-software-automation-concept-virtual-screen-data-center_438099-7798.jpg?size=626&ext=jpg&ga=GA1.1.1226486228.1677065888&semt=ais' width="100%" height="450px"/>
        <Carousel.Caption>
          <h3 className={style.main}>"BOOST YOUR CAREER IN SAP"</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6162.jpg?size=626&ext=jpg&ga=GA1.1.1226486228.1677065888&semt=ais' width="100%" height="450px"/>
        <Carousel.Caption>
          <h3 className={style.main}>WITH NO. 1 SAP TRAINING PROVIDER IN INDIA</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150714249.jpg?size=626&ext=jpg&ga=GA1.1.1226486228.1677065888&semt=ais' width="100%" height="450px"/>
        <Carousel.Caption>
          <h3 className={style.main}>100% Placement assistence</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;