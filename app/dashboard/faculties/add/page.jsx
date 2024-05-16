import { addFaculty } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/examp/addExample/addExample.module.css";

const AddFacultyPage = () => {
  return (
    <div className={styles.container}>
      <form action={addFaculty} className={styles.form}>
        <input type="file" accept="image/*" name="img" />
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="videoUrl" name="videoUrl" />
        <input type="text" placeholder="webSiteUrl" name="webSiteUrl" />
        <input type="text" placeholder="pdfUrl" name="pdfUrl" />
        <button type="submit">Güncelle</button>
      </form>
    </div>
  );
};

export default AddFacultyPage;
