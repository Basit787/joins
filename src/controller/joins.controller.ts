import type { Context } from "hono";
import * as join from "../services/joins.services.js";

export const innerJoin = async (c: Context) => {
  try {
    const result = await join.InnerJoin();
    return c.json({ message: "get all orders through inner join", result }, 200);
  } catch (error) {
    return c.json({ message: "Internal server error", error }, 500);
  }
};

export const leftJoin = async (c: Context) => {
  try {
    const result = await join.LeftJoin();
    return c.json({ message: "get all orders through left join", result }, 200);
  } catch (error) {
    return c.json({ message: "Internal server error", error }, 500);
  }
};

export const rightJoin = async (c: Context) => {
  try {
    const result = await join.RightJoin();
    return c.json({ message: "get all orders through right join", result }, 200);
  } catch (error) {
    return c.json({ message: "Internal server error", error }, 500);
  }
};

export const outerJoin = async (c: Context) => {
  try {
    const result = await join.OuterJoin();
    return c.json({ message: "get all orders through outer join", result }, 200);
  } catch (error) {
    return c.json({ message: "Internal server error", error }, 500);
  }
};

export const crossJoin = async (c: Context) => {
  try {
    const result = await join.CrossJoin();
    return c.json({ message: "get all orders through cross join", result }, 200);
  } catch (error) {
    return c.json({ message: "Internal server error", error }, 500);
  }
};

export const practiceJoin = async (c: Context) => {
  try {
    const result = await join.PracticeJoin();
    return c.json(result, 200);
  } catch (error) {
    return c.json({ message: "Internal server error", error }, 500);
  }
};
