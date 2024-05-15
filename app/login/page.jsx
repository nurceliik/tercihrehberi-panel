"use client";

import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginPage = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Giriş</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button> Giriş</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginPage;
