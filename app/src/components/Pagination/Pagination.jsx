import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import styles from "./Pagination.module.css";
import listStyles from "../Expense/ExpenseList.module.css";
import ExpenseCard from "../ExpenseCard/ExpenseCard";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  currentListItems,
  setExpenseList,
  handleDelete,
  handleEdit,
}) {
  // const handleDelete = (id) => {
  //   setExpenseList(currentListItems.filter((items) => items.id !== id));
  // };
  return (
    <div>
      <div className={listStyles.listContainer}>
        {currentListItems.map((itemDetails) => {
          return (
            <ExpenseCard
              detail={itemDetails}
              key={itemDetails.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>

      <div className={styles.pageWrapper}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GoArrowLeft />
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
}
