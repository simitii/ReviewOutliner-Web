import React from 'react';

class DataCacher extends React.Component {


  componentDidMount() {
    const historyState = window.history.state;
    if(historyState){
      this.setState(historyState);
    }else{
      this.propsInitialized();
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(this.props !== nextProps){
      const historyState = window.history.state;
      if(historyState){
        this.setState(historyState);
      }else{
        this.propsChanged(nextProps);
      }
    }else{
      window.history.replaceState(nextState, window.location.href);
    }
    return true;
  }
}
export default DataCacher;
