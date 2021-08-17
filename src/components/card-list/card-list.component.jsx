import './card-list.styles.css'
import {CardComponent} from "../card/card.component";

// Houses The cards which is received by props - like slot in vue.js
// Receives props from Parent and passes to Card Component
export const CardList = (props) => {
  return  <div className="card-list">
    {
      props.monsters.map(monster => <CardComponent key={monster.id} monster={monster}/>)
    }
  </div>
}