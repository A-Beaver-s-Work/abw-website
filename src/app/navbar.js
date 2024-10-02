export default function Navbar() {
    return (
        <header className="flex flex-row justify-between w-screen bg-creme h-14 text-stone-500 font-proxima align-middle fixed top-0 z-50
        ">
            <div className="justify-start gap-5 flex align-middle">
                <a href="/" className="inline w-12 h-auto mx-5 my-auto">
                    <img src="/images/logo.png"
                         alt="A Beaver's Work"/>
                </a>
            </div>
            <div className="flex-grow flex align-middle right-0 mr-5 justify-end">
                <a href={"/"}
                   className={"align-middle items-center text py-4 px-4 h-full border-l-[0.5px] border-r-[0.5px] hover:border-black border-creme hover:bg-dark-creme transition-all duration-300 ease-in-out"}>Home</a>
                <a href={"/map"}
                   className={"align-middle items-center text py-4 px-4 h-full border-l-[0.5px] border-r-[0.5px] hover:border-black border-creme hover:bg-dark-creme transition-all duration-300 ease-in-out"}>Map</a>
                <a href={"/faq"}
                   className={"align-middle items-center text py-4 px-4 h-full border-l-[0.5px] border-r-[0.5px] hover:border-black border-creme hover:bg-dark-creme transition-all duration-300 ease-in-out"}>FAQ</a>
                <a href={"/contact"}
                   className={"align-middle items-center text py-4 px-4 h-full border-l-[0.5px] border-r-[0.5px] hover:border-black border-creme hover:bg-dark-creme transition-all duration-300 ease-in-out"}>Contact
                    Us</a>
            </div>
        </header>
    );
}