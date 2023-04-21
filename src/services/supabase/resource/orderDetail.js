import supabase from "..";

export const fetchOrderDetailData = async (user) => {
  if (!user) return [];
  try {
    const responseOrdersData = await supabase.from('order').select().eq('user_id',user.id);
    if (responseOrdersData.error) {
      throw new Error(responseOrdersData.error.message)
    } else {
      console.log(responseOrdersData.data); 
      const orders = await Promise.all(responseOrdersData.data.map(async order=>{
        const responseOrdersDetailData = await supabase.from("orderDetails").select().eq('order_id',order.id);
        if (responseOrdersDetailData.error) {
          throw new Error(responseOrdersDetailData.error.message)
        } else {
          return {
            ...order,products:responseOrdersDetailData.data
          }
        }
      }))
      console.log(orders);
      return orders;
    }
  } catch (error) {
    alert(error);
  }
  return [];
};
