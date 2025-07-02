import styles from './layout.module.css';
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <div className={styles.menu}><h1>About Layout</h1></div>
      <div className={styles.page}>{children}</div>
    </div>
  );
}