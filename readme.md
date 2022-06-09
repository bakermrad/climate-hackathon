
npm i -g react-scripts
---------------
after install is completed past this

npm install --save react react-dom @types/react @types/react-dom
---------------------
and finally type (npm start) to start the project it might take some time then your default brower will open with the website.

## Inspiration 
Based on the HUB Ocean and Cognite challenge to have nature-friendly maritime transportation, our team wanted to build a project that helps save the lives of thousands of whales. With the increase in cargo and cruise boat traffic over the last several decades, ships have become one of the deadliest threats whales face in open oceans and coastal waters. That's why we wanted to build something that can tell where and when whales are located and suggest a route according to that. Based on this idea, we decided to make a website with multiple functionalities that visually represent whales on a map and can suggest the best route for ships and give them all the information needed.

## What it does 
The project aimed to suggest routes based on whale location. Whales are located on a map based on their natural habits(whales move closer to the surface during nighttime hours). An additional feature wanted to include is a map that suggested the route with the lowest risk of hitting a whale based on current reports and migratory patterns of specific species.

## How we built it 
We started by making a simple react page with some components like a navbar, an introduction for the problem, and the solution. Below the main content of the page, there is a map users would use. The plan was to have an interactive map that shows the location of the whales during the day or night based on recent location reports and calculations of probable migratory patterns, with the option for ships to add a starting location and final destination, where the map will suggest the route accordingly. We found that Whale Maps could be used as a possible implementation for this, along with machine learning, we would be able to calculate the likeliness of a whale on the projected route. Additionally Microsofts Azure Map API could be used to allow users to calculate routes.

## Challenges we ran into 
We ran into major challenges finding enough data about the whale's location and making an interactive map using the Azure Platforms Map API. At this moment, we haven’t gotten to the route suggestion part due to time constraints and our current level of experience utilizing APIs. Though, we aim to have this portion completed independently from the hackathon at a later time.

## What we learned 
Thanks to this project we have learned so many new things about the whale's nature, and we got more comfortable working with react and components. 

## What's next for CETUS 
Our next goal is to implement an API that can help us determine the location of whales across the world and implement a function to suggest routes for ships based on their location and migratory patterns.
