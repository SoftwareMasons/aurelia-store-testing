import {Container} from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

import {TestsNotWorking} from 'tests-not-working';
import {IState} from 'models/state';
import {initialState} from 'models/initialState';

describe('App', () => {
  let container: Container;
  let store: Store<IState>;
  let sut: TestsNotWorking;

  beforeEach(() => {
    container = new Container().makeGlobal();
    store = new Store<IState>(initialState);
    container.registerInstance(Store, store);
  });

  it('store defined', () => {
    sut = container.get(TestsNotWorking);
    expect(sut.store).toBe(store);
  });
});
