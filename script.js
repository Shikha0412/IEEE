// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update Buttons
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update Panels
        tabPanels.forEach(p => p.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Populate Speakers
const speakers = [
    { name: 'Dr. Jane Smith', role: 'AI Researcher, Google', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
    { name: 'John Doe', role: 'CTO, TechCorp', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dr. Emily Brown', role: 'Professor, MIT', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
    { name: 'Michael Chen', role: 'IEEE Region 10 Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' }
];

const speakersGrid = document.getElementById('speakersGrid');
if (speakersGrid) {
    speakers.forEach(speaker => {
        const card = document.createElement('div');
        card.className = 'speaker-card';
        card.innerHTML = `
            <div class="speaker-img" style="background-image: url('${speaker.img}')"></div>
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <p>${speaker.role}</p>
            </div>
        `;
        speakersGrid.appendChild(card);
    });
}

// Populate Schedule (Mock Data for Day 1)
const day1Schedule = [
    { time: '09:00 AM', event: 'Inauguration Ceremony', speaker: 'Core Committee' },
    { time: '10:30 AM', event: 'Keynote: The Future of AI', speaker: 'Dr. Jane Smith' },
    { time: '12:00 PM', event: 'Networking Lunch', speaker: '-' },
    { time: '02:00 PM', event: 'Workshop: IEEE Leadership', speaker: 'Michael Chen' }
];

const day1Panel = document.getElementById('day1');
if (day1Panel) {
    day1Schedule.forEach(item => {
        const div = document.createElement('div');
        div.className = 'schedule-item';
        div.innerHTML = `
            <div class="schedule-time">${item.time}</div>
            <div class="schedule-detail">
                <h4>${item.event}</h4>
                <p>${item.speaker}</p>
            </div>
        `;
        day1Panel.appendChild(div);
    });
}

// Simple Reveal Animation on Scroll
const revealOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.85) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for reveal
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load
