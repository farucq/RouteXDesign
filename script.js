const state = {
  query: "",
  brand: "all",
  type: "all",
  price: "all",
  fuel: "all",
  wishlist: new Set(JSON.parse(localStorage.getItem("wishlist") || "[]")),
  theme: localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
};

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("data-theme", state.theme);
  setupUI();
  renderYear();
  renderCards();
});

function setupUI() {
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const brandFilter = document.getElementById("brandFilter");
  const typeFilter = document.getElementById("typeFilter");
  const priceFilter = document.getElementById("priceFilter");
  const fuelChips = document.querySelectorAll('.chip-group .chip');
  const resetFilters = document.getElementById("resetFilters");
  const themeToggle = document.getElementById("themeToggle");

  let debounceTimer;
  searchInput.addEventListener("input", () => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => {
      state.query = searchInput.value.trim().toLowerCase();
      renderCards();
    }, 180);
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    renderCards();
  });

  brandFilter.addEventListener("change", () => { state.brand = brandFilter.value; renderCards(); });
  typeFilter.addEventListener("change", () => { state.type = typeFilter.value; renderCards(); });
  priceFilter.addEventListener("change", () => { state.price = priceFilter.value; renderCards(); });

  fuelChips.forEach(chip => {
    chip.addEventListener('click', () => {
      fuelChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      state.fuel = chip.dataset.fuel;
      renderCards();
    });
  });

  resetFilters.addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    brandFilter.value = "all";
    typeFilter.value = "all";
    priceFilter.value = "all";
    state.brand = state.type = state.price = state.fuel = "all";
    document.querySelectorAll('.chip-group .chip').forEach((c, i) => c.classList.toggle('is-active', i === 0));
    renderCards();
  });

  themeToggle.addEventListener("click", () => {
    state.theme = (state.theme === 'light') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
  });
}

function renderYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

const cars = [
  {
    id: "tesla-s",
    brand: "Tesla",
    name: "Model S Plaid",
    type: "Sedan",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 390, zeroToSixty: 1.99, hp: 1020, transmission: "1‑spd" },
    price: 124990,
    badge: "HOT"
  },
  {
    id: "tesla-3",
    brand: "Tesla",
    name: "Model 3 Long Range",
    type: "Sedan",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1606663889134-c77acb32531a?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 341, zeroToSixty: 4.2, hp: 498, transmission: "1‑spd" },
    price: 45990,
    badge: "EV"
  },
  {
    id: "bmw-i4",
    brand: "BMW",
    name: "i4 M50",
    type: "Sedan",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 270, zeroToSixty: 3.7, hp: 536, transmission: "1‑spd" },
    price: 68900,
    badge: "NEW"
  },
  {
    id: "bmw-m3",
    brand: "BMW",
    name: "M3 Competition",
    type: "Sedan",
    fuel: "Gasoline",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89e?q=80&w=1600&auto=format&fit=crop",
    specs: { range: null, zeroToSixty: 3.8, hp: 503, transmission: "8‑spd" },
    price: 76200,
    badge: ""
  },
  {
    id: "audi-e-tron-gt",
    brand: "Audi",
    name: "e‑tron GT",
    type: "Sedan",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1627454824053-62d035b17702?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 238, zeroToSixty: 3.9, hp: 522, transmission: "2‑spd" },
    price: 104900,
    badge: "EV"
  },
  {
    id: "audi-rs6",
    brand: "Audi",
    name: "RS6 Avant",
    type: "Hatchback",
    fuel: "Gasoline",
    image: "https://images.unsplash.com/photo-1626266069135-71a0483fd05c?q=80&w=1600&auto=format&fit=crop",
    specs: { range: null, zeroToSixty: 3.5, hp: 591, transmission: "8‑spd" },
    price: 126000,
    badge: "HOT"
  },
  {
    id: "mercedes-eqs",
    brand: "Mercedes",
    name: "EQS 580 4MATIC",
    type: "Sedan",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1632849714649-fd6611b9047c?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 340, zeroToSixty: 4.1, hp: 516, transmission: "1‑spd" },
    price: 125950,
    badge: "LUXE"
  },
  {
    id: "porsche-taycan",
    brand: "Porsche",
    name: "Taycan 4S",
    type: "Sedan",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1606661024742-5b9b5fbd4933?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 287, zeroToSixty: 3.8, hp: 522, transmission: "2‑spd" },
    price: 103800,
    badge: "EV"
  },
  {
    id: "toyota-supra",
    brand: "Toyota",
    name: "GR Supra 3.0",
    type: "Coupe",
    fuel: "Gasoline",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
    specs: { range: null, zeroToSixty: 3.9, hp: 382, transmission: "6‑spd" },
    price: 56300,
    badge: ""
  },
  {
    id: "landrover-rs",
    brand: "Land Rover",
    name: "Range Rover Sport",
    type: "SUV",
    fuel: "Hybrid",
    image: "https://images.unsplash.com/photo-1606660647946-48c5939e0e7a?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 51, zeroToSixty: 5.5, hp: 434, transmission: "8‑spd" },
    price: 93900,
    badge: "SUV"
  },
  {
    id: "tesla-x",
    brand: "Tesla",
    name: "Model X",
    type: "SUV",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b1d5b5?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 333, zeroToSixty: 2.6, hp: 1020, transmission: "1‑spd" },
    price: 109990,
    badge: "FALCON"
  },
  {
    id: "hyundai-ioniq5",
    brand: "Hyundai",
    name: "IONIQ 5 LTD",
    type: "Hatchback",
    fuel: "EV",
    image: "https://images.unsplash.com/photo-1637844520058-463269b4013b?q=80&w=1600&auto=format&fit=crop",
    specs: { range: 303, zeroToSixty: 5.2, hp: 320, transmission: "1‑spd" },
    price: 47950,
    badge: "VALUE"
  }
];

function renderCards() {
  const grid = document.getElementById("carGrid");
  const empty = document.getElementById("emptyState");

  const filtered = cars.filter(c => {
    if (state.brand !== 'all' && c.brand !== state.brand) return false;
    if (state.type !== 'all' && c.type !== state.type) return false;
    if (state.fuel !== 'all' && c.fuel !== state.fuel) return false;
    if (state.query) {
      const hay = `${c.brand} ${c.name}`.toLowerCase();
      if (!hay.includes(state.query)) return false;
    }
    if (state.price !== 'all') {
      if (state.price === 'under30' && !(c.price < 30000)) return false;
      if (state.price === '30to60' && !(c.price >= 30000 && c.price <= 60000)) return false;
      if (state.price === '60to100' && !(c.price > 60000 && c.price <= 100000)) return false;
      if (state.price === 'over100' && !(c.price > 100000)) return false;
    }
    return true;
  });

  if (!filtered.length) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  grid.innerHTML = filtered.map(renderCard).join("");

  grid.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (state.wishlist.has(id)) state.wishlist.delete(id); else state.wishlist.add(id);
      localStorage.setItem('wishlist', JSON.stringify(Array.from(state.wishlist)));
      btn.classList.toggle('is-active');
    });
  });
}

function renderCard(c) {
  const isWish = state.wishlist.has(c.id);
  const priceFmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(c.price);
  const badge = c.badge ? `<span class="badge">${c.badge}</span>` : "";
  const range = c.specs.range ? `${c.specs.range} mi` : (c.fuel === 'EV' ? '—' : 'N/A');

  return `
    <article class="card" data-id="${c.id}">
      <div class="card-media">
        <img src="${c.image}" alt="${c.brand} ${c.name}" loading="lazy" />
        ${badge}
        <button class="wishlist-btn ${isWish ? 'is-active' : ''}" data-id="${c.id}" aria-label="Add to wishlist">
          <span class="material-symbols-rounded">favorite</span>
        </button>
      </div>
      <div class="card-body">
        <div class="card-title">${c.brand} ${c.name}</div>
        <div class="card-subtitle">${c.type} • ${c.fuel}</div>
        <div class="specs">
          <span class="spec"><span class="material-symbols-rounded">ev_charger</span>${range}</span>
          <span class="spec"><span class="material-symbols-rounded">speed</span>${c.specs.zeroToSixty}s 0‑60</span>
          <span class="spec"><span class="material-symbols-rounded">bolt</span>${c.specs.hp} hp</span>
          <span class="spec"><span class="material-symbols-rounded">cached</span>${c.specs.transmission}</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="price">${priceFmt}</div>
        <button class="primary-btn">View Details</button>
      </div>
    </article>
  `;
}