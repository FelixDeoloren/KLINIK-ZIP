// ----------------------------------------------------
// DATA STORES
// ----------------------------------------------------
const treatmentsData = [
    {
        id: 't1',
        name: 'Underarm Hair Removal Laser',
        category: 'hair',
        price: 199000,
        duration: '15 Menit',
        benefit: 'Menghilangkan rambut ketiak permanen & mencerahkan lipatan, mengecilkan pori.',
        image: 'https://images.unsplash.com/photo-1512290900673-700200411926?auto=format&fit=crop&w=600&q=80',
        popular: true
    },
    {
        id: 't2',
        name: 'ZAP Photo Facial Glow',
        category: 'face',
        price: 997000,
        duration: '30 Menit',
        benefit: 'Kombinasi 3 teknologi canggih untuk mencerahkan, mengecilkan pori & mengurangi flek.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
        popular: true
    },
    {
        id: 't3',
        name: 'Super Vitamin C Infusion',
        category: 'infusion',
        price: 499000,
        duration: '20 Menit',
        benefit: 'Injeksi multivitamin & antioksidan murni untuk menjaga imunitas dan kecantikan dari dalam.',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
        popular: true
    },
    {
        id: 't4',
        name: 'Lower Leg Hair Removal Laser',
        category: 'hair',
        price: 499000,
        duration: '30 Menit',
        benefit: 'Bebas bulu di area kaki bagian bawah dengan teknologi laser aman.',
        image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&q=80',
        popular: false
    },
    {
        id: 't5',
        name: 'Alma Laser Toning Face',
        category: 'face',
        price: 750000,
        duration: '25 Menit',
        benefit: 'Memudarkan bekas jerawat kehitaman (PIH) dan flek hitam secara presisi.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
        popular: false
    },
    {
        id: 't6',
        name: 'Back Rejuvenation Laser',
        category: 'body',
        price: 899000,
        duration: '40 Menit',
        benefit: 'Menghilangkan jerawat punggung & mencerahkan area punggung.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
        popular: false
    }
];

const doctorsData = [
    {
        name: 'dr. Priscillia Anggraini, Sp.DVE',
        role: 'Dokter Spesialis Estetika & Laser',
        branch: 'ZAP Clinic - Jakarta Selatan (Senayan)',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
        schedule: 'Senin - Kamis (10.00 - 16.00)'
    },
    {
        name: 'dr. Clara Devina',
        role: 'Aesthetic Medical Doctor',
        branch: 'ZAP Clinic - Jakarta Barat (Central Park)',
        avatar: 'https://images.unsplash.com/photo-1594824813566-78a933f2c60c?auto=format&fit=crop&w=400&q=80',
        schedule: 'Rabu - Minggu (11.00 - 18.00)'
    },
    {
        name: 'dr. Nadia Utami',
        role: 'Laser & Photofacial Expert',
        branch: 'ZAP Clinic - Bandung (Riau)',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
        schedule: 'Selasa - Sabtu (09.00 - 17.00)'
    },
    {
        name: 'Siti Rahma',
        role: 'Senior Certified Beautician',
        branch: 'ZAP Clinic - Surabaya (Tunjungan)',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        schedule: 'Setiap Hari (10.00 - 19.00)'
    }
];

const initialReservations = [
    {
        id: 'ZAP-88421',
        branch: 'ZAP Clinic - Jakarta Selatan (Senayan)',
        treatment: 'ZAP Photo Facial Glow',
        doctor: 'dr. Priscillia Anggraini, Sp.DVE',
        date: '2026-10-20',
        time: '11:30 WIB',
        name: 'Siti Aisyah',
        phone: '081298765432',
        price: 997000,
        status: 'Dikonfirmasi',
        created: '2026-10-15'
    }
];

// ----------------------------------------------------
// ROUTING / NAVIGATION SIMULATOR
// ----------------------------------------------------
function navigateTo(pageId) {
    const cleanId = pageId.replace('#', '');
    
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    
    const targetElement = document.getElementById(`page-${cleanId.replace('.html', '')}`);
    if (targetElement) {
        targetElement.classList.remove('hidden');
    }

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${cleanId.replace('.html', '')}`);
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// ----------------------------------------------------
// RENDERERS
// ----------------------------------------------------
function renderCatalog(filter = 'all') {
    const container = document.getElementById('catalog-container');
    if (!container) return;

    container.innerHTML = '';
    const filtered = filter === 'all' 
        ? treatmentsData 
        : treatmentsData.filter(t => t.category === filter);

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-3xl p-6 shadow-sm border border-pink-100 hover:shadow-xl transition-all flex flex-col justify-between';
        card.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-2xl mb-4">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                    ${item.category.toUpperCase()}
                </span>
                <h3 class="text-xl font-bold text-slate-800 mt-2">${item.name}</h3>
                <p class="text-slate-500 text-sm mt-2">${item.benefit}</p>
                <div class="mt-4 flex items-center text-xs text-slate-500">
                    <i class="fa-regular fa-clock text-pink-500 mr-1.5"></i> Durasi: ${item.duration}
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div>
                    <span class="text-xs text-slate-400 block">Harga Treatment</span>
                    <span class="text-lg font-extrabold text-pink-600">Rp ${item.price.toLocaleString('id-ID')}</span>
                </div>
                <button onclick="quickBook('${item.name}')" class="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 py-2 rounded-xl transition-all text-sm shadow-md">
                    Pesan Treatment
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCatalog(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.dataset.cat === category) {
            btn.className = 'cat-btn active border px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-pink-500 text-white border-pink-500 shadow-md';
        } else {
            btn.className = 'cat-btn border px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-white text-slate-700 border-pink-200 hover:border-pink-500';
        }
    });
    renderCatalog(category);
}

function renderDoctors() {
    const container = document.getElementById('doctor-container');
    if (!container) return;

    container.innerHTML = '';
    doctorsData.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-3xl p-6 border border-pink-100 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all';
        card.innerHTML = `
            <img src="${doc.avatar}" alt="${doc.name}" class="w-32 h-32 rounded-full object-cover border-4 border-pink-100 shadow-md mb-4">
            <h3 class="text-lg font-bold text-slate-800">${doc.name}</h3>
            <p class="text-xs font-semibold text-pink-600 mt-1">${doc.role}</p>
            <p class="text-xs text-slate-500 mt-3 flex items-center gap-1">
                <i class="fa-solid fa-location-dot text-pink-500"></i> ${doc.branch}
            </p>
            <div class="w-full mt-4 bg-pink-50/60 p-3 rounded-2xl border border-pink-100 text-xs text-slate-600">
                <span class="block font-bold text-slate-700 mb-0.5">Jadwal Praktik:</span>
                ${doc.schedule}
            </div>
            <button onclick="quickBookDoctor('${doc.name}')" class="mt-5 w-full bg-slate-800 hover:bg-pink-500 text-white text-xs font-bold py-2.5 rounded-xl transition-colors">
                Reservasi Dengan Dokter Ini
            </button>
        `;
        container.appendChild(card);
    });
}

function populateBookingDropdowns() {
    const treatmentSelect = document.getElementById('book-treatment');
    const doctorSelect = document.getElementById('book-doctor');

    if (treatmentSelect) {
        treatmentSelect.innerHTML = '<option value="">-- Pilih Jenis Treatment --</option>';
        treatmentsData.forEach(t => {
            treatmentSelect.innerHTML += `<option value="${t.name}">${t.name} - (Rp ${t.price.toLocaleString('id-ID')})</option>`;
        });
    }

    if (doctorSelect) {
        doctorSelect.innerHTML = '<option value="">-- Pilih Dokter / Beautician --</option>';
        doctorsData.forEach(d => {
            doctorSelect.innerHTML += `<option value="${d.name}">${d.name} (${d.role})</option>`;
        });
    }
}

function updateBookingSummary() {
    const selectedNameEl = document.getElementById('book-treatment');
    if (!selectedNameEl) return;

    const selectedName = selectedNameEl.value;
    const item = treatmentsData.find(t => t.name === selectedName);
    const priceEl = document.getElementById('summary-price');

    if (priceEl) {
        priceEl.innerText = item ? `Rp ${item.price.toLocaleString('id-ID')}` : 'Rp 0';
    }
}

// ----------------------------------------------------
// RESERVATION STORAGE & HANDLERS
// ----------------------------------------------------
function getReservations() {
    const stored = localStorage.getItem('zap_reservations');
    if (!stored) {
        localStorage.setItem('zap_reservations', JSON.stringify(initialReservations));
        return initialReservations;
    }
    return JSON.parse(stored);
}

function updateBadgeCount() {
    const list = getReservations();
    const badgeEl = document.getElementById('badge-count');
    const mobileBadgeEl = document.getElementById('mobile-badge-count');

    if (badgeEl) badgeEl.innerText = list.length;
    if (mobileBadgeEl) mobileBadgeEl.innerText = list.length;
}

function handleBookingSubmit(e) {
    e.preventDefault();
    const branch = document.getElementById('book-branch').value;
    const treatmentName = document.getElementById('book-treatment').value;
    const doctor = document.getElementById('book-doctor').value;
    const date = document.getElementById('book-date').value;
    const time = document.getElementById('book-time').value;
    const name = document.getElementById('book-name').value;
    const phone = document.getElementById('book-phone').value;

    const treatmentObj = treatmentsData.find(t => t.name === treatmentName);
    const price = treatmentObj ? treatmentObj.price : 0;

    const newBooking = {
        id: 'ZAP-' + Math.floor(10000 + Math.random() * 90000),
        branch,
        treatment: treatmentName,
        doctor,
        date,
        time,
        name,
        phone,
        price,
        status: 'Dikonfirmasi',
        created: new Date().toISOString().split('T')[0]
    };

    const currentList = getReservations();
    currentList.unshift(newBooking);
    localStorage.setItem('zap_reservations', JSON.stringify(currentList));

    document.getElementById('bookingForm').reset();
    updateBookingSummary();
    updateBadgeCount();
    openModal(newBooking);
}

function quickBook(treatmentName) {
    navigateTo('jadwal.html');
    const treatmentEl = document.getElementById('book-treatment');
    if (treatmentEl) {
        treatmentEl.value = treatmentName;
        updateBookingSummary();
    }
}

function quickBookDoctor(doctorName) {
    navigateTo('jadwal.html');
    const doctorEl = document.getElementById('book-doctor');
    if (doctorEl) {
        doctorEl.value = doctorName;
    }
}

function filterHistory(status) {
    document.querySelectorAll('.history-filter').forEach(btn => {
        if (btn.dataset.status === status) {
            btn.className = 'history-filter active text-xs font-bold px-4 py-2 rounded-xl bg-pink-500 text-white';
        } else {
            btn.className = 'history-filter text-xs font-bold px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100';
        }
    });
    renderHistory(status);
}

function renderHistory(filterStatus = 'all') {
    const container = document.getElementById('history-container');
    if (!container) return;

    container.innerHTML = '';
    let list = getReservations();

    if (filterStatus !== 'all') {
        list = list.filter(r => r.status === filterStatus);
    }

    if (list.length === 0) {
        container.innerHTML = `
            <div class="bg-white rounded-3xl p-12 text-center border border-pink-100">
                <i class="fa-regular fa-calendar-xmark text-4xl text-slate-300 mb-3"></i>
                <p class="text-slate-500 font-medium">Belum ada riwayat reservasi ditemukan.</p>
            </div>
        `;
        return;
    }

    list.forEach(res => {
        let badgeClass = 'bg-emerald-100 text-emerald-700';
        if (res.status === 'Selesai') badgeClass = 'bg-blue-100 text-blue-700';
        if (res.status === 'Dibatalkan') badgeClass = 'bg-rose-100 text-rose-700';

        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl p-6 border border-pink-100 shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4';
        card.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center gap-3">
                    <span class="font-extrabold text-slate-800 text-lg">#${res.id}</span>
                    <span class="text-xs font-bold px-3 py-1 rounded-full ${badgeClass}">${res.status}</span>
                </div>
                <h4 class="text-base font-bold text-pink-600">${res.treatment}</h4>
                <p class="text-xs text-slate-500"><i class="fa-solid fa-location-dot text-pink-500 mr-1"></i> ${res.branch}</p>
                <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 pt-2">
                    <span><i class="fa-regular fa-user text-pink-500 mr-1"></i> ${res.name}</span>
                    <span><i class="fa-solid fa-user-doctor text-pink-500 mr-1"></i> ${res.doctor}</span>
                    <span><i class="fa-regular fa-clock text-pink-500 mr-1"></i> ${res.date} (${res.time})</span>
                </div>
            </div>
            <div class="flex flex-col md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 gap-2">
                <span class="text-lg font-black text-slate-800">Rp ${res.price.toLocaleString('id-ID')}</span>
                <div class="flex items-center gap-2">
                    <button onclick='viewDetailTicket(${JSON.stringify(res)})' class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl transition-colors">
                        Detail / Cetak
                    </button>
                    ${res.status === 'Dikonfirmasi' ? `
                        <button onclick="cancelBooking('${res.id}')" class="bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold px-3.5 py-2 rounded-xl transition-colors">
                            Batalkan
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function cancelBooking(id) {
    if (confirm('Apakah Anda yakin ingin membatalkan reservasi ini?')) {
        const list = getReservations();
        const updated = list.map(item => {
            if (item.id === id) item.status = 'Dibatalkan';
            return item;
        });
        localStorage.setItem('zap_reservations', JSON.stringify(updated));
        renderHistory();
    }
}

function viewDetailTicket(res) {
    openModal(res);
}

function openModal(res) {
    const modal = document.getElementById('bookingModal');
    const content = document.getElementById('modal-content');

    if (!modal || !content) return;

    content.innerHTML = `
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div class="flex justify-between border-b pb-2">
                <span class="text-slate-500">Kode Booking:</span>
                <span class="font-mono font-bold text-pink-600">${res.id}</span>
            </div>
            <div class="flex justify-between border-b pb-2">
                <span class="text-slate-500">Pasien:</span>
                <span class="font-semibold text-slate-800">${res.name} (${res.phone})</span>
            </div>
            <div class="flex justify-between border-b pb-2">
                <span class="text-slate-500">Treatment:</span>
                <span class="font-semibold text-slate-800">${res.treatment}</span>
            </div>
            <div class="flex justify-between border-b pb-2">
                <span class="text-slate-500">Dokter/Beautician:</span>
                <span class="font-semibold text-slate-800">${res.doctor}</span>
            </div>
            <div class="flex justify-between border-b pb-2">
                <span class="text-slate-500">Cabang:</span>
                <span class="font-semibold text-slate-800">${res.branch}</span>
            </div>
            <div class="flex justify-between border-b pb-2">
                <span class="text-slate-500">Waktu Jadwal:</span>
                <span class="font-bold text-pink-600">${res.date} @ ${res.time}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-500">Total Biaya:</span>
                <span class="font-extrabold text-slate-900">Rp ${res.price.toLocaleString('id-ID')}</span>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.add('hidden');
}

function printTicket() {
    window.print();
}

// Initialize App State
window.addEventListener('DOMContentLoaded', () => {
    renderCatalog('all');
    renderDoctors();
    populateBookingDropdowns();
    updateBadgeCount();
    renderHistory();

    const hash = window.location.hash;
    if (hash) {
        navigateTo(hash.replace('#', ''));
    } else {
        navigateTo('index.html');
    }
});