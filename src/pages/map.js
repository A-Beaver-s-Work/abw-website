import "../app/globals.css";

export default function Map() {
    return (
        <div className="bg-light-gray">
            <div className="max-w-md mx-auto ">
                <div className="bg-green-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="text-white font-light text-2xl mt-4 bg-green-800 p-4">
                        <p>Map</p>
                    </div>
                    <div className="relative h-80 bg-[url('/img/map.png')] bg-cover bg-center">
                        <div className="flex flex-col items-start justify-center h-full pl-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-ight-gray h-8"></div>
        </div>
    );
}