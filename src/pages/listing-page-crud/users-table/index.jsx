import { UseGlobalContext } from "../../../store/store";
import styles from "./style.module.scss";

const UsersTable = () => {
  const { users, setUsers } = UseGlobalContext();
  const deleteUser = (id) => {
    const filterData = users?.filter((_, index) => id !== index);
    setUsers(filterData);
  };
  return (
    <>
      {users?.length ? (
        <table cellSpacing={0} className={styles.tableContainer}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>Email</th>
              <th>Age</th>
              <th>Degree</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((items, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.fName}</td>
                <td>{items.lName}</td>
                <td>{items.birthDate}</td>
                <td>{items.email}</td>
                <td>{items.age}</td>
                <td>{items.degree?.length ? items.degree : "-"}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    type="button"
                    onClick={() => deleteUser(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.noRecords}>
          No records found to access the CRUD operation please add the user data
        </p>
      )}
    </>
  );
};

export default UsersTable;
