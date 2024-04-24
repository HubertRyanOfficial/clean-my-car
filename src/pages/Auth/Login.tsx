import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <Layout>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">Log in</h1>
        <LoginForm />
      </main>
    </Layout>
  );
}
