import supabase from "..";

export const fetchOrderHistoryData = async (user) => {
  if (!user) return [];
  try {
    const responseOrderHistoryData = await supabase
      .from("orderHistory")
      .select()
      .eq("user_id", user.id);
    if (responseOrderHistoryData.error) {
      throw new Error(responseOrderHistoryData.error.message);
    } else {
      return responseOrderHistoryData;
    }
  } catch (error) {
    alert(error);
  }
  return [];
};
