import supabase from "..";

export const fetchCartData = async (user) => {
    if (!user) return [];
    const { data, error } = await supabase
      .from("cart")
      .select()
      .eq("id_user", user.id).single();
    if (data) {
      const response = await supabase
        .from("product")
        .select()
        .eq("id",data.id_product);

        if (response.error) {
            console.warn(response.error);
        }

        return response.error?[]:response.data;

    } else {
      console.warn(error);
      
      return []
    }
  };