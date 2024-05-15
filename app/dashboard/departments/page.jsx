import styles from "@/app/ui/dashboard/departments/departments.module.css";
import Search from "../search/search.jsx";
import Link from "next/link.js";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination.jsx";
import { fetchDepartments } from "@/app/lib/data.js";
import { deleteDepartment } from "@/app/lib/actions.js";

const DepartmentsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, departments } = await fetchDepartments(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Bölüm arama.." />
        <Link href="/dashboard/departments/add">
          <button className={styles.addButton}>Yeni Ekle</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Adı</td>
            <td>Taban Puanı</td>
            <td>Öğrenim Dili</td>
            <td>Öğrenim Türü</td>
            <td>Puan Türü</td>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>
                <div>
                  <Image
                    src={department.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                  />
                  {department.title}
                </div>
              </td>
              <td>{department.progTuru}</td>
              <td>{department.ogrDili}</td>
              <td>{department.puanTuru}</td>
              <td>{department.pointType}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/departments/${department.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Görüntüle
                    </button>
                  </Link>
                  <form action={deleteDepartment}>
                    <input type="hidden" name="id" value={department.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Sil
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default DepartmentsPage;
