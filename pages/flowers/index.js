import { PrismaClient } from "@prisma/client";
import flowersStyles from '../../styles/Flowers.module.css'
import Link from "next/link";

export async function getServerSideProps() {
    const db = new PrismaClient();
    const flowers = await db.flower.findMany()
    console.log("flowers: " + flowers)
    return {
        props: {flowers}
    }
}

export default function Flowers(props) {
     
       console.log(props.flowers);
     
  return (
    <div className={flowersStyles.flowerspage}>
      <h1>All Flowers</h1>
      {props.flowers.map((x) => (
        <>
          <h3>{x.name}</h3>
          <Link href={`/flowers/${x.id}`}>Learn More</Link>
        </>
      ))}
    </div>
  );
}
