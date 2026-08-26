/* ============================================
   Supply Chain Interactive JS
============================================ */

const STEPS = [
  {
    id: 'raw-materials',
    label: 'Raw Materials',
    sublabel: 'Nepal Highlands',
    icon: 'sprout',
    location: 'Mustang District, Nepal',
    coords: { x: '68%', y: '38%' },
    description: 'Natural wool and cotton fibres are hand-selected from small-scale shepherd cooperatives in the high-altitude Mustang district. The raw fleece is washed in glacial meltwater, maintaining zero-chemical processing at this stage.',
    workers: 12,
    avgWage: '$8.40/hr',
    hoursLogged: 480,
    certifications: ['Fair Trade', 'GOTS Organic'],
    co2kg: 18,
    waterL: 640,
    landSqm: 0,
    energyKwh: 12,
    photos: ['raw-materials-1.jpg', 'raw-materials-2.jpg', 'raw-materials-3.jpg'],
    impacts: [
      { label: 'Water Usage', value: '640 L', pct: 40, type: 'warning' },
      { label: 'CO₂ Emissions', value: '18 kg', pct: 25, type: '' },
      { label: 'Land Impact', value: 'None', pct: 0, type: 'positive' },
      { label: 'Energy Used', value: '12 kWh', pct: 15, type: '' },
    ]
  },
  {
    id: 'spinning',
    label: 'Spinning',
    sublabel: 'Pokhara, Nepal',
    icon: 'loop',
    location: 'Pokhara Valley, Nepal',
    coords: { x: '69%', y: '40%' },
    description: 'Fibres are hand-spun on traditional drop-spindle looms in a women-owned cooperative in Pokhara Valley. This ancient technique produces a uniquely textured yarn that gives each YogaMaty its signature grip and feel.',
    workers: 28,
    avgWage: '$9.20/hr',
    hoursLogged: 1120,
    certifications: ['Fair Trade', 'B Corp Supplier'],
    co2kg: 6,
    waterL: 80,
    landSqm: 0,
    energyKwh: 32,
    photos: ['spinning-1.jpg', 'spinning-2.jpg', 'spinning-3.jpg'],
    impacts: [
      { label: 'Water Usage', value: '80 L', pct: 12, type: 'positive' },
      { label: 'CO₂ Emissions', value: '6 kg', pct: 10, type: 'positive' },
      { label: 'Energy Used', value: '32 kWh', pct: 30, type: '' },
      { label: 'Chemical Use', value: 'Zero', pct: 0, type: 'positive' },
    ]
  },
  {
    id: 'dyeing',
    label: 'Natural Dyeing',
    sublabel: 'Kathmandu, Nepal',
    icon: 'droplets',
    location: 'Patan District, Kathmandu',
    coords: { x: '69.5%', y: '39%' },
    description: 'Yarns are dyed using plant-based natural dyes — madder root, indigo, and turmeric — sourced from local farms. The dye bath water is treated and recycled in a closed-loop system at the family-run dye house in Patan.',
    workers: 8,
    avgWage: '$10.15/hr',
    hoursLogged: 320,
    certifications: ['Zero Liquid Discharge', 'OEKO-TEX'],
    co2kg: 22,
    waterL: 1200,
    landSqm: 0,
    energyKwh: 65,
    photos: ['dyeing-1.jpg', 'dyeing-2.jpg', 'dyeing-3.jpg'],
    impacts: [
      { label: 'Water Usage', value: '1,200 L', pct: 70, type: 'warning' },
      { label: 'CO₂ Emissions', value: '22 kg', pct: 28, type: '' },
      { label: 'Chemical Waste', value: 'Zero', pct: 0, type: 'positive' },
      { label: 'Water Recycled', value: '95%', pct: 95, type: 'positive' },
    ]
  },
  {
    id: 'weaving',
    label: 'Weaving',
    sublabel: 'Kathmandu, Nepal',
    icon: 'grid',
    location: 'Bhaktapur, Kathmandu Valley',
    coords: { x: '70%', y: '39%' },
    description: 'Skilled artisan weavers in Bhaktapur work on hand-operated floor looms passed down through generations. Each mat takes 6–8 hours to weave and carries the unique signature of its maker. Workers set their own hours and all earn above living wage.',
    workers: 34,
    avgWage: '$11.50/hr',
    hoursLogged: 2720,
    certifications: ['Fair Trade', 'Living Wage Employer'],
    co2kg: 4,
    waterL: 0,
    landSqm: 0,
    energyKwh: 0,
    photos: ['weaving-1.jpg', 'weaving-2.jpg', 'weaving-3.jpg'],
    impacts: [
      { label: 'Energy Used', value: '0 kWh', pct: 0, type: 'positive' },
      { label: 'CO₂ Emissions', value: '4 kg', pct: 8, type: 'positive' },
      { label: 'Water Usage', value: '0 L', pct: 0, type: 'positive' },
      { label: 'Worker Safety', value: 'A+ rated', pct: 100, type: 'positive' },
    ]
  },
  {
    id: 'qc',
    label: 'Quality Control',
    sublabel: 'Kathmandu, Nepal',
    icon: 'check-circle',
    location: 'Lalitpur, Kathmandu',
    coords: { x: '70%', y: '40%' },
    description: 'Every YogaMaty is individually inspected by our QC team in Lalitpur. Mats are tested for grip, durability, dimensional consistency, and colorfastness. Any mat below standard is repurposed into accessories — zero waste policy.',
    workers: 6,
    avgWage: '$12.80/hr',
    hoursLogged: 240,
    certifications: ['ISO 9001', 'Zero Waste to Landfill'],
    co2kg: 2,
    waterL: 20,
    landSqm: 0,
    energyKwh: 18,
    photos: ['qc-1.jpg', 'qc-2.jpg', 'qc-3.jpg'],
    impacts: [
      { label: 'Reject Rate', value: '2.3%', pct: 2, type: 'positive' },
      { label: 'Waste to Landfill', value: '0 kg', pct: 0, type: 'positive' },
      { label: 'CO₂ Emissions', value: '2 kg', pct: 5, type: 'positive' },
      { label: 'Energy Used', value: '18 kWh', pct: 18, type: '' },
    ]
  },
  {
    id: 'packaging',
    label: 'Packaging',
    sublabel: 'Kathmandu, Nepal',
    icon: 'package',
    location: 'Kathmandu Industrial Area',
    coords: { x: '69.5%', y: '39.5%' },
    description: 'Each mat is wrapped in recycled cotton cloth and sealed with a compostable corn-starch band. The QR transparency label is printed with soy ink on FSC-certified paper. All packaging materials are 100% plastic-free.',
    workers: 5,
    avgWage: '$9.80/hr',
    hoursLogged: 200,
    certifications: ['Plastic-Free Packaging', 'FSC Certified Print'],
    co2kg: 8,
    waterL: 0,
    landSqm: 0,
    energyKwh: 22,
    photos: ['packaging-1.jpg', 'packaging-2.jpg', 'packaging-3.jpg'],
    impacts: [
      { label: 'Plastic Used', value: '0 g', pct: 0, type: 'positive' },
      { label: 'CO₂ Emissions', value: '8 kg', pct: 12, type: '' },
      { label: 'Compostable %', value: '100%', pct: 100, type: 'positive' },
      { label: 'Energy Used', value: '22 kWh', pct: 22, type: '' },
    ]
  },
  {
    id: 'shipping',
    label: 'Shipping',
    sublabel: 'Global',
    icon: 'ship',
    location: 'Kathmandu → Sea Freight → Destination',
    coords: { x: '50%', y: '45%' },
    description: 'Finished mats travel by road to Kolkata port, then by sea freight — the lowest-carbon commercial shipping method. We offset 100% of remaining voyage emissions through verified reforestation projects in Nepal. Air freight is never used.',
    workers: 18,
    avgWage: '$14.20/hr',
    hoursLogged: 720,
    certifications: ['Carbon Offset Verified', 'Sea Freight Only'],
    co2kg: 145,
    waterL: 0,
    landSqm: 0,
    energyKwh: 380,
    photos: ['shipping-1.jpg', 'shipping-2.jpg', 'shipping-3.jpg'],
    impacts: [
      { label: 'CO₂ Emissions', value: '145 kg', pct: 85, type: 'warning' },
      { label: 'Offset Applied', value: '100%', pct: 100, type: 'positive' },
      { label: 'Air Freight', value: 'Never', pct: 0, type: 'positive' },
      { label: 'Energy Used', value: '380 kWh', pct: 75, type: 'warning' },
    ]
  },
  {
    id: 'retail',
    label: 'In Your Hands',
    sublabel: 'You',
    icon: 'heart',
    location: 'You, wherever you are',
    coords: null,
    description: 'Your YogaMaty has arrived. By choosing transparency, you\'ve supported 111 workers across Nepal, funded living wages at every step, and enabled a supply chain free of exploitation. We\'re grateful you\'re part of this.',
    workers: 111,
    avgWage: '$10.60/hr avg',
    hoursLogged: 5800,
    certifications: ['Verified Ethical', 'TransparaTrade Pilot'],
    co2kg: 205,
    waterL: 1940,
    landSqm: 0,
    energyKwh: 529,
    photos: [],
    impacts: [
      { label: 'Total Workers Paid', value: '111', pct: 100, type: 'positive' },
      { label: 'Living Wage %', value: '100%', pct: 100, type: 'positive' },
      { label: 'Net Carbon (offset)', value: '0 kg', pct: 0, type: 'positive' },
      { label: 'Plastic in Chain', value: 'Zero', pct: 0, type: 'positive' },
    ]
  }
];

// SVG icons
const ICONS = {
  sprout: '<circle cx="12" cy="12" r="0"/><path d="M12 22V12M12 12C12 7 7 3 2 3s4 7 10 9M12 12c0-5 5-9 10-9s-4 7-10 9"/>',
  loop: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  droplets: '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  ship: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 7v.01"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
};

function svgIcon(name, extra) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra || ''}>${ICONS[name] || ''}</svg>`;
}

// Build timeline nodes
function buildTimeline() {
  const track = document.querySelector('.timeline-track');
  if (!track) return;
  STEPS.forEach((step, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-step' + (i === 0 ? ' active' : '');
    el.dataset.step = i;
    el.innerHTML = `
      <div class="step-node">
        ${svgIcon(step.icon)}
        <span class="step-index">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="step-label">
        <h4>${step.label}</h4>
        <p>${step.sublabel}</p>
      </div>`;
    el.addEventListener('click', () => selectStep(i));
    track.appendChild(el);
  });
}

// Build detail panels
function buildPanels() {
  const container = document.querySelector('.detail-inner');
  if (!container) return;
  STEPS.forEach((step, i) => {
    const panel = document.createElement('div');
    panel.className = 'detail-panel' + (i === 0 ? ' active' : '');
    panel.id = 'panel-' + i;

    const mediaHtml = step.photos.length
      ? `<div class="detail-img-placeholder" id="main-img-${i}">
           ${svgIcon('camera')}
           <span>Production Photo</span>
         </div>
         <div class="detail-thumbs">
           ${step.photos.map((_, j) => `<div class="detail-thumb${j === 0 ? ' active' : ''}" data-panel="${i}" data-thumb="${j}"></div>`).join('')}
         </div>`
      : `<div class="detail-img-placeholder">
           ${svgIcon('heart')}
           <span>Your YogaMaty</span>
         </div>`;

    const dataGridHtml = `
      <div class="data-grid">
        <div class="data-cell highlight">
          <div class="data-label">Workers Involved</div>
          <div class="data-value">${step.workers}</div>
          <div class="data-sub">Direct production workers</div>
        </div>
        <div class="data-cell highlight">
          <div class="data-label">Avg. Wage</div>
          <div class="data-value" style="font-size:1.2rem">${step.avgWage}</div>
          <div class="data-sub">Above local living wage</div>
        </div>
        <div class="data-cell">
          <div class="data-label">Hours Logged</div>
          <div class="data-value">${step.hoursLogged.toLocaleString()}</div>
          <div class="data-sub">This batch</div>
        </div>
        <div class="data-cell positive">
          <div class="data-label">Certifications</div>
          <div class="data-value" style="font-size:0.9rem;line-height:1.3">${step.certifications[0]}</div>
          <div class="data-sub">${step.certifications[1] || ''}</div>
        </div>
      </div>`;

    const barsHtml = `
      <div class="impact-bars">
        <h4>Environmental Impact</h4>
        ${step.impacts.map(impact => `
          <div class="impact-bar">
            <div class="impact-bar-header">
              <span>${impact.label}</span>
              <span>${impact.value}</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill ${impact.type}" data-width="${impact.pct}%"></div>
            </div>
          </div>`).join('')}
      </div>`;

    panel.innerHTML = `
      <div class="detail-media">${mediaHtml}</div>
      <div class="detail-info">
        <div class="detail-step-eyebrow">
          <div class="detail-step-num">${i + 1}</div>
          <span class="eyebrow">${step.label}</span>
        </div>
        <h2>${step.label}</h2>
        <div class="location-tag">${svgIcon('map-pin')}<span>${step.location}</span></div>
        <p>${step.description}</p>
        ${dataGridHtml}
        ${barsHtml}
      </div>`;

    container.appendChild(panel);
  });

  // Trigger bar animations for first panel
  setTimeout(() => {
    const firstBars = document.querySelectorAll('#panel-0 .bar-fill[data-width]');
    firstBars.forEach(b => { b.style.width = b.dataset.width; });
  }, 400);
}

function selectStep(index) {
  // Update nodes
  document.querySelectorAll('.timeline-step').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
  // Update panels
  document.querySelectorAll('.detail-panel').forEach((el, i) => {
    el.classList.toggle('active', i === index);
    if (i === index) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        // Animate bars
        const bars = el.querySelectorAll('.bar-fill[data-width]');
        bars.forEach(b => { b.style.width = '0'; });
        setTimeout(() => bars.forEach(b => { b.style.width = b.dataset.width; }), 100);
      });
    }
  });
  // Scroll timeline node into view
  const node = document.querySelectorAll('.timeline-step')[index];
  if (node) node.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
  // Scroll to detail section
  const detailSection = document.querySelector('.detail-section');
  if (detailSection) detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Drag-scroll on timeline
function initDragScroll() {
  const wrap = document.querySelector('.timeline-scroll-wrap');
  if (!wrap) return;
  let isDown = false, startX, scrollLeft;
  wrap.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - wrap.offsetLeft;
    scrollLeft = wrap.scrollLeft;
  });
  wrap.addEventListener('mouseleave', () => { isDown = false; });
  wrap.addEventListener('mouseup', () => { isDown = false; });
  wrap.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrap.offsetLeft;
    wrap.scrollLeft = scrollLeft - (x - startX);
  });
}

// Summary report counts
function animateSummary() {
  const items = document.querySelectorAll('.report-card [data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = (Number.isInteger(target) ? Math.round(target * eased) : (target * eased).toFixed(1)) + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  items.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  buildTimeline();
  buildPanels();
  initDragScroll();
  animateSummary();
});
