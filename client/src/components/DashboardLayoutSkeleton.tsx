export default function DashboardLayoutSkeleton() {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r bg-muted/20 animate-pulse" />
      <div className="flex-1 p-6 space-y-4">
        <div className="h-8 w-48 bg-muted rounded animate-pulse" />
        <div className="h-64 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}
