import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return <div>The Projects of a given client</div>;
}

export default ClientProjectPage;
