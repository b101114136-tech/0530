// 在這裡直接修改每一頁內容（可自由增減頁數）
const pagesData = [
  {
    image: "./images/photo (1).jpg",
    alt: "迎新",
    title: "2023/9/11",
    text: "雖然這時候根本還沒在一起，但感覺每次要放照片的時候都要放一下迎新，不知道為什麼覺得迎新是很重要的一段時光，那時候我們還很稚嫩，笑起來跟笨蛋一樣嘿嘿。",
  },
  {
    image: "./images/photo (2).jpg",
    alt: "月亮公車",
    title: "2023/9/24",
    text: "不知道你認不認得這裡，但這天是我跟你告白那天，去玩這裡我們就去四四南村了，這時候我還笑得出來，殊不知等下緊張得要死，但我真的很喜歡妳喔",
  },
  {
    image: "./images/photo (3).jpg",
    alt: "茶會",
    title: "2023/10/31",
    text: "一個很普通的茶會，但我們兩個的帽子很可愛，實在是不想放我們兩個笑得很像那張了，對著鏡子自拍的我們真的很可愛喔，很久沒看到你穿制服了嗚嗚。",
  },
  {
    image: "./images/photo (4).jpg",
    alt: "中山",
    title: "2023/11/24",
    text: "不知道哪一次在中山逛街，逛一逛累了就開始睡覺，你睡覺的樣子軟軟的超級可愛，那天還很多路人經過朝我們的方向拍照，應該是在拍燈，但我都超緊張怕是要把我們發到爆料公社。",
  },
  {
    image: "./images/photo (5).jpg",
    alt: "淡水",
    title: "2023/12/31",
    text: "張張一起去淡水玩，那天天氣很冷偷帶你的圍巾很爽，雖然我們還吃了草莓冰哈哈，那時候你的家管還超級嚴，看煙火看完就跑了，但那天很浪漫喔。",
  },
  {
    image: "./images/photo (6).jpg",
    alt: "鬼屋",
    title: "2024/2/8",
    text: "其實這天感覺沒什麼特別的，我也不記得為什麼會去鬼屋，但我記得我被嚇得半死一直抓著你哈哈，沒想到都過這麼久了啊。",
  },
  {
    image: "./images/photo (7).jpg",
    alt: "劍南山",
    title: "2024/4/7",
    text: "照片雖然黑到靠杯，但這天真的很有趣，一起搭摩天輪看霧濛濛的台北，臨時起意去爬山，下山還走了一個小密道，手機沒電差點消失在山上，跟你在一起真的很刺激很好玩。",
  },
   {
    image: "./images/photo (8).jpg",
    alt: "流音中心",
    title: "2024/5/18",
    text: "一起去流音中心玩的一天，看了很多很酷的東西，突然覺得那天我應該沒有銳評很多，其實還是滿有藝術品味的，有你陪著就一臉爽樣滿好笑的。",
  },
  {
    image: "./images/photo (9).jpg",
    alt: "拍貼機",
    title: "2024/8/2",
    text: "忘記這天為什麼很突然的穿制服了，但這張我們看起來很深情，不小心挑到一張我在偷聞你頭髮的了，你都偷偷勾引我啦。",
  },
  {
    image: "./images/photo (10).jpg",
    alt: "拼圖",
    title: "2025/1/22",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (11).jpg",
    alt: "直排輪",
    title: "2025/2/15",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (12).jpg",
    alt: "牽手看夕陽",
    title: "2025/6/3",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (13).jpg",
    alt: "煙火",
    title: "2025/6/4",
    fit: "cover",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (14).jpg",
    alt: "金廣",
    title: "2025/12/12",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (15).jpg",
    alt: "帥",
    title: "2025/12/12",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (16).jpg",
    alt: "笨笨",
    title: "2026/1/3",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (17).jpg",
    alt: "六福村",
    title: "第六頁：我們的未來",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (18).jpg",
    alt: "基隆",
    title: "2026/1/16",
    text: "接下來的每一年，我都想繼續和妳一起慶祝生日、一起旅行、一起把喜歡的日子過成回憶。",
  },
  {
    image: "./images/photo (19).jpg",
    alt: "做蛋糕",
    title: "2026/3/25",
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
