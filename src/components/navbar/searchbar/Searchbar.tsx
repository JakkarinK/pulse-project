import * as React from 'react';
import { useState } from 'react';
import './StylesSearch.css';
import { FaSearch } from 'react-icons/fa';

export interface ISearchbarProps {
}

export function Searchbar (props: ISearchbarProps) {
  const [input, setInput] = useState("");
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
          placeholder='Search...' 
          value={input}
          onChange={e => setInput(e.target.value)}
        />
    </div>
  );
}
