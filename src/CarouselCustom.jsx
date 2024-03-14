import Carousel from "react-bootstrap/Carousel";

function CarouselCustom({ images }) {
  return (
    <Carousel data-bs-theme="dark" slide={false}>
      {images.map(
        (
          image,
          i 
        ) => (
          <Carousel.Item key={i}>
            <img
              className="card-img-top"
              width="200"
              height="200"
              src={image}
              alt={`${i + 1} slide`} 
            />
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
}

export default CarouselCustom;
