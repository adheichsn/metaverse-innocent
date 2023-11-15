import { authOptions } from "@/lib/auth";
import HomePages from "@/pages/HomePages";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <HomePages/>
    </div>
  );
}
