import loader from "./styles/img/loader.gif"

export const Loader = ({greeting}) => {
  return (
    <div className='loaderInicio'>
        <img src={loader} className="loader" alt=""/>
        <p className='loading'>{greeting}</p> 
      </div>
  )
}