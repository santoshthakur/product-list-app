import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.loadingWrap}>
        <div className={styles.loading}></div> Loading...
    </div>
  )
}
