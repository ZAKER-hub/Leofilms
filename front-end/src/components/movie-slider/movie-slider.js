import PropTypes from 'prop-types'
import Slider from "react-slick";
import { MovieCard } from '@/components'

const MovieSlider = ({ title, movies }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: movies.length > 5 ? 5 : movies.length,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                    centerMode: true
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    }

    return (
        <div className="section">
            <h2 className="section-title">{title}</h2>
            <Slider {...settings}>
                {movies && movies.map(movie => <MovieCard key={movie.kp_id} movie={movie}/>)}
            </Slider>
        </div>
    )
}

MovieSlider.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default MovieSlider