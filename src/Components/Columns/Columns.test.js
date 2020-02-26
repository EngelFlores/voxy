import { render, waitForElement } from '@testing-library/react';
import React from 'react'

import { Columns } from './Columns'

describe('Column should render the information', () => {
    const mock = {
        "id": 118,
        "firstName": "Karoline",
        "lastName": "Beverstock",
        "email": "kbeverstockd@soup.io",
        "primaryGroup": "tortor",
        "hoursStudied": 3251,
        "phoneNumber": "432-731-5161"
    }

    test('Render information from user', async () => {
        const { getByTestId } = render(<Columns information={mock} />)
        const email = await waitForElement(() => getByTestId('email'))
        const firstName = await waitForElement(() => getByTestId('first-name'))
        const lastName = await waitForElement(() => getByTestId('last-name'))
        const primaryGroup = await waitForElement(() => getByTestId('primary-group'))
        const phoneNumber = await waitForElement(() => getByTestId('phone-number'))
        const hoursStudied = await waitForElement(() => getByTestId('hours-studied'))


        expect(email).toHaveTextContent('kbeverstockd@soup.io')
        expect(firstName).toHaveTextContent('Karoline')
        expect(lastName).toHaveTextContent('Beverstock')
        expect(primaryGroup).toHaveTextContent('tortor')
        expect(hoursStudied).toHaveTextContent('3251')
        expect(phoneNumber).toHaveTextContent('432-731-5161')

    })
})