import Layout from "@/components/Layout";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <Layout>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">Recovery your password</h1>
        <ForgotPasswordForm />
      </main>
    </Layout>
  );
}
