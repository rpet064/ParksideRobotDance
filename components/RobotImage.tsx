import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function RobotImage(props: any) {
    return (
            <div key={props.robots._id} className={styles.robotimage}>
            <div>
               <Image src={'/' + props.robots.avatar} 
               alt='A robot was here'
               width={160}
               height={160}
               />
               <p>{props.robots.name}</p>
               <p>{props.robots.outOfOrder}</p>
            </div>
         </div>
      )
    }
