import "../app/globals.css";
import {Layout} from "@/app/layout";

export default function Map() {
    return (
        <Layout>
        <div className="bg-light-gray h-full flex-grow">
            <div className={"h-14"}></div>
            <div className="max-w-[60vw] mx-auto m-10">
                <div className="bg-green-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="text-white font-light text-2xl mt-4 bg-green-800 p-4">
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