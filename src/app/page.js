import AlertDialogInfo from "@/components/AlertDialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";


export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-4">
      <h1 className="text-3xl font-bold text-black">Shadcn Practice Course</h1>
      
      <Button asChild>
        <Link href="/accord">Alert</Link>
      </Button>
      <Button asChild>
        <Link href="/button">Button</Link>
      </Button>
      <Button asChild>
        <Link href="/accord">Accordion</Link>
      </Button>
      <AlertDialogInfo />
    </main>
  );
}
