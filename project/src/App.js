import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Body from "./components/Body"
import Project from "./components/Project"
import Map from "./components/Map"
export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <Project />
            <Map />
        </div>
    )
}