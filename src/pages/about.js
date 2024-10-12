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
                            <p className="text-white font-extrabold text-6xl w-full text-center font-proxima">WHO WE
                                ARE</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="">
                        <div className="flex flex-col h-full py-24 justify-center items-center">
                            <h1 className="py-2 text-dark-green text-center text-3xl font-proxima-h font-extrabold uppercase">
                                We are []
                            </h1>
                            <div className="text-custom-black font-light text-1xl leading-7 text-center font-proxima">
                                <p className={"max-w-[800px]"}>Our mission here. Lorem ipsum odor amet, consectetuer adipiscing elit.
                                    Viverra porta ornare rutrum dolor pretium duis.
                                    Ex nam feugiat iaculis in eu. Torquent curae facilisis nisi, tempor morbi nisl?
                                    Blandit ante aenean
                                    euismod curae eget? Quisque pulvinar curae suspendisse eu laoreet leo; eget
                                    vulputate mus. Ex tempor
                                    interdum natoque platea arcu enim pretium at. Tortor pellentesque habitasse sem
                                    aenean accumsan
                                    rutrum dis nisi per. Gravida ad montes rhoncus blandit sem platea nec vestibulum
                                    condimentum.
                                    Viverra ligula id massa in, non varius.</p>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className={"mb-20 text-dark-green"}>
                    <div className={"flex flex-row w-full justify-center gap-28"}>
                        <div className={""}>
                            <h2 className={"text-7xl text-center font-bold"}>23</h2>
                            <h3 className={"font-proxima text-3xl"}>Team Members</h3>
                        </div>
                        <div className={""}>
                            <h2 className={"text-7xl text-center font-bold"}>23</h2>
                            <h3 className={"font-proxima text-3xl"}>States</h3>
                        </div>
                        <div className={""}>
                            <h2 className={"text-7xl text-center font-bold"}>230</h2>
                            <h3 className={"font-proxima text-3xl"}>Trees Planted</h3>
                        </div>
                    </div>
                </Section>
                <Section>
                    <Flex align="center" justify="center" className={"gap-8 my-20 h-80"}>
                        <AboutCard title={"Plant Trees"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"placeholder text here"}
                                   className={"h-full"}
                        />
                        <AboutCard title={"Connect Alumni"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"placeholder text here"}
                                   className={"h-full"}
                        />
                        <AboutCard title={"Better Our Environment"}
                                   image={"https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                   text={"placeholder text here"}
                                   className={"h-full"}
                        />
                    </Flex>
                </Section>
            </div>
        </Layout>
    );
};

function AboutCard({title, image, text}) {
    return (
        <Box maxWidth="300px"
             className={"border-[0.5px] border-stone-700 h-full flex-grow rounded-md hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden"}>
            <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
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
                </Inset>
                <div className={"p-2.5 text-black"}>
                    <Text className={"text-2xl font-proxima"}>
                        {title}
                    </Text>
                    <Text as="p" size="3">
                        {text}
                    </Text>
                </div>
            </Card>
        </Box>
    );
}