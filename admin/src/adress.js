
 

const defineBackendURL = () => {
    const production = true
    var URL = ""
   if (production) {
    URL = "https://booking-server-backend.onrender.com";
    
   } else {
    URL = "http://localhost:8800";
   }
   return URL
}

export default defineBackendURL