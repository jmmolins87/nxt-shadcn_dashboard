



import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function CardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {
        "123456789".split("").map(( item ) => (
          <Card key={ item }>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center gap-2">
              <Button variant="outline" className="w-1/2 cursor-pointer">info</Button>
              <Button className="w-1/2 cursor-pointer">más</Button>
            </CardFooter>
          </Card>
        ))
      }

      <Card className="col-span-1 sm:col-span-2">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between items-center gap-2">
          <Button variant="outline" className="w-1/2">Cancel</Button>
          <Button className="w-1/2">Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}