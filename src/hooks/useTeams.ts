import { useCallback, useState } from "react";
import type { TeamsState } from "../types/team.types";
import { mapTeams } from "../utils/mapTeams";
import type { ApiFootballResponse, ApiTeamResponse } from "../types/api.types";
import type { League, Season } from "../types/App.types";
import { leagueIdMap } from "../constants/leagueMap";
import { api } from "./client";

export function useTeams() {
    const [state, setState] = useState<TeamsState>({status: "idle"});
    
    const fetchTeams = useCallback(async (league: League, season: Season) => {
        setState (prev => prev.status === 'success' ? {status: "refreshing", teams: prev.teams} : { status: 'loading'});

        const leagueId = leagueIdMap[league];
  
        try {
            const { data } = await api.get<ApiFootballResponse<ApiTeamResponse>>(`teams?league=${leagueId}&season=${season}`);
            const teams = data.response.map(mapTeams);
           setState({status: 'success', teams: teams})
        } catch {
           setState({ status: "error", message: "Failed to load teams" });
        }
    }, []);
    
    return ({ state, fetchTeams });
}