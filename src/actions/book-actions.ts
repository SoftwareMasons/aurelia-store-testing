import { Store } from 'aurelia-store';
import { IState } from 'models/state';
import { Book } from 'models/book';
import { BookService } from 'services/book-service';

export function loadBooks(state: IState): IState {
  BookService.getBooks();
  return state;
}

export function booksLoaded(state: IState, books: Book[]): IState {
  let newState: IState = { ...state, books };
  return newState;
}

export const LOAD_BOOKS: string = "LOAD_BOOKS";
export const BOOKS_LOADED: string = "BOOKS_LOADED";

export function registerBookActions(store: Store<IState>) {
  store.registerAction(LOAD_BOOKS, loadBooks);
  store.registerAction(BOOKS_LOADED, booksLoaded);
};
