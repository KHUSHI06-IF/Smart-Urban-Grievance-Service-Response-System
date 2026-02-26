// --- Show Sections ---
function showSection(section) {
    document.querySelectorAll("div[id]").forEach(div => div.classList.add("hidden"));
    document.getElementById(section).classList.remove("hidden");
}

// --- Logout ---
function logout() {
    window.location.href = "login.html";
}

// --- Complaint Storage ---
let complaints = JSON.parse(localStorage.getItem("complaints") || "[]");

// --- Add Complaint ---
function addComplaint() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let category = document.getElementById("category").value;

    if (!title || !desc) {
        alert("Please fill all fields!");
        return;
    }

    let id = complaints.length + 1;

    let newComplaint = {
        id: id,
        title: title,
        desc: desc,
        category: category,
        status: "Submitted",
        timeline: [
            { text: "Complaint Submitted", time: new Date().toLocaleString() }
        ]
    };

    complaints.push(newComplaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint Submitted Successfully! Your ID: " + id);
    showSection("list");
    loadComplaints();
}

// --- Load Complaints List ---
function loadComplaints() {
    let list = document.getElementById("complaintList");
    list.innerHTML = "";

    complaints.forEach(c => {
        let box = document.createElement("div");
        box.className = "p-4 bg-white rounded shadow";

        box.innerHTML = `
            <h3 class="font-bold text-lg">${c.title}</h3>
            <p>${c.desc}</p>
            <p class="text-sm text-gray-500">Category: ${c.category}</p>
            <p class="text-sm font-bold mt-2">Status: ${c.status}</p>
            <button onclick="trackFromList(${c.id})"
                class="mt-3 bg-green-600 text-white px-4 py-1 rounded">
                Track
            </button>
        `;

        list.appendChild(box);
    });

    document.getElementById("totalCount").innerText = complaints.length;
}

loadComplaints();

// --- Track Complaint from List ---
function trackFromList(id) {
    showSection("track");
    document.getElementById("trackID").value = id;
    trackComplaint();
}

// --- Track Complaint ---
function trackComplaint() {
    let id = document.getElementById("trackID").value;
    let comp = complaints.find(c => c.id == id);

    let timeline = document.getElementById("timeline");
    timeline.innerHTML = "";

    if (!comp) {
        timeline.innerHTML = `<p class="text-red-600 font-bold">Complaint Not Found!</p>`;
        return;
    }

    comp.timeline.forEach(t => {
        let step = document.createElement("div");
        step.className = "bg-blue-100 p-4 rounded shadow w-56 text-center";

        step.innerHTML = `
            <h3 class="font-bold">${t.text}</h3>
            <p class="text-sm text-gray-600">${t.time}</p>
        `;

        timeline.appendChild(step);
    });
}