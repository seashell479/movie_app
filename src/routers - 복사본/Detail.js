import { useLocation } from "react-router-dom";

function Detail() {

  const location = useLocation();
  console.log(location);
  
  return (
    <div>
      Detail 페이지
    </div>
  )
}

export default Detail;