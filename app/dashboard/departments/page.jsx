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

  const formatValue = (value) => {
    switch (value) {
      case "lisans":
        return "Lisans";
      case "onlisans":
        return "Önlisans";
      case "sayisal":
        return "Sayısal";
      case "sozel":
        return "Sözel";
      case "dil":
        return "Dil";
      case "tyt":
        return "TYT";
      case "esitagirlik":
        return "Eşit Ağırlık";
      case "turkce":
        return "Türkçe";
      case "ingilizce":
        return "İngilizce";

      default:
        return value;
    }
  };

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
            <td>Bölüm Adı</td>
            <td>Program Kodu</td>
            <td>Program Türü</td>
            <td>Öğrenim Dili</td>
            <td>Puan Türü</td>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{formatValue(department.title)}</td>
              <td>{formatValue(department.progKodu)}</td>
              <td>{formatValue(department.progTuru)}</td>
              <td>{formatValue(department.ogrDili)}</td>
              <td>{formatValue(department.puanTuru)}</td>

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
