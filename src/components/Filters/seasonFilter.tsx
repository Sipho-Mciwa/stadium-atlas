import type { Season } from "../../types/App.types";
import './Filter.css';

interface SeasonFilterProps {
    value: Season;
    onChange: (season: Season) => void
}

export default function SeasonFilter({value, onChange}: SeasonFilterProps) {
    return (
        <div>
            <select name="season" className="season-select" value={value} onChange={(event) => onChange(event.target.value as Season)}>
                <option value="2023">2022/23</option>
                <option value="2022">2021/22</option>
                <option value="2021">2020/21</option>
            </select>
        </div>
    );
}