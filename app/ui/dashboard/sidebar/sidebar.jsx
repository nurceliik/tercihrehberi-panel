import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdSupervisedUserCircle,
  MdWork,
  MdBlinds,
  MdLogout,
  MdApartment,
  MdApps,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    list: [
      {
        title: "Kullanıcılar",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Fakülteler",
        path: "/dashboard/faculties",
        icon: <MdApartment />,
      },
      {
        title: "Yüksekokullar",
        path: "/dashboard/yuksekokullar",
        icon: <MdWork />,
      },
      {
        title: "Meslek Yüksekokullar",
        path: "/dashboard/meslek-yuksekokullar",
        icon: <MdBlinds />,
      },
      {
        title: "Bölümler",
        path: "/dashboard/departments",
        icon: <MdApps />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  // console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {cat.title}
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Çıkış
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
