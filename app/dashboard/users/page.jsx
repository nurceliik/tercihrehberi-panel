import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "../search/search.jsx";
import Link from "next/link.js";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination.jsx";
import { fetchUsers } from "@/app/lib/data.js";
import { deleteUser } from "@/app/lib/actions.js";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Kullanıcı arama.." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Yeni Ekle</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Kullanıcı Adı</td>
            <td>Email</td>
            <td>Oluşturulduğu Tarih</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td> */}
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Görüntüle
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
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

export default UsersPage;
