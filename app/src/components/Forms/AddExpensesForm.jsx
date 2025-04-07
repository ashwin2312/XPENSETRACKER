// import React from "react";
import { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";
import styles from "./Forms.module.css";

export default function AddExpensesForm({
  categorySpends,
  setCategorySpends,
  setIsOpen,
  setExpense,
  expenseList,
  setExpenseList,
  setBalance,
  balance,
  editID,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    date: "",
  });

  const handleCancel = () => {
    setExpenseList([]);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (balance < Number(formData.price)) {
      enqueueSnackbar("Price should be less than the wallet balance", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }
    setBalance((prev) => prev - Number(formData.price));

    // if (Number(formData.price) < 0) {
    //   enqueueSnackbar("Price should be above 0", { variant: "warning" });
    //   setIsOpen(false);
    //   return;
    // }

    setExpense((prev) => prev + Number(formData.price));
    // const lastId = expenseList.length > 0 ? expenseList[0].id : 0;
    // setExpenseList((prev) => [{ ...formData, id: lastId + 1 }, ...prev]);
    setExpenseList((prev) => [{ ...formData, id: uuidv4() }, ...prev]);
    setFormData({
      title: "",
      category: "",
      price: "",
      date: "",
    });
    setIsOpen(false);

    let categoryName = formData.category;
    setCategorySpends((prev) => ({
      ...prev,
      [categoryName]: prev[categoryName] + Number(formData.price),
    }));
    // console.log("categorySpends from addExpenseFrom::", categorySpends);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const updated = expenseList.map((item) => {
      if (item.id == editID) {
        const priceDifference = item.price - Number(formData.price);

        if (priceDifference < 0 && Math.abs(priceDifference) > balance) {
          enqueueSnackbar("Price should not exceed the wallet balance", {
            variant: "warning",
          });
          setIsOpen(false);
          return { ...item };
        }

        setBalance((prev) => prev + priceDifference);
        return { ...formData, id: editID };
      } else {
        return item;
      }
    });
    setExpenseList(updated);
    setIsOpen(false);
  };

  useEffect(() => {
    if (editID) {
      const expenseData = expenseList.find((item) => item.id == editID);

      setFormData({
        title: expenseData.title,
        category: expenseData.category,
        price: expenseData.price,
        date: expenseData.date,
      });
    }
  }, [editID]);

  return (
    <div className={styles.formContainer}>
      <h2>{editID ? "Edit " : "Add "} Expenses</h2>
      <div>
        <form action="" onSubmit={editID ? handleEdit : handleAdd}>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            id=""
            placeholder="Title"
            value={formData.title}
            required
          />
          <input
            onChange={handleChange}
            type="number"
            name="price"
            id=""
            placeholder="Price"
            value={formData.price}
            required
          />
          <select
            onChange={handleChange}
            name="category"
            value={formData.category}
            id=""
            required
          >
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment </option>
            <option value="travel">Travel </option>
          </select>
          <input
            onChange={handleChange}
            type="date"
            value={formData.date}
            name="date"
            id=""
            placeholder="dd/mm/yyyy"
            required
          />
          <button className={styles.submitBtn} type="submit">
            {editID ? "Edit " : "Add "} Expense
          </button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
