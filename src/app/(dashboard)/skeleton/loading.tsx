






import { 
    Card, 
    CardFooter, 
    CardHeader
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {

    const data = "123456789".split("")
 
    return (
        <div className="grid md:grid-cols-3 gap-3">
            {
                data.map((item) => (
                    <Card key={item}>
                        <CardHeader className="flex justify-start items-center">
                            <Skeleton className="rounded-full mr-2 w-10 h-10" />
                            <div className="flex flex-col flex-grow">
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-4 w-full mt-2" />
                            </div>
                        </CardHeader>
                        <CardFooter className="flex justify-end items-center">
                            <Skeleton className="h-8 w-20" />
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}