import React, {useState} from "react";
import {useHistory} from "react-router";
import {UsersSearch} from "@users/ui/moleculs/UsersSearch/UsersSearch";


export const Search = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (e) => {
      setSearchTerm(e.target.value);
  };
const onSearch = (e) => {
    if (e.key === "Enter") history.push(`/search/${searchTerm}`)
};
  return (
   <UsersSearch searchTerm={searchTerm} value={searchTerm} onChange={onChange} onSearch={onSearch}/>
  )
};