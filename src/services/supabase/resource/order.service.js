import supabase from "..";

export const fetchOrderData = async (user) => {
  if (!user) return [];
  const { data, error } = await supabase
    .from("order")
    .select()
    .eq("user_id", user.id)
  if (data) {
    const order = data;
    console.log("order",order);
    return order;
  } else {
    console.warn(error);
    return;
  }
};
