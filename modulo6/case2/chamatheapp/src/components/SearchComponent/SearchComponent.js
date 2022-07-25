import React, { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { SearchForm, SearchInput, SubmitInput } from "../../assets/styles/SearchComponent/SearchStyle";


const SearchComponent = () => {
    
    const { username, onSubmitForm, onChangeUsername } = useContext(GlobalContext);


    return (
        <SearchForm>
            <SearchInput type="search" value={username} onChange={onChangeUsername} placeholder="Search for a GitHub user..."/>
            <SubmitInput type="submit" value="Search" onClick={onSubmitForm}/>
        </SearchForm>
    )
};

export default SearchComponent;