function Children(props) {

  console.log(props);

  return(
    <div>{props.name}의 나이는 {props.age}살 입니다.</div>
  )
}

export default Children;