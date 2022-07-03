import './search-box.styles.css'

/**
 * Interface can be extended and overloaded
 */
interface ISearchBoxProps {
  placeholder?: string;
}

interface ISearchBoxProps {
  HandleChange: (event: Event) => void;
}

export const  SearchBoxComponent = ({placeholder, HandleChange} : ISearchBoxProps) => {
  return <input className='search' type="search" placeholder={placeholder} onChange={HandleChange}/>
}