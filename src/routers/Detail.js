import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css"
import "bootstrap/dist/css/bootstrap.min.css"

function Detail() {
    
    const location = useLocation();
    const { year, title, summary, poster, genres } = location.state;
    const navigate = useNavigate();

    function moveBeforePage() {
      // navigate(-1);
      navigate("/");
    }

    return (
      <div className="card mb-3 container mt-5" style={{ maxWidth: "900px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={poster} alt={title} title={title} height="400px" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mt-5">
                <b>영화제목:</b> {title}
              </h5>
              <hr />
              <p className="card-text">
                <b>영화설명:</b> {summary.slice(0, 180)}...
              </p>
              <hr />
              <p className="card-text">
                <small className="text-muted">
                  <b>개봉년도:</b> {year}
                </small>
              </p>
              <hr />
              <p className="card-text">
                <small className="text-muted">
                  <b>영화장르:</b> {genres.join(", ")}
                </small>
              </p>
              <hr />
              <button
                className="btn btn-success"
                style={{ width: "150px" }}
                onClick={moveBeforePage}
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Detail;