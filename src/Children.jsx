import PropTypes from 'prop-types';

function Children({name, path, number}) { // 비구조화 할당

  return(
    <div>
      <h3>작품명: {name}</h3>
      <img src={path} width="100%" alt="error" />
      <h5>인원수: {number}</h5>
    </div>
  )
}

Children.propTypes = { // props.name(x) 쓰면 좋은데 안 써도 상관 없음!!!
  name: PropTypes.string.isRequired, // 각 요소들의 자료형 검사함.
  path: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default Children;