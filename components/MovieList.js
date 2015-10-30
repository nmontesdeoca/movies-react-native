(function () {
    'use strict';

    var React = require('react-native');
    var MovieDetail = require('./MovieDetail');

    var {
        ActivityIndicatorIOS,
        Component,
        Image,
        ListView,
        StyleSheet,
        Text,
        TouchableHighlight,
        View
    } = React;

    var styles = StyleSheet.create({
        author: {
            color: '#656565'
        },
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            padding: 10
        },
        listView: {
            backgroundColor: '#F5FCFF'
        },
        loading: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        rightContainer: {
            flex: 1
        },
        separator: {
            height: 1,
            backgroundColor: '#ddd'
        },
        thumbnail: {
            width: 53,
            height: 81,
            marginRight: 10
        },
        title: {
            fontSize: 20,
            marginBottom: 8
        }
    });

    var REQUEST_URL = 'http://api.themoviedb.org/3/discover/movie?api_key=08dcd8a540a8fa2efbcf82dccad0473a';

    class MovieList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true,
                dataSource: new ListView.DataSource({
                    rowHasChanged: (row1, row2) => row1 !== row2
                })
            };
        }

        componentDidMount() {
            this.fetchData();
        }

        fetchData() {
            fetch(REQUEST_URL)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseData.results),
                        isLoading: false
                    });
                })
                .done();
        }

        render() {
            if (this.state.isLoading) {
                return this.renderLoadingView();
            }

            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie.bind(this)}
                    style={styles.listView}
                    />
            );
        }

        renderLoadingView() {
            return (
                <View style={styles.loading}>
                    <ActivityIndicatorIOS
                        size='large'
                        />

                    <Text>
                        Loading movies...
                    </Text>
                </View>
            );
        }

        renderMovie(movie) {
            return (
                <TouchableHighlight
                    onPress={() => this.showMovieDetail(movie)}
                    underlayColor='#dddddd'
                    >
                    <View>
                        <View style={styles.container}>
                            <Image
                                source={{uri: 'http://image.tmdb.org/t/p/w92' + movie.poster_path}}
                                style={styles.thumbnail}
                                />

                            <View style={styles.rightContainer}>
                                <Text style={styles.title}>{movie.title}</Text>
                                <Text style={styles.author}>{movie.release_date}</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                    </View>
                </TouchableHighlight>
            );
        }

        showMovieDetail(movie) {
            this.props.navigator.push({
                title: movie.title,
                component: MovieDetail,
                passProps: {movie}
            });
        }
    }

    module.exports = MovieList;
})();
