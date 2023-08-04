import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BookCreate, BookEdit, BookList } from "./Books";
import { AuthorCreate, AuthorEdit, AuthorList } from "./Authors";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="books"
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
    />
    <Resource
      name="authors"
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
      recordRepresentation="name"
    />
  </Admin>
);
