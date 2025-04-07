// import React from "react";
import styles from "./Home.module.css";
import CardComponent from "../Card/CardComponent";
import PieChartComponent from "../Chart/PieChartComponent";
import ExpenseTrends from "../Expense/ExpenseTrends";
import ExpenseList from "../Expense/ExpenseList";
import AddBalanceForm from "../Forms/AddBalanceForm";
import AddExpensesForm from "../Forms/AddExpensesForm";
import EditExpensesForm from "../Forms/EditExpensesForm";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { customModalStyles } from "../customModalStyles";

ReactModal.setAppElement("#root");
// export const customModalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// customModalStyles

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  //  show / hide Modals
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isExpenseEditOpen, setIsExpenseEditOpen] = useState(false);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  // console.log("category spends from home page::", categorySpends);

  const [categoryCounts, setCategoryCounts] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  useEffect(() => {
    if (expenseList.length > 0) {
      setExpense(
        expenseList.reduce(
          (acc, currentValue) => acc + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    let foodSpends = 0;
    let entertainmentSpends = 0;
    let travelSpends = 0;

    expenseList.forEach((item) => {
      if (item.category === "food") {
        foodSpends += Number(item.price);
      } else if (item.category === "entertainment") {
        entertainmentSpends += Number(item.price);
      } else if (item.category === "travel") {
        travelSpends += Number(item.price);
      }
    });

    setCategorySpends({
      food: foodSpends,
      entertainment: entertainmentSpends,
      travel: travelSpends,
    });
  }, [expenseList]);

  const data = [
    { name: "Food", value: categorySpends.food },
    { name: "Entertainment", value: categorySpends.entertainment },
    { name: "Travel", value: categorySpends.travel },
  ];

  return (
    <div className={styles.layout}>
      <div>
        <h1>Expense Tracker</h1>
        <div className={styles.expenseTrackerLayout}>
          <CardComponent
            cardTitle="Wallet Ballance: "
            btnTitle="+ Add Income"
            btnColor="#B5DC52"
            amount={balance}
            amountColor="#9DFF5B"
            handleClick={() => setIsBalanceOpen(true)}
          />
          <CardComponent
            cardTitle="Expenses: "
            btnTitle="+ Add Expense"
            btnColor="#FF4747"
            amount={expense}
            amountColor="#F4BB4A"
            handleClick={() => setIsExpenseOpen(true)}
          />
          <PieChartComponent pieData={data} />
        </div>
      </div>
      <div className={styles.expensesAndBarchartContainer}>
        <div>
          <ExpenseList
            expenseList={expenseList}
            setExpenseList={setExpenseList}
            isOpen={isExpenseOpen}
            setIsOpen={setIsExpenseOpen}
            balance={balance}
            setBalance={setBalance}
          />
        </div>
        <div>
          <ExpenseTrends barchartData={data} />
        </div>
      </div>
      <ReactModal
        isOpen={isBalanceOpen}
        setIsOpen={setIsBalanceOpen}
        style={customModalStyles}
      >
        <AddBalanceForm
          setIsOpen={setIsBalanceOpen}
          balance={balance}
          setBalance={setBalance}
        />
      </ReactModal>
      <ReactModal
        isOpen={isExpenseOpen}
        setIsOpen={setIsExpenseOpen}
        style={customModalStyles}
      >
        <AddExpensesForm
          categorySpends={categorySpends}
          setCategorySpends={setCategorySpends}
          setIsOpen={setIsExpenseOpen}
          setExpense={setExpense}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </ReactModal>
    </div>
  );
}
