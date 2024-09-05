import AlertDialogInfo from "@/components/AlertDialog";
import { ModeToggle } from "@/components/Theme";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <ModeToggle />
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
