import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";


import LoginForm from './LoginForm'

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
		render(<LoginForm />);
	});

    it('test for one element', () => {
        const { getByText } = render(<LoginForm />)
        getByText('SignUp')
    })

    it('test for one event', () => {
        const { getByText } = render(<LoginForm />)
        let button = getByText(/SignUp/i);
		fireEvent.click(button);
    })

})