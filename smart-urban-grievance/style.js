// 3D Tilt Effect
const tiltCards = document.querySelectorAll(".tilt");

tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
    // Dynamic Hero Image Slider

    // Dynamic Hero Image Slider

    const images = [
        "https://metafin.com.my/blog/wp-content/uploads/2025/05/close-up-big-pothole-with-dirty-rain-water-road-scaled.jpg", // pothole
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231", // street light
        "https://images.unsplash.com/photo-1581091012184-7f5f0f0b0c9f", // broken pipeline
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"  // park
    ];

    let currentIndex = 0;
    const heroImage = document.getElementById("dynamicImage");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.style.opacity = 0;

        setTimeout(() => {
            heroImage.src = images[currentIndex];
            heroImage.style.opacity = 1;
        }, 400);

    }, 3000);

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    function showSection(id) {
        document.querySelectorAll("#home,#new,#list,#track")
            .forEach(s => s.classList.add("hidden"));

        document.getElementById(id).classList.remove("hidden");

        if (id === "list") renderComplaints();
    }

    function addComplaint() {
        const title = document.getElementById("title").value;
        const desc = document.getElementById("desc").value;

        const id = "CMP" + Math.floor(Math.random() * 10000);

        complaints.push({
            id,
            title,
            desc,
            status: 0
        });

        localStorage.setItem("complaints", JSON.stringify(complaints));

        alert("Complaint Submitted: " + id);

        showSection("list");
    }

    function renderComplaints() {
        const box = document.getElementById("complaintList");
        box.innerHTML = "";

        complaints.forEach(c => {
            box.innerHTML += `
      <div class="bg-white p-4 rounded shadow flex justify-between">
        <div>
          <h3 class="font-bold">${c.title}</h3>
          <p>${c.id}</p>
        </div>
        <button onclick="track('${c.id}')" class="bg-blue-500 text-white px-3 rounded">
          Track
        </button>
      </div>
    `;
        });

        document.getElementById("totalCount").innerText = complaints.length;
    }

    function track(id) {
        showSection("track");

        const steps = ["Submitted", "Assigned", "In Progress", "Inspection", "Resolved"];

        let html = "";

        steps.forEach((s, i) => {
            html += `
      <div class="text-center">
        <div class="w-6 h-6 rounded-full ${i <= 2 ? "bg-green-500" : "bg-gray-300"}"></div>
        <p>${s}</p>
      </div>
    `;
        });

        document.getElementById("timeline").innerHTML = html;
    }

    function logout() {
        window.location = "login.html";
    }
});