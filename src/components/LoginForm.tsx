import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema";
import { useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";

export default function LoginForm() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    navigate("/user");
    toast({
      title: "Success!",
      description: `Logged as: ${values.email}`,
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[350px] my-12"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm p-4 placeholder:text-gray"
                  type="email"
                  placeholder="E-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm p-4 placeholder:text-gray"
                  type="password"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end ">
          <span
            role="button"
            onClick={() => navigate("/recovery")}
            className="text-xs text-black cursor-pointer"
          >
            fogort your password?
          </span>
        </div>
        <div className="mt-12">
          <Button
            className="w-full bg-magnata text-black hover:text-white my-8 rounded-sm"
            type="submit"
          >
            Log in
          </Button>
        </div>
      </form>
    </Form>
  );
}
