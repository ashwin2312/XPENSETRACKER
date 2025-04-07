// import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { BsSuitcase } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import styles from "./ExpenseCard.module.css";

export default function ExpenseCard({ detail, handleDelete, handleEdit }) {
  console.log("detail::", detail);
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardDetails}>
          <div className={styles.cardIcon}>
            {detail.category === "food" && <MdOutlineFoodBank />}
            {detail.category === "travel" && <BsSuitcase />}
            {detail.category === "entertainment" && <CiGift />}
          </div>
          <div className="cardContext">
            <p>{detail.title}</p>
            <p style={{ color: "#9B9B9B" }}>{detail.date}</p>
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <p className={styles.cardPrice}>₹ {detail.price}</p>
          <button
            style={{ background: " #FF3E3E" }}
            onClick={() => handleDelete(detail.id)}
          >
            <TiDeleteOutline />
          </button>
          <button
            style={{ background: "#F4BB4A" }}
            onClick={() => handleEdit(detail.id)}
          >
            <CiEdit />
          </button>
        </div>
        {/* <br /> */}
      </div>
      <div className={styles.lineStyle}>{/* <br /> */}</div>
    </>
  );
}
