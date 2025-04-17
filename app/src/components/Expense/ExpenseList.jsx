import React, { useState } from "react";
import styles from "./ExpenseList.module.css";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import Pagination from "../Pagination/Pagination";
import ReactModal from "react-modal";
import EditExpensesForm from "../Forms/EditExpensesForm";
import AddExpensesForm from "../Forms/AddExpensesForm";
// import { useState } from "react";

export default function ExpenseList({
  expenseList,
  setExpenseList,
  isOpen,
  setIsOpen,
  balance,
  setBalance,
}) {
  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  console.log("expenseList::", expenseList);

  const [editId, setEditId] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const indexOfLastListItem = currentPage * rowsPerPage;
  const indexOfFirstListItem = indexOfLastListItem - rowsPerPage;

  const totalPages = Math.ceil(expenseList.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentListItems = expenseList.slice(
    indexOfFirstListItem,
    indexOfLastListItem
  );

  const handleDelete = (id) => {
    console.log("id::", id);
    const item = expenseList.find((listItem) => listItem.id == id);
    const price = Number(item.price);
    setBalance((prev) => prev + price);
    console.log("Balance from ExpenseList::", balance);

    setExpenseList((prev) => prev.filter((item) => item.id != id));

    // setExpenseList(expenseList.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    setEditId(id);
    // console.log("HandleEdit called");
    // setIsOpen(true);
    setIsDisplay(true);
  };

  return (
    <div>
      <h2>Recent Transactions</h2>
      <div className={styles.listContainer}>
        {expenseList.length == 0 && (
          <div className={styles.emptyListContainer}>
            <p>No transactions!</p>
          </div>
        )}
        {expenseList.length > 0 && expenseList.length <= 3
          ? expenseList.map((itemDetails) => {
              return (
                <ExpenseCard
                  detail={itemDetails}
                  key={itemDetails.id}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })
          : ""}

        {expenseList.length > 3 && (
          <Pagination
            setExpenseList={setExpenseList}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            currentListItems={currentListItems}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )}
        {/* <Pagination expenseList={expenseList} /> */}
      </div>

      <ReactModal
        isOpen={isDisplay}
        setIsOpen={setIsDisplay}
        style={customModalStyles}
      >
        <AddExpensesForm
          editID={editId}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setIsOpen={setIsDisplay}
          balance={balance}
          setBalance={setBalance}
        />
      </ReactModal>
    </div>
  );
}
