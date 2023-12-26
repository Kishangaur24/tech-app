import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://tse1.mm.bing.net/th?id=OIP.MEP8oZA5TJVQMjd9ETNpGgHaEK&pid=Api&P=0&h=180" height="500px" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://tse4.mm.bing.net/th?id=OIP.z-GapGn3rCFpfo9Vdni3GgHaD4&pid=Api&P=0&h=180" height="500px" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://tse3.mm.bing.net/th?id=OIP.lbtMgJK7ZGPZaAFakZ_ynAHaEH&pid=Api&P=0&h=180" height="500px" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Carousel
