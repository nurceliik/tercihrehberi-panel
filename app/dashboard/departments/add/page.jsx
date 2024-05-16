"use server";
import React from "react";
import { addDepartment } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/departments/addDepartment/addDepartment.module.css";
import { fetchDepartments } from "@/app/lib/data";
import DepartmentForm from "@/app/ui/dashboard/DepartmentForm";

const AddDepartmentPage = () => {
  const formData = fetchDepartments();

  return (
    <div className={styles.container}>
      <DepartmentForm addDepartment={addDepartment} formData={formData} />
    </div>
  );
};

export default AddDepartmentPage;
