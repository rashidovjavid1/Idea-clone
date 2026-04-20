import axios from "axios";
import api from "./axios";

export async function getAboutData() {
  const res = await api.get("page-data/about");
  return res.data;
}
