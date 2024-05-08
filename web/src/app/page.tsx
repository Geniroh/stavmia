import FeaturedInnovations from "@/components/FeaturedInnovations";
import InnovationTable from "@/components/InnovationTable";
import Navbar from "@/components/Navbar";
import { Button } from "antd";


export default function Home() {
  return (
    <>
        <Navbar />
        <main className="">
          <section className="max-w-[1200px] mx-auto py-10">
            <FeaturedInnovations />
          </section>

          <section className="max-w-[1200px] mx-auto py-10">
            <InnovationTable />
          </section>

        </main>
    </>
  );
}
