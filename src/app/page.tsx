import { setTimeout } from "timers/promises";

export const dynamic = "force-dynamic";

export default async function Home() {
  const contents = await (async function () {
    await setTimeout(2000);
    return "LOADED";
  })();
  return <div className="text-8xl">{contents}</div>;
}
