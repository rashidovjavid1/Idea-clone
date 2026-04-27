import axiosInstance from "../api/axios";
import { cookies } from "next/headers";

export const fetchSSRData = async (endpoint) => {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data } = await axiosInstance.get(endpoint, {
      headers: { Lang: lang?.value || "az" },
    });
    return data;
  } catch (error) {
    console.error(`Xəta: ${endpoint}`, error);
    throw error;
  }
};
