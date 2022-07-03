import './search-box.styles.css'

/**
 * Interface can be extended and overloaded
 * Types afford us a feature called union
 */
interface ISearchBoxProps {
  placeholder?: string;
}

interface ISearchBoxProps {
  HandleChange: (event: Event) => void;
}

type CanadianAddress = {
  state: string;
  street: string;
}

type USAddress = {
  province: string;
  street: string
}

type NorthAmericanAddress = CanadianAddress | USAddress

const address : NorthAmericanAddress = {
  street: "Allen Avenue",
  state: "Oklahoma",
}


type SearchBoxProps = {
  placeholder?: string;
  HandleChange: (event: Event) => void;
}

export const  SearchBoxComponent = ({placeholder, HandleChange} : SearchBoxProps) => {
  return <input className='search' type="search" placeholder={placeholder} onChange={HandleChange}/>
}