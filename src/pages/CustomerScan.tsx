import { useState } from "react";
import { QrCode, CircleCheckBig } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CustomerScan = () => {
  const [complete, setComplete] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:py-10">
      <div className="max-w-md mx-auto space-y-4">
        <Card className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-brand-primary" />
            <h1 className="text-xl font-bold">Scan to Check In</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Point your camera at the business QR code, then confirm your check-in to earn loyalty progress.
          </p>
          <Button className="w-full" onClick={() => setComplete(true)}>
            {complete ? "Check-in complete" : "Simulate check-in"}
          </Button>
        </Card>

        {complete ? (
          <Card className="p-4 border-green-200 bg-green-50">
            <div className="flex items-center gap-2 text-green-800">
              <CircleCheckBig className="h-5 w-5" />
              <p className="text-sm font-medium">Success! Your visit was recorded.</p>
            </div>
          </Card>
        ) : (
          <Card className="p-4 border-amber-200 bg-amber-50">
            <p className="text-sm text-amber-900">If scanning fails, ask staff for a manual check-in code.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CustomerScan;
