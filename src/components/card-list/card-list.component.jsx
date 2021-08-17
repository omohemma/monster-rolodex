import './card-list.styles.css'

// Houses The cards which is received by props - like slot in vue.js
export const CardList = (props) => {
  return  <div className="card-list">{props.children}</div>
}