import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const BookList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="author" reference="authors" />
      <DateField source="yearPublished" />
      <EditButton />
    </Datagrid>
  </List>
);

export const BookCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput source="author" reference="authors">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="yearPublished" />
    </SimpleForm>
  </Create>
);

export const BookEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <ReferenceInput source="author" reference="authors" />
      <DateInput source="yearPublished" />
    </SimpleForm>
  </Edit>
);
