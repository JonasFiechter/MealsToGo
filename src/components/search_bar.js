import react from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const MySearchBar = () => {
    const [searchQuery, setSearchQuery] = react.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            style={styles.searchBar}
            placeholder={'Search'}
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexGrow: 1,
    },
})

export default MySearchBar;