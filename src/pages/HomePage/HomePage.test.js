import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from "./HomePage"

describe("HomePage", () => {
    it("renders links on the home page", () => {
        render(<Router><HomePage/></Router>);
        expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    })

    it("clicking on register leads to the registration page", () => {
        render(<Router><HomePage /></Router>);
        const linkElement = screen.getByText(/register/i).href;
        expect(linkElement).toEqual('http://localhost/register');
    })

    it("clicking on login leads to the login page", () => {
        render(<Router><HomePage /></Router>);
        const linkElement = screen.getByText(/login/i).href;
        expect(linkElement).toEqual('http://localhost/login');
    })
})