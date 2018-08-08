import {inject} from 'aurelia-dependency-injection';
import {Store, connectTo} from 'aurelia-store';
import {IState} from 'models/state';
import * as bookActions from 'actions/book-actions';

@inject(Store)
@connectTo()
export class TestsNotWorking {
  public state: IState;
  public store: Store<IState>;

  constructor(store: Store<IState>) {
    this.store = store;
    bookActions.registerBookActions(store);
  }

  activate() {
    this.store.dispatch(bookActions.LOAD_BOOKS);
  }
}

