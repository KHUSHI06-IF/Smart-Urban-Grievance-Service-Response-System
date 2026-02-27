let complaints = JSON.parse(localStorage.getItem("complaints")) || [];


// ========= SECTION SWITCH =========
function show(id) {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");

    if (id === "list") renderComplaints();
}


// ========= IMAGE PREVIEW =========
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const img = document.getElementById("preview");
        img.src = reader.result;
        img.classList.remove("hidden");
    }

    reader.readAsDataURL(file);
}


// ========= ADD COMPLAINT =========
function addComplaint() {

    const id = "CMP" + Math.floor(Math.random() * 10000);

    const complaint = {
        id,
        title: title.value,
        desc: desc.value,
        address: address.value,
        image: preview.src || "",
        status: 0,
        date: new Date().toLocaleDateString()
    };

    complaints.push(complaint);

    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint Submitted! ID: " + id);

    show("list");
}


// ========= RENDER LIST =========
function renderComplaints() {

    const box = document.getElementById("complaintList");
    box.innerHTML = "";

    document.getElementById("total").innerText = complaints.length;

    complaints.forEach(c => {

        box.innerHTML += `
      <div class="bg-white p-4 rounded shadow flex justify-between items-center">

        <div>
          <h3 class="font-bold">${c.title}</h3>
          <p>${c.id}</p>
          <p class="text-sm text-gray-500">${c.date}</p>
        </div>

        <button onclick="track('${c.id}')" 
          class="bg-blue-500 text-white px-4 py-1 rounded">
          Track
        </button>
      </div>
    `;
    });
}


// ========= TRACKING =========
function track(id) {

    show("track");

    const c = complaints.find(x => x.id === id);

    const steps = [
        "Submitted",
        "Assigned",
        "In Progress",
        "Inspection",
        "Resolved"
    ];

    let timeline = "";

    steps.forEach((s, i) => {
        timeline += `
      <div class="flex flex-col items-center">
        <div class="w-6 h-6 rounded-full ${i <= c.status ? 'bg-green-500' : 'bg-gray-300'}"></div>
        <p class="text-sm">${s}</p>
      </div>
    `;
    });

    document.getElementById("trackBox").innerHTML = `
    <h3 class="font-bold mb-4">${c.title} (${c.id})</h3>

    ${c.image ? `<img src="${c.image}" class="w-40 mb-4 rounded">` : ""}

    <p class="mb-4">${c.desc}</p>
    <p class="mb-4 text-gray-600">Address: ${c.address}</p>

    <div class="flex justify-between mt-6">
      ${timeline}
    </div>
  `;
}