// 在這裡直接修改每一頁內容（可自由增減頁數）
const pagesData = [
  {
    image: "./images/photo (1).jpg",
    alt: "我們的第一張合照",
    title: "第一頁：遇見妳的那天",
    text: "還記得那天的笑容，像一束光照進我的日常。從那一刻起，我就知道，以後每一個平凡的日子都會因為妳而變得特別。",
  },
  {
    image: "./images/photo (2).jpg",
    alt: "一起旅行的回憶",
    title: "第二頁：一起去過的地方",
    text: "每一次牽手走過街道、山海和城市，都成了我最珍貴的記憶。謝謝妳讓我知道，幸福其實很簡單，就是妳在我身邊。",
  },
  {
    image: "./images/photo (3).jpg",
    alt: "甜蜜的日常自拍",
    title: "第三頁：有妳在的日常",
    text: "有妳在的每一天都好可愛，連平凡的吃飯、散步、聊天都變成我最期待的小幸福。",
  },
  {
    image: "./images/photo (4).jpg",
    alt: "一起慶祝的小驚喜",
    title: "第四頁：想給妳的驚喜",
    text: "謝謝妳總是把我的粗心變成笑聲，也把我的疲累變成勇氣。希望這份小小驚喜，能讓妳今天更開心。",
  },
  {
    image: "./images/photo (5).jpg",
    alt: "溫柔的對視時刻",
    title: "第五頁：想對妳說的話",
    text: "生日快樂，寶貝。願妳的每個願望都被實現，願妳永遠被愛包圍，而我會一直在妳身邊。",
  },
  {
    image: "./images/photo (6).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (7).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
   {
    image: "./images/photo (8).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (9).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (10).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (11).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (12).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (13).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    fit: "cover",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (14).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (15).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (16).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (17).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (18).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (19).jpg",
    alt: "牽手看夕陽",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    type: "cake",
    age: "19",
    text: "我的寶寶也19歲啦，生日快樂！",
  },
];

const stickerSets = [
  ["✨", "💕", "🌸"],
  ["💫", "🎀", "🪄"],
  ["💗", "🤍", "🌺"],
  ["⭐", "🌷", "💞"],
];

const backgroundTracks = [
  { name: "BGM 1", src: "./music/bgm-1.mp3" },
  { name: "BGM 2", src: "./music/bgm-2.mp3" },
  { name: "BGM 3", src: "./music/bgm-3.mp3" },
];

const book = document.getElementById("book");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");
const giftScreen = document.getElementById("giftScreen");
const openGiftBtn = document.getElementById("openGiftBtn");
const mainPage = document.getElementById("mainPage");
const pages = [];

const bgAudio = new Audio();
bgAudio.loop = false;
bgAudio.volume = 0.5;

let currentPage = 0;
let isBookReady = false;
let currentTrackIndex = 0;
let hasMusicStarted = false;

function createDecorations(index) {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
  // 定義四個角落的範圍設定
  const corners = [
    { name: "topLeft",     styles: () => `left: ${getRandom(2, 10)}%; top: ${getRandom(2, 12)}%;` },
    { name: "topRight",    styles: () => `right: ${getRandom(2, 10)}%; top: ${getRandom(2, 12)}%;` },
    { name: "bottomLeft",  styles: () => `left: ${getRandom(2, 10)}%; bottom: ${getRandom(2, 10)}%;` },
    { name: "bottomRight", styles: () => `right: ${getRandom(2, 10)}%; bottom: ${getRandom(2, 10)}%;` }
  ];

  // 隨機打亂四個角落並選取前三個
  const shuffledCorners = corners.sort(() => 0.5 - Math.random()).slice(0, 3);

  let stickers;
  if (index === 18) {
    stickers = ["🍓", "✨", "🍓"];
  } else {
    stickers = stickerSets[index % stickerSets.length];
  }

  // 根據選中的三個角落生成 HTML
  let html = "";
  for (let i = 0; i < 3; i++) {
     const rot = getRandom(-30, 30);
     html += `<span class="sticker" style="${shuffledCorners[i].styles()} transform: rotate(${rot}deg);">${stickers[i]}</span>`;
  }
  return html;
}

function createPage(data, index) {
  const article = document.createElement("article");
  article.className = "book-page";

  if (data.type === "cake") {
    article.classList.add("cake-page");
    article.innerHTML = `
      <div class="page-decor">${createDecorations(index)}</div>
      <div class="cake-wrap">
        <div class="cake">
          <div class="cake-candles">
            <div class="cake-candle"><span class="flame"></span><span class="wick"></span><span class="candle-num num-1">1</span></div>
            <div class="cake-candle"><span class="flame"></span><span class="wick"></span><span class="candle-num num-9">9</span></div>
          </div>
          
          <div class="cake-layer layer-top">
            <div class="fruit-shelf Shelf-T">
              <div class="strawberry-unit"><div class="strawberry"></div></div>
              <div class="grape-cluster"><div class="grape"></div><div class="grape"></div><div class="grape"></div></div>
              <div class="cherry-pair"><div class="cherry"></div><div class="cherry"></div></div>
              <div class="strawberry-unit"><div class="strawberry"></div></div>
            </div>
          </div>
          
          <div class="cake-layer layer-mid">
            <div class="fruit-shelf Shelf-M">
              <div class="strawberry-unit"><div class="strawberry"></div></div>
              <div class="grape-cluster grape-4"><div class="grape"></div><div class="grape"></div><div class="grape"></div><div class="grape"></div></div>
              <div class="cherry-pair"><div class="cherry"></div><div class="cherry"></div></div>
              <div class="strawberry-unit"><div class="strawberry"></div></div>
              <div class="cherry-pair"><div class="cherry"></div><div class="cherry"></div></div>
              <div class="strawberry-unit"><div class="strawberry"></div></div>
            </div>
          </div>
          
          <div class="cake-layer layer-bottom"></div>
        </div>
        <p class="cake-note">${data.text || ""}</p>
      </div>
    `;
    return article;
  }

  const sideClass = index % 2 === 0 ? "left" : "right";
  article.classList.add(`landscape-${sideClass}`);
  article.style.setProperty("--photo-fit", data.fit || "contain");
  article.innerHTML = `
    <div class="page-decor">${createDecorations(index)}</div>
    <div class="photo-zone">
      <img src="${data.image}" alt="${data.alt || `第 ${index + 1} 頁照片`}" />
    </div>
    <div class="content content-card">
      <h2>${data.title}</h2>
      <p>${data.text}</p>
    </div>
  `;
  const img = article.querySelector("img");
  const applyLayout = () => {
    const ratio = img.naturalWidth / img.naturalHeight;
    const isPortrait = Number.isFinite(ratio) && ratio < 0.9;
    article.classList.remove(
      "portrait-left",
      "portrait-right",
      "landscape-left",
      "landscape-right"
    );
    article.classList.add(`${isPortrait ? "portrait" : "landscape"}-${sideClass}`);
    article.style.setProperty("--photo-fit", isPortrait ? "contain" : data.fit || "contain");
  };
  if (img.complete) {
    applyLayout();
  } else {
    img.addEventListener("load", applyLayout, { once: true });
  }

  return article;
}

function initBook() {
  pagesData.forEach((data, index) => {
    const page = createPage(data, index);
    if (index === 0) {
      page.classList.add("is-active");
    }
    book.appendChild(page);
    pages.push(page);
  });
}

function renderPage() {
  pages.forEach((page, index) => {
    page.classList.toggle("is-active", index === currentPage);
  });

  pageInfo.textContent = `${currentPage + 1} / ${pages.length}`;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

function loadTrack(index) {
  currentTrackIndex = (index + backgroundTracks.length) % backgroundTracks.length;
  const track = backgroundTracks[currentTrackIndex];
  bgAudio.src = track.src;
}

function playMusic() {
  if (!bgAudio.src) {
    loadTrack(currentTrackIndex);
  }
  bgAudio
    .play()
    .then(() => {
      hasMusicStarted = true;
    })
    .catch(() => {
      // Browser may block autoplay before user interaction.
    });
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage -= 1;
    renderPage();
  }
});

bgAudio.addEventListener("ended", () => {
  loadTrack(currentTrackIndex + 1);
  playMusic();
});

document.addEventListener(
  "pointerdown",
  () => {
    if (!hasMusicStarted) {
      playMusic();
    }
  },
  { once: true }
);

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    renderPage();
  }
});

document.addEventListener("keydown", (event) => {
  if (!isBookReady) {
    return;
  }

  if (event.key === "ArrowLeft") {
    prevBtn.click();
  }
  if (event.key === "ArrowRight") {
    nextBtn.click();
  }
});

function openGift() {
  openGiftBtn.disabled = true;
  openGiftBtn.classList.add("is-tension");

  window.setTimeout(() => {
    openGiftBtn.classList.remove("is-tension");
    openGiftBtn.classList.add("is-pulling");
  }, 240);

  window.setTimeout(() => {
    openGiftBtn.classList.add("opened");
  }, 980);

  window.setTimeout(() => {
    giftScreen.classList.add("is-opening");
  }, 1420);

  window.setTimeout(() => {
    giftScreen.style.display = "none";
    mainPage.classList.remove("is-hidden");
    mainPage.classList.add("is-visible");
    isBookReady = true;
    renderPage();
    if (!bgAudio.src) {
      loadTrack(0);
    }
    playMusic();
  }, 2170);
}

openGiftBtn.addEventListener("click", openGift);

initBook();
loadTrack(0);
playMusic();

const pauseMusic = () => {
  if (bgAudio && !bgAudio.paused) {
    bgAudio.pause();
  }
};
const resumeMusic = () => {
  if (hasMusicStarted && bgAudio && bgAudio.paused) {
    bgAudio.play().catch(err => {
      console.log("瀏覽器阻擋了自動恢復播放", err);
    });
  }
};
document.addEventListener("visibilitychange", () => {
  if (document.hidden || document.visibilityState === 'hidden') {
    pauseMusic();
  } else {
    resumeMusic();
  }
});
window.addEventListener("pagehide", pauseMusic);
window.addEventListener("blur", pauseMusic);
window.addEventListener("focus", resumeMusic);
