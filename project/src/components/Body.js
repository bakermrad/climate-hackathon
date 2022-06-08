import React from "react"

export default function Body() {
    return (
        <section  className="Main-body">
            <div id="problem" className="problem">
                <div className="element1">
                    <div className="e1--text">
                    <h1>problem 1</h1>
                    <p>Scientists estimate that ships kills 1000s of whales every year. Whales cannot avoid these
                        big ships, and no accurate way of detecting whales has been found.</p>
                    </div>
                    <img className="main--imgs  img1" src="images/img1.png" alt="" />
                   
                </div>
                <div className="element2">
                    <img className="main--imgs" src="images/img2.jpg" alt="" />
                    <h1>problem 2</h1>
                    
                </div>



            
                
            </div>
            <div className="solution">
                <h1>solution</h1>
                <p>The favoured ways of avoiding collisions is for vessels to take into consideration the whales’
natural habitats and movements - these include going 300m deep for their food during the
day (rising to the surface only to get air), and going near the surface of the water at
nighttime.
Our solution involves taking the existing data on whales, together with their migration routes
and real time data, to predict whales’ locations so that ships can plan their routes
accordingly. By having this data, the ships will be able to manage their routes as efficiently
as possible so that they can stop, slow down and move faster as needed.
</p>
            </div>


        </section>
    )
}