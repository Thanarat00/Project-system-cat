import React, { Component } from 'react'
import './Search.css'
import { AiOutlineSearch } from "react-icons/ai";


export default class Searchbar extends Component {
  render() {
    return (
        <div class="search">
            <input type="text" class="searchTerm" placeholder="ค้นหา" ></input>
        <button type="submit" class="searchButton">
            <AiOutlineSearch />
       </button>
     </div>
    )
  }
}
