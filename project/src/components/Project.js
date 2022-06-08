import React from "react"


export default function Project() {

    return (
       <div className="project--con">
           <div className="sidebar">
               <form className="pro--form" action="" method="post">
                   <label htmlFor="">Departing from</label>
                   <input type="text" />

                   <input type="date" name="" id="" />
                   <label htmlFor="">Arriving to</label>

                   <input type="text" />
                   <button type="submit" className="submit">submit</button>
               </form>
               <div className="pro--states">
                   <h4>Distance: </h4>
                   <h4>Average speed:</h4>
                   <h4>Day at sea</h4>
               </div>
               <div className="pro--dis">
                   <ol>
                        <li>Golfo De Panama Gulf</li>
                        <li>Panama Canal</li>
                        <li>Panama Canal River</li>
                        <li>Caribbean Sea</li>
                        <li>North Atlantic Ocean</li>
                   </ol>
               </div>
           </div>

           <div className="map">
            </div>
           {/* <svg width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1">
            <g id="whale">
            <path id="Vector" d="M342.219 41C324.151 57.0916 324.151 35.6362 297.049 51.7277C269.948 41 269.948 67.8193 242.846 51.7277C250.968 66.2047 273.733 76.262 297.953 78.15C295.45 87.746 299.778 99.3158 278.982 110.725C260.842 120.685 251.672 112.398 206.711 94.6385C179.609 83.9323 161.542 73.1831 116.372 78.547C63.2262 84.8602 17 110.725 17 121.452C17 132.18 44.1016 196.38 206.711 196.38C224.779 196.38 254.075 192.818 278.982 180.455C332.778 153.753 332.119 98.125 320.357 76.0957C336.437 70.0506 342.219 53.8357 342.219 41Z" fill="#3B88C3"/>
            <path id="Vector_2" d="M289.949 174.082C291.295 173.197 292.56 172.269 293.824 171.342C310.799 158.736 320.041 142.656 324.133 126.875C306.074 153.673 296.977 180.449 197.677 180.449C98.3047 180.449 62.1693 110.719 17 121.447C17 132.18 44.1016 196.375 206.711 196.375C224.779 196.375 254.075 192.813 278.982 180.449C281.854 179.028 284.51 177.483 287.112 175.901C288.07 175.305 289.018 174.699 289.949 174.082Z" fill="#55ACEE"/>
            <path id="Vector_3" d="M89.2708 118.77C89.2708 123.212 83.2091 126.816 75.72 126.816C68.231 126.816 62.1693 123.212 62.1693 118.77C62.1693 114.329 68.231 110.725 75.72 110.725C83.2091 110.725 89.2708 114.329 89.2708 118.77Z" fill="#292F33"/>
            </g>
            </g>
            </svg> */}

       </div>
    )
}
