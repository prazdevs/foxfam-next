import React, { Component, createContext } from 'react';
import { auth, generateUserDocument } from '../firebase';

export const UserContext = createContext({ user: null });

export class UserProvider extends Component {
  state = { user: null };

  unsubscribe = null;

  componentDidMount = () => {
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };

  componentWillUnmount = async () => {
    await this.unsubscribe();
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
