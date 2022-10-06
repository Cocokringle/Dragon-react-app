
import React from "react";
import { Provider } from 'react-redux';
import { store} from '../../redux/store';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage"

describe("LoginPage", () => {
    it("the page is rendered", () => {
        render(<Provider store={store}><LoginPage /></Provider>);
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    })
})