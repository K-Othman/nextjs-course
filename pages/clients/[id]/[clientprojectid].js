import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>A Project Page for A Specific Project for a Selected Client</h1>{" "}
    </div>
  );
}

export default ClientProjectPage;
