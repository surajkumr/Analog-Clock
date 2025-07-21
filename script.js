const svg = document.querySelector("svg");

// 🕐 Hour Numbers
for (let hour = 1; hour <= 12; hour++) {
  const angle = (hour - 3) * 30 * (Math.PI / 180);
  const x = 150 + Math.cos(angle) * 115;
  const y = 150 + Math.sin(angle) * 115;

  const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
  txt.setAttribute("x", x);
  txt.setAttribute("y", y + 6);
  txt.setAttribute("text-anchor", "middle");
  txt.setAttribute("fill", "#00ffe5");
  txt.setAttribute("font-size", "20");
  txt.textContent = hour;

  svg.appendChild(txt);
}

// 🎯 Tick Marks
for (let i = 0; i < 60; i++) {
  const angle = i * 6 * (Math.PI / 180);
  const x1 = 150 + Math.cos(angle) * 135;
  const y1 = 150 + Math.sin(angle) * 135;
  const x2 = 150 + Math.cos(angle) * 140;
  const y2 = 150 + Math.sin(angle) * 140;

  const mark = document.createElementNS("http://www.w3.org/2000/svg", "line");
  mark.setAttribute("x1", x1);
  mark.setAttribute("y1", y1);
  mark.setAttribute("x2", x2);
  mark.setAttribute("y2", y2);
  mark.setAttribute("stroke", "#888");
  mark.setAttribute("stroke-width", i % 5 === 0 ? "2" : "1");

  svg.appendChild(mark);
}

// ⏰ Rotate Hands Every Second
setInterval(() => {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondAngle = second * 6;
  const minuteAngle = minute * 6 + second * 0.1;
  const hourAngle = hour * 30 + minute * 0.5;

  document.getElementById("second").setAttribute("transform", `rotate(${secondAngle} 150 150)`);
  document.getElementById("minute").setAttribute("transform", `rotate(${minuteAngle} 150 150)`);
  document.getElementById("hour").setAttribute("transform", `rotate(${hourAngle} 150 150)`);
}, 1000);