import React, { useState } from 'react';
import { Columns } from '../Columns/Columns'
import { SearchBar } from '../SeachBar'
import "./List.css"


const List = (props) => {
  const {data} = props
  const [filteredList, setFilteredList] = useState(data);

  const mostStudied = () => {
    const sortedList = data.sort((firstElement, secondElement) => secondElement.hoursStudied - firstElement.hoursStudied)
    return setFilteredList([...sortedList])
  }

  const leastStudied = () => {
    const sortedList = data.sort((firstElement, secondElement) => firstElement.hoursStudied - secondElement.hoursStudied)
    return setFilteredList([...sortedList])
  }

  const filterList = (event) => {
    const search = event.target.value
    const filtered = data.filter(element => {
      return element.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 || element.primaryGroup.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    return setFilteredList(filtered)
  }

  return (
    <>
      <SearchBar onChange={filterList}></SearchBar>
      <button data-testid="most-studied" onClick={mostStudied}>Most Studied</button>
      <button data-testid="least-studied" onClick={leastStudied}>Least Studied</button>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Primary Group</th>
              <th>Phone Number</th>
              <th>Hours Studied</th>
            </tr>
          </thead>
          <tbody data-testid="columns">
            {filteredList.map(information => {
              return <Columns key={information.id} information={information}></Columns>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export { List }
