import React from "react";
import styles from "./Forms.module.css";

export default function EditExpensesForm() {
  return (
    <div className={styles.formContainer}>
      <h2>Edit Expenses</h2>
      <div>
        <form action="">
          <input type="text" name="title" id="" placeholder="Title" />
          <input type="number" name="price" id="" placeholder="Price" />
          <select name="category" id="">
            <option value="">Select category</option>
          </select>
          <input type="date" name="date" id="" placeholder="dd/mm/yyyy" />
          <button type="submit" className={styles.submitBtn}>Edit Expense</button>
          <button className={styles.cancelBtn}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
