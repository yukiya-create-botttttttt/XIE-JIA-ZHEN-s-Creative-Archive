/**
 * ==========================================================================
 * XIE-JIA-ZHEN's Creative Archive | 創作途中 A Journey of Creativity
 * 核心互動腳本 (JavaScript)
 * 適合初學者學習與閱讀：包含漢堡選單、平滑滾動、視差淡入、作品彈窗與示範表單
 * ==========================================================================
 */

// 確保 DOM 樹狀結構完全載入後再執行
document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. 五大作品詳細資料庫 (Selected Works Data Dictionary)
  // ------------------------------------------------------------------------
  const WORKS_DATABASE = {
    'work-01': {
      index: 'WORK 01',
      titleEn: 'AI & Future Technology',
      titleZh: 'AI 與未來科技繪本',
      category: '角色設計、繪本企劃',
      image: 'images/works/work01-ai-book.svg',
      summary: '以人工智慧與人類的關係為主題，透過人形 AI 角色與故事設計，探索未來科技與人類情感之間的連結。',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Procreate'],
      purpose: '透過溫暖的情感敘事，軟化大眾對冰冷人工智慧的刻板印象。在視覺上嘗試結合流暢的科技幾何線條與手繪水彩質地，探討在高度自動化的未來，人與人、人與造物之間不可替代的情感溫度。',
      reflection: '在此次專案中學習到如何從世界觀概念發想、角色性格塑造到繪本分頁構圖。最大的收穫是掌握了不同角色造型語言對讀者心理的引導效果，並提升了數位手繪完稿的細膩度。'
    },
    'work-02': {
      index: 'WORK 02',
      titleEn: 'All Beauty Theater',
      titleZh: '全美戲院動畫短片企劃',
      category: '動畫、影像敘事',
      image: 'images/works/work02-theater.svg',
      summary: '以台南全美戲院為背景，透過祖孫回憶、手繪電影看板與時代變遷，呈現傳統手繪藝術的價值。',
      tools: ['Adobe After Effects', 'Adobe Premiere Pro', 'Photoshop'],
      purpose: '記錄台南二輪戲院獨有的手繪看板文化。藉由老畫師一筆一畫調色作畫的雙手，與小孫子好奇探索的視角，傳遞傳統技藝在數位時代依然散發的無可取代的生命力。',
      reflection: '深入練習了鏡頭語言、場景美術設定以及動畫分鏡腳本（Storyboard）繪製。體會到音效節奏與畫面過渡對情緒堆疊的重要性，也更懂得如何透過光影變化營造懷舊年代感。'
    },
    'work-03': {
      index: 'WORK 03',
      titleEn: 'Narrative Photography',
      titleZh: '日常中的故事',
      category: '敘事攝影',
      image: 'images/works/work03.png',
      summary: '從日常照片出發，觀察畫面中的人物、物件與空間，透過不同照片的安排發展故事。',
      tools: ['Fujifilm 數位相機', 'Adobe Lightroom', 'Photoshop'],
      purpose: '捕捉生活中未經刻意排演的真實瞬間。透過對街角自然光影、行人匆忙擦肩與生活物件質感的細緻凝視，將零散的定格畫面剪輯重組為具有連續故事感的攝影散文。',
      reflection: '培養了對周遭空間的敏銳觀察力（Observation）。學會不再只是單純按下快門，而是先思考畫面構圖的主次、色彩冷暖對比，以及組圖之間的前後因果敘事關係。'
    },
    'work-04': {
      index: 'WORK 04',
      titleEn: 'Enchanted Museum',
      titleZh: '魔法博物館',
      category: 'Unity・3D 互動場景',
      image: 'images/works/work04-museum.png',
      video: 'images/works/work04.mp4', // 影片路徑：work04.mp4
      summary: '以魔法博物館為概念，運用 Unity 建構虛擬探索空間，結合場景設計、角色移動與動畫。',
      tools: ['Unity 3D', 'Blender', 'C# 基礎腳本'],
      purpose: '跳脫傳統平面展示框架，打造一個讓訪客能自由穿梭的沈浸式三維互動空間。探索遊戲引擎在數位展覽、虛擬導覽與空間互動敘事上的應用潛力。',
      reflection: '初次體驗從 Blender 建模、拆 UV、上材質，到匯入 Unity 烘焙燈光、設定碰撞體（Collider）與角色控制器。雖然程式除錯過程具有挑戰性，但親眼看見自己設計的立體空間被走動探索時充滿成就感。'
    },
    'work-05': {
      index: 'WORK 05',
      titleEn: 'Tainan Beef Soup Website',
      titleZh: '台南牛肉湯推廣網站',
      category: '網頁設計、視覺設計',
      image: 'images/works/work05.png',
      link: 'https://readdy.cc/preview/84267087-00f4-49ea-9cd8-51de15a2c6ef/11259928/event-checkin',
      summary: '以台南牛肉湯文化與路跑活動為主題，規劃網站主視覺及延伸宣傳設計。',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
      purpose: '結合在地代表性美食與晨間路跑健康概念，打破傳統官方宣傳網站的制式感。透過富有溫度的插畫風格、動態版面編排與直覺的操作動線，吸引年輕族群參與活動。',
      reflection: '實際實踐了響應式網頁設計（RWD），了解不同裝置螢幕下網格斷點的配置原則。同時深化了對字體排版、色彩對比與微互動反饋在 UI/UX 使用者體驗中的重要理解。'
    }
  };

  // ------------------------------------------------------------------------
  // 2. 導覽列與漢堡選單 (Navigation & Mobile Menu)
  // ------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // 監聽滾動以調整 Header 樣式
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 手機版漢堡選單開關
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        navMenu.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('is-open');
        menuToggle.classList.add('is-active');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // 點擊任一導覽連結後自動收合手機選單
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. 滾動中標示目前所在區塊 (Active Section Observer)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const sectionObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // 視窗中段為判斷依據
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href').replace('#', '');
          if (href === currentId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // ------------------------------------------------------------------------
  // 4. 滾動元素逐一淡入動畫 (Scroll Reveal Animation)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // 觸發後即停止監聽該元素以確保效能
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ------------------------------------------------------------------------
  // 5. 作品詳細彈窗視窗 (Work Details Modal)
  // ------------------------------------------------------------------------
  const modalBackdrop = document.getElementById('work-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-dynamic-body');
  const workTriggers = document.querySelectorAll('[data-work-key]');

  function openWorkModal(workKey) {
    const data = WORKS_DATABASE[workKey];
    if (!data) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--color-orange); background: var(--color-orange-soft); padding: 4px 10px; border-radius: 4px; display: inline-block; margin-bottom: 6px;">
          ${data.index} ✦ ${data.category}
        </span>
        <h2 style="font-family: var(--font-display); font-size: 1.85rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 2px;">
          ${data.titleZh}
        </h2>
        <p style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--color-text-muted);">
          ${data.titleEn}
        </p>
      </div>

      ${data.video ? `
      <!-- 作品展示影片播放器 (支援 MP4 / WebM，預留檔案：${data.video}) -->
      <div style="border-radius: 12px; overflow: hidden; border: 1.5px solid var(--color-sand); background: #1A1512; margin-bottom: 1.75rem;">
        <video id="modal-project-video" controls preload="metadata" poster="${data.image}" style="width: 100%; height: auto; max-height: 460px; display: block; margin: 0 auto; background: #000;">
          <source src="${data.video}" type="video/mp4">
          <source src="${data.video.replace('.mp4', '.webm')}" type="video/webm">
          您的瀏覽器不支援 HTML5 影片播放。
        </video>
        <div style="padding: 10px 16px; background: var(--color-cream-alt); font-size: 0.82rem; font-family: var(--font-mono); color: var(--color-text-muted); border-top: 1px solid var(--color-sand); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span>🎬 3D 空間互動錄影展示</span>
          <span>影片檔案位置：<code>${data.video}</code></span>
        </div>
      </div>
      ` : `
      <!-- 作品大圖展示 -->
      <div style="border-radius: 12px; overflow: hidden; border: 1.5px solid var(--color-sand); background: var(--color-cream); margin-bottom: 1.75rem;">
        <img src="${data.image}" alt="${data.titleZh}" style="width: 100%; height: auto; display: block;">
      </div>
      `}

      ${data.link ? `
      <!-- 作品外部網站連結按鈕 -->
      <div style="margin-bottom: 1.75rem; text-align: left;">
        <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
          <span>🌐 前往實際作品網站 (Live Preview)</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
      ` : ''}

      <!-- 作品簡介 -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 8px;">
          📌 作品介紹
        </h4>
        <p style="font-size: 0.98rem; color: var(--color-text-body); line-height: 1.8;">
          ${data.summary}
        </p>
      </div>

      <!-- 使用工具 -->
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 8px;">
          🛠 使用工具
        </h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${data.tools.map(tool => `
            <span style="font-family: var(--font-mono); font-size: 0.8rem; background: var(--color-cream-alt); border: 1px solid var(--color-sand); padding: 4px 12px; border-radius: 6px; color: var(--color-text-main);">
              ${tool}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- 製作目的 -->
      <div style="margin-bottom: 1.5rem; background: var(--color-cream-alt); padding: 18px 20px; border-radius: 10px; border-left: 4px solid var(--color-orange);">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 6px;">
          💡 製作目的
        </h4>
        <p style="font-size: 0.95rem; color: var(--color-text-body); line-height: 1.75;">
          ${data.purpose}
        </p>
      </div>

      <!-- 學習心得 -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 8px;">
          🌱 學習心得與收穫
        </h4>
        <p style="font-size: 0.98rem; color: var(--color-text-body); line-height: 1.8;">
          ${data.reflection}
        </p>
      </div>

      <!-- 圖片替換提示說明 -->
      <div style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--color-text-muted); border-top: 1px dashed var(--color-sand); padding-top: 14px;">
        ※ 提示：此視窗支援點擊外部或右上角關閉。實際圖片檔案可置換至 <code>${data.image}</code> 路徑。
      </div>
    `;

    modalBackdrop.classList.add('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // 防止背後頁面滾動
  }

  function closeWorkModal() {
    // 關閉視窗時暫停所有正在播放的影片，防止背景持續發出聲音
    const modalVideos = modalBody.querySelectorAll('video');
    modalVideos.forEach(v => {
      v.pause();
    });

    modalBackdrop.classList.remove('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  workTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const workKey = trigger.getAttribute('data-work-key');
      openWorkModal(workKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeWorkModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeWorkModal();
      }
    });
  }

  // 按 ESC 鍵關閉彈窗
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeWorkModal();
    }
  });

  // ------------------------------------------------------------------------
  // 6. 返回頂端按鈕 (Back to Top Button)
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. 示範聯絡表單互動反饋 (Demo Contact Form Handling)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('demo-contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // 阻擋網頁重整
      const nameInput = document.getElementById('sender-name');
      const senderName = nameInput ? nameInput.value.trim() : '朋友';

      alert(`感謝 ${senderName || '您'} 的來信！\n\n📌 此為期中作業示範表單，並無串接真實後端資料庫。\n如需正式交流，歡迎使用預留的 Email 與社群連結進行聯絡！`);

      contactForm.reset();
    });
  }

  console.log('✅ XIE-JIA-ZHEN\'s Creative Archive 腳本已成功初始化！');
});

