import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" testid="planets">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <div>
            <PlanetItem key={planet.id} planetDetails={planet} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
