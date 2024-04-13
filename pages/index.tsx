import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Register from "@/modules/components/login/Register";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return <Register />;
}
