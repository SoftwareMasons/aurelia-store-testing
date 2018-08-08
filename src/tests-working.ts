import {inject} from 'aurelia-dependency-injection';
import {Store} from 'aurelia-store';
import {Subscription} from 'rxjs';
import {IState} from 'models/state';
import * as bookActions from 'actions/book-actions';

@inject(Store)
export class TestsWorking {
  public state: IState;
  public store: Store<IState>;
  public subscription: Subscription;

  constructor(store: Store<IState>) {
    this.store = store;
    bookActions.registerBookActions(store);
  }

  bind() {
    this.subscription = this.store.state.subscribe((state: IState) => {
      this.state = state;
    });
  }

  unbind() {
    this.subscription.unsubscribe();
  }

  activate() {
    this.store.dispatch(bookActions.LOAD_BOOKS);
  }
}

