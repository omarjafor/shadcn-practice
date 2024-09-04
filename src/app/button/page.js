import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <Button className="mt-4">Click me</Button>
      <Button className="mt-4" variant="destructive">
        Click me
      </Button>
      <Button className="mt-4" variant="secondary">
        Click me
      </Button>
      <Button className="mt-4" variant="outline">
        Click me
      </Button>
      <Button className="mt-3">
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
};

export default page;
