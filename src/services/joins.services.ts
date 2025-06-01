import { count, eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { order, products, users } from "../db/schema.js";

export const InnerJoin = () => {
  return db
    .select({
      userName: users.name,
      email: users.email,
      productName: products.productsName,
      price: products.price,
      order: order.id,
    })
    .from(order)
    .innerJoin(users, eq(order.userId, users.id))
    .innerJoin(products, eq(order.productId, products.id));
};

export const LeftJoin = () => {
  return db
    .select({
      userName: users.name,
      email: users.email,
      productName: products.productsName,
    })
    .from(order)
    .leftJoin(users, eq(order.userId, users.id))
    .leftJoin(products, eq(order.productId, products.id));
};

export const RightJoin = () => {
  return db
    .select({
      userName: users.name,
      totalOrders: count(order.id),
    })
    .from(users)
    .leftJoin(order, eq(order.userId, users.id))
    .groupBy(users.id);
};

export const CrossJoin = () => {
  return db
    .select({
      userName: users.name,
      orderId: order.id,
    })
    .from(users)
    .fullJoin(order, eq(users.id, order.userId));
};

export const OuterJoin = () => {
  return db
    .select({
      userName: users.name,
      orderId: order.id,
    })
    .from(users)
    .crossJoin(order);
};

export const PracticeJoin = () => {
  return db
    .select({
      name: users.name,
      email: users.email,
      product: products.productsName,
      order: order.id,
    })
    .from(users)
    .rightJoin(order, eq(users.id, order.userId))
    .rightJoin(products, eq(order.productId, products.id));
};
