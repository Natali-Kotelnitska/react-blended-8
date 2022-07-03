import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import contactsSelectors from 'redux/contacts/contacts-selectors';

export const ContactTable = () => {
  const contacts = useSelector(getContacts);
  const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'option'];

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders.map(item => (
              <th key={item}>item</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Avatar name={item.avatar} round={true} size={40} />
              </td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.status === 'yes' ? 'online' : 'offline'}</td>
              <td>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
