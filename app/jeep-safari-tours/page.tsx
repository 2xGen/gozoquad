import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryMetadata } from "@/lib/seo";
import { categoryBySlug } from "@/lib/tours";

const category = categoryBySlug("jeep-safari")!;

export const metadata: Metadata = categoryMetadata(category);

export default function Page() {
  return (
    <main id="main">
      <CategoryPage category={category} />
    </main>
  );
}
