import React from "react";
import { Provider } from 'react-redux';
import { store} from '../../redux/store';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage"

describe("NotFoundPage", () => {
    it("the page is rendered", () => {
        render(<Provider store={store}><NotFoundPage /></Provider>);
        expect(screen.getByText(/Oops, this page is not found 404 💔/i)).toBeInTheDocument();
    })
})