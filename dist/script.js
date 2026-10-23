/**
 * পাতার পর পাতা (Bengali Book Review Website)
 * Modern Vintage Literary Interactive Experience
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA REPOSITORY: BOOKS & REVIEWS
  // ==========================================
  const booksData = [
    {
      id: 1,
      title: "পথের পাঁচালী",
      author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      rating: 4.8,
      cover: "assets/images/cover_pather_panchali.jpg",
      genre: "উপন্যাস / প্রকৃতি সাহিত্য",
      publishYear: "১৯২৯",
      shortSnippet: "এই বই শুধু একটি গল্প নয়, এটা একটি জীবনকে দেখার একটি অন্যরকম দৃষ্টিভঙ্গি।",
      quote: "“পথের পাঁচালী কেবল পল্লীজীবনের আলেখ্য নয়, অনন্তকালের মানুষের জীবনযাত্রার এক অনন্ত কাব্য।”",
      fullReview: "বিভূতিভূষণ বন্দ্যোপাধ্যায়ের অমর সৃষ্টি 'পথের পাঁচালী' বাংলার পল্লীপ্রকৃতি ও মানুষের সহজ-সরল জীবনধারার এক অনবদ্য দলিল। নিশ্চিন্দিপুর গ্রামের অপু ও দুর্গার শৈশব, তাদের কাশফুলের বনে ট্রেনের ধোঁয়া দেখার বিস্ময়, আর দারিদ্র্যের মাঝেও জীবনের অপার আনন্দ আমাদের হৃদয়কে গভীরভাবে স্পর্শ করে। এই উপন্যাস কেবল নিছক কাহিনী নয়, মানুষের আবহমান অস্তিত্বের এক গভীর দার্শনিক অন্বেষণ।"
    },
    {
      id: 2,
      title: "শেষের কবিতা",
      author: "রবীন্দ্রনাথ ঠাকুর",
      rating: 4.6,
      cover: "assets/images/cover_sesher_kobita.jpg",
      genre: "উপন্যাস / রোমান্টিক দর্শন",
      publishYear: "১৯২৮",
      shortSnippet: "প্রেম, দর্শন আর জীবনের এক গভীর উপলব্ধি— শেষের কবিতা তারই সাক্ষী।",
      quote: "“ভালোবাসা পাত্র বিশেষে নয়, ভালোবাসা আত্মার ধর্ম।”",
      fullReview: "রবীন্দ্রনাথ ঠাকুরের রচিত 'শেষের কবিতা' বাংলা সাহিত্যের অন্যতম আধুনিক ও বুদ্ধিদীপ্ত প্রেমকাহিনী। শিলং-এর অপরূপ পাহাড়ি পরিবেশে অমিত রায় এবং লাবণ্যের রোমান্টিক সাক্ষাৎ ও তাদের গভীর বুদ্ধিবৃত্তিক কথোপকথন উপন্যাসটিকে দিয়েছে বিশেষ মাত্রা। বিবাহ ও প্রেমের মধ্যকার চিরন্তন টানাপোড়েন এবং আদর্শ ভালোবাসার ধারণাকে রবীন্দ্রনাথ এখানে অপূর্ব কাব্যিক ভাষায় তুলে ধরেছেন।"
    },
    {
      id: 3,
      title: "গোরা",
      author: "রবীন্দ্রনাথ ঠাকুর",
      rating: 4.5,
      cover: "assets/images/cover_pora.jpg",
      genre: "উপন্যাস / সামাজিক ও রাজনৈতিক",
      publishYear: "১৯১০",
      shortSnippet: "পরিচয়ের সন্ধানে এক তরুণের যাত্রা, যা আমাদের সমাজ ও চিন্তার নতুন দরজা খুলে দেয়।",
      quote: "“আজ আমি সত্য সত্যই ভারতবর্ষীয়। আমার মধ্যে কোনো জাতের বিরোধ নেই।”",
      fullReview: "রবীন্দ্রনাথের সর্বশ্রেষ্ঠ রাজনৈতিক ও সামাজিক উপন্যাস 'গোরা'। উনিশ শতকের শেষার্ধের উত্তাল সামাজিক রূপান্তর ও জাতীয়তাবাদের পটভূমিতে রচিত এই গ্রন্থে গোরা চরিত্রটির আত্মপরিচয়ের সন্ধান সার্বজনীন মানবতার বার্তা দেয়। জাত-ধর্ম-বর্ণের সংকীর্ণ গণ্ডি পেরিয়ে এক উদার মানবিক সমাজের যে স্বপ্ন রবীন্দ্রনাথ দেখেছেন, তা আজও সমান প্রাসঙ্গিক ও অনুপ্রেরণাদায়ক।"
    },
    {
      id: 4,
      title: "দেবদাস",
      author: "শরৎচন্দ্র চট্টোপাধ্যায়",
      rating: 4.4,
      cover: "assets/images/cover_devdas.jpg",
      genre: "উপন্যাস / চিরায়ত ক্লাসিক",
      publishYear: "১৯১৭",
      shortSnippet: "অপূর্ণ প্রেমের এক চিরন্তন কাহিনী, যা আজও সমানভাবে হৃদয় ছুঁয়ে যায়।",
      quote: "“ভুল করিবার অধিকার মানুষের আছে, কিন্তু তাহাকে সংশোধনের সুযোগও দেওয়া কর্তব্য।”",
      fullReview: "শরৎচন্দ্র চট্টোপাধ্যায়ের কালজয়ী ট্র্যাজিক উপন্যাস 'দেবদাস'। দেবদাস, পার্বতী (পারু) এবং চন্দ্রমুখীর ত্রিকোণ আবেগের টানাপোড়েন শতাব্দী পেরিয়েও পাঠককে কাঁদিয়ে আসছে। ব্যর্থ প্রেম, সামাজিক কুসংস্কার ও আত্মধ্বংসের করুণ পরিণতির অসাধারণ চিত্রায়ন এই বইটিকে বাংলা সাহিত্যের অন্যতম প্রভাবশালী উপন্যাসে পরিণত করেছে।"
    }
  ];

  // ==========================================
  // 2. HEADER SCROLL & MOBILE NAVIGATION
  // ==========================================
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header background transition
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.classList.toggle('open');
      mobileNavDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileNavDrawer.setAttribute('aria-hidden', !isOpen);
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('open');
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileNavDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Active navigation highlight on section scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // ==========================================
  // 3. ATMOSPHERIC DUST PARTICLES IN HERO
  // ==========================================
  const canvas = document.getElementById('heroParticles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.3) * 0.45;
        this.opacity = Math.random() * 0.55 + 0.15;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.fadeDirection = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        this.opacity += this.fadeSpeed * this.fadeDirection;
        if (this.opacity >= 0.7) this.fadeDirection = -1;
        if (this.opacity <= 0.1) this.fadeDirection = 1;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 182, 109, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(240, 195, 110, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(Math.min(canvas.width / 18, 55));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    initParticles();
    animateParticles();
  }

  // ==========================================
  // 4. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ==========================================
  // ==========================================
  // 5. THREEUI 3D BOOK SHOWCASE CONTROLLER
  // ==========================================
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const reviewsTrack = document.getElementById('reviewsTrack');
  const currentBookNum = document.getElementById('currentBookNum');
  const totalBooksNum = document.getElementById('totalBooksNum');
  const viewModeDeckBtn = document.getElementById('viewModeDeckBtn');
  const viewModeShelfBtn = document.getElementById('viewModeShelfBtn');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const audioIcon = document.getElementById('audioIcon');

  // Dossier elements
  const dossierTitle = document.getElementById('dossierTitle');
  const dossierAuthor = document.getElementById('dossierAuthor');
  const dossierGenre = document.getElementById('dossierGenre');
  const dossierYear = document.getElementById('dossierYear');
  const dossierStars = document.getElementById('dossierStars');
  const dossierScore = document.getElementById('dossierScore');
  const dossierQuote = document.getElementById('dossierQuote');
  const dossierSnippet = document.getElementById('dossierSnippet');
  const dossierReadBtn = document.getElementById('dossierReadBtn');
  const dossierSpinBtn = document.getElementById('dossierSpinBtn');
  const dossierCoverBtn = document.getElementById('dossierCoverBtn');
  const dossierBookmarkBtn = document.getElementById('dossierBookmarkBtn');
  const dossierShareBtn = document.getElementById('dossierShareBtn');
  const showcaseDots = document.querySelectorAll('.showcase-dot');
  const bookCards = document.querySelectorAll('.book-3d-card');

  let activeBookIndex = 0;
  const totalBooks = booksData.length;
  const bengaliNumerals = ['০১', '০২', '০৩', '০৪'];
  let audioEnabled = true;

  // Web Audio Physical Book Sounds (Synthesized Page Flutter & Tap)
  const playBookSound = (type = 'flutter') => {
    if (!audioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const audioCtx = new AudioCtx();
      
      if (type === 'flutter') {
        const bufferSize = audioCtx.sampleRate * 0.14;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(650, audioCtx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.14);
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        noise.start();
      } else if (type === 'tap') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.09);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.09);
      }
    } catch (e) {
      // Audio policy safe
    }
  };

  // Sound toggle button
  if (audioToggleBtn && audioIcon) {
    audioToggleBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      if (audioEnabled) {
        audioIcon.textContent = '🔊';
        audioToggleBtn.classList.remove('muted');
        showToast('শব্দ প্রভাব চালু হয়েছে');
        playBookSound('tap');
      } else {
        audioIcon.textContent = '🔇';
        audioToggleBtn.classList.add('muted');
        showToast('শব্দ প্রভাব নিঃশব্দ করা হয়েছে');
      }
    });
  }

  // Update Active Book Showcase
  const setActiveBook = (newIndex, playSfx = true) => {
    activeBookIndex = (newIndex + totalBooks) % totalBooks;
    const currentBook = booksData[activeBookIndex];

    // 1. Position 3D deck cards
    bookCards.forEach((card, idx) => {
      const pos = idx - activeBookIndex;
      card.setAttribute('data-deck-pos', pos);
      
      const volume = card.querySelector('.book-3d-volume');
      if (volume) {
        volume.classList.remove('spinning-3d', 'cover-open');
        volume.style.transform = '';
      }

      if (pos === 0) {
        card.classList.add('active');
        card.setAttribute('aria-selected', 'true');
      } else {
        card.classList.remove('active');
        card.setAttribute('aria-selected', 'false');
      }
    });

    // 2. Update counter
    if (currentBookNum) currentBookNum.textContent = bengaliNumerals[activeBookIndex] || '০১';
    if (totalBooksNum) totalBooksNum.textContent = bengaliNumerals[totalBooks - 1] || '০৪';

    // 3. Update Dossier content with smooth fade
    const dossierPanel = document.getElementById('showcaseDossierPanel');
    if (dossierPanel) {
      dossierPanel.style.opacity = '0.7';
      setTimeout(() => {
        if (dossierTitle) dossierTitle.textContent = currentBook.title;
        if (dossierAuthor) dossierAuthor.textContent = currentBook.author;
        if (dossierGenre) dossierGenre.textContent = currentBook.genre;
        if (dossierYear) dossierYear.textContent = `প্রকাশকাল: ${currentBook.publishYear}`;
        if (dossierScore) dossierScore.textContent = `${currentBook.rating} / ৫.০`;
        if (dossierQuote) dossierQuote.textContent = currentBook.quote;
        if (dossierSnippet) dossierSnippet.textContent = currentBook.shortSnippet;
        dossierPanel.style.opacity = '1';
      }, 150);
    }

    // 4. Update dots
    showcaseDots.forEach((dot, idx) => {
      if (idx === activeBookIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });

    // 5. Sound effect
    if (playSfx) playBookSound('flutter');
  };

  // Navigation handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      setActiveBook(activeBookIndex - 1);
      showToast(`পূর্ববর্তী গ্রন্থ: “${booksData[activeBookIndex].title}”`);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      setActiveBook(activeBookIndex + 1);
      showToast(`পরবর্তী গ্রন্থ: “${booksData[activeBookIndex].title}”`);
    });
  }

  // Dots click handler
  showcaseDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = Number(dot.getAttribute('data-index'));
      setActiveBook(idx);
    });
  });

  // View Mode Switcher (3D Deck vs Shelf Grid)
  if (viewModeDeckBtn && viewModeShelfBtn && reviewsTrack) {
    viewModeDeckBtn.addEventListener('click', () => {
      reviewsTrack.classList.remove('mode-shelf');
      reviewsTrack.classList.add('mode-deck');
      viewModeDeckBtn.classList.add('active');
      viewModeShelfBtn.classList.remove('active');
      playBookSound('tap');
      showToast('3D স্পেশিয়াল ডেক ভিউ সক্রিয় হয়েছে');
    });

    viewModeShelfBtn.addEventListener('click', () => {
      reviewsTrack.classList.remove('mode-deck');
      reviewsTrack.classList.add('mode-shelf');
      viewModeShelfBtn.classList.add('active');
      viewModeDeckBtn.classList.remove('active');
      playBookSound('tap');
      showToast('বুকশেলফ গ্রিড ভিউ সক্রিয় হয়েছে');
    });
  }

  // Mobile Touch Swipe Gesture Support (Smooth thumb navigation)
  if (reviewsTrack) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    reviewsTrack.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    }, { passive: true });

    reviewsTrack.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const elapsed = Date.now() - touchStartTime;

      // Only trigger if horizontal swipe is intentional and distinct from vertical scroll
      if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.15 && elapsed < 650) {
        if (diffX < 0) {
          // Swiped Left -> Next Book
          setActiveBook(activeBookIndex + 1);
          showToast(`পরবর্তী গ্রন্থ: “${booksData[activeBookIndex].title}”`);
        } else {
          // Swiped Right -> Previous Book
          setActiveBook(activeBookIndex - 1);
          showToast(`পূর্ববর্তী গ্রন্থ: “${booksData[activeBookIndex].title}”`);
        }
      }
    }, { passive: true });
  }

  // Dossier Action Buttons
  if (dossierReadBtn) {
    dossierReadBtn.addEventListener('click', () => {
      const activeBook = booksData[activeBookIndex];
      if (activeBook) openBookModal(activeBook.id);
    });
  }

  if (dossierSpinBtn) {
    dossierSpinBtn.addEventListener('click', () => {
      const activeCard = bookCards[activeBookIndex];
      if (activeCard) {
        const volume = activeCard.querySelector('.book-3d-volume');
        if (volume) {
          volume.classList.remove('spinning-3d');
          void volume.offsetWidth; // Force reflow
          volume.classList.add('spinning-3d');
          playBookSound('flutter');
          showToast(`“${booksData[activeBookIndex].title}” 3D ৩৬০° ভিউ চালু হয়েছে`);
          setTimeout(() => volume.classList.remove('spinning-3d'), 4000);
        }
      }
    });
  }

  if (dossierCoverBtn) {
    dossierCoverBtn.addEventListener('click', () => {
      const activeCard = bookCards[activeBookIndex];
      if (activeCard) {
        const volume = activeCard.querySelector('.book-3d-volume');
        if (volume) {
          const isOpen = volume.classList.toggle('cover-open');
          playBookSound('flutter');
          showToast(isOpen ? 'কভার উন্মুক্ত করা হয়েছে' : 'কভার বন্ধ করা হয়েছে');
        }
      }
    });
  }

  if (dossierBookmarkBtn) {
    dossierBookmarkBtn.addEventListener('click', () => {
      const activeBook = booksData[activeBookIndex];
      if (activeBook) window.saveBookmark(activeBook.title);
    });
  }

  if (dossierShareBtn) {
    dossierShareBtn.addEventListener('click', () => {
      const activeBook = booksData[activeBookIndex];
      if (activeBook) window.shareBook(activeBook.title);
    });
  }

  // Flip buttons inside card preview
  document.querySelectorAll('.card-flip-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.book-3d-card');
      if (card) {
        const volume = card.querySelector('.book-3d-volume');
        if (volume) {
          volume.classList.toggle('cover-open');
          playBookSound('flutter');
        }
      }
    });
  });

  // Read buttons inside card
  document.querySelectorAll('.card-read-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const bookId = btn.getAttribute('data-book');
      if (bookId) openBookModal(bookId);
    });
  });

  // Mouse Tracking 3D Tilt Physics & Specular Glare (ThreeUI procedural tilt)
  bookCards.forEach((card, idx) => {
    const volume = card.querySelector('.book-3d-volume');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width;
      const normY = (e.clientY - rect.top) / rect.height;

      // Set dynamic specular glare position
      card.style.setProperty('--mouse-x', `${(normX * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${(normY * 100).toFixed(1)}%`);

      if (!volume || volume.classList.contains('spinning-3d') || volume.classList.contains('cover-open')) return;

      const rotY = (normX - 0.5) * 26;
      const rotX = -(normY - 0.5) * 22;

      if (reviewsTrack.classList.contains('mode-deck') && idx === activeBookIndex) {
        volume.style.transform = `translateZ(75px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.06)`;
      } else if (reviewsTrack.classList.contains('mode-shelf')) {
        volume.style.transform = `translateZ(35px) translateY(-14px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '40%');
      if (volume && !volume.classList.contains('spinning-3d') && !volume.classList.contains('cover-open')) {
        volume.style.transform = '';
      }
    });

    // Clicking card in deck mode
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-read-btn') || e.target.closest('.card-flip-btn')) return;
      if (reviewsTrack.classList.contains('mode-deck')) {
        if (idx !== activeBookIndex) {
          setActiveBook(idx);
        } else {
          openBookModal(card.getAttribute('data-book-id'));
        }
      } else {
        openBookModal(card.getAttribute('data-book-id'));
      }
    });
  });

  // Touch Swipe on mobile
  if (reviewsTrack) {
    let touchStartX = 0;
    let touchEndX = 0;

    reviewsTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    reviewsTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          setActiveBook(activeBookIndex + 1);
        } else {
          setActiveBook(activeBookIndex - 1);
        }
      }
    }, { passive: true });
  }

  // Keyboard navigation when user is scrolling or viewing section
  window.addEventListener('keydown', (e) => {
    const featuredSec = document.getElementById('featuredReviews');
    if (!featuredSec) return;
    const rect = featuredSec.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    
    // Don't capture keys if search modal or details modal is open
    const searchModal = document.getElementById('searchModal');
    const bookModal = document.getElementById('bookModal');
    if ((searchModal && searchModal.classList.contains('active')) || (bookModal && bookModal.classList.contains('active'))) {
      return;
    }

    if (inView) {
      if (e.key === 'ArrowRight') {
        setActiveBook(activeBookIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        setActiveBook(activeBookIndex - 1);
      }
    }
  });

  // Initialize first active book
  setActiveBook(0, false);

  // ==========================================
  // 6. BOOK DETAILS MODAL
  // ==========================================
  const bookModal = document.getElementById('bookModal');
  const bookModalBackdrop = document.getElementById('bookModalBackdrop');
  const bookModalClose = document.getElementById('bookModalClose');
  const bookModalBody = document.getElementById('bookModalBody');
  const reviewCards = document.querySelectorAll('.review-card');

  const openBookModal = (bookId) => {
    const book = booksData.find(b => b.id === Number(bookId));
    if (!book || !bookModal || !bookModalBody) return;

    bookModalBody.innerHTML = `
      <div class="book-modal-grid">
        <img src="${book.cover}" alt="${book.title} প্রচ্ছদ" class="modal-book-cover">
        <div class="modal-book-info">
          <h2 class="modal-book-title">${book.title}</h2>
          <p class="modal-book-author">লেখক: ${book.author}</p>
          <div class="star-rating" style="margin-bottom: 8px;">
            <div class="stars" style="color: var(--star-gold);">★★★★★</div>
            <span class="rating-num">${book.rating} / 5.0</span>
            <span style="color: var(--text-dark-muted); font-size: 0.85rem; margin-left: 8px;">(${book.genre})</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-dark-muted);">প্রকাশকাল: ${book.publishYear}</p>
          
          <div class="modal-quote-highlight">
            ${book.quote}
          </div>

          <h4 style="font-family: var(--font-bengali-serif); font-size: 1.15rem; margin-top: 14px; color: var(--text-dark-primary);">পূর্ণ পর্যালোচনা:</h4>
          <p class="modal-full-review">
            ${book.fullReview}
          </p>

          <div style="margin-top: 24px; display: flex; gap: 14px;">
            <button class="btn-primary" style="padding: 10px 24px; font-size: 0.92rem;" onclick="window.saveBookmark('${book.title}')">
              🔖 বুকমার্কে রাখুন
            </button>
            <button style="padding: 10px 20px; border: 1px solid var(--gold-dark); border-radius: var(--border-radius-pill); font-family: var(--font-bengali-sans); font-size: 0.92rem; color: var(--gold-dark);" onclick="window.shareBook('${book.title}')">
              শেয়ার করুন
            </button>
          </div>
        </div>
      </div>
    `;

    bookModal.classList.add('active');
    bookModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeBookModal = () => {
    if (!bookModal) return;
    bookModal.classList.remove('active');
    bookModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  reviewCards.forEach(card => {
    // Avoid re-binding for ThreeUI showcase cards as they have their own 3D click handling
    if (card.closest('.threeui-bestsellers-showcase')) return;
    card.addEventListener('click', (e) => {
      const bookId = card.getAttribute('data-book-id');
      openBookModal(bookId);
    });
  });

  if (bookModalClose) bookModalClose.addEventListener('click', closeBookModal);
  if (bookModalBackdrop) bookModalBackdrop.addEventListener('click', closeBookModal);

  // Global helper functions
  window.saveBookmark = (title) => {
    if (!window.savedBookmarks) window.savedBookmarks = new Set();
    const isSaved = window.savedBookmarks.has(title);
    if (isSaved) {
      window.savedBookmarks.delete(title);
      showToast(`“${title}” বুকমার্ক থেকে সরানো হয়েছে`);
    } else {
      window.savedBookmarks.add(title);
      showToast(`“${title}” আপনার পছন্দের তালিকায় যুক্ত হয়েছে!`);
    }
  };

  window.shareBook = (title) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`“${title}”-এর লিংক কপি করা হয়েছে!`);
    } else {
      showToast(`“${title}” সাহিত্য বন্ধুদের সাথে শেয়ার করুন!`);
    }
  };

  // 7. SEARCH MODAL & LIVE SEARCH
  // ==========================================
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const searchModalBackdrop = document.getElementById('searchModalBackdrop');
  const searchModalClose = document.getElementById('searchModalClose');
  const siteSearchInput = document.getElementById('siteSearchInput');
  const searchResultsList = document.getElementById('searchResultsList');

  const openSearch = () => {
    if (!searchModal) return;
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (siteSearchInput) siteSearchInput.focus();
    }, 100);
  };

  const closeSearch = () => {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (siteSearchInput) siteSearchInput.value = '';
    if (searchResultsList) {
      searchResultsList.innerHTML = `<p class="search-hint">উদাহরণ: পথের পাঁচালী, শেষের কবিতা, গোরা, বিভূতিভূষণ, রবীন্দ্রনাথ...</p>`;
    }
  };

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchModalClose) searchModalClose.addEventListener('click', closeSearch);
  if (searchModalBackdrop) searchModalBackdrop.addEventListener('click', closeSearch);

  // Live filter books in search
  if (siteSearchInput && searchResultsList) {
    siteSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResultsList.innerHTML = `<p class="search-hint">বই অথবা লেখকের নাম দিয়ে খুঁজুন...</p>`;
        return;
      }

      const filtered = booksData.filter(b => 
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.genre.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        searchResultsList.innerHTML = `<p class="search-hint" style="color: #dfb66d;">কোনো বই পাওয়া যায়নি। অন্য কোনো নাম দিয়ে চেষ্টা করুন।</p>`;
        return;
      }

      searchResultsList.innerHTML = filtered.map(b => `
        <div class="search-result-item" data-id="${b.id}">
          <img src="${b.cover}" alt="${b.title}" class="search-result-thumb">
          <div>
            <div class="search-result-title">${b.title}</div>
            <div class="search-result-author">${b.author} • ⭐ ${b.rating}</div>
          </div>
        </div>
      `).join('');

      // Add click to search items
      searchResultsList.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-id');
          closeSearch();
          openBookModal(id);
        });
      });
    });
  }

  // ==========================================
  // 8. USER PROFILE BUTTON INTERACTION
  // ==========================================
  const userBtn = document.getElementById('userBtn');
  if (userBtn) {
    userBtn.addEventListener('click', () => {
      showToast("নমস্কার! সাহিত্য আঙিনায় স্বাগতম। আপনার প্রোফাইল ফিচার শীঘ্রই আসছে।");
    });
  }

  // ==========================================
  // 9. CATEGORY CARDS INTERACTION
  // ==========================================
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-category');
      showToast(`“${cat}” বিভাগের বাছাইকৃত বইগুলো দেখানো হচ্ছে`);
      
      const target = document.getElementById('featuredReviews');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 10. NEWSLETTER FORM SUBMISSION
  // ==========================================
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm && newsletterEmail && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        newsletterFeedback.className = 'form-feedback error';
        newsletterFeedback.textContent = 'দয়া করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।';
        return;
      }

      newsletterFeedback.className = 'form-feedback success';
      newsletterFeedback.textContent = 'ধন্যবাদ! আপনি সফলভাবে আমাদের সাহিত্য তালিকায় যুক্ত হয়েছেন।';
      showToast('অভিনন্দন! নতুন বইয়ের রিভিউ আপনার ইনবক্সে পাঠানো হবে।');
      newsletterEmail.value = '';

      setTimeout(() => {
        newsletterFeedback.textContent = '';
      }, 5000);
    });
  }

  // ==========================================
  // 11. ESCAPE KEY MODAL CLOSER
  // ==========================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookModal();
      closeSearch();
    }
  });

  // ==========================================
  // 12. TOAST NOTIFICATION HELPER
  // ==========================================
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--gold-primary); font-size: 1.1rem;">📖</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 3500);
  }

});
