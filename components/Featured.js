(function () {
    'use strict';

    var React = require('react-native');
    var MovieList = require('./MovieList');

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

    class Featured extends Component {
        render() {
            return (
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                        title: 'Featured Movies',
                        component: MovieList
                    }}
                />
            );
        }
    }

    module.exports = Featured;
})();
