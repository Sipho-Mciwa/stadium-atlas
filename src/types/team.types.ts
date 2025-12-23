export interface Team {
    id: number;
    name: string;
    logo: string;
    country: string;
    founded: number;

    stadium: {
        name: string;
        city: string;
        capacity: number;
        image: string;
    };
}

export type TeamsState =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "error"; message: string }
    | { status: "refreshing"; teams: Team[] }
    | { status: "success"; teams: Team[] };

    
export interface FetchTeamsResponse {
    response: Team[];
}