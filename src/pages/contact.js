import "../app/globals.css";
import * as Form from '@radix-ui/react-form';
import { Button, Text, Section } from '@radix-ui/themes';
import {Layout} from "@/app/layout";

export default function Contact() {
    return (
        <Layout>
            <div className="flex flex-col flex-grow items-center bg-light-gray bg-[url('/img/hero.png')] bg-cover">
                <div className={"h-14"}></div>
                <Section>
                    <div className="relative w-screen h-48 bg-cover bg-center">
                        <div className="flex flex-col items-start justify-center h-full pl-10">
                            <p className="text-white font-extrabold text-6xl w-full font-proxima">CONTACT US</p>
                        </div>
                    </div>
                </Section>
                <Form.Root className="bg-creme p-6 rounded-lg shadow-xl w-1/2 my-10">
                    <Form.Field name="name">
                        <div className="flex items-baseline justify-between">
                            <Form.Label>
                                <Text className="text-stone-500 font-proxima font-bold">
                                    Name
                                </Text>
                            </Form.Label>
                            <Form.Message match="valueMissing">
                                <Text className="py-2 text-red-500 text-xs font-proxima">
                                    Please enter your name
                                </Text>
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input className="border rounded p-2 w-full my-2" required/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field name="email">
                        <div className="flex items-baseline justify-between">
                            <Form.Label>
                                <Text className="text-stone-500 font-proxima font-bold">
                                    E-Mail
                                </Text>
                            </Form.Label>
                            <Form.Message match="valueMissing">
                                <Text className="py-2 text-red-500 text-xs font-proxima">
                                    Please enter your email
                                </Text>
                            </Form.Message>
                            <Form.Message className="block" match="typeMismatch">
                                <Text className="py-2 text-red-500 text-xs font-proxima">
                                    Please provide a valid email
                                </Text>
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input className="border rounded p-2 w-full my-2" type="email" required/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field name="message">
                        <div className="flex items-baseline justify-between">
                            <Form.Label>
                                <Text className="text-stone-500 font-proxima font-bold">
                                    Message
                                </Text>
                            </Form.Label>
                            <Form.Message match="valueMissing">
                                <Text className="py-2 text-red-500 text-xs font-proxima">
                                    Please enter your message
                                </Text>
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <textarea className="border rounded p-2 w-full my-2" required/>
                        </Form.Control>
                    </Form.Field>
                    <Form.Submit asChild>
                        <Button
                            className="mx-auto block border-2 border-blue-400 rounded bg-gray-100 p-2 w-1/2 hover:bg-gray-200">
                            <Text className="text-blue-400 font-proxima font-bold">
                                Submit Message
                            </Text>
                        </Button>
                    </Form.Submit>
                </Form.Root>
            </div>
        </Layout>
    )
}