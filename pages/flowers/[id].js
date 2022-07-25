import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import flowerStyle from '../../styles/Flower.module.css'


export async function getServerSideProps(context) {
    // console.log(context.query.id)

 const flowerID = parseInt(context.query.id)

  const db = new PrismaClient();
  const singleflower = await db.flower.findUnique({
    where: {
      id: flowerID,
    },
  });
    return {
      props: { singleflower },
    };
}

export default function singleFlower(props) {
    const singleflower = props.singleflower
     
  return (
    <div className={flowerStyle.flowerpage}>
  
      <h1> single flower section</h1>
      {singleflower.name}
      <br />
      {singleflower.description}
    </div>
  );
}
