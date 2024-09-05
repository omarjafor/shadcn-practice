import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24 space-y-4">
      <Button >Primary</Button>
      <Button variant="destructive">
      Destructive
      </Button>
      <Button variant="secondary">
      Secondary
      </Button>
      <Button variant="outline">
      Outline
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    </div>
  );
};

export default page;
