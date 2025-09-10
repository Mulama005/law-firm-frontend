const isProduction = process.env.NODE_ENV === "production";

const API_BASE_URL = isProduction
  ? "https://law-firm-backend-rqjz.onrender.com"
  : "http://127.0.0.1:8000";

export default API_BASE_URL;
