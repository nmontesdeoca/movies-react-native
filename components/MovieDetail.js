(function () {
    'use strict';

    var React = require('react-native');

    var {
        StyleSheet,
        Text,
        View,
        Component,
        Image
       } = React;

    var styles = StyleSheet.create({
        container: {
            marginTop: 75,
            alignItems: 'center'
        },
        image: {
            width: 185,
            height: 278,
            padding: 10
        },
        description: {
            padding: 10,
            fontSize: 15,
            color: '#656565'
        }
    });

    class MovieDetail extends Component {
        render() {
            var movie = this.props.movie;
            var imageURI = 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
            console.log(imageURI);
            var description = movie.overview;
            return (
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: imageURI}} />
                    <Text style={styles.description}>{description}</Text>
                </View>
            );
        }
    }

    module.exports = MovieDetail;
})();
