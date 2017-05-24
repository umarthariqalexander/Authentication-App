import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC3-5cSJiavbVmKLmhiytPqLVQzBtA8Zdo',
            authDomain: 'authentication-bf405.firebaseapp.com',
            databaseURL: 'https://authentication-bf405.firebaseio.com',
            projectId: 'authentication-bf405',
            storageBucket: 'authentication-bf405.appspot.com',
            messagingSenderId: '7634914248'
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                    Log Out </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <View style={styles.logginContainerStyle} >{this.renderContent()}</View>
            </View>
        );
    }
}

const styles = {
    logginContainerStyle: {
        height: 45
    }
};
export default App;
