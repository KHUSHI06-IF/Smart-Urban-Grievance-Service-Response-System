import os

files = ["complaint.html", "track.html", "profile.html", "dashboard.html"]

profile_target = """                <!-- Profile Dropdown -->
                <div class="flex items-center cursor-pointer">
                    <img src="https://ui-avatars.com/api/?name=Khushi&background=1d4ed8&color=fff" alt="User"
                        class="h-9 w-9 rounded-full border-2 border-primary object-cover">
                    <div class="ml-3 hidden md:block">
                        <p class="text-sm font-semibold text-gray-700">Khushi</p>
                        <p class="text-xs text-gray-500">Citizen</p>
                    </div>
                    <i class="fas fa-chevron-down ml-2 text-xs text-gray-400"></i>
                </div>"""

profile_replace = """                <!-- Profile Dropdown -->
                <div class="flex items-center cursor-pointer">
                    <img id="userAvatar" src="https://ui-avatars.com/api/?name=User&background=1d4ed8&color=fff" alt="User"
                        class="h-9 w-9 rounded-full border-2 border-primary object-cover">
                    <div class="ml-3 hidden md:block">
                        <p id="userName" class="text-sm font-semibold text-gray-700">Loading...</p>
                        <p id="userRole" class="text-xs text-gray-500">Citizen</p>
                    </div>
                    <i class="fas fa-chevron-down ml-2 text-xs text-gray-400"></i>
                </div>"""

firebase_script = """    <!-- Firebase SDK -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
        import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

        // 🔥 YOUR FIREBASE CONFIG
        const firebaseConfig = {
            apiKey: "AIzaSyC02P5v3WFqueR7qpwxA3cxEKVsUqQpycs",
            authDomain: "smart-grievance-project.firebaseapp.com",
            projectId: "smart-grievance-project",
            storageBucket: "smart-grievance-project.firebasestorage.app",
            messagingSenderId: "351881017713",
            appId: "1:351881017713:web:e0deca315c159579481ed0",
            measurementId: "G-3M2YY17X7P"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        // Check logged-in user
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                let displayName = user.displayName || user.email.split('@')[0];

                try {
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        if (userData.name) displayName = userData.name;
                        if (userData.firstName) displayName = userData.firstName + " " + (userData.lastName || "");
                    }
                } catch(error) {
                    console.error("Error fetching Firestore user data:", error);
                }

                displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

                const userNameEl = document.getElementById("userName");
                if(userNameEl) userNameEl.innerText = displayName;
                
                const userRoleEl = document.getElementById("userRole");
                if(userRoleEl) userRoleEl.innerText = "Citizen";
                
                const userAvatarEl = document.getElementById("userAvatar");
                if(userAvatarEl) userAvatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=1d4ed8&color=fff`;

                // Update Profile page Specific
                const profileNameText = document.getElementById("profileNameText");
                if(profileNameText) profileNameText.innerText = displayName;

                const profileNameInput = document.getElementById("profileNameInput");
                if(profileNameInput) profileNameInput.value = displayName;

                const profileEmailInput = document.getElementById("profileEmailInput");
                if(profileEmailInput) profileEmailInput.value = user.email;

                const profileAvatar = document.getElementById("profileAvatar");
                if(profileAvatar) profileAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=1d4ed8&color=fff&size=200`;

            } else {
                window.location.href = "login.html";
            }
        });
    </script>
</body>"""

for f in files:
    path = os.path.join(r"c:\Users\rahur\OneDrive\ドキュメント\Desktop\smart-urban-grievance", f)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
        
        content = content.replace(profile_target, profile_replace)

        if "profile.html" in f:
            content = content.replace('<img src="https://ui-avatars.com/api/?name=Khushi&background=1d4ed8&color=fff&size=200"', '<img id="profileAvatar" src="https://ui-avatars.com/api/?name=User&background=1d4ed8&color=fff&size=200"')
            content = content.replace('<h2 class="text-xl font-bold text-gray-800">Khushi</h2>', '<h2 id="profileNameText" class="text-xl font-bold text-gray-800">Loading...</h2>')
            content = content.replace('<input type="text" value="Khushi"', '<input id="profileNameInput" type="text" value="Loading..."')
            content = content.replace('<input type="email" value="khushi@example.com"', '<input id="profileEmailInput" type="email" value="..."')
        
        if "<!-- Firebase SDK -->" not in content:
            content = content.replace("</body>", firebase_script)
            
        with open(path, "w", encoding="utf-8") as file:
            file.write(content)

print(f"Updates complete.")
