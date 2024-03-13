document.addEventListener("DOMContentLoaded", function () {
  var audio = new Audio("/rjb24/intro.mp3");
  audio.play();

  document.querySelectorAll(".days li").forEach((li) => {
    if (li.querySelector("span.no-location")) {
      li.classList.add("no-location");
    }
  });

  // Define an array of emojis
  const emojis = [
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

  document.querySelectorAll(".location").forEach((locationElement) => {
    locationElement.addEventListener("click", function () {
      const locationName = this.textContent; // Get the location name from the element
      // Construct the URL for Google Maps in driving mode with the current location as the origin (implicitly) and the specified location as the destination
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        locationName
      )}&travelmode=driving`;
      window.open(googleMapsUrl, "_blank"); // Open Google Maps in a new tab with the specified route
    });

    // Append a random emoji to each location name
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    locationElement.textContent += ` ${randomEmoji}`;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/rjb24/service-worker.js").then(
        (registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        (err) => {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
});
