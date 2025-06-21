import React, { useState } from "react";
import domain1 from "./questions/domain1";
import domain2 from "./questions/domain2";
import domain3 from "./questions/domain3";
import domain4 from "./questions/domain4";
import domain5 from "./questions/domain5";
import domain6 from "./questions/domain6";
import Flashcards from "./components/Flashcards";

const domains = [
  { name: "Domain 1: Cloud Concepts, Architecture and Design", value: "domain1", data: domain1 },
  { name: "Domain 2: Cloud Data Security", value: "domain2", data: domain2 },
  { name: "Domain 3: Cloud Platform & Infrastructure Security", value: "domain3", data: domain3 },
  { name: "Domain 4: Cloud Application Security", value: "domain4", data: domain4 },
  { name: "Domain 5: Cloud Security Operations", value: "domain5", data: domain5 },
  { name: "Domain 6: Legal, Risk, and Compliance", value: "domain6", data: domain6 },
];

function FlashcardSection() {
  const [selectedDomain, setSelectedDomain] = useState(domains[0].value);

  const flashcards = domains
    .find(d => d.value === selectedDomain)
    .data.map(q => ({
      front: q.question,
      back: q.explanation
    }));

  return (
    <div>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#43a047",
            fontFamily: '"Segoe UI", Arial, sans-serif',
            letterSpacing: "0.01em",
            marginRight: 12,
            verticalAlign: "middle"
          }}
        >
          Choose a domain:
        </span>
        <select
          value={selectedDomain}
          onChange={e => setSelectedDomain(e.target.value)}
          style={{
            fontSize: "1.08rem",
            fontWeight: 500,
            fontFamily: '"Segoe UI", Arial, sans-serif',
            color: "#fff",
            background: "#388e3c",
            border: "2px solid #43a047",
            borderRadius: 8,
            padding: "10px 18px",
            outline: "none",
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 rgba(67,160,71,0.10)",
            transition: "border 0.2s"
          }}
        >
          {domains.map(d => (
            <option
              key={d.value}
              value={d.value}
              style={{
                color: "#222",
                fontFamily: '"Segoe UI", Arial, sans-serif'
              }}
            >
              {d.name}
            </option>
          ))}
        </select>
      </div>
      <Flashcards flashcards={flashcards} />
    </div>
  );
}

export default FlashcardSection;