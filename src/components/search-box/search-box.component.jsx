import './search-box.styles.css'
export const  SearchBoxComponent = ({placeholder, HandleChange}) => {
  return <input className='search' type="search" placeholder={placeholder} onChange={HandleChange}/>
}