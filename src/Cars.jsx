import Makes from "./Makes"

const Cars=(props)=>{
  return(
    <>
      <h2>Car List: </h2>
      <ul>
        {props.cars.map((make, idx)=>(
          <Makes key={idx} make={make.name} models={make.models} />
        ))}
      </ul>
    </>
  )
}

export default Cars