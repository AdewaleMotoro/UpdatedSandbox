import React from "react";

function Entry(Pros) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {Pros.emoji}
        </span>
        <span>{Pros.name}</span>
      </dt>
      <dd>{Pros.description}</dd>
    </div>
  );
}

export default Entry;
