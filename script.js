const MONTHS = [
  "ABRIL",
  "MAIO",
  "JUNHO",
  "JULHO",
  "AGOSTO",
  "SETEMBRO",
  "OUTUBRO",
];

const WEEKDAYS = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"];

const EMOJIS = [
  "🌍",
  "🌟",
  "🚀",
  "🌈",
  "⚡",
  "🔥",
  "🎉",
  "💫",
  "✨",
  "🌴",
  "🍀",
  "🌺",
  "🌻",
  "🍄",
  "🌵",
  "🍁",
  "🎄",
  "❄️",
  "🎃",
  "👻",
  "🐉",
  "🦄",
  "🧜‍♀️",
  "🐳",
  "🦋",
  "🐝",
  "🍒",
  "🍑",
  "🥥",
  "🍕",
  "🍣",
  "🍺",
  "🥂",
  "🚗",
  "🛸",
  "🏰",
  "🗽",
  "🎡",
  "🚀",
  "⛵",
  "🗺️",
  "💍",
  "🧭",
  "🔮",
  "💡",
  "📚",
  "🔑",
  "💼",
  "🎈",
  "🧸",
  "🪁",
  "🪀",
  "🔵",
  "🟠",
  "🟢",
  "🟣",
  "🟡",
  "🟤",
  "⚫",
  "⚪",
  "🟥",
  "🟧",
  "🟨",
  "🟩",
  "🟦",
  "🟪",
  "🟫",
  "🖤",
  "🤍",
  "💣",
  "🛁",
  "🛌",
  "🔒",
  "🔓",
  "🚿",
  "🛒",
  "🎁",
  "🧧",
  "🎀",
  "🎊",
  "🎉",
  "🎎",
  "🏮",
  "🎐",
  "🧨",
  "🎈",
  "🪅",
  "🪆",
  "🧩",
  "🧸",
  "🪡",
  "🪢",
  "🪃",
  "🪄",
  "🪅",
  "🪆",
  "🪜",
  "🪠",
  "🪤",
  "🪣",
  "🪥",
  "🪦",
  "🪧",
  "🪨",
  "🪩",
  "🪪",
  "🪫",
  "🪬",
  "🪭",
  "🪮",
  "🪯",
  "🪰",
  "🪱",
  "🪲",
  "🪳",
  "🪴",
  "🪵",
  "🪶",
  "🪷",
  "🪸",
  "🪹",
  "🪺",
  "🪻",
  "🪼",
  "🪽",
  "🪿",
  "🫀",
  "🫁",
  "🫂",
  "🫐",
  "🫑",
  "🫒",
  "🫓",
  "🫔",
  "🫕",
  "🫖",
  "🫗",
  "🫘",
  "🫙",
  "🫚",
  "🫛",
  "🫠",
  "🫡",
  "🫢",
  "🫣",
  "🫤",
  "🫥",
  "🫦",
  "🫧",
  "🫨",
  "🫮",
  "🫯",
  "🫰",
  "🫱",
  "🫲",
  "🫳",
  "🫴",
  "🫵",
  "🫶",
  "🫷",
  "🫸",
];

const emoji = ["📍"];

const events = {
  // ABRIL
  "2025-04-26": "Castelãos (Macedo de Cavaleiros)",
  // MAIO
  "2025-05-10": "Vila Franca (Macedo de Cavaleiros)",
  "2025-05-17": "Vila de Ala (Mogadouro)",
  // JUNHO
  "2025-06-07": "Ester de Cima - Castro Daire",
  "2025-06-14": "Selhariz",
  "2025-06-20": "Desconhecido",
  "2025-06-21": "Pinhão (Oliveira de Azeméis)",
  "2025-06-28": "Marinha Grande",
  // JULHO
  "2025-07-11": "Sanguinhedo",
  "2025-07-18": "RESERVADO",
  "2025-07-19": "RESERVADO",
  "2025-07-20": "Meixedo (Tarouca)",
  "2025-07-25": "Valença do Douro",
  "2025-07-26": "Lagobom (Pedras Salgadas)",
  "2025-07-27": "São Pedro Velho",
  // AGOSTO
  "2025-08-02": "Ribeirada de Fráguas (Albergaria-a-Velha)",
  "2025-08-03": "Gravelos (Vila Real)",
  "2025-08-06": "Lombo",
  "2025-08-07": "Pinheiro Velho",
  "2025-08-08": "Empresário Paulo (Chaves)",
  "2025-08-09": "Empresário Liberio",
  "2025-08-10": "Gojim",
  "2025-08-11": "Abaças (Vila Real)",
  "2025-08-13": "Sobreda",
  "2025-08-14": "Travanca (Macedo)",
  "2025-08-15": "Peredo",
  "2025-08-16": "Argeriz",
  "2025-08-17": "Seixo de Manhoses",
  "2025-08-18": "Sambade",
  "2025-08-20": "Brinço (Macedo)",
  "2025-08-23": "Sousa",
  // SETEMBRO
  "2025-09-06": "Mirão (Resende)",
  "2025-09-20": "Castelãos (Macedo de Cavaleiros)",
  // OUTUBRO
  "2025-10-04": "Morais (Macedo de Cavaleiros)",
};

const TOTAL_EVENTS = Object.keys(events).length;
const totalElement = document.createElement("div");
totalElement.className = "total-events";
totalElement.textContent = `Total de Eventos: ${TOTAL_EVENTS}`;

// Calendar creation helper functions
function createMonthHeader(month) {
  const header = document.createElement("h2");
  header.textContent = MONTHS[month - 4];
  return header;
}

// Calendar creation helper functions
function createMonthHeader(month) {
  const header = document.createElement("h2");
  header.textContent = MONTHS[month - 4];
  return header;
}

function createWeekdaysRow() {
  const weekdaysDiv = document.createElement("div");
  weekdaysDiv.className = "weekdays";
  WEEKDAYS.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;
    weekdaysDiv.appendChild(dayDiv);
  });
  return weekdaysDiv;
}

function createDayElement(day, dateStr, events) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = day;

  if (events[dateStr]) {
    const locationDiv = document.createElement("div");
    locationDiv.className = "location";
    locationDiv.textContent = events[dateStr];
    li.append(span, locationDiv);

    // Add special class and ID for Sanguinhedo event
    if (dateStr === "2025-07-11") {
      li.classList.add("sanguinhedo-event");
      li.id = "sanguinhedo-event"; // Add this line
    }
  } else {
    span.className = "no-location";
    li.appendChild(span);
  }

  return li;
}

function formatDateString(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

function createCalendar(month, year) {
  const firstDay = new Date(year, month - 1, 1); // Adjust month to be 0-based for Date object
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();

  // Special case for April 2024 which starts on Tuesday (2)
  let startingDay = month === 4 ? 2 : firstDay.getDay() || 7; // Convert Sunday (0) to 7

  const calendar = document.createElement("div");
  calendar.className = "calendar";

  calendar.appendChild(createMonthHeader(month));
  calendar.appendChild(createWeekdaysRow());

  const daysUl = document.createElement("ul");
  daysUl.className = "days";

  // Add empty cells for days before the first of the month
  Array.from({ length: startingDay - 1 }).forEach(() => {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty";
    daysUl.appendChild(emptyLi);
  });

  // Add days of the month
  Array.from({ length: daysInMonth }).forEach((_, index) => {
    const day = index + 1;
    const dateStr = formatDateString(year, month, day);
    const dayElement = createDayElement(day, dateStr, events);
    daysUl.appendChild(dayElement);
  });

  calendar.appendChild(daysUl);
  return calendar;
}

// Event handling
function handleLocationClick(event) {
  event.preventDefault();
  const locationName = event.target.textContent.split(" ")[0]; // Remove emoji
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    locationName
  )}&travelmode=driving`;
  window.open(googleMapsUrl, "_blank");
}

function initializeCalendars() {
  const container = document.getElementById("calendar-container");
  const year = 2025;

  // Generate calendars for April through October
  Array.from({ length: 7 }, (_, i) => i + 4).forEach((month) => {
    const calendar = createCalendar(month, year);
    container.appendChild(calendar);
  });

  // Add styles and event listeners
  document.querySelectorAll(".days li").forEach((li) => {
    if (li.querySelector("span.no-location")) {
      li.classList.add("no-location");
    }
  });

  document
    .querySelectorAll(".calendar")
    .forEach((cal) => cal.classList.add("fade-in"));

  // Add location click handlers and emojis
  document.querySelectorAll(".location").forEach((locationElement) => {
    locationElement.addEventListener("click", handleLocationClick);
    const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    locationElement.textContent += ` ${randomEmoji}`;
  });
  // Add total element before calendars
  container.appendChild(totalElement);
}

// Service Worker Registration
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/rjb24/service-worker.js"
        );
        console.log(
          "ServiceWorker registration successful with scope:",
          registration.scope
        );
      } catch (err) {
        console.error("ServiceWorker registration failed:", err);
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setNoCacheHeaders();
  
  // Force reload if older than 24 hours
  const lastVisit = localStorage.getItem('lastVisit');
  const now = new Date().getTime();
  
  if (lastVisit && (now - parseInt(lastVisit)) > 24 * 60 * 60 * 1000) {
    window.location.reload(true);
  }
  
  // Store current visit time
  localStorage.setItem('lastVisit', now.toString());
  
  initializeCalendars();
  registerServiceWorker();

  const dayElement = document.getElementById("sanguinhedo-event");

  // Add CSS for animations dynamically
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    #sanguinhedo-event {
      position: relative;
      overflow: visible;
      animation: shake 0.5s ease-in-out infinite;
    }
  `;
  document.head.appendChild(styleSheet);

  function createFireEmoji() {
    if (!dayElement) {
      console.log("Sanguinhedo element not found");
      return;
    }

    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = "🔥";

    // Randomize size and position
    const size = Math.random() * 20 + 30;
    const position = Math.random() * 80 + 10; // Keep emojis more centered (10% to 90%)
    const duration = Math.random() * 2 + 1;

    emoji.style.cssText = `
      font-size: ${size}px;
      left: ${position}%;
      animation: emoji-grow-fade ${duration}s ease-out forwards;
    `;

    dayElement.appendChild(emoji);

    // Remove emoji after animation ends
    setTimeout(() => {
      if (emoji.parentNode === dayElement) {
        dayElement.removeChild(emoji);
      }
    }, duration * 1000);
  }

  // Start the animation with a shorter interval
  if (dayElement) {
    console.log("Starting fire animation");
    setInterval(createFireEmoji, 300); // Increased frequency for more visible effect
  } else {
    console.log("Sanguinhedo element not found for animation");
  }
});

// Add no-cache headers function
function setNoCacheHeaders() {
  // Set meta tags to prevent caching
  const metaTags = [
    { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
    { httpEquiv: "Pragma", content: "no-cache" },
    { httpEquiv: "Expires", content: "0" }
  ];
  
  metaTags.forEach(tagInfo => {
    const metaTag = document.createElement('meta');
    metaTag.httpEquiv = tagInfo.httpEquiv;
    metaTag.content = tagInfo.content;
    document.head.appendChild(metaTag);
  });
}

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Don't cache HTML, JS or data files
  if (url.pathname.endsWith('.html') || 
      url.pathname.endsWith('.js') || 
      url.pathname.includes('/data/')) {
    
    event.respondWith(
      fetch(event.request, { 
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
    );
  } else {
    // Handle other resources normally
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});