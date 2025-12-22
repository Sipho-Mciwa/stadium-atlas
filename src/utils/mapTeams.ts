import type { ApiTeamResponse } from "../types/api.types";
import type { Team } from "../types/team.types";

export function mapTeams(api: ApiTeamResponse): Team {
    return ({
        id: api.team.id,
        name: api.team.name,
        logo: api.team.logo,
        country: api.team.country,
        founded: api.team.founded,

        stadium: {
            name: api.venue.name,
            city: api.venue.city,
            capacity: api.venue.capacity,
            image: api.venue.image
        }
    });
};