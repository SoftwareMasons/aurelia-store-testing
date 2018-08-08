import {Container} from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

import {TestsWorking} from 'tests-working';
import {IState} from 'models/state';
import {initialState} from 'models/initialState';

describe('App', () => {
  let container: Container;
  let store: Store<IState>;
  let sut: TestsWorking;

  beforeEach(() => {
    container = new Container().makeGlobal();
    store = new Store<IState>(initialState);
    container.registerInstance(Store, store);
  });

  it('store defined', () => {
    sut = container.get(TestsWorking);
    expect(sut.store).toBe(store);
  });

  it('ctor registers actions', () => {
    spyOn(store,'registerAction');
    sut = container.get(TestsWorking);
    expect(store.registerAction).toHaveBeenCalledTimes(2);
  });

  describe('bind', () => {
    it('state defined', () => {
      sut = container.get(TestsWorking);
      sut.bind();
      expect(sut.state).toBe(initialState);
    });
  });

  describe('unbind', () => {
    it('unsubscribes', () => {
      sut=container.get(TestsWorking);
      sut.bind();
      spyOn(sut.subscription, 'unsubscribe');
      sut.unbind();
      expect(sut.subscription.unsubscribe).toHaveBeenCalled();
    });

    describe('activate', () => {
      it('dispatches LOAD_BOOKS', () => {
        sut = container.get(TestsWorking);
        spyOn(store, 'dispatch');
        sut.activate();
        expect(store.dispatch).toHaveBeenCalledWith('LOAD_BOOKS');
      });
    });   
  });
});
