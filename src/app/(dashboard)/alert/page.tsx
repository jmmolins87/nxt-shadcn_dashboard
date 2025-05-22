




import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from "@/components/ui/alert";
import { Terminal } from "lucide-react";


export default function AlertPage() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}