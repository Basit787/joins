import { db } from "./db.js";
import { order, products, users } from "./schema.js";

(async () => {
  await db.delete(order);
  await db.delete(users);
  await db.delete(products);

  const insertedUsers = await db
    .insert(users)
    .values([
      {
        name: "Alice",
        age: 30,
        email: "alice@email.com",
      },
      {
        name: "Bob",
        age: 25,
        email: "bob@email.com",
      },
      {
        name: "Charlie",
        age: 35,
        email: "charlie@email.com",
      },
    ])
    .returning();

  const insertedProducts = await db
    .insert(products)
    .values([
      {
        productsName: "Phone",
        quantity: 5,
        price: "999",
      },
      {
        productsName: "Laptop",
        quantity: 2,
        price: "1500",
      },
    ])
    .returning();

  await db.insert(order).values([
    {
      userId: insertedUsers[0].id,
      productId: insertedProducts[0].id,
    },
    {
      userId: insertedUsers[1].id,
      productId: insertedProducts[1].id,
    },
  ]);

  console.log("Seed completed!");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
