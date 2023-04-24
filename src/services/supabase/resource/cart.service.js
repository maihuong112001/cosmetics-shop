import supabase from "..";

export const fetchCartData = async (user) => {
    if (!user) return [];
    const { data, error } = await supabase
      .from("cart")
      .select()
      .eq("id_user", user.id).single();
    if (data) {
      const productIDs = data.items?.map((item)=>item.product_id);
      const response = await supabase
        .from("product")
        .select().in('id',productIDs)

        if (response.error) {
            console.warn(response.error);
            return [];
        }
        else{
          const items = data.items.map((item)=>({
            product:response.data.find(prod=>prod.id===item?.product_id),
            quantity:item.quantity
          }))
          return items;
        }

    } else {
      console.warn(error);
      return []
    }
  };