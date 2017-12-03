import React, { PropTypes, Component } from 'react';
import { Text,StatusBar,View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

const App = () => (
    <View>
    <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    );

export default App;