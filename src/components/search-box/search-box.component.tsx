import './search-box.styles.css'

const name : string =   "Omololu Emmanuel"

export const  SearchBoxComponent = ({placeholder, HandleChange}) => {
  return <input className='search' type="search" placeholder={placeholder} onChange={HandleChange}/>
}