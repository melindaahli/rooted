## Rooted
Stay rooted in smarter plant care 🌱

## Inspiration
Many plant owners struggle to know exactly what their plants need. Overwatering, underwatering, or poor lighting are common problems because plant care often relies on guesswork. We wanted to remove that uncertainty by giving plants a way to communicate their needs through real data.

## What it does
Rooted is a smart plant-care system that combines an **outdoor sensor device** with a **companion web app**. Our device monitors air temperature (°F), humidity, soil moisture, and light levels. This data is sent directly to our app where we compute these details into a plant health score along through an easy to understand display. Based on these real time conditions, Rooted provides actionable recommended tasks to users such as when your plant needs watering or whether lighting conditions are sufficient. Our app helps plant owners move from guessing to data-drive care.
 
## How we built it
We combined hardware, IOT, and web technologies to develop Rooted. Sensor data is collected by the Arduino device and transmitted to our backend server, which processes and displays live plant metrics in the web application. 
**Hardware/IOT** 
- Arduino Uno Q board
- Modulino Thermo and Humidity Sensor (DHT11)with C++ firmware
- Arduino Water Moisture Sensor
- Light Intensity Sensor (LDR)

**Backend** 
- Python
- Flask API
- JSON data handling

**Frontend**
- React
- TypeScript
- HTML / CSS
- Tailwind CSS
- Figma & Adobe Illustrator (UI/UX)

## Challenges we ran into
- Connecting physical sensor hardware reliably to a live web application
- Formatting and sending real-time data IoT data between Arduino and our backend
- Synchronizing frontend updates with incoming sensor readings

## Accomplishments that we're proud of
- Successfully sending live sensor data from an Arduino device to our web app
- Building a full end-to-end IoT pipeline from hardware to backend to frontend
- Creating an intuitive plant health visualization system
- Integrating hardware, software, and UI design into one cohesive product

## What we learned
- How to integrate IoT hardware with web frameworks
- How to communicate real-time data between embedded systems and web servers
- Collaboration across hardware and software teams

## What's next for Rooted
In the future, Rooted will continue to support users by expanding the variety of plants in our system, allowing for more personalized and species-specific care recommendations. When users add a new plant, Rooted will automatically populate the plant’s detail page with recommended care instructions tailored to that species. While we didn’t have time to fully implement this feature in the current version, the infrastructure is already in place, making it ready for future updates. Furthermore, we plan to enhance our plant health scoring model by incorporating historical sensor data and machine learning to better predict plant needs before issues arise. We also plan to introduce is a gallery feature, enabling users to take photos of their plants and track their growth and progress over time.
