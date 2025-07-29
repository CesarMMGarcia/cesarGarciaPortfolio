import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <header>
      <h1>
        Cesar Garcia Portfolio
      </h1>
     </header>
     <div>
      <p>
        I had watched so many guys in the chairs be the coolest characters in the shows or movies. I worked 
        to become that guy in the chair with learning python and React. I became a React developer intern for a 
        few months and which led to my software engineer experienc. That position made me feel like the guy in the chair 
        because I was constantly learning about new technologies and maintaining my current knowledge.  
      </p>
     </div>
    </div>
  );
}
