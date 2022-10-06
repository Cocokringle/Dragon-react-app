import React from "react";
import { Provider } from 'react-redux';
import { store} from '../../redux/store';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage"

describe("RegisterPage", () => {
    it("the page is rendered ", () => {
        render(<Provider store={store}><RegisterPage /></Provider>);
        expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    })
})

