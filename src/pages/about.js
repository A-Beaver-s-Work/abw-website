import {Layout} from "@/app/layout";
import {Box, Button, Card, Flex, Inset, Section, Strong, Text} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function About() {
    return (
        <Layout>
            <div className={"bg-light-gray"}>
                <div className={"h-14"}></div>
                <Section>
                    <div className="relative h-48 bg-[url('/img/hero.jpg')] bg-cover bg-center">
                        <div className="flex flex-col items-start justify-center h-full pl-10">
                            <p className="text-white font-extrabold text-6xl w-full font-proxima">WHO WE
                                ARE</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="">
                        <div className="flex flex-col h-full py-24 justify-center items-center">
                            <h1 className="py-2 text-stone-700 text-center text-3xl font-helvetica font-extrabold uppercase">
                            WE ARE A BEAVER’S WORK
                            </h1>
                            <div className="text-custom-black font-light text-1xl leading-7 text-center font-proxima">
                                <p className={"max-w-[800px]"}>We’re a fully student-run effort at MIT Beaver Works Summer Institute that works to make the program carbon-neutral by 2035. Our network of tree-planting alumni stretches from coast to coast.
                                Join us in expanding our reach and supporting brilliant young minds across the nation. Together, we cultivate the roots of technological advancement and grow towards a carbon-neutral future.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    <Flex align="center" justify="center" className={"gap-8 mb-20 h-[28rem] py-5 "}>
                        <AboutCard title={"WHO WE ARE"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"The initiative is entirely student-run by 100+ BWSI alumni. Our teams are organized into Backend (13 students), Web Design (18), Copywriting (7), Outreach (17), and Social Media (11) and the rest are tree-planters. "}
                                   className={"h-full"}
                        />
                        <AboutCard title={"OUR PROBLEM"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"For Zoom and virtual meetings, approximately 1 kg of CO₂ is produced per person-hour. This results in a total of 172 kg of CO₂ emissions for each virtual student. The travel and shipping associated with in-person students contribute approximately 300 to 600 metric tons of CO₂ emissions from their travel and the shipping of BWSI kits to virtual students."}
                                   className={"h-full"}
                        />
                        <AboutCard title={"OUR SOLUTION"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"We will partner with nonprofits and other NGOs to source free trees for students across the nations. Our efforts will connect the BWSI alumni through a special place in the ground."}
                                   className={"h-full"}
                        />
                    {/* </Flex>
                    <Flex align="center" justify="center" className={"gap-8 my-20 h-96"}> */}
                        <AboutCard title={"OUR GOAL"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"We aim to offset BWSI’s carbon footprint given that a mature tree can absorb about 22 kg (48 lbs.) of CO₂ annually. As BWSI produces more alumni, more CO₂ emissions will be offset! These efforts will foster relationships amongst alumni, faculty, and speakers, thus paving the way for future collaborations and improving student career prospects. Each planted tree will stand as an enduring symbol of the transformational BWSI experience."}
                                   className={"h-full"}
                        />
                        <AboutCard title={"STAY UPDATED"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"We will utilize Instagram and TikTok for younger audiences. LinkedIn will be used for professional networking.Our posts will include progress updates, achievements, and fun facts/activities."}
                                   className={"h-full"}
                        />
                    </Flex>
                </Section>
                <Section className={"mb-20 text-sage-green-800"}>
                    <div className={"flex flex-row w-full justify-center gap-28"}>
                        <div className={""}>
                            <h2 className={"text-7xl text-center font-bold"}>72</h2>
                            <h3 className={"font-proxima text-3xl"}>Team Members</h3>
                        </div>
                        <div className={""}>
                            <h2 className={"text-7xl text-center font-bold"}>17</h2>
                            <h3 className={"font-proxima text-3xl"}>States</h3>
                        </div>
                        <div className={""}>
                            <h2 className={"text-7xl text-center font-bold"}>1</h2>
                            <h3 className={"font-proxima text-3xl"}>Tree Planted</h3>
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

function AboutCard({title, image, text}) {
    return (
        <Box maxWidth="350px"
             className={"border-[0.5px] border-stone-700 h-full flex-grow rounded-md hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden bg-sage-green-200"}>
            <Card size="2">
                {/* <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={image}
                        alt="Bold typography"
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: 140,
                            backgroundColor: "var(--gray-5)",
                        }}
                    />
                </Inset> */}
                <div className={"p-2.5 text-stone-700"}>
                    <h1 className={"text-2xl w-full text-center font-proxima font-bold mb-2 text-sage-green-800"}>
                        {title}
                    </h1>
                    <Text as="p" size="3">
                        {text}
                    </Text>
                </div>
            </Card>
        </Box>
    );
}