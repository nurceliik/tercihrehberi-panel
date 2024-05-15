import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "../search/search.jsx";
import Link from "next/link.js";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination.jsx";
import { fetchFaculties } from "@/app/lib/data.js";
import { deleteFaculty } from "@/app/lib/actions.js";

const FacultiesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, faculties } = await fetchFaculties(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Fakülte arama.." />
        <Link href="/dashboard/faculties/add">
          <button className={styles.addButton}>Yeni Ekle</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Adı</td>
            <td>Tanıtım Video</td>
            <td>Web Sitesi</td>
            <td>Tanıtım Pdf</td>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={faculty.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {faculty.title}
                </div>
              </td>
              <td>{faculty.videoUrl}</td>
              <td>{faculty.webSiteUrl}</td>
              <td>{faculty.pdfUrl}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/faculties/${faculty.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Görüntüle
                    </button>
                  </Link>
                  <form action={deleteFaculty}>
                    <input type="hidden" name="id" value={faculty.id} />
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

export default FacultiesPage;
