import Contents from "@/components/contents";
import { setTimeout } from "timers/promises";

export const dynamic = "force-dynamic";

export default async function Home() {
  const contents = await (async function () {
    await setTimeout(150);
    return "LOADED";
  })();
  return <Contents contents={contents} />;
}
