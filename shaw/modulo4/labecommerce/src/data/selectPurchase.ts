import connection from "../connection";
import { Purchase } from "../types/Purchase";

const selectPurchase = async (user_id: string): Promise<Purchase[]> => {
  // const purchases: Purchase[] = await connection("labecommerce_purchases")
  //   .select({
  //     product_id: "labecommerce_products.id",
  //     product_name: "labecommerce_products.name",
  //     product_price: "labecommerce_products.price",
  //     user_id: "labecommerce_users.id",
  //     user_name: "labecommerce_users.name",
  //     purchase_id: "labecommerce_purchases.id",
  //     quantity: "labecommerce_purchases.quantity",
  //     total_price: "labecommerce_purchases.total_price"
  //   })
  //   .join(
  //     "labecommerce_users",
  //     "labecommerce_users.id",
  //     "labecommerce_purchases.user_id"
  //   )
  //   .join(
  //     "labecommerce_products",
  //     "labecommerce_products.id",
  //     "labecommerce_purchases.product_id"
  //   )
  //   .where({ user_id });

  const purchases = await connection.raw(`
    select 
    labecommerce_users.id as IdPessoa ,
    labecommerce_users.name as NomePessoa,
    labecommerce_products.name as NomeProduto,
    labecommerce_purchases.id as IdCompra,
    labecommerce_purchases.quantity as Quantidade,
    labecommerce_purchases.total_price as PrecoTotal
    from labecommerce_purchases
    inner join
      labecommerce_users 
        on
      labecommerce_purchases.user_id = labecommerce_users.id
    inner join
      labecommerce_products 
        on
      labecommerce_purchases.product_id = labecommerce_products.id
    where labecommerce_users.id = "${user_id}";
    `)

  console.log(purchases[0])
  return purchases[0];
};

export default selectPurchase;