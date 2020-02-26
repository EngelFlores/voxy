import React from 'react';
import './Columns.css'

const Columns = (props) => {
  const { firstName, lastName, phoneNumber, email, primaryGroup, hoursStudied } = props.information

  return (
    <tr>
      <td data-testid="email">{email}</td>
      <td data-testid="first-name">{firstName}</td>
      <td data-testid="last-name">{lastName}</td>
      <td data-testid="primary-group">{primaryGroup}</td>
      <td data-testid="phone-number">{phoneNumber}</td>
      <td data-testid="hours-studied">{hoursStudied}</td>
    </tr>
  )
}

export { Columns }

