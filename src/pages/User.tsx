import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl">Hi, I'm Hubert Ryan</h1>
      <p className="mt-2 text-gray-300">Thank you for log in</p>
      <Button onClick={() => navigate("/")} className="mt-4">
        Log out
      </Button>
    </div>
  );
}
