import { useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Input } from "../../../components/form/input";
import { UseGlobalContext } from "../../../store/store";
import styles from "./style.module.scss";

const AddUsers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { setUsers } = UseGlobalContext();

  const onSubmit = (data) => {
    setUsers((prev) => [...prev, data]);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.addUsersContainer}>
        <Input
          label="First Name"
          {...register("fName", { required: "Please enter first name" })}
          showErrors={errors?.fName}
          errorMessage={errors?.fName?.message}
        />
        <Input
          label="Last Name"
          {...register("lName", { required: "Please enter last name" })}
          showErrors={errors?.lName}
          errorMessage={errors?.lName?.message}
        />
        <Input
          label="Birth Date"
          type="date"
          {...register("birthDate", { required: "Please select birth date" })}
          showErrors={errors?.birthDate}
          errorMessage={errors?.birthDate?.message}
        />
        <Input
          label="Email"
          type="email"
          {...register("email", { required: "Please select birth date" })}
          showErrors={errors?.email}
          errorMessage={errors?.email?.message}
        />
        <Input
          label="Age"
          type="number"
          {...register("age", { required: "Please select age" })}
          showErrors={errors?.age}
          errorMessage={errors?.age?.message}
        />
        <Input label="Degree" {...register("degree")} />
      </div>
      <Button title="Submit" type="submit" extraClass={styles.btn} />
    </form>
  );
};

export default AddUsers;
