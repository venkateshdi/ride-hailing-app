import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Header } from '../../components/Header';
import { Footer} from '../../components/Footer';
import { AppStore, } from '../../stores';
import {
  STORE_APP
} from '../../constants';
import "./style.scss";

export interface TodoAppProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
  // [STOURE_TODO]: TodoStore;
}

export interface AppState {
  // filter: TodoFilter;
}

@inject(STORE_APP)
@observer
export class App extends React.Component<TodoAppProps, AppState> {
  constructor(props: TodoAppProps, context: any) {
    super(props, context);
  }
        
  render() {
    return (
      <div className="normal">
        <Header />
          {this.props.children}
        <Footer />
        
      </div>
    );
  }
}
