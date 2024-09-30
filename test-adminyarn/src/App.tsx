import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(import.meta.env.VITE_JSON_SERVER_URL);

export const App = () => (
  <Admin dataProvider={dataProvider}>
+   <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;