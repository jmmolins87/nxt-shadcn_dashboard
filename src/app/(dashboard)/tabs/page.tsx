



'use client'

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Tab1, 
  Tab2, 
  Tab3 
} from "./ui";


export default function TabsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account" className="cursor-pointer">Account</TabsTrigger>
          <TabsTrigger value="password" className="cursor-pointer">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab1 />
        </TabsContent>
        <TabsContent value="password">
          <Tab2 />
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account" className="cursor-pointer">Account</TabsTrigger>
          <TabsTrigger value="password" className="cursor-pointer">Password</TabsTrigger>
          <TabsTrigger value="user" className="cursor-pointer">User</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab1 />
        </TabsContent>
        <TabsContent value="password">
          <Tab2 />
        </TabsContent>
        <TabsContent value="user">
          <Tab3 />
        </TabsContent>
      </Tabs>
    </div>
  );
}