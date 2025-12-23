import type { Team } from "../../types/team.types";

interface TeamRowProps {
    team: Team
    isExpanded: boolean;
    onToggle: () => void;
}

export default function TeamRow({ team, isExpanded, onToggle }: TeamRowProps) {
    return (
        <>
            <div className="team-row-container" onClick={onToggle}>
                <div className="team-header-details">
                    <img className={isExpanded ? "team-badge-extended" : "team-badge"} src={team.logo} alt={`${team.name}_badge`}/>
                    <div>
                        <div className="team-name">{team.name}</div>
                        <div className="">Founded in: {team.founded}</div>
                    </div>
                   
                </div>
                <div>
                    <img className={isExpanded ? "team-stadium-extended" : "team-stadium"} src={team.stadium.image}/>
                </div>
            </div>
            {isExpanded && 
                <div className="extended-details">
                    <p><span>Stadium Name: </span>{team.stadium.name}</p>
                    <p><span>Capacity: </span>{team.stadium.capacity}</p>
                    <p><span>City: </span>{team.stadium.city}</p>
                </div>
            }
        </>
    );
}