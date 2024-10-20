import './output.css';
import {Button, Section, Link} from '@radix-ui/themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Section>
                    <div className="relative h-screen bg-[url('/img/tree_champions.png')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-light-gray to-80%"></div>
                        <div className="flex flex-col items-start justify-end h-full pl-10">
                            <div className='my-10 z-50'>    
                                <div className="text-stone-800 font-extrabold text-6xl">
                                    <p>ROOT FOR THE FUTURE</p>
                                </div>
                                <div className="text-stone-800 font-light text-2xl mt-4">
                                    <p>A tree-planting mission built by MIT Beaver Works Summer Institute’s many alumni. 
                                        <br />Let’s bridge connections and achieve carbon neutrality for BWSI by 2035.</p>
                                </div>
                            </div>
                            <div className="my-10 left-10 flex gap-8 z-0">
                                <Button className="text-base px-10 py-5 rounded-lg bg-sage-green-700 border-sage-green-900 border font-bold text-white">
                                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdA7Wru7inyfEjB6FK7rj5Bt2mtsY78XNfbA8qA3nQg0PSPYA/viewform" >GET INVOLVED</Link>
                                </Button>
                                <Button className="text-base bg-dark-creme border-stone-400 border text-black px-10 py-5 rounded-lg font-bold">
                                    <Link href="/about">LEARN MORE</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="bg-light-gray">
                        <div className="flex flex-col h-full py-24 justify-center items-center">
                            <h1 className="py-2 text-stone-800 text-center text-3xl font-helvetica font-extrabold uppercase">
                                We are A Beaver's Work. 
                            </h1>
                            <div className="text-custom-black font-light text-1xl leading-7 text-center font-proxima max-w-[40vw]">
                                <p>We’re a fully student-run effort at MIT Beaver Works Summer Institute that works to make the program carbon-neutral by 2035. 
                                    Our network of tree-planting alumni stretches from coast to coast.
                                </p>
                            </div>
                            <div className="text-custom-black font-light text-1xl leading-7 text-center font-proxima pt-3 max-w-[40vw]">
                                <p>Join us in expanding our reach and supporting brilliant young minds across the nation. Together, we cultivate the roots of 
                                    technological advancement and grow towards a carbon-neutral future.
                                </p>
                            </div>
                            <div className="flex py-8">
                                <Button className="text-lg bg-sage-green-700 border-sage-green-900 border font-bold text-white px-10 py-3 font-proxima rounded-lg">
                                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfPYXjZLLQ5-4WEnheCHblua7v-gaZ6TnvrqiQgNnDXaOKHjw/viewform">PLANT TREES NOW</Link>
                                </Button>
                            </div>
                        </div>                
                    </div>    
                </Section>
            </main>
        </div>
    );
}
