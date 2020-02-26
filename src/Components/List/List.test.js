import { render, waitForElement, fireEvent } from '@testing-library/react';
import React from 'react'

import { List } from './List'

describe('Should render right information in the list', () => {
    const mock = [{
        "id": 53,
        "firstName": "Susanna",
        "lastName": "Legion",
        "email": "slegiona@prlog.org",
        "primaryGroup": "pretium",
        "hoursStudied": 2857,
        "phoneNumber": "152-210-9118"
    }, {
        "id": 352,
        "firstName": "Letta",
        "lastName": "Fryatt",
        "email": "lfryattb@furl.net",
        "primaryGroup": "imperdiet sapien",
        "hoursStudied": 1795,
        "phoneNumber": "543-217-4959"
    }]

    test('Render filtered information from user', async () => {
        const { getByTestId } = render(<List data={mock} />)
        const searchInput = await waitForElement(() => getByTestId('search-input'))
        const list = await waitForElement(() => getByTestId('columns'))
        const value = "lfryattb@furl.net"
        fireEvent.change(searchInput, { target: { value } })

        expect(list).toHaveTextContent('Letta')
    })

    test('Sort users have studied the most', async () => {
        const { getByTestId } = render(<List data={mock} />)
        const sortListButton = await waitForElement(() => getByTestId('most-studied'))
        const list = await waitForElement(() => getByTestId('columns'))
        fireEvent.click(sortListButton)
        
        expect(list).toMatchSnapshot()
    })

})