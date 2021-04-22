import styles from './gallery.module.css'
import Image from 'next/image'

export default function Gallery (){
    return (
        <table className={styles.table}>
            <tbody className={styles.tableB}>
                <tr className={styles.tableR}>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/1.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/2.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />                       
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/3.jpg"
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
                            alt="blougans room1"
                            src="/images/carousel/4.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/5.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />                       
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/6.jpg"
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
                            alt="blougans room1"
                            src="/images/carousel/7.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/8.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />                       
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/9.jpg"
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
                            alt="blougans room1"
                            src="/images/carousel/10.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/11.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />                       
                    </td>
                    <td className={styles.tableD}>
                        <Image
                            alt="blougans room1"
                            src="/images/carousel/12.jpg"
                            layout="responsive"
                            width={728}
                            height={546}
                            quality={50}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}