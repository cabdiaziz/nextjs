import { useRouter } from "next/router";
export default function Product() {
  const router = useRouter();
  const productId = router.query.id;
  return <h1>detail of product : {productId}</h1>;
}
