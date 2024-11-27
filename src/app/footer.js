import {Button} from "@radix-ui/themes";

export default function Footer() {
    return (
        <footer className="bg-creme">
            <div className="flex flex-row py-8">
                <div
                    className="border-stone-300 pl-8 pr-4 w-1/3 space-y-4 small-col-12-12 large-col-4-12 mission text-left">
                    <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                        We root for a future of carbon neutrality and innovation.
                    </h6>
                    <p className=" text-stone-500 font-serif text-base italic tracking-tighter">
                        A Beaver's Work is a student-led effort at MIT’s Beaver Works Summer Institute.
                        Many of the best and brightest students come together here to protect our planet’s precious resources.

                    </p>
                    <a href="/about/"
                       className="inline-block text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                        More about our mission and programs...
                    </a>
                    <p className="space-x-2">
                        <a href="https://www.linkedin.com/company/abeaverswork/" aria-label="Linkedin">
                            <img src="/images/linkedin.png" className="inline block w-5 h-auto"/>
                        </a>
                        <a href="https://www.instagram.com/abeaverswork/" aria-label="Instagram">
                            <img src="/images/instagram.png" className="inline block w-5 h-auto"/></a>
                    </p>
                </div>
                <div
                    className="border-l border-stone-300 pl-6 pr-8 w-1/6 space-y-4 small-col-12-12 medium-col-3-12 large-col-2-12 text-left">
                    <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                        Action
                    </h6>

                    <ul>
                        <li>
                            <a href="/states"
                               className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                Your State
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className="border-l border-stone-300 pl-6 pr-8 w-1/6 space-y-4 small-col-12-12 medium-col-3-12 large-col-2-12 text-left">
                    <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                        Connect
                    </h6>

                    <ul>
                        <li>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPYXjZLLQ5-4WEnheCHblua7v-gaZ6TnvrqiQgNnDXaOKHjw/viewform"
                               className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                Order
                            </a>
                        </li>
                        <li>
                            <a href="/contact"
                               className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/faq"
                               className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="/about"
                               className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="https://beaverworks.ll.mit.edu/CMS/bw/bwsi"
                               className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                Beaver Works Summer Institute
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-dark-creme text-center">
                    <span className="uppercase space-x-4">
                        <img src="/images/logo.png" className="inline block w-8 h-auto py-2" alt="A Beaver's Work"/>
                        <p className="inline block font-proxima font-bold uppercase text-stone-500 text-xs">
                            &copy; 2024 A Beaver's Work. &nbsp;
                            <a href="/about/privacy.cfm">Privacy policy</a>
                            &nbsp;
                            &nbsp;
                            <a href="/about/terms.cfm">Terms of Use</a>
                        </p>
                    </span>
            </div>
        </footer>
    );
}