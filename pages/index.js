import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header";
import Keyboard from "../src/components/keyboard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Keyboard />
      </main>
    </div>
  );
}
