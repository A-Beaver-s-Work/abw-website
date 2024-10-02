import "../app/globals.css";
import * as Form from '@radix-ui/react-form';
import { Button, Text } from '@radix-ui/themes';
import {Layout} from "@/app/layout";

export default function Contact() {
    return (
        <Layout>
        <div className="flex flex-col items-center justify-center bg-dark-creme p-10">
            <Text className="text-stone-700 font-proxima font-bold text-5xl">
                Contact Us
            </Text>
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
                        <input className="border rounded p-2 w-full my-2" required />
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
                        <input className="border rounded p-2 w-full my-2" type="email" required />
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
                        <textarea className="border rounded p-2 w-full my-2" required />
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                    <Button className="mx-auto block border-2 border-blue-400 rounded bg-gray-100 p-2 w-1/2 hover:bg-gray-200">
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