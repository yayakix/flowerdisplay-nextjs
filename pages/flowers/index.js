import { PrismaClient } from "@prisma/client";
import flowersStyles from '../../styles/Flowers.module.css'
import Link from "next/link";

export async function getServerSideProps() {
    const db = new PrismaClient();
    const flowers = await db.flower.findMany()
    // console.log("flowers: " + flowers)
    return {
        props: {flowers}
    }
}

export default function Flowers(props) {
     
    //    console.log(props.flowers);
     
  return (
    <div className={flowersStyles.flowerspage}>
      <div className={flowersStyles.imgcontainer}>
        <img
          className={flowersStyles.img}
          src="https://images.pexels.com/photos/548389/pexels-photo-548389.jpeg"
          alt="banner"
        />
      </div>

      <div className={flowersStyles.bannertext}>
        {" "}
        <h1>All Flowers</h1>
        {props.flowers.map((x) => (
          <>
            <Link href={`/flowers/${x.id}`}>
              <h3 className={flowersStyles.flowername}>{x.name}</h3>
            </Link>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
