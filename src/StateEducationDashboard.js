import React, { useEffect, useState } from "react";

const DATA_URL =
  
"udise_state_sample_all_india.json";
export default function StateEducationDashboard() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStateData() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(DATA_URL);
        const json = await res.json();
        setStates(json);
        setSelectedState(json[0].state);
      } catch (e) {
        setError("Unable to load UDISE state-wise data");
      } finally {
        setLoading(false);
      }
    }
    fetchStateData();
  }, []);

  const current = states.find((s) => s.state === selectedState);

  return (
    <div className="card">
      <h3>UDISE+ State-wise Education Snapshot</h3>

      {loading && <p>Loading state-wise data...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <label>
            Select State:
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map((s) => (
                <option key={s.state} value={s.state}>
                  {s.state}
                </option>
              ))}
            </select>
          </label>

          {current && (
            <div style={{ marginTop: "15px", textAlign: "left" }}>
              <p><strong>Year:</strong> {current.year}</p>
              <p><strong>Literacy Rate:</strong> {current.literacy_rate}%</p>
              <p><strong>No. of Schools:</strong> {current.schools}</p>
              <p><strong>No. of Teachers:</strong> {current.teachers}</p>
              <p><strong>Total Enrolment:</strong> {current.enrolment}</p>
            </div>
          )}
        </>
      )}

      <p className="note">
        Source: UDISE+ (sample data used for academic demonstration)
      </p>
    </div>
  );
}
