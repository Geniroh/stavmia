import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl">Hello World</h1>
        <Button type="default">Click me</Button>
    </main>
  );
}
