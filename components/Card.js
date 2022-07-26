import React from "react"



export default function Card(props) {
    return(
           <div>
                <section className="card">
                    <img src={props.item.imageUrl} className="img" />
                    <div className="card-items">
                        <div className="location">
                            <p className="country"><img className="icon" src="./images/path.png"/>{props.item.location}</p>
                            <a href={props.item.googleMapsUrl} className="map"><p>View on Google Maps</p></a>
                        </div>
                        <h2 className="title">{props.item.title}</h2>
                        <p className="date-range">{props.item.startDate} - {props.item.endDate}</p>
                        <p className="description">{props.item.description}</p>
                    </div>
                </section> 
                <div className="divider"></div>
            </div>
    )
}