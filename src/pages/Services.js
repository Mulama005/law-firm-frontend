import { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/services/")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the services!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-3">Our Legal Services</h1>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
              <p><strong>Price:</strong> Ksh {service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
