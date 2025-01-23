document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".days li").forEach((li) => {
    if (li.querySelector("span.no-location")) {
      li.classList.add("no-location");
    }
  });

  document.querySelectorAll(".calendar").forEach((locationElement) => {
    locationElement.classList.add("fade-in");
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

  const emoji = ["📍"];

  document.querySelectorAll(".location").forEach((locationElement) => {
    locationElement.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action, which is redundant here but shown for completeness
      const locationName = this.textContent; // Ensure to trim the textContent to remove the added emoji and spaces
      // Construct the URL for Google Maps in driving mode with the current location as the origin (implicitly) and the specified location as the destination
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        locationName // Assuming the location name is the first part before the emoji
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

  const dayElement = document.getElementById("day-11");

  function createFireEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = "🔥";

    // Randomize size and position
    const size = Math.random() * 20 + 30; // Size between 10px and 30px
    const position = Math.random() * 100; // Position between 0% and 100%
    const duration = Math.random() * 2 + 1; // Duration between 1s and 3s

    emoji.style.fontSize = `${size}px`;
    emoji.style.left = `${position}%`;
    emoji.style.animation = `emoji-grow-fade ${duration}s infinite`;

    dayElement.appendChild(emoji);

    // Remove emoji after animation ends to prevent overflow
    setTimeout(() => {
      dayElement.removeChild(emoji);
    }, duration * 1000);
  }

  // Create multiple fire emojis at random intervals
  setInterval(createFireEmoji, 500);

  // const nyanCatContainer = document.getElementById("nyan-cat-container");

  // function createNyanCat() {
  //   const nyanCat = document.createElement("div");
  //   nyanCat.classList.add("nyan-cat");

  //   const img = document.createElement("img");
  //   img.src =
  //     "https://static.wikia.nocookie.net/nyancat/images/f/fe/Nyan_Balloon.gif/revision/latest?cb=20230124014716"; // Transparent background Nyan Cat GIF

  //   nyanCat.appendChild(img);

  //   // Randomize the vertical position
  //   const position = Math.random() * 100; // Position between 0% and 100%
  //   nyanCat.style.top = `${position}%`;

  //   nyanCatContainer.appendChild(nyanCat);

  //   // Remove Nyan Cat after animation ends to prevent overflow
  //   setTimeout(() => {
  //     nyanCatContainer.removeChild(nyanCat);
  //   }, 5000); // Match the duration of the fly animation
  // }

  // // Create multiple Nyan Cats at random intervals
  // setInterval(createNyanCat, 10000);
});
