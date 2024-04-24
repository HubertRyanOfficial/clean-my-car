import Layout from "@/components/Layout";

export default function Support() {
  return (
    <Layout>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">Support</h1>
        <p>Send a direct message on my X account</p>
        <a className="text-gray-300 mt-4" href="https://x.com/hubertryanoff">
          @hubertryanoff
        </a>
      </main>
    </Layout>
  );
}
