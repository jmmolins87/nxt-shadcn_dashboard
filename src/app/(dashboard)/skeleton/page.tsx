



import Image from "next/image";

import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const getData = async() => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return "123456789".split("")
}


export default async function SkeletonPage() {

  const data = await getData()

  return (
    <div className="grid md:grid-cols-3 gap-3">
      {
        data.map((item) => (
          <Card key={ item }>
            <CardHeader className="flex justify-start items-center">
              <Image
                src="https://github.com/shadcn.png" 
                width={100}
                height={100}
                alt="Shadcn"
                className="rounded-full mr-2 w-10 h-10" />
                <div>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </div>
            </CardHeader>
            <CardFooter className="flex justify-end items-center">
              <Button>Ver más</Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}