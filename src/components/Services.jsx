// src/components/Services.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Home, Landmark, Briefcase, Scale } from "lucide-react";
import API_BASE_URL from "../config";

function Services() {
  const [services, setServices] = useState([]);

useEffect(() => {
  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/services/`);
      if (!response.ok) throw new Error("Failed to fetch services");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  fetchServices();
}, []);

  // Match icons to service TITLE dynamically
  const getIcon = (TITLE) => {
    if (!TITLE) return <Scale className="w-12 h-12 text-blue-700" />;

    if (TITLE.includes("Property")) {
      return (
        <Home className="w-12 h-12 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
      );
    }
    if (TITLE.includes("Banking")) {
      return (
        <Landmark className="w-12 h-12 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
      );
    }
    if (TITLE.includes("Corporate")) {
      return (
        <Briefcase className="w-12 h-12 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
      );
    }
    if (TITLE.includes("Procurement")) {
      return (
        <Scale className="w-12 h-12 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
      );
    }
    return (
      <Scale className="w-12 h-12 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
    ); // fallback
  };

  
}

export default Services;
