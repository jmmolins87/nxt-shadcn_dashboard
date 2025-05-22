



import { Badge } from "@/components/ui/badge";


export default function BadgePage() {
  return (
    <div className="grid md:grid-cols-4 gap-3">
      <Badge >default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="success">success</Badge>
      <Badge capitalize variant="warning">warning</Badge>
    </div>
  );
}