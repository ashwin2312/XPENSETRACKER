import React, { useState } from "react";
import { SnackbarProvider, enqueueSnackbar, useSnackbar } from "notistack";
import styles from "./Forms.module.css";

export default function AddBalanceForm({ setIsOpen, setBalance, balance }) {
  const [value, setValue] = useState();
  // const {enqueueSnackbar} = useSnackbar()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(value) < 0) {
      enqueueSnackbar("Income should be greater than 0", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }
    setBalance((prev) => prev + Number(value));
    setIsOpen(false);
  };

  // console.log("balance::", balance);
  return (
    <div className={styles.formContainer}>
      <h2>Add Balance</h2>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="number"
            name=""
            id=""
            placeholder="Income Amount"
            value={value}
            onChange={(e) => setValue(() => e.target.value)}
          />
          <button className={styles.submitBtn} type="submit">
            Add Balance
          </button>
          <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
