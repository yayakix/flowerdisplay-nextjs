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
      <img
        className={flowersStyles.img}
        src="https://images.pexels.com/photos/985266/pexels-photo-985266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="banner"
      />
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
