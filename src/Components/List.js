import React, { useState, useEffect } from 'react';
import { Columns } from './Columns'
import { SearchBar } from './SeachBar'
import initialData from '../data/information';
import "./List.css"


const List = () => {
  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setData(initialData)
    setFilteredList(initialData)
  }, [])

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
      return element.email.toLowerCase().indexOf(search) !== -1 || element.primaryGroup.toLowerCase().indexOf(search) !== -1
    })
    return setFilteredList(filtered)
  }

  return (
    <>
      <SearchBar onChange={filterList}></SearchBar>
      <button onClick={mostStudied}>Most Studied</button>
      <button onClick={leastStudied}>Least Studied</button>
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
          <tbody>
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
