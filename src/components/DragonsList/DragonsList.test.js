import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import DragonsList from "./DragonsList"

describe("DragonsList", () => {
    it("shows loader and data", async () => {
        render(<Router><DragonsList /></Router>);

        const loader =  await screen.findByRole("progressbar", {}, { timeout: 3000 });
        expect(loader).toBeInTheDocument()

        const image = await screen.findByTestId("image", {}, { timeout: 3000 });
        expect(image).toBeInTheDocument()
    })

    it("clicking on image leads to the DragonInfo page", async () => {
        render(<Router><DragonsList /></Router>);
        const linkImage = await screen.findByTestId("link");
        expect(linkImage.href).toEqual('http://localhost/5e9d058759b1ff74a7ad5f8f');    
    })
})
