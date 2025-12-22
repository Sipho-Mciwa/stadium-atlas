interface SearchBtnProps {
    status: string;
    handleSearch: () => void
}

export default function SearchBtn({status, handleSearch}: SearchBtnProps) {
    return (<button className="search-btn" onClick={handleSearch} disabled={status === 'loading'}>Search</button>);
}