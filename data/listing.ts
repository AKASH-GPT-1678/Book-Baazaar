import axios from "axios";
import { ENV } from "@/data/ENV";

import { Book } from "@/components/sellerlisting";


export default async function LoadListings(category: string): Promise<Book[]> {
  try {

    if (!category || typeof category !== "string") {
      throw new Error("Invalid category. Must be a non-empty string.");
    }


    const response = await axios.get(`${ENV.BASE_URL}/api/product/${category}`);


    if (!Array.isArray(response.data)) {
      throw new Error("Unexpected API response format.");
    }

    return response.data as Book[];

  } catch (error: any) {
    console.error("Failed to load listings:", error.message || error);
    throw new Error("Could not load book listings. Please try again later.");
  }
}
