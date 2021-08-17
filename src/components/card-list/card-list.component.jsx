import './card-list.styles.css'

// Houses The cards which is received by props - like slot in vue.js
export const CardList = (props) => {
  return  <div className="card-list">
    {
      props.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
    }
  </div>
}