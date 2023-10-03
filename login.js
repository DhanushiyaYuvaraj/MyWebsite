import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
        import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

        const firebaseConfig = {
        apiKey: "AIzaSyCKx4fRoh_5IiZ3lvRysJc3ROf5LG8tAzs",
        authDomain: "myfirstwebsite-f98e6.firebaseapp.com",
        projectId: "myfirstwebsite-f98e6",
        storageBucket: "myfirstwebsite-f98e6.appspot.com",
        messagingSenderId: "393360252217",
        appId: "1:393360252217:web:f8b5291c1882a3b7d59ce8",
        measurementId: "G-LFTP83QW51"
      };

      
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("login").addEventListener('click', function() {
                signInWithRedirect(auth, provider);
                getRedirectResult(auth)
                    .then((result) => {
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        const user = result.user;
                        console.log("logged in");
                        // Redirect to index.html
                      window.location.href = "nextpage.html";

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.customData.email;
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        console.log(errorMessage);
                    });
            });
        });