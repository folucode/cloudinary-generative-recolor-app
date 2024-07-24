import { Paint, paints } from '@/lib/data';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My paint store</h1>
      <div className={styles.grid}>
        {paints.map((paint: Paint) => (
          <a href={`/try-out?colour=${paint.colour}`} className={styles.card}>
            <h2>
              Try It Out <span>-&gt;</span>
            </h2>
            <img className={styles.img} src={paint.imageUrl} />
            <p>Colour: {paint.colour}</p>
            <p>Price: ${paint.price}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
