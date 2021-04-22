import styles from './location.module.css'

export default function Location (){
    const alt = "map Blougans B&B";
    const src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCUWvaDWXVPmirhVlLIVH523Gtct-KWkWY&q=17+Blougans+St,+Perlemoenbaai,+Gansbaai";
    return (
        <iframe
        id="map"
        alt= {alt}
        className={styles.map}
        src= {src}>
      </iframe>
    )
}