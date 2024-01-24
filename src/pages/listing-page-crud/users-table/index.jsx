import { UseGlobalContext } from "../../../store/store";
import styles from "./style.module.scss";

const UsersTable = () => {
  const { users, setUsers } = UseGlobalContext();
  console.log(users, "users");

  const deleteUser = (id) => {
    console.log(id);

    const filterData = users?.filter((_, index) => id !== index);
    setUsers(filterData);
  };
  return (
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
        {users?.length ? (
          users?.map((items, index) => (
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
          ))
        ) : (
          <div className={styles.noRecordFound}> No records found</div>
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
