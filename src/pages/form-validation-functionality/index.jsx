import { Input } from "../../components/form/input";
import { Button } from "../../components/button";
import { useForm } from "react-hook-form";
import styles from "./style.module.scss";

/*
  Note:: If there is a multi stepper form or very
   huge form with some dependencies i would
    break them in components and can use form
     context of react -hook-form to manage it globally
  */

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    /*In data we will get all the values
     with keys which we can share to payload
      for post request api */
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        <Input
          label="First Name"
          {...register("fName", { required: "Please enter first name" })}
          showErrors={errors?.fName}
          errorMessage={errors?.fName?.message}
        />
        <Input
          label="Middle Name"
          {...register("mName", { required: "Please enter middle name" })}
          showErrors={errors?.mName}
          errorMessage={errors?.mName?.message}
        />
        <Input
          label="Last Name"
          {...register("lName", { required: "Please enter last name" })}
          showErrors={errors?.lName}
          errorMessage={errors?.lName?.message}
        />
        <Input
          label="Email"
          type="email"
          {...register("email", { required: "Please enter email" })}
          showErrors={errors?.email}
          errorMessage={errors?.email?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password", { required: "Please enter password" })}
          showErrors={errors?.password}
          errorMessage={errors?.password?.message}
        />
        <Input
          label="Date"
          type="date"
          {...register("date", { required: "Please select date" })}
          showErrors={errors?.date}
          errorMessage={errors?.date?.message}
        />
        <Input
          label="Time"
          type="time"
          {...register("time", { required: "Please select time" })}
          showErrors={errors?.time}
          errorMessage={errors?.time?.message}
        />
        <Input
          label="Account No."
          {...register("accNo", { required: "Please enter account number" })}
          showErrors={errors?.accNo}
          errorMessage={errors?.accNo?.message}
        />
        <Input
          label="Pf No."
          type='number'
          {...register("pfNo", { required: "Please enter pf number" })}
          showErrors={errors?.pfNo}
          errorMessage={errors?.pfNo?.message}
        />
           <Input
          label="School Name"
          {...register("schoolName", { required: "Please enter school name" })}
          showErrors={errors?.schoolName}
          errorMessage={errors?.schoolName?.message}
        />
      </div>
        <Button title="Submit" />
      </form>
  );
};

export default FormValidation;
