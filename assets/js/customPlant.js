document.addEventListener("DOMContentLoaded", () => {
  const plants = document.querySelectorAll(".pixel-plant");

  const heights = [8, 10, 12, 14, 16, 18];
  const widths = [2, 3];
  const colors = [
    "bg-emerald-400",
    "bg-emerald-500",
    "bg-emerald-600",
    "bg-emerald-700"
  ];

  const potColors = [
    "bg-orange-400",
    "bg-amber-400",
    "bg-rose-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-violet-400",
    "bg-slate-400",
    "bg-cyan-400",
    "bg-sky-400",
    "bg-lime-400",
    "bg-blue-400"
  ];

  plants.forEach(plant => {
    const potBase = plant.parentElement.querySelector(".pot-base");
    const potBody = plant.parentElement.querySelector(".pot-body");

    const stalkCount = Math.floor(Math.random() * 2) + 4; // 4–5
    const center = Math.floor(stalkCount / 2);

    for (let i = 0; i < stalkCount; i++) {
      const stalk = document.createElement("div");

      const height =
        i === center
          ? heights[Math.floor(Math.random() * heights.length)]
          : heights[Math.floor(Math.random() * (heights.length - 2))];

      const width = widths[Math.floor(Math.random() * widths.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      stalk.className = `
        w-${width} h-${height} ${color}
        rounded-sm transition-transform
        hover:-translate-y-1
      `;

      plant.appendChild(stalk);
    }

    const potColor = potColors[Math.floor(Math.random() * potColors.length)];
    potBase.classList.add(potColor);
    potBody.classList.add(potColor);
  });
});
