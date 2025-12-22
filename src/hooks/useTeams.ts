import { useCallback, useState } from "react";
import axios from "axios";
import type { TeamsState } from "../types/team.types";
import { mapTeams } from "../utils/mapTeams";
import type { ApiFootballResponse, ApiTeamResponse } from "../types/api.types";
import type { League, Season } from "../types/App.types";
import { leagueIdMap } from "../constants/leagueMap";

export function useTeams() {
    const [state, setState] = useState<TeamsState>({status: "idle"});
    const [expandedTeamId, setExpandedTeamId] = useState<number | null>(null);

    const fetchTeams = useCallback(async (league: League, season: Season) => {
        setState ({ status: 'loading'});

        const leagueId = leagueIdMap[league];
  
        try {
            const { data } = await axios.get<ApiFootballResponse<ApiTeamResponse>>(import.meta.env.VITE_APP_BASE_URL + `teams?league=${leagueId}&season=${season}`, {headers: {'x-apisports-key': import.meta.env.VITE_APP_API_KEY}});
            const teams = data.response.map(mapTeams);
           setState({status: 'success', teams: teams})
        } catch {
           setState({ status: "error", message: "Failed to load teams" });
        }
    }, []);

    return ({state, fetchTeams, expandedTeamId, setExpandedTeamId});
}