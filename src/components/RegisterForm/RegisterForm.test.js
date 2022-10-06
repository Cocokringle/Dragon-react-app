import React from "react";
import { Provider } from 'react-redux';
import { store} from '../../redux/store';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm"
import userEvent from "@testing-library/user-event"

describe("RegisterForm", () => {
    it("all inputs in form is required", () => {
        render(<Provider store={store}><RegisterForm/></Provider>);
        const [name, email, password] = screen.getAllByTestId("element");
        expect(name).toBeRequired();
        expect(email).toBeRequired();
        expect(password).toBeRequired();
    })

    it("all input fields have attribute", () => {
        render(<Provider store={store}><RegisterForm /></Provider>);
        const [name, email, password] = screen.getAllByTestId("element");

        expect(name).toHaveAttribute("type", "text");
        expect(email).toHaveAttribute("type", "email");
        expect(password).toHaveAttribute("type", "password");
    })

    it("all input fields can accept text", () => {
        render(<Provider store={store}><RegisterForm /></Provider>);
        const [name, email, password] = screen.getAllByTestId("element");

        userEvent.type(name, "Person");
        expect(name).toHaveValue("Person");

        userEvent.type(email, "email@gmail.com");
        expect(email).toHaveValue("email@gmail.com");

        userEvent.type(password, "testPassword123");
        expect(password).toHaveValue("testPassword123");
    })

    it("Form can be submited", () => {
        render(<Provider store={store}><RegisterForm /></Provider>);
        const [name, email, password] = screen.getAllByTestId("element");
        const button = screen.getByRole("button");

        userEvent.type(name, "Person");
        userEvent.type(email, "email@gmail.com");
        userEvent.type(password, "testPassword123");
        userEvent.click(button);

        expect(name).not.toHaveValue("Person");
        expect(email).not.toHaveValue("email@gmail.com");
        expect(password).not.toHaveValue("testPassword123");
    })
})

