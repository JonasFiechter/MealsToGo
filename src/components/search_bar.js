import react from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from 'styled-components/native'

const SearchBar = styled(Searchbar)`
    flex: 1;
    flexGrow: 1;
`;

const MySearchBar = ({searchHolder}) => {
    const [searchQuery, setSearchQuery] = react.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SearchBar
            placeholder={searchHolder}
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};
export default MySearchBar;