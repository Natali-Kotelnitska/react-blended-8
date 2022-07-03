import { nanoid } from 'nanoid';
import { useState } from 'react';
import { getStatus } from 'services/statusApi';
import { useDispatch } from '';
import { addContact } from 'redux/contacts/contacts-slice';

export const AddContactView = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const id = nanoid();

  const dispatch = useDispatch();

  //   const status = () => {};
  const handlerSubmit = async e => {
    e.preventDefault();
    const status = await getStatus();
    const newContact = {
      id,
      name,
      age,
      avatar: name,
      status,
    };
    dispatch(addContact(newContact));
    setName('');
    setAge('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        <input
          type="text"
          value={name}
          name="name"
          autoComplete="off"
          id="nameId"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="number"
          value={age}
          name="age"
          autoComplete="off"
          id="ageId"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
