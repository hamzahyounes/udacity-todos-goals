import React from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import handleReceivingData from '../actions/shared';

class App extends React.Component {

  componentDidMount() {
      const { dispatch } = this.props;
      dispatch(handleReceivingData())
  }

  render() {
      if(this.props.loading) 
          return <div className="loader"></div>
      return(<React.Fragment>
              <ConnectedTodos/>
              <ConnectedGoals/>
          </React.Fragment>)
  }
}

// class ConnectedApp extends React.Component {
//     render() {
//         return(
//             <Context.Consumer>
//                 {(store) => <App store={store} />}  
//             </Context.Consumer>
//                 )
//             }
// }

// function connect(mapStateToProps) {
//     return Component => {
//         class Receiver extends React.Component{
//             componentDidMount() {
//                 const { subscribe } = this.props.store;
//                 const unsubscribe = subscribe(() => {
//                     this.forceUpdate()
//                 })
//             }
//             componentWillUnmount() {
//                 this.unsubscribe();
//             }
          
//             render() {
//                 const { dispatch, getState } = this.props.store;
//                 const state = getState();
//                 const stateNeeded = mapStateToProps(state);

//                 return <Component {...stateNeeded} dispatch={dispatch} />
//             }
//         }

//         class ConnectedComponent extends React.Component {
//             render() {
//                 return(
//                     <Context.Consumer>
//                         {store => <Receiver store={store} />}
//                     </Context.Consumer>
//                 )
//             }
//         }

//         return ConnectedComponent;
//     }
// }

export default connect((state) => ({
  loading: state.loading
}))(App)