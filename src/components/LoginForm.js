import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }
    onLoginSuccess() {
        this.setState({ error: '', loading: false, email: '', password: '' });
    }
    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }
    render() {
      return (
        <Card>
            <CardSection>
                <Input
                    value={this.state.email}
                    label="Email"
                    onChangeText={email => this.setState({ email })}
                    placeholder="user@gmail.com"
                />
            </CardSection>
            <CardSection>
                <Input
                    value={this.state.password}
                    placeholder="password"
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                    label="Password"
                />
            </CardSection>
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
            <CardSection >
                {this.renderButton()}
            </CardSection>
        </Card>
      );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


export default LoginForm;
