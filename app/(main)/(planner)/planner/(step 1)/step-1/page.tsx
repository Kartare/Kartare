"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios, { Axios, AxiosError } from "axios";
import { LoaderCircle, Play } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
    destination: z.string().min(2, { message: "Destination is required" }),
    duration: z.string().min(1, { message: "Duration is required" }),
})

export default function PlannerStep1() {

    const [error, setError] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            destination: "",
            duration: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setError("");
        console.log(values)

        try {
            const response = await axios.post("/api/planner", values);
            console.log(response)
        }
        catch (e) {
            console.log(e);
            setError((e as AxiosError).message);
        }
    }

    return (
        <div className="w-full flex justify-center mt-2">
            <div className="w-full max-w-lg">
                <div className="flex flex-col">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="destination"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Destination</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. 'Norway'" {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormDescription>
                                            The destination of your trip
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of days</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="e.g. '12'" {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormDescription>
                                            The number of days the trip will take
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={!isValid || isSubmitting}>
                                Suggest trip
                                {!isSubmitting && (
                                    <Play width={16} height={16} className="ml-2" />
                                )}
                                {isSubmitting && (
                                    <LoaderCircle width={16} height={16} className="animate-spin ml-2" />
                                )}
                            </Button>
                        </form>
                    </Form>
                    <p className="mt-4 text-red-600">{error}</p>
                </div>
            </div>
        </div>
    )
}