import { PropTypes } from "prop-types";
import '../components/Movie.css';
import { Link } from "react-router-dom";

function Movie({year, title, summary, poster, genres}) {
  return (
    <div className="movie">
      <Link
        to={"/movie-detail"}
        state={{year, title, summary, poster, genres}}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
      </Link>
    </div>
  )
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired // 배열 내의 데이터 검사
  // genres: PropTypes.array.isRequired,
}

export default Movie;