import styles from './location.module.css'

export default function Location (){
    const alt = "map Blougans B&B";
    
    return (
        <iframe
        id="map"
        alt= {alt}
        className={styles.map}
        src= {process.env.customKey}>
      </iframe>
    )
}