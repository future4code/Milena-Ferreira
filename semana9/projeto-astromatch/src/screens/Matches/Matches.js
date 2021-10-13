import React, { useEffect, useState } from "react";
import { getMatches, clearMatches } from "../../services/requests";
import { MatchesContainer, MatchesPhoto, EachMatchContainer } from "./MatchesStyles";

function Matches() {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    getMatches(saveMatches);
  }, [])

  const saveMatches = (data) => {
    setMatches(data);
  }

  const renderedMatches = matches.map((match, index) => {
    return (
      <EachMatchContainer key={index}>
        <MatchesPhoto src={match.photo} />
        <p>{match.name}</p>
      </EachMatchContainer>
    )
  }
  )
  return (
    <MatchesContainer>
      {renderedMatches}
      <div>
        <button onClick={clearMatches}>Clear all</button>
      </div>
    </MatchesContainer>
  );
}

export default Matches;
