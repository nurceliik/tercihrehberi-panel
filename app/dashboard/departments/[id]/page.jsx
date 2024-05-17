"use server";
import styles from "@/app/ui/dashboard/departments/singleDepartment.module.css";
import Image from "next/image";
import { fetchDepartment } from "@/app/lib/data";
import UpdateForm from "@/app/ui/dashboard/UpdateForm";
import { updateDepartment } from "@/app/lib/actions";
import { useUpdateDepartment } from "@/app/lib/handle";

const SingleDepartmentPage = async ({ params }) => {
  const { id } = params;
  const department = await fetchDepartment(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {department && (
          <UpdateForm
            id={department.id}
            title={department.title}
            progKodu={department.progKodu}
            progTuru={department.progTuru}
            puanTuru={department.puanTuru}
            fakAdi={department.fakAdi}
            ogrDili={department.ogrDili}
            updateDepartment={handleUpdateDepartment}
          />
        )}
      </div>
    </div>
  );
};

export default SingleDepartmentPage;
