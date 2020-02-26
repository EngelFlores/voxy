import React from 'react';
import './Columns.css'

const Columns = (props) => {
  const { firstName, lastName, phoneNumber, email, primaryGroup, hoursStudied } = props.information

  return (
    <tr>
      <td>{email}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{primaryGroup}</td>
      <td>{phoneNumber}</td>
      <td>{hoursStudied}</td>
    </tr>
  )
}

export { Columns }

