<script type="module">
  // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
    import {getAnalytics} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC02P5v3WFqueR7qpwxA3cxEKVsUqQpycs",
    authDomain: "smart-grievance-project.firebaseapp.com",
    projectId: "smart-grievance-project",
    storageBucket: "smart-grievance-project.firebasestorage.app",
    messagingSenderId: "351881017713",
    appId: "1:351881017713:web:e0deca315c159579481ed0",
    measurementId: "G-3M2YY17X7P"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
</script>