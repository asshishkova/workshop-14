import styles from "./MovieItem.module.css";
import empty_star from '../../assets/empty_star.png';
import rated_star from '../../assets/rated_star.png';
import { updateMovieRating } from "../../Services/MovieService";


export default function MovieItem({id, title, synopsis, year, img, rating, updateMovies}) {
  const intRating = parseInt(rating, 10);
  const updateRating = async(i) => {
    await updateMovieRating(id, i);
    await updateMovies();
  }
  const stars = [];
  for (let i = 0; i < 5; i++) {
    let star;
    if (i < intRating) {
      star = rated_star;
    } else {
      star = empty_star;
    }
    stars.push(<img src={star} key={i} onClick={() => updateRating(i)} alt="star" className={styles.star} />);
  }

    return <section className={styles.wrapper}>
        <div>
            <h2 className={styles.header}>{title}</h2>
            <p className={styles.p}>{synopsis}</p>
            <p>{stars}</p>
            <p>Rating: {intRating}</p>
            {/* <img src={empty_star} alt="empty_star" className={styles.star}/> */}
        </div>
        <div>
            <img src={img} alt={title}/>
        </div>
    </section>;
}
