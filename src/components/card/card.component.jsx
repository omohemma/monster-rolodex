import './card.styles.css'

export const CardComponent = ({monster}) => {
  return <div className='card-container'>
    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name}/>
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
}