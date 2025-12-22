import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import LeagueFilter from './Filters/leagueFilter';
import './headers.css';
import type { League, Season } from '../types/App.types';
import SeasonFilter from './Filters/seasonFilter';
import SearchBtn from './searchBtn';

interface HeaderProps {
    setLeague: (leave: League) => void
    setSeason: (season: Season) => void
    handleSearch: () => void
    status: string;
    league: League
    season: Season
}

export default function Header({setLeague, setSeason, status, handleSearch, league, season}: HeaderProps) {
    return (
       <div>
            <AppBar position='fixed' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '70px', paddingTop: '14px', paddingLeft: '14px'}}>
                <Typography variant='h4'>Stadium Atlas</Typography>
                <div className='filters'>
                    <LeagueFilter onChange={setLeague} value={league}/>
                    <SeasonFilter onChange={setSeason} value={season}/>
                </div>
                <SearchBtn handleSearch={handleSearch} status={status} />
            </AppBar>
       </div>
    );
}