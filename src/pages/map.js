import "../app/globals.css";
import {Layout} from "@/app/layout";
import { Section } from "@radix-ui/themes";

export default function Map() {
    return (
        <Layout>
        <div className="bg-light-gray h-full flex-grow">
            <div className={"h-14"}></div>
            <Section>
                <div className="relative h-48 bg-[url('/img/hero.jpg')] bg-cover bg-center">
                    <div className="flex flex-col items-start justify-center h-full pl-10">
                        <p className="text-white font-extrabold text-6xl w-full font-proxima">MAP</p>
                    </div>
                </div>
            </Section>
            <div className="max-w-[60vw] mx-auto m-10">
                <div className="bg-sage-green-700 shadow-lg rounded-lg overflow-hidden">
                    <div className="text-white font-light text-2xl mt-4 p-4">
                        <p>Trees Planted</p>
                    </div>
                    <div className="relative bg-cover bg-center">
                        <img className={"w-full"} src="/img/map.png" />
                    </div>
                </div>
            </div>
            <div className="bg-ight-gray h-8"></div>
        </div>
        </Layout>
    );
}