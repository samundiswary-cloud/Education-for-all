import React, { useEffect, useState } from "react";

export default function EducationDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEducationData() {
      setLoading(true);
      setError("");

      try {
        const url =
          "https://api.worldbank.org/v2/country/IND/indicator/SE.ADT.LITR.ZS?format=json";
        const response = await fetch(url);
        const json = await response.json();

        const latest = json[1].find((item) => item.value !== null);
        setData(latest);
      } catch (err) {
        setError("Failed to fetch education data");
      } finally {
        setLoading(false);
      }
    }

    fetchEducationData();
  }, []);

  return (
    <div className="card">
      <h3>Literacy Rate (India)</h3>

      {loading && <p>Loading data from API...</p>}
      {error && <p className="error">{error}</p>}

      {data && (
        <>
          <p>
            <strong>Year:</strong> {data.date}
          </p>
          <p>
            <strong>Value:</strong> {data.value} %
          </p>
        </>
      )}

      <p className="note">
        Data Source: World Bank Open Data API
      </p>
    </div>
  );
}
