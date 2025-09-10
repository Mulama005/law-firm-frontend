import { useEffect, useState } from "react";
import axios from "axios";

function Lawyers() {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/lawyers/")
      .then((response) => {
        setLawyers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the lawyers!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-3">Our Lawyers</h1>
      <div className="row">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{lawyer.name}</h5>
              <p><strong>Specialization:</strong> {lawyer.specialization}</p>
              <p><strong>Email:</strong> {lawyer.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lawyers;
