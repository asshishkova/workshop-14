import styles from "./MovieItem.module.css";

export default function MovieItem({id, title, synopsis, year, img, rating}) {

  // const empty_star = '../../assets/empty_star.png';
  const empty_star = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png';
  const rated_star = 'https://pngroyale.com/wp-content/uploads/2021/12/star-png-star-empty-png-Png-Download.png'
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(rating, 10)) {
      stars.push(<img src={rated_star} alt="rated_star" className={styles.star}/>);
    } else {
      stars.push(<img src={empty_star} alt="empty_star" className={styles.star}/>);
    }
  }

    return <section className={styles.wrapper}>
        <div>
            <h2 className={styles.header}>{title}</h2>
            <p className={styles.p}>{synopsis}</p>
            <p>{stars}</p>
            <p>{rating}</p>
            {/* <img src={empty_star} alt="empty_star" className={styles.star}/> */}
        </div>
        <div>
            <img src={img} alt={title}/>
        </div>
    </section>;
}
