(function () {
    'use strict';

    var React = require('react-native');
    var Featured = require('./components/Featured');
    var Search = require('./components/Search');

    var {
        AppRegistry,
        Component,
        TabBarIOS
    } = React;

    class MovieSearch extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedTab: 'featured'
            }
        }

        render() {
            return (
                <TabBarIOS selectedTab={this.state.selectedTab}>
                    <TabBarIOS.Item
                        selected={this.state.selectedTab === 'featured'}
                        systemIcon={'featured'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'featured'
                            })
                        }}>
                        <Featured/>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        selected={this.state.selectedTab === 'search'}
                        systemIcon={'search'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'search'
                            })
                        }}>
                        <Search/>
                    </TabBarIOS.Item>
                </TabBarIOS>
            );
        }
    }

    AppRegistry.registerComponent('MovieSearch', () => MovieSearch);
})();
