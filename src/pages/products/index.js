import ProductCard from "src/products/components/Card";
import supabaseServer from "supabase";

export default function ProductsPage({ products }) {
  return (
    <>
      <div className="section bg-blue">
        <div className="container">
          <div className="section-intro">
            <h1>The latest products</h1>
          </div>
        </div>
      </div>

      <div className="section small">
        <div className="container">
          <ul className="product-card-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let { data: products, error } = await supabaseServer
    .from("product")
    .select("*");
  return {
    props: { products },
  };
}
