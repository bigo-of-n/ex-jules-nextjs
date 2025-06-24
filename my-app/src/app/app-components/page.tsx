import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Keep for default and destructive
import { AlertSuccess } from "@/components/ui/alert-success"; // Import new success alert
import { AlertInfo } from "@/components/ui/alert-info"; // Import new info alert
// Remove AlertDescription and AlertTitle from alert-success and alert-info if they are identical to the ones in alert.tsx
// and can be imported from there. For this subtask, assume they are distinct or re-exported as shown.
import { Button } from "@/components/ui/button";
import { SignInForm } from "@/components/ui/sign-in-form";
import {
  Terminal,
  Waves,
  Rocket,
  PartyPopper,
  AlertTriangle,
  Info,
  Mail,
} from "lucide-react";
import { ExampleChart } from "@/components/example-charts";
import { Card } from "@/components/ui/card";

export default function AppComponentsPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">ShadCN UI Components Showcase</h1>

      {/* Alerts Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
          <AlertSuccess>
            {" "}
            {/* Changed from Alert variant="success" */}
            <PartyPopper className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your profile has been updated successfully.
            </AlertDescription>
          </AlertSuccess>
          <AlertInfo>
            {" "}
            {/* Changed from Alert variant="info" */}
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational message that might be useful.
            </AlertDescription>
          </AlertInfo>
        </div>
      </section>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <Button variant="success">
            <PartyPopper className="mr-2 h-4 w-4" /> Confirm
          </Button>
          <Button variant="info">
            <Info className="mr-2 h-4 w-4" /> Learn More
          </Button>
          <Button size="sm">Small Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="icon">
            <Rocket className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Sign-in Form Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sign-in Form</h2>
        <div className="flex justify-center">
          <SignInForm />
        </div>
      </section>

      <section>
        <h2>Charts</h2>
        <Card className="w-1/2">
          <ExampleChart />
        </Card>
      </section>
    </div>
  );
}

// Helper function to define custom variants if not already present in base ShadCN theme
// For example, if 'success' or 'info' variants are not standard for Alert/Button.
// However, shadcn components are generally styled via tailwind classes directly for custom looks.
// For this example, I'll add a placeholder for 'success' and 'info' directly to the components
// as specific classes, assuming they are not built-in variants.

// Note: For real components, you'd extend the variants in the component files themselves
// or ensure your tailwind.config.ts can generate these utility classes.
// The `Alert` component in `alert.tsx` has `default` and `destructive` variants.
// To add more like `success` or `info`, you'd modify `alertVariants` in `alert.tsx`.
// For this example, I'll add a few custom styles directly for simplicity.
// Added `bg-green-100 border-green-300 text-green-800` to success Alert.
// Added `bg-blue-100 border-blue-300 text-blue-800` to info Alert.
// Added `bg-green-500 hover:bg-green-600 text-white` to success Button.
// Added `bg-blue-500 hover:bg-blue-600 text-white` to info Button.

// It seems like `Alert` component does not have `success` and `info` variants by default.
// I will add them by creating new files for them.
