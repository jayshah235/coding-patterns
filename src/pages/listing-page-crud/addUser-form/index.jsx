import { useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Input } from "../../../components/form/input";
import styles from "./style.module.scss";
import { UseGlobalContext } from "../../../store/store";

const AddUsers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { setUsers } = UseGlobalContext();

  const onSubmit = (data) => {
    console.log(data, "datas");
    setUsers((prev) => [...prev, data]);
    reset()
  };
  return (
    <form
      className={styles.addUsersContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="First Name"
        parentStyle={{ flexBasis: "48%" }}
        {...register("fName", { required: "Please enter first name" })}
        showErrors={errors?.fName}
        errorMessage={errors?.fName?.message}
      />
      <Input
        label="Last Name"
        parentStyle={{ flexBasis: "48%" }}
        {...register("lName", { required: "Please enter last name" })}
        showErrors={errors?.lName}
        errorMessage={errors?.lName?.message}
      />
      <Input
        label="Birth Date"
        type="date"
        parentStyle={{ flexBasis: "48%" }}
        {...register("birthDate", { required: "Please select birth date" })}
        showErrors={errors?.birthDate}
        errorMessage={errors?.birthDate?.message}
      />
      <Input
        label="Email"
        type="email"
        parentStyle={{ flexBasis: "48%" }}
        {...register("email", { required: "Please select birth date" })}
        showErrors={errors?.email}
        errorMessage={errors?.email?.message}
      />
      <Input
        label="Age"
        type='number'
        parentStyle={{ flexBasis: "48%" }}
        {...register("age", { required: "Please select age" })}
        showErrors={errors?.age}
        errorMessage={errors?.age?.message}
      />
      <Input
        label="Degree"
        parentStyle={{ flexBasis: "48%" }}
        {...register("degree")}
      />
      <Button title="Submit" type="submit" />
    </form>
  );
};

export default AddUsers;
