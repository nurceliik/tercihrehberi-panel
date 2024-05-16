"use server";

import styles from "@/app/ui/dashboard/departments/singleDepartment.module.css";
import Image from "next/image";
import { fetchDepartment } from "@/app/lib/data";
import UpdateForm from "@/app/ui/dashboard/UpdateForm";
import { updateDepartment } from "@/app/lib/actions";

const SingleDepartmentPage = async ({ params }) => {
  const { id } = params;
  const formData = await fetchDepartment(id);

  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {department.title}
      </div> */}
      <div className={styles.formContainer}>
        <UpdateForm formData={formData} updateDepartment={updateDepartment} />
      </div>
    </div>
  );
};

export default SingleDepartmentPage;
