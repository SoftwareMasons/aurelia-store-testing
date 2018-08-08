import { Container } from 'aurelia-dependency-injection';
import { Endpoint, Rest } from 'aurelia-api';
import { HttpClient } from 'aurelia-fetch-client';
import { Store } from 'aurelia-store';

import { IState } from 'models/state';
import { Book } from 'models/book';
import * as bookActions from 'actions/book-actions';

export class BookService {

  public static getBooks() {
    let store: Store<IState> = Container.instance.get(Store);
    let client: Rest = Container.instance.get(Endpoint.of('api'));
    client.find('book').then((books) => {
      store.dispatch(bookActions.BOOKS_LOADED, books);
    })
  }
}
