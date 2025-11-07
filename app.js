// Application Data
const eventsData = [
	    {
        id: "9",
        title: "The Mystery Box Challenge (Meraz 6.0)",
        date: "2025-11-15",
        description: "Create something innovative from a random mix of sensors, microcontrollers, and conectors before times run out...",
        image: "images/mystery_box.jpg",
        category: "meraz event",
        status:"upcoming",
    },
    {
        id: "8",
        title: "The FPGA Design Contest (Meraz 6.0)",
        date: "2025-11-12",
        description: "A two-round battle of pure ruthless digital design (12th and 16th Nov, 2025) - a contest to be held during Meraz 6.0.",
        image: "images/FPGA_contest.jpg",
        category: "meraz event",
        status:"upcoming",
    },
        {
        id: 7,
        title: "Digital Design Fundamentals by ElectroMos Club",
        date: "2025-10-16",
        description: "A 2-day interactive and example-driven session meant to strengthen the key topics that are essential for the upcoming VLSI Workshop.", 
        image: "images/digital_design_session.png",
        category: "session",
        status: "upcoming",
    },
    {
        id: 6,
        title: "VLSI Workshop: From Digital Electronics to GDS Flow",
        date: "2025-10-25",  
        description: "A 2-day hands-on workshop covering fundamentals of digital electronics all the way to the VLSI GDS flow, with alumni interaction sessions.",
        image: "images/vlsiWorkshop.png", 
        category: "workshop",
        status: "upcoming",
    },
    {
        id: 5,
        title: "Intra IIT – IoT Practice Challenge",
        date: "2025-08-21",  
        description: "A practice challenge for the upcoming Inter-IIT Tech Meet, focusing on IoT problem statements.",
        image: "images/Intraiit.png", 
        category: "hackathon",
        status: "past",
    },
];

const projectsData = [
  {
    id: 6,
    title: "Home Security System with Weapon Detection",
    domain: "Computer Vision",
    description: "A Raspberry Pi 5-based system using YOLOv5 for real-time weapon detection with Gmail alerts and UPS backup for security applications.",
    image: "images/divit.png",
    name: "Divit Sharma",
    position: "Coordinator",
    techStack: ["Python", "YOLOv5", "OpenCV", "Raspberry Pi"],
    github: "",
    demo: ""
  },
  {
    id: 1,
    title: "AlgoSynthAI",
    domain: "Explainable AI",
    description: "Generates AI-driven videos that explain code logic step-by-step using Node.js, Tailwind CSS, and server-side rendering for learning platforms.",
    image: "images/AyanKundu.jpg",
    name: "Ayan Kundu",
    position: "Former Core Member",
    techStack: ["HTML", "Tailwind CSS", "Node.js", "Express.js"],
    github: "",
    demo: ""
  },
  {
    id: 4,
    title: "Smart Irrigation System",
    domain: "IoT",
    description: "Automated irrigation system using Arduino and moisture sensors to trigger a water pump and reduce manual intervention in farming.",
    image: "images/AnandM.jpg",
    name: "Sachidanand",
    position: "Core Member",
    techStack: ["Arduino", "Relay Module", "Soil Moisture Sensor"],
    github: "",
    demo: ""
  },
    {
    id: 2,
    title: "Lunar Digital Elevation Model",
    domain: "Robotics",
    description: "Used satellite imagery with QGIS and photogrammetry to generate high-resolution lunar DEMs and 3D models using scientific Python tools.",
    image: "images/AyanKundu.jpg",
    name: "Ayan Kundu",
    position: "Former Core Member",
    techStack: ["OpenCV", "NumPy", "SciPy", "Matlab", "QGIS"],
    github: "",
    demo: ""
  },
  {
    id: 5,
    title: "Offline LLM-Powered Agricultural Assistant on Raspberry Pi",
    domain: "AgriTech",
    description: "An offline AI assistant on Raspberry Pi offering localized farming advice using RAG, LLMs, and support for regional languages.",
    image: "images/logo.png",
    name: "Rohan Kumar Mishra",
    position: "Former Core Member",
    techStack: ["Raspberry Pi", "LLM", "RAG"],
    github: "https://github.com/electromos/gesture-drone",
    demo: "https://demo.electromos.com/gesture-drone"
  },
  {
    id: 3,
    title: "4-bit ALU from Logic Gates",
    domain: "VLSI",
    description: "Designed and implemented a 4-bit ALU on a breadboard using logic gates and control logic to perform basic arithmetic operations.",
    image: "images/Kushal.jpg",
    name: "Kushal",
    position: "Member",
    techStack: ["Computer Architecture"],
    github: "",
    demo: ""
  }
];


const highlightsData = [
	    {
        id: 12,
        title: "VLSI Workshop: From Digital Electronics to GDS Flow",
        description: "2-day workshop covering the fundamentals of VLSI with hands-on experience.",
        image: "images/vlsi_workshop.jpeg",
    },
    {
        id: 6,
        title: "Workshop on Bluetooth, WiFi and RF Module. ",
        description: "Students learned modules like Bluetooth, WiFi and RF",
        image: "images/moduleWshop.png"
    },
    {
        id: 7,
        title: "ELECTROLITE Event",
        description: "An Arduino based online game designing and simulating event",
        image:"images/electrolite.png"
    },
    {
        id: 8,
        title: "Circuit Disrupt",
        description: "Event in collaboration with Meraz 2022.",
        image: "images/circuitDisrupt.png"
    },
    {
        id: 9,
        title: "Summer of Electronics 1.0",
        description: "Summer filled with hands-on, future-focused learning adventures.",
        image: "images/soe1.0.png"
    },
    {
        id: 10,
        title: "F.I.N.D",
        description: "Frequency Identification & Noise Diminution event in collaboration with Meraz 2024.",
        image: "images/find.png"
    },
    {
        id: 11,
        title: "Summer of Electronics 2.0",
        description: "Summer sparked with circuits, creativity, and career-boosting skills!",
        image: "images/soe2.0.png"
    }
];

//articles data
let articlesData = [];

// Global Variables
let currentHighlight = 0;
let currentEvent = 0;
let currentArticle = 0;

let signalAnimationId;
let rcAnimationId;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
	document.addEventListener('DOMContentLoaded', function() {
  initializeApp();

 
});
// ─── Loader Progress Logic ─────────────────────────────────────────
(function() {
  const bar = document.getElementById('progress-bar');
  const loader = document.getElementById('loader');
  let progress = 0;

  // simulate incremental progress up to 90%
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.random() * 5;            // random step for realism
      bar.style.width = progress + '%';
    } else {
      clearInterval(interval);
    }
  }, 200);

  // on full load, jump to 100% and fade out
  window.addEventListener('load', () => {
    clearInterval(interval);
    bar.style.width = '100%';

    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 500);
    }, 300); // give users a brief moment to see 100%
  });
})();

// ──────────────────────────────────────────────────────────────────

});

function initializeApp() {
    setupEventListeners();
    renderEvents();
    renderProjects();
    renderHighlights();
    renderArticles();
    setupSimulations();
    setupScrollAnimations();
    setupCarousel();
}
function handleContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert("Thanks for your message! We'll get back to you soon.");
  document.getElementById("contact-form").reset();
}

// Event Listeners Setup
function setupEventListeners() {
    // Dark mode toggle
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Navigation links
//    document.querySelectorAll('.nav-link').forEach(link => {
//        link.addEventListener('click', (e) => {
//            e.preventDefault();
//            const targetId = link.getAttribute('href').substring(1);         scrollToSection(targetId);
//          navMenu.classList.remove('active');
//        });
//    });


    // Modal close
    const modal = document.getElementById('success-modal');
    const closeBtn = document.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Dark Mode Toggle with Particle Effect


//handling the case when menu links are clicked outside the home page
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    //const sectionId = link.getAttribute('data-section');

    // If we're on the home page, intercept click and smooth scroll
    if (document.querySelector('.dark-theme')) {
      e.preventDefault(); // stop default jump
      const targetId = link.getAttribute('href').substring(1);
      const navMenu = document.getElementById('nav-menu');
      scrollToSection(targetId);
      navMenu.classList.remove('active');
     
    }
    // else → normal <a> behavior happens (redirect)
  });
});

// Smooth Scrolling
function scrollToSection(sectionId) {
    if (document.querySelector('.dark-theme')) {  //smooth scroll only if on home page, dark-theme was the class of the body tag
        const section = document.getElementById(sectionId);
        if (!section) return; //handling error of section being None
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}


// Render Events
function renderEvents() {
    const eventsGrid = document.getElementById('events-grid');
    const dotsContainer = document.getElementById('events-dots')
    eventsGrid.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    eventsData.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card fade-in-up';
        eventCard.style.animationDelay = `${index * 0.1}s`;

        if (event.status == "past") {
            eventCard.classList.add('past-event');
        }
        
        const eventDate = new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        eventCard.innerHTML = `
            <div class="event-category">${event.category}</div>
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-date">${eventDate}</div>
            <p class="event-description">${event.description}</p>
        `;
        
        eventsGrid.appendChild(eventCard);


        // Create dot
        const dot = document.createElement('div');
        dot.className = `eventDot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToEvent(index));
        dotsContainer.appendChild(dot);



    });
}

// Render Projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.domain === filter);
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        const techStackHTML = project.techStack.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

projectCard.innerHTML = `
  <div class="project-header">
    <img src="${project.image}" alt="${project.title}" class="project-image-circle">
    <div class="project-person">
      <h4 class="person-name">${project.name}</h4>
      <p class="person-position">${project.position}</p>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">${project.title}</h3>
    <span class="project-domain">${project.domain}</span>
    <p class="project-description">${project.description}</p>
    <div class="tech-stack">${techStackHTML}</div>
  </div>
`;

        
        projectsGrid.appendChild(projectCard);

    });
}



// Render Highlights
function renderHighlights() {
    const highlightsContainer = document.getElementById('highlights-container');
    const dotsContainer = document.getElementById('highlights-dots');
    
    highlightsContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    highlightsData.forEach((highlight, index) => {
        // Create highlight card
        const highlightCard = document.createElement('div');
        highlightCard.className = 'highlight-card';
        
        highlightCard.innerHTML = `
            <img src="${highlight.image}" alt="${highlight.title}" class="highlight-image">
            <div class="highlight-content">
                <h3 class="highlight-title">${highlight.title}</h3>
                <p class="highlight-description">${highlight.description}</p>
            </div>
        `;
        
        highlightsContainer.appendChild(highlightCard);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `highDot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToHighlight(index));
        dotsContainer.appendChild(dot);
    });
}

//render Articles
function renderArticles(){
        // reading the articles.json file and assigning it as a const
        const articlesGrid = document.getElementById('articles-grid');
        const dotsContainer = document.getElementById('articles-dots');
        articlesGrid.innerHTML = '';
        dotsContainer.innerHTML = '';

        fetch("articles.json")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load articles.json");
            return response.json();
        })
        .then(data => {
            articlesData = data;
            console.log("Articles loaded:", articles);

            //render cards code
           
                
                data.forEach((article, index) => {
                articlesGrid.innerHTML += `
                    <div class="article-card">
                    <img src="${article.thumbnail}" alt="${article.title}" class="article-image">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="article.html?id=${article.id}" target="_blank">Read more</a>
                    </div>
                `;


                    // Create dot
                    const dot = document.createElement('div');
                    dot.className = `articleDot ${index === 0 ? 'active' : ''}`;
                    dot.addEventListener('click', () => goToArticle(index));
                    dotsContainer.appendChild(dot);

                });

            
        })
        .catch(err => console.error(err));

}

// Carousel Setup
function setupCarousel() {
    //for highlights
    const prevBtnHighlight = document.getElementById('highlights-prev');
    const nextBtnHighlight = document.getElementById('highlights-next');
    
    prevBtnHighlight.addEventListener('click', () => {
        currentHighlight = currentHighlight > 0 ? currentHighlight - 1 : highlightsData.length - 1;
        updateCarousel();
    });
    
    nextBtnHighlight.addEventListener('click', () => {
        currentHighlight = currentHighlight < highlightsData.length - 1 ? currentHighlight + 1 : 0;
        updateCarousel();
    });
    
    // Auto-scroll carousel
    setInterval(() => {
        currentHighlight = currentHighlight < highlightsData.length - 1 ? currentHighlight + 1 : 0;
        updateCarousel();
    }, 5000);


    //for events
    const prevBtnEvent = document.getElementById('events-prev');
    const nextBtnEvent = document.getElementById('events-next');
    
    prevBtnEvent.addEventListener('click', () => {
        currentEvent = currentEvent > 0 ? currentEvent - 1 : eventsData.length - 1;
        updateCarousel();
    });
    
    nextBtnEvent.addEventListener('click', () => {
        currentEvent = currentEvent < eventsData.length - 1 ? currentEvent + 1 : 0;
        updateCarousel();
    });

    //for articles
    const prevBtnArticle = document.getElementById('articles-prev')
    const nextBtnArticle = document.getElementById('articles-next')

    prevBtnArticle.addEventListener('click', () => {
        currentArticle = currentArticle > 0 ? currentArticle - 1 : articlesData.length - 1;
        updateCarousel();
    });

    nextBtnArticle.addEventListener('click', () => {
        currentArticle =currentArticle< articlesData.length - 1 ? currentArticle + 1 : 0;
        updateCarousel();
    });

    // Auto-scroll carousel
    setInterval(() => {
        currentArticle = currentArticle < articlesData.length - 1 ? currentArticle + 1 : 0;
        updateCarousel();
    }, 5000);
    
}

function goToHighlight(index) {
    currentHighlight = index;
    updateCarousel();
}


function goToEvent(index) {
    currentEvent = index;
    updateCarousel();
}

function goToArticle(index) {
    currentArticle = index;
    updateCarousel();
}

function updateCarousel() {
    //for highlights
    const highlightContainer = document.getElementById('highlights-container');
    const highlightDots = document.querySelectorAll('.highDot');
    
    const cardWidthHighlight = 300; // 350px + 24px margin
    const offsetHighlight = -currentHighlight * cardWidthHighlight;
    
    highlightContainer.style.transform = `translateX(${offsetHighlight}px)`;
    
    highlightDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentHighlight);
    });


    //for events
    const eventsGrid = document.getElementById('events-grid');
    const eventDots = document.querySelectorAll('.eventDot');
    
    const cardWidthEvent = 344; // 320px + 24px margin
    const offsetEvent = -currentEvent * cardWidthEvent;
    
    eventsGrid.style.transform = `translateX(${offsetEvent}px)`;
    
    eventDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentEvent);
    });

     
    //for articles
    const articlesGrid = document.getElementById('articles-grid');
    const articleDots = document.querySelectorAll('.articleDot');
    
    const cardWidthArticle = 344; // 320px + 24px margin
    const offsetArticle = -currentArticle * cardWidthArticle;
    
    articlesGrid.style.transform = `translateX(${offsetArticle}px)`;
    
    articleDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentArticle);
    });


}

// Simulations Setup
function setupSimulations() {
    setupSignalProcessing();
    setupLogicGates();
    setupRCCircuit();
}

function setupSignalProcessing() {
    const canvas      = document.getElementById('signal-canvas');
    const ctx         = canvas.getContext('2d');
    const freqSlider  = document.getElementById('freq-slider');
    const ampSlider   = document.getElementById('amp-slider');
    const filterSelect= document.getElementById('filter-select');
    const freqValue   = document.getElementById('freq-value');
    const ampValue    = document.getElementById('amp-value');

    // real-time variables
    let time = 0;                      // seconds
    const dt = 0.001;                  // 1 ms sampling interval
    const RC = 0.01;                   // 10 ms
    const cutoff = 1 / (2 * Math.PI * RC);

    // α coefficients for discrete RC filters
    const α_lp = dt / (RC + dt);
    const α_hp = RC / (RC + dt);

    // filter states
    let y_lp = 0, y_hp = 0, x_prev = 0;

    function drawSignal() {
        const f = parseFloat(freqSlider.value);     // in Hz
        const A = parseFloat(ampSlider.value);      // in V
        const filter = filterSelect.value;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw grid & axes (omitted for brevity—keep your existing code) …

        const N = canvas.width - 40; // data points
        ctx.beginPath();
        ctx.strokeStyle = '#1FB8CD'; ctx.lineWidth = 2;

        // original signal
        for (let i = 0; i < N; i++) {
            const t_sample = time + i * dt;
            const x = A * Math.sin(2 * Math.PI * f * t_sample);
            const y = canvas.height/2 - x * (canvas.height/4);
            ctx[i === 0 ? 'moveTo' : 'lineTo'](40 + i, y);
        }
        ctx.stroke();

        // filtered signal
        if (filter !== 'none') {
            // reset local filter state per-frame for visualization consistency
            let lp = 0, hp = 0, prev = 0;
            ctx.beginPath();
            ctx.strokeStyle = '#FFC185'; ctx.lineWidth = 3;

            for (let i = 0; i < N; i++) {
                const t_sample = time + i * dt;
                const x = A * Math.sin(2 * Math.PI * f * t_sample);
                
                if (filter === 'lowpass') {
                    lp = lp + α_lp * (x - lp);
                    var out = lp;
                } else {
                    // high-pass: y[n] = α ( y[n-1] + x[n] - x[n-1] )
                    hp = α_hp * (hp + x - prev);
                    prev = x;
                    var out = hp;
                }

                const y = canvas.height/2 - out * (canvas.height/4);
                ctx[i === 0 ? 'moveTo' : 'lineTo'](40 + i, y);
            }
            ctx.stroke();
        }

        // === LEGEND & INFO DISPLAY ===

// 💠 Original Signal label
ctx.font = 'bold 15px "Verdana", sans-serif';
ctx.fillStyle = '#1FB8CD';
ctx.fillText('Original Signal', canvas.width - 150, 25);

// 🔶 Filtered Signal label
if (filter !== 'none') {
    ctx.font = 'bold 15px "Verdana", sans-serif';
    ctx.fillStyle = '#FFC185';
    ctx.fillText('Filtered Signal', canvas.width - 150, 45);

    // ⚙️ Technical filter info (lighter font)
    ctx.font = '11px "Verdana", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText(
      `${filter === 'lowpass' ? 'Low-pass' : 'High-pass'} RC=${RC}s`, 
      canvas.width - 150, 70
    );
    ctx.fillText(`Cutoff = ${cutoff.toFixed(1)} Hz`, canvas.width - 150, 85);
}

// 📊 Real-time input info (bottom left)
ctx.font = '11px "Verdana", sans-serif';
ctx.fillStyle = 'rgba(255,255,255,0.9)';
ctx.fillText(`Input: ${f}Hz, ${A.toFixed(1)}V`, 10, canvas.height - 40);
ctx.fillText(`Time: ${time.toFixed(3)}s`, 10, canvas.height - 25);

        // advance global time
        time += dt;

        // loop
        signalAnimationId = requestAnimationFrame(drawSignal);
    }

    // update display values
    freqSlider.addEventListener('input', () => { freqValue.textContent = freqSlider.value; });
    ampSlider .addEventListener('input', () => { ampValue.textContent = parseFloat(ampSlider.value).toFixed(1); });
    filterSelect.addEventListener('change', () => { y_lp = y_hp = x_prev = 0; });

    drawSignal();
}

function setupLogicGates() {
    const gateSelect    = document.getElementById('gate-select');
    const inputA        = document.getElementById('input-a');
    const inputB        = document.getElementById('input-b');
    const groupB        = document.getElementById('group-b');
    const logicOutput   = document.getElementById('logic-output');
    const truthTable    = document.querySelector('#truth-table tbody');
    
    function computeGate(gate, a, b) {
        switch (gate) {
            case 'AND':  return a & b;
            case 'OR':   return a | b;
            case 'NOT':  return a ^ 1;
            case 'XOR':  return a ^ b;
            case 'NAND': return (a & b) ^ 1;
            case 'NOR':  return (a | b) ^ 1;
            case 'XNOR': return (a ^ b) ^ 1;
            default:     return 0;
        }
    }
    
    function updateLogicOutput() {
        const gate = gateSelect.value;
        const a    = +inputA.dataset.state;
        const b    = +inputB.dataset.state;
        
        // Hide B for NOT gate
        groupB.style.display = (gate === 'NOT') ? 'none' : 'flex';
        
        // compute and display
        const out = computeGate(gate, a, b);
        logicOutput.textContent = out;
        logicOutput.classList.toggle('active', out === 1);
        
        // regenerate truth table
        renderTruthTable(gate);
    }
    
    function renderTruthTable(gate) {
        truthTable.innerHTML = '';
        const rows = (gate === 'NOT')
            ? [[0,0],[1,0]]      // for NOT: B unused, show A→Out
            : [[0,0],[0,1],[1,0],[1,1]];
        
        rows.forEach(([a,b]) => {
            const out = computeGate(gate, a, b);
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${a}</td>
              <td>${gate==='NOT'?'–':b}</td>
              <td>${out}</td>
            `;
            truthTable.appendChild(tr);
        });
    }
    
    // toggle handlers
    function makeToggle(btn) {
        btn.addEventListener('click', () => {
            const cur = +btn.dataset.state;
            const nxt = cur ^ 1;
            btn.dataset.state = nxt;
            btn.textContent    = nxt;
            btn.classList.toggle('active', nxt === 1);
            updateLogicOutput();
        });
    }
    
    // init
    makeToggle(inputA);
    makeToggle(inputB);
    gateSelect.addEventListener('change', updateLogicOutput);
    
    // first render
    updateLogicOutput();
}

// RC Circuit Simulation
function setupRCCircuit() {
    const canvas = document.getElementById('rc-canvas');
    const ctx = canvas.getContext('2d');
    const rSlider = document.getElementById('r-slider');
    const cSlider = document.getElementById('c-slider');
    const rValue = document.getElementById('r-value');
    const cValue = document.getElementById('c-value');
    const timeConstant = document.getElementById('time-constant');
    const startBtn = document.getElementById('rc-start');
    const resetBtn = document.getElementById('rc-reset');
    
    let isCharging = false;
    let startTime = 0;
    let voltage = 0;
    const voltageData = [];
    
    function updateTimeConstant() {
        const R = parseFloat(rSlider.value) * 1000; // Convert to ohms
        const C = parseFloat(cSlider.value) * 1e-6; // Convert to farads
        const tau = R * C;
        timeConstant.textContent = tau.toFixed(3);
    }
    
    function drawRCResponse() {
        if (!isCharging && voltageData.length === 0) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < canvas.width; i += 50) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        for (let i = 0; i < canvas.height; i += 50) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }
        
        // Draw axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 50);
        ctx.lineTo(canvas.width, canvas.height - 50);
        ctx.moveTo(50, 0);
        ctx.lineTo(50, canvas.height);
        ctx.stroke();
        
        // Draw voltage curve
        if (voltageData.length > 1) {
            ctx.strokeStyle = '#1FB8CD';
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            voltageData.forEach((v, index) => {
                const x = 50 + (index / voltageData.length) * (canvas.width - 100);
                const y = canvas.height - 50 - (v / 5) * (canvas.height - 100);
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            
            ctx.stroke();
        }
        
        // Draw current voltage level
        ctx.fillStyle = '#1FB8CD';
        ctx.font = '16px Helvetica';
        ctx.fillText(`Voltage: ${voltage.toFixed(2)}V`, canvas.width - 150, 30);
        
        if (isCharging) {
            rcAnimationId = requestAnimationFrame(drawRCResponse);
        }
    }
    
    function startCharging() {
        if (isCharging) return;
        
        isCharging = true;
        startTime = Date.now();
        voltageData.length = 0;
        voltage = 0;
        
        const R = parseFloat(rSlider.value) * 1000;
        const C = parseFloat(cSlider.value) * 1e-6;
        const tau = R * C;
        
        function updateVoltage() {
            if (!isCharging) return;
            
            const elapsed = (Date.now() - startTime) / 1000;
            voltage = 5 * (1 - Math.exp(-elapsed / tau));
            voltageData.push(voltage);
            
            if (voltageData.length > 200) {
                voltageData.shift();
            }
            
            if (voltage < 4.95) {
                setTimeout(updateVoltage, 50);
            } else {
                isCharging = false;
            }
        }
        
        updateVoltage();
        drawRCResponse();
    }
    
    function resetCircuit() {
        isCharging = false;
        voltage = 0;
        voltageData.length = 0;
        if (rcAnimationId) {
            cancelAnimationFrame(rcAnimationId);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Event listeners
    rSlider.addEventListener('input', () => {
        rValue.textContent = rSlider.value;
        updateTimeConstant();
    });
    
    cSlider.addEventListener('input', () => {
        cValue.textContent = cSlider.value;
        updateTimeConstant();
    });
    
    startBtn.addEventListener('click', startCharging);
    resetBtn.addEventListener('click', resetCircuit);
    
    updateTimeConstant();
}

// Toggle Simulation
function toggleSimulation(simId) {
    const simCard = document.getElementById(simId);
    const toggle = simCard.querySelector('.sim-toggle');
    
    simCard.classList.toggle('active');
    toggle.textContent = simCard.classList.contains('active') ? '−' : '+';
}


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('active');
}

// Component Issue Form
function openComponentForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSczt2BuOAABzEnnt8jbn1vNa5BaRxppdqPSVR9NkED7K7MfGQ/viewform?usp=dialog', '_blank');
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in-up class to sections
    const sections = document.querySelectorAll('section > .container');
    sections.forEach((section, index) => {
        section.classList.add('fade-in-up');
        section.style.animationDelay = `${index * 0.1}s`;
        observer.observe(section);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimized scroll handler
const handleScroll = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (signalAnimationId) cancelAnimationFrame(signalAnimationId);
    if (rcAnimationId) cancelAnimationFrame(rcAnimationId);
});
