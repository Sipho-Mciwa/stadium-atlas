export interface ApiTeamResponse {
    team: ApiTeam;
    venue: ApiVenue;
}

export interface ApiTeam {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
}

export interface ApiVenue {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
}

export interface ApiFootballResponse<T> {
    response: T[];
}