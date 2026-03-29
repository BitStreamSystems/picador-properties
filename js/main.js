// ========== SVG Icons ==========
const icons = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  quote: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>',
  calendarDays: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>',
  headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
  pound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="13" x2="18" y2="13"/><path d="M17 20H7c0-4 2.5-6 2.5-10a4.5 4.5 0 1 1 9 0"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  chevLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',
  chevRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
};

function starsHTML(n) {
  return '<div class="stars">' + Array(n).fill(icons.star).map(s => '<span style="width:14px;height:14px;color:#f97316;">'+s+'</span>').join('') + '</div>';
}

// ========== DATA ==========
const properties = [
  { id:1, name:"Thistle Cottage", location:"Newmarket", sleeps:7, price:120, image:"assets/img/property-1.jpg", images:["assets/img/property-1.jpg","assets/img/property-5.jpg","assets/img/property-4.jpg"], description:"A beautifully renovated cottage in the heart of Newmarket. Perfect for families or groups, featuring spacious living areas, a fully equipped kitchen, and comfortable bedrooms with premium linens.", amenities:["Wi-Fi","Smart TV","Fully Equipped Kitchen","Washing Machine","Free Parking","Garden","Weekly Cleaning"] },
  { id:2, name:"Stratford Apartment", location:"Newmarket", sleeps:4, price:105, image:"assets/img/property-2.jpg", images:["assets/img/property-2.jpg","assets/img/property-6.jpg","assets/img/property-4.jpg"], description:"Modern open-plan apartment with stylish interiors and all the comforts of home. Ideal for business travellers or couples seeking a premium stay in Newmarket.", amenities:["Wi-Fi","Smart TV","Fully Equipped Kitchen","Washing Machine","Dedicated Workspace","Weekly Cleaning"] },
  { id:3, name:"Palmer's Apartment A", location:"Bristol", sleeps:4, price:115, image:"assets/img/property-3.jpg", images:["assets/img/property-3.jpg","assets/img/property-5.jpg","assets/img/property-6.jpg"], description:"Stunning city-view apartment in central Bristol. Floor-to-ceiling windows, contemporary furnishings, and everything you need for a comfortable stay.", amenities:["Wi-Fi","Smart TV","City Views","Fully Equipped Kitchen","Washing Machine","Weekly Cleaning","Near Transport Links"] },
  { id:4, name:"Palmer's Apartment B", location:"Bristol", sleeps:2, price:95, image:"assets/img/property-5.jpg", images:["assets/img/property-5.jpg","assets/img/property-4.jpg","assets/img/property-3.jpg"], description:"Cosy and elegant one-bedroom apartment perfect for business travellers or couples. Tastefully decorated with premium bedding and a fully equipped kitchen.", amenities:["Wi-Fi","Smart TV","Fully Equipped Kitchen","Dedicated Workspace","Weekly Cleaning","Near City Centre"] },
  { id:5, name:"Harbour View Suite", location:"Bristol", sleeps:6, price:140, image:"assets/img/property-6.jpg", images:["assets/img/property-6.jpg","assets/img/property-2.jpg","assets/img/property-1.jpg"], description:"Spacious two-bedroom suite with stunning harbour views. Perfect for families or extended stays, featuring a large dining area and modern amenities throughout.", amenities:["Wi-Fi","Smart TV","Harbour Views","Fully Equipped Kitchen","Dishwasher","Washing Machine","Free Parking","Weekly Cleaning"] },
  { id:6, name:"Market Square Studio", location:"Newmarket", sleeps:2, price:85, image:"assets/img/property-4.jpg", images:["assets/img/property-4.jpg","assets/img/property-2.jpg","assets/img/property-5.jpg"], description:"Compact yet stylish studio in the heart of Newmarket. Everything you need for a comfortable short stay, with easy access to local attractions and amenities.", amenities:["Wi-Fi","Smart TV","Kitchenette","En-suite Bathroom","Weekly Cleaning"] },
];

// ========== MOBILE MENU ==========
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.innerHTML = mobileMenu.classList.contains('active') ? icons.x : icons.menu;
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.innerHTML = icons.menu;
    });
  });

  // ========== PROPERTIES GRID ==========
  const grid = document.getElementById('properties-grid');
  properties.forEach(p => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="badge">${p.location}</span>
      </div>
      <div class="card-body">
        ${starsHTML(5)}
        <h3>${p.name}</h3>
        <div class="card-meta">
          <span>${icons.mapPin} ${p.location}</span>
          <span>${icons.users} Sleeps ${p.sleeps}</span>
        </div>
        <div class="card-footer">
          <div class="card-price">From <strong>£${p.price}</strong>/night</div>
          <button class="btn-primary" data-id="${p.id}">View Property</button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });

  // ========== MODAL ==========
  const overlay = document.getElementById('modal-overlay');
  let currentImg = 0;

  window.openModal = function(id) {
    const p = properties.find(x => x.id === id);
    if (!p) return;
    currentImg = 0;

    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-img').src = p.images[0];
    document.getElementById('modal-desc').textContent = p.description;
    document.getElementById('modal-location').innerHTML = icons.mapPin + ' ' + p.location;
    document.getElementById('modal-sleeps').innerHTML = icons.users + ' Sleeps ' + p.sleeps;
    document.getElementById('modal-stars').innerHTML = starsHTML(5);
    document.getElementById('modal-price').innerHTML = 'From <strong>£'+p.price+'</strong>/night';

    const amenGrid = document.getElementById('modal-amenities');
    amenGrid.innerHTML = p.amenities.map(a => `<div class="amenity-tag">${icons.sparkles} ${a}</div>`).join('');

    const dots = document.getElementById('gallery-dots');
    dots.innerHTML = p.images.map((_,i) => `<button class="${i===0?'active':''}" data-i="${i}"></button>`).join('');
    dots.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImg = parseInt(btn.dataset.i);
        updateGallery(p);
      });
    });

    document.getElementById('gallery-prev').onclick = (e) => { e.stopPropagation(); currentImg = (currentImg - 1 + p.images.length) % p.images.length; updateGallery(p); };
    document.getElementById('gallery-next').onclick = (e) => { e.stopPropagation(); currentImg = (currentImg + 1) % p.images.length; updateGallery(p); };

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function updateGallery(p) {
    document.getElementById('modal-img').src = p.images[currentImg];
    document.querySelectorAll('#gallery-dots button').forEach((b,i) => b.classList.toggle('active', i === currentImg));
  }

  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ========== CONTACT FORM ==========
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-success');
    msg.classList.add('show');
    e.target.reset();
    setTimeout(() => msg.classList.remove('show'), 3000);
  });
});
