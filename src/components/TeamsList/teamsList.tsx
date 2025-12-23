
import type {  Team } from '../../types/team.types';
import TeamRow from './teamRow';

interface TeamsListProps {
  teams: Team[];
  expandedTeamId: number | null;
  setExpandedTeamId: (teamId: number | null) => void;
}

export default function TeamsList({ teams, expandedTeamId, setExpandedTeamId }: TeamsListProps) {
    return (
        <ul>
            {teams.map((team) => {
              const isExpanded = expandedTeamId === team.id;
              return (
                <li key={team.id}>
                  <TeamRow 
                    team={team}
                    isExpanded={isExpanded}
                    onToggle={() => setExpandedTeamId(isExpanded ? null : team.id)} />
                </li>
              );
            })}
        </ul>
    );
}