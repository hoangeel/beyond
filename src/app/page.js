import Approach from "@/components/home/approach";
import Cards from "@/components/home/cards";
import Color from "@/components/home/color";
import Section from "@/components/home/section";
import Services from "@/components/home/services";
import Why from "@/components/home/why";

export default function Home() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section/>
      <Approach/>
      <Services/>
      <Color/>
      <Why/>
      <Cards/>
    </main>
  )
}
