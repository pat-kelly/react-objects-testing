import Models from "./Models"

const Makes = (props)=>{
  return(
    <>
      <li>
        <h4>{props.make}</h4>
      </li>
      <ul>
        {props.models.map((model, idx)=>(
          <Models key={idx} name={model} />
        ))}
      </ul>
    </>
  )
}

export default Makes