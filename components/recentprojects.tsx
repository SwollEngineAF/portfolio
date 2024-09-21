import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

const RecentProjects = () => {
  return (
    <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>E-commerce Website</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Developed a fully-featured e-commerce website using React, Redux, and Stripe for payment processing.
                Implemented features such as shopping cart, checkout, and order management.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Project
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Media App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Developed a social media application using React, Firebase, and Material-UI. Implemented features
                such as user authentication, post creation, and real-time updates.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Project
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;