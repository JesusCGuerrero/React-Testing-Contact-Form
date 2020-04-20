import React from 'react'
import { render, fireEvent, getAllByTestId, getByTestId } from '@testing-library/react'
import ContactForm from './ContactForm'

test('Renders ContactForm', () => {
    render(<ContactForm />)
})

test('Renders first name field', () => {
    const { getByTestId } = render(<ContactForm />)
    const firstNameInput = getByTestId(/firstName/i);
    expect(firstNameInput).toBeVisible();
})

test('Renders last name field', () => {
    const { getByTestId } = render(<ContactForm />)
    const lastNameInput = getByTestId(/lastName/i);
    expect(lastNameInput).toBeVisible();
})

test('Renders email field', () => {
    const { getByTestId } = render(<ContactForm />)
    const emailInput = getByTestId(/email/i);
    expect(emailInput).toBeVisible();
})

test('Renders message field', () => {
    const { getByTestId } = render(<ContactForm />)
    const messageInput = getByTestId(/message/i);
    expect(messageInput).toBeVisible();
})

test('Check inputing text onto fields', () => {
    const { getByTestId, getByText } = render(<ContactForm />)

    const firstNameInput = getByTestId(/firstname/i);
    const lastNameInput = getByTestId(/lastname/i);
    const emailInput = getByTestId(/email/i);
    const messageInput = getByTestId(/message/i);

    fireEvent.change(firstNameInput, {target: {name: 'firstname', value: 'Jesus'}})
    fireEvent.change(lastNameInput, {target: {name: 'lastname', value: 'Guerrero'}})
    fireEvent.change(emailInput, {target: {name: 'email', value: 'jg@ok.com'}})
    fireEvent.change(messageInput, {target: {name: 'message', value: 'hello world'}})

    expect(firstNameInput.value).toBe('Jesus')
    expect(lastNameInput.value).toBe('Guerrero')
    expect(emailInput.value).toBe('jg@ok.com')
    expect(messageInput.value).toBe('hello world')
})
