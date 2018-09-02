import { observable, computed, action } from 'mobx';

export class AppStore {

  @observable time = new Date().toLocaleTimeString('en-US');

  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString('en-US');
    }, 1000);
  }
}

export default AppStore;
