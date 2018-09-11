import React from 'react';

class DataCacher extends React.Component {

  subComponentStateSetterFactory(componentName){
    return (state) => {
      const componentState = this.state[componentName] || {};
      for(let key in state){
        componentState[key] = state[key]
      }
      const newState = {};
      newState[componentName] = componentState;
      this.setState(newState);
    };
  }

  componentDidMount() {
    const historyState = window.history.state;
    if(historyState){
      this.setState(historyState);
    }else{
      if(this.propsInitialized)
        this.propsInitialized();
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(this.props !== nextProps){
      const historyState = window.history.state;
      if(historyState){
        this.setState(historyState);
      }else{
        if(this.propsChanged)
          this.propsChanged(nextProps);
      }
    }else{
      window.history.replaceState(nextState, window.location.href);
    }
    return true;
  }
}
export default DataCacher;
