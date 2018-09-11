import React from 'react';

class DataCacher extends React.Component {

  subComponentStateFactory(componentName){
    return {
      initState: ((state) => {
        this.setState(state);
      }).bind(this),
      setState: ((state) => {
        this.setState(state);
      }).bind(this),
      getState: (() => {
        return this.state[componentName] || {};
      }).bind(this)
    }
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
