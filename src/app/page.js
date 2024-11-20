import AlertDialogInfo from "@/components/AlertDialog";
import { ModeToggle } from "@/components/Theme";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  
  const handle = () => {
    console.log('alert dialog clicking')
  }
  return (
    <main className="flex flex-col items-center justify-between p-16 space-y-4">
      <div className="flex justify-between w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight border-b lg:text-5xl">
      Shadcn/ui Library Course
      </h1>
      <ModeToggle />
      </div>
      <Button asChild>
        <Link href="/usereducer">useReducer</Link>
      </Button>
      <Button asChild>
        <Link href="/usecallback">useCallback</Link>
      </Button>
      <Button asChild>
        <Link href="/accord">Alert</Link>
      </Button>
      <Button asChild>
        <Link href="/button">Button</Link>
      </Button>
      <Button asChild>
        <Link href="/accord">Accordion</Link>
      </Button>
      <AlertDialogInfo action={handle()}/>
    </main>
  );
}
