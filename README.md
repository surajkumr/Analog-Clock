# 🕰️ SVG Analog Clock

A dynamic and visually appealing analog clock built using pure JavaScript and SVG. This project showcases real-time clock hands, hour markers, and tick marks—all rendered and animated without any external libraries.

## 🔗 Live Demo

Check it out in action:(https://analogclak.netlify.app/)

## 📦 Features

- 🕐 Hour numbers positioned using trigonometric calculations
- 🎯 60 tick marks with bold styling for every 5-minute interval
- ⏰ Real-time rotation of hour, minute, and second hands
- 💡 Clean and responsive SVG layout centered at (150, 150)

## 🧠 How It Works

- **Hour Numbers**: Positioned using polar coordinates and rendered as `<text>` elements.
- **Tick Marks**: Created with `<line>` elements, styled based on their position.
- **Clock Hands**: Updated every second using `setInterval()` and `transform: rotate()`.

## 🛠️ Technologies Used

- HTML5
- JavaScript (Vanilla)
- SVG

## 🚀 Getting Started

To run locally:

```bash
git clone https://github.com/your-username/svg-analog-clock.git
cd svg-analog-clock
open index.html
