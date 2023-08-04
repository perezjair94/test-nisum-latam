import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const AuthorList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="nationality" />
      <DateField source="yearBorn" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AuthorCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="nationality" />
      <DateInput source="yearBorn" />
    </SimpleForm>
  </Create>
);

export const AuthorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="nationality" />
      <DateInput source="yearBorn" />
    </SimpleForm>
  </Edit>
);
