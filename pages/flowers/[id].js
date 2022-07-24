import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";


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
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1> single flower section</h1>
      {singleflower.name}
      <br/>
      {singleflower.description}
    </div>
  );
}
