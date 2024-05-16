import { addYuksekokul } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/examp/addExample/addExample.module.css";

const AddYuksekokulPage = () => {
  return (
    <div className={styles.container}>
      <form action={addYuksekokul} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="videoUrl" name="videoUrl" />
        <input type="text" placeholder="webSiteUrl" name="webSiteUrl" />
        <input type="text" placeholder="pdfUrl" name="pdfUrl" />
        <button type="submit">Güncelle</button>
      </form>
    </div>
  );
};

export default AddYuksekokulPage;
