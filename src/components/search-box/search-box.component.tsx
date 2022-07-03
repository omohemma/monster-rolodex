import {ChangeEvent} from "react";

import './search-box.styles.css'

type SearchBoxProps = {
  placeholder?: string;
  HandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const  SearchBoxComponent = ({placeholder, HandleChange} : SearchBoxProps) => {
  return <input className='search' type="search" placeholder={placeholder} onChange={HandleChange}/>
}