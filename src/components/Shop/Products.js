import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Programming for dummies",
    description: "This book is for people looking to start a career as a dev",
    price: 4,
  },
  {
    id: "p2",
    title: "Advanced Programming for dummies",
    description:
      "This book is for people who are looking to advance their programming skills",
    price: 9.5,
  },
  {
    id: "p3",
    title: "Data Structures",
    description: "Book about data structures",
    price: 7.5,
  },
  {
    id: "p4",
    title: "WEB3",
    description: "Book about WEB 3",
    price: 6,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
