/* ===== UrbanCare Core Logic ===== */

// 1. Smooth Scrolling for Navigation
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
        });
    }
}

// 2. Optimized Popup Management
const popups = {
    login: document.getElementById('loginPopup'),
    register: document.getElementById('registerPopup'),
    service: document.getElementById('servicePopup')
};

// Open functions
document.getElementById('loginBtn').onclick = () => popups.login.style.display = 'block';
document.getElementById('registerBtn').onclick = () => popups.register.style.display = 'block';

function openServicePopup(type) {
    const title = document.getElementById('popupTitle');
    const typeMap = {
        'file': 'File New Complaint',
        'track': 'Track Existing Request',
        'water': 'Water Supply Issue',
        'roads': 'Road & Pothole Report',
        'garbage': 'Waste Management Request',
        'electricity': 'Street Light/Power Issue',
        'publicworks': 'Public Works Department'
    };

    title.innerText = typeMap[type] || 'Service Request';
    popups.service.style.display = 'block';
}

// Universal Close Functions
function closeAllPopups() {
    Object.values(popups).forEach(p => { if (p) p.style.display = 'none'; });
}

// Global Click listener (Close on overlay click)
window.onclick = (e) => {
    if (Object.values(popups).includes(e.target)) closeAllPopups();
};

// Manual close buttons (X)
function closeServicePopup() { popups.service.style.display = 'none'; }
function closeLoginPopup() { popups.login.style.display = 'none'; }
function closeRegisterPopup() { popups.register.style.display = 'none'; }

// 3. Language & Form Handling
document.getElementById('language').addEventListener('change', function () {
    console.log('Locale changed to:', this.value);
    // Add logic here to reload content based on JSON lang files
});

document.getElementById('serviceForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulate API Call
    const btn = e.target.querySelector('button');
    btn.innerText = "Dispatching...";
    setTimeout(() => {
        alert('Ticket Generated Successfully! Redirecting to Tracking...');
        btn.innerText = "Submit Complaint";
        closeServicePopup();
    }, 1500);
});

// 4. Data Engine (Complaints & Stats)
const complaints = [
    { id: 'UC-9901', category: 'Water', title: 'Main pipe leakage', status: 'pending', date: '2026-02-25' },
    { id: 'UC-9902', category: 'Roads', title: 'Severe pothole', status: 'inprogress', date: '2026-02-24' },
    { id: 'UC-9903', category: 'Garbage', title: 'Missed collection', status: 'resolved', date: '2026-02-23' }
];

function filterComplaints(status) {
    const list = document.getElementById('complaintList');
    if (!list) return; // Guard clause if element doesn't exist

    list.innerHTML = '';
    const filtered = complaints.filter(c => status === 'all' || c.status === status);

    filtered.forEach(c => {
        const div = document.createElement('div');
        div.className = `complaint-card status-${c.status}`;
        div.innerHTML = `
            <div class="card-header">
                <span class="ticket-id">${c.id}</span>
                <span class="badge-${c.status}">${c.status.toUpperCase()}</span>
            </div>
            <h4>${c.title}</h4>
            <p>${c.category} • ${c.date}</p>
        `;
        list.appendChild(div);
    });
}

// 5. Dashboard Initialization
function initDashboard() {
    const stats = {
        total: complaints.length,
        pending: complaints.filter(c => c.status === 'pending').length,
        resolved: complaints.filter(c => c.status === 'resolved').length
    };

    document.getElementById('totalComplaints').innerText = stats.total;
    document.getElementById('inProgress').innerText = stats.pending;
    document.getElementById('resolved').innerText = stats.resolved;
}

// Initial Run
window.onload = () => {
    filterComplaints('all');
    initDashboard();
};
