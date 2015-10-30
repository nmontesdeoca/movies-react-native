(function () {
    'use strict';

    var React = require('react-native');
    var SearchMovies = require('./SearchMovies');

    var {
        Component,
        NavigatorIOS,
        StyleSheet
    } = React;

    var styles = StyleSheet.create({
        container: {
            flex: 1
        }
    });

    class Search extends Component {
        render() {
            return (
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                        title: 'Search Movies',
                        component: SearchMovies
                    }}
                />
            );
        }
    }

    module.exports = Search;
})();
