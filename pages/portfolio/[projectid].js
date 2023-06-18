import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

function ProtfolioProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Protfolio Project Page</h1>
    </div>
  );
}

export default ProtfolioProjectPage;
