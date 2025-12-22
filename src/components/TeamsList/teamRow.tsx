
interface TeamRowProps {
    name: string
    badge: string
    stadium: {
        name: string;
        city: string;
        capacity: number;
        image: string;
    }
    founded: number
    isExpanded: boolean;
    onToggle: () => void;
}

export default function TeamRow({ name, badge, stadium, founded, isExpanded, onToggle }: TeamRowProps) {
    return (
        <>
            <div className="team-row-container" onClick={onToggle}>
                <div className="team-header-details">
                    <img className={isExpanded ? "team-badge-extended" : "team-badge"} src={badge} alt={`${name}_badge`}/>
                    <div>
                        <div className="team-name">{name}</div>
                        <div className="">Founded in: {founded}</div>
                    </div>
                   
                </div>
                <div>
                    <img className={isExpanded ? "team-stadium-extended" : "team-stadium"} src={stadium.image}/>
                </div>
            </div>
            {isExpanded && 
                <div className="extended-details">
                    <p><span>Stadium Name: </span>{stadium.name}</p>
                    <p><span>Capacity: </span>{stadium.capacity}</p>
                    <p><span>City: </span>{stadium.city}</p>
                </div>
            }
            {/* <hr /> */}
        </>
    );
}