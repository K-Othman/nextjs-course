import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // router.push("/clients/karim/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "karim", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
