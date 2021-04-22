import styles from './rooms.module.css'
import Image from 'next/image'

export default function Rooms (){
    return (
        <div className={styles.tableWrap}>
        <table className={styles.table}>
            <tbody className={styles.tableB}>
            <tr className={styles.tableR}>
                <td className={styles.tableD}>
                <Image  
                    alt="blougans room1"
                    src="/images/room1.jpg"
                    layout="responsive"
                    width={728}
                    height={546}
                    quality={50}
                /> 
                </td>
                <td className={styles.tableD}>
                <Image  
                    alt="blougans room2"
                    src="/images/room2.jpg"
                    layout="responsive"
                    width={728}
                    height={546}
                    quality={50}
                /> 
                </td>
            </tr>
            <tr className={styles.tableR}>
                <td className={styles.tableD}>
                <Image  
                    alt="blougans room3"
                    src="/images/room3.jpg"
                    layout="responsive"
                    width={728}
                    height={546}
                    quality={50}
                /> 
                </td>
                <td className={styles.tableD}>
                <Image  
                    alt="blougans room4"
                    src="/images/room4.jpg"
                    layout="responsive"
                    width={728}
                    height={546}
                    quality={50}
                /> 
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}