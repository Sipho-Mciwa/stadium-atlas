import type { League } from '../../types/App.types';
import './Filter.css';

interface LeagueFilterProps {
    value: League;
    onChange: (league: League) => void
}

export default function LeagueFilter({value, onChange}: LeagueFilterProps) {
    return (
        <div>
            <select name="league" className="league-select" value={value} onChange={(event) => onChange(event.target.value as League)}>
                <option value="" disabled defaultValue={"Select league"} hidden>Select league</option>
                <option value="EPL">Premier League</option>
                <option value="LaLiga">La Liga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="SerieA">Serie A</option>
                <option value="Ligue1">Ligue 1</option>
            </select>
        </div>
    );
}