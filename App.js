import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cards = data.map(item => {
        return <Card 
                    key={item.title}
                    item={item}
                    />
    })
    return(
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}