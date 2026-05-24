import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-section text-center">
      <p className="font-mono text-xs text-muted mb-4">404</p>
      <h1 className="font-serif text-3xl mb-4">Page not found</h1>
      <p className="text-muted mb-8">That page does not exist.</p>
      <Button href="/">Back home</Button>
    </Container>
  );
}
