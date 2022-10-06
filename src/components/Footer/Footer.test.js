import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from "./Footer"

describe("Footer", () => {
    it("renders text on the Footer", () => {
        render(<Router><Footer/></Router>);
        expect(screen.getByText(/Made with/i)).toBeInTheDocument();
    })
    it("clicking on Cocokringle leads to the my GitHub page", () => {
        render(<Router><Footer /></Router>);
        const linkElement = screen.getByText(/Cocokringle/i).href;
        expect(linkElement).toEqual('https://github.com/Cocokringle');
    })

})