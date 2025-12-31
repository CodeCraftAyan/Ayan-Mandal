const celebrations = {
  "1-1": "Happy New Year 🎉🎊",
  "13-1": "Lohri 🔥",
  "14-1": "Makar Sankranti / Pongal 🌞",
  "26-1": "Happy Republic Day 🇮🇳",
  "15-2": "Maha Shivratri 🙏",
  "3-3": "Holi – Festival of Colors 🌈",
  "26-3": "Ram Navami 🛕",
  "29-3": "Eid-ul-Fitr 🕊️",
  "31-3": "Mahavir Jayanti 🛕",
  "3-4": "Good Friday ✝️",
  "1-5": "Buddha Purnima 🪷",
  "16-7": "Eid-al-Adha (Bakrid) 🎉",
  "15-8": "Happy Independence Day 🇮🇳",
  "28-8": "Raksha Bandhan 🤝",
  "4-9": "Janmashtami 🕉️",
  "2-10": "Gandhi Jayanti 🕊️",
  "20-10": "Dussehra (Vijayadashami) 🎉",
  "6-11": "Dhanteras 💥",
  "8-11": "Diwali – Festival of Lights 🪔",
  "24-11": "Guru Nanak Jayanti 🕯️",
  "25-12": "Merry Christmas 🎄",
  "31-12": "Almost New Year 🎊🎉",
};

const notification = document.getElementById("dateNotification");
const messageEl = document.getElementById("celebrationMessage");

const today = new Date();
const todayKey = `${today.getDate()}-${today.getMonth() + 1}`;

if (celebrations[todayKey]) {
  setTimeout(() => {
    messageEl.textContent = celebrations[todayKey];
    notification.classList.remove("hidden");
  
    setTimeout(() => {
      closeNotification();
    }, 7000);
  }, 2000);
}

function closeNotification() {
  notification.classList.add("opacity-0", "-translate-x-5");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 300);
}

window.closeNotification = closeNotification;
