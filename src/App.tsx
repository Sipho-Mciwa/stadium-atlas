import { useState } from "react";
import Header from "./components/header"
import TeamsList from "./components/TeamsList/teamsList";
import { useTeams } from "./hooks/useTeams";
import { type Season, type League } from "./types/App.types";
import CircularProgress from '@mui/material/CircularProgress';



function App() {
  const [league, setLeague] = useState<League>('EPL');
  const [season, setSeason] = useState<Season>('2023');
  const {state, fetchTeams, expandedTeamId, setExpandedTeamId} = useTeams();

  function renderContent() {
    switch (state.status) {
      case "idle":
        return (<p>Click the button to load teams</p>);
      case "loading":
        return (<div className="loading-logo"><CircularProgress /></div>);
      case "error":
        return (<p>{state.message}</p>)
      case "success":
        return (
          <TeamsList teams={state.teams} expandedTeamId={expandedTeamId} setExpandedTeamId={setExpandedTeamId}/>
        );
      
      default: {
        const _never: never = state;
        return _never;
      }
    }
  }

  const handleSearch = () => {
    fetchTeams(league, season);
  }
   
  return (
    <>
      <Header setLeague={setLeague} setSeason={setSeason} league={league} season={season} handleSearch={handleSearch} status={state.status}/>
      <div className="teams-list-container">
        {renderContent()}
      </div>
    </>
  )
}

export default App
