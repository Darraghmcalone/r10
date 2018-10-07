
import React, { createContext, Component } from "react";
import { addFave, getFaves, removeFave } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favesIds: []
    };
  }

  componentDidMount() {
    this.getFavesSessionIds();
  }

  getFavesSessionIds = () => {
    try {
      this.setState({ favesIds: getFaves() });
    } catch (error) {
      console.log(error);
    }
  };

  addFaveSession = sessionId => {
    try {
      addFave(sessionId);
      this.getFavesSessionIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFaveSession = sessionId => {
    try {
      removeFave(sessionId);
      this.getFavesSessionIds();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          getFaves: this.getFavesSessionIds,
          addFave: this.addFaveSession,
          removeFave: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;