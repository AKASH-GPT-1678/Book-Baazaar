// 📁 src/data/bundles.ts
import axios from "axios";
import { ENV } from "@/data/ENV";

export const LoadBundles = async (category: string) => {
  try {
    if (!category) {
      throw new Error("Category is required to load bundles");
    }

    const response = await axios.get(`${ENV.BASE_URL}/api/product/bundles/${category}`);

    // Optional safety check
    if (!response.data || !response.data.success) {
      throw new Error("Failed to load bundles");
    }

    return response.data.data; // ✅ Return only the bundles array
  } catch (error: any) {
    console.error("Error loading bundles:", error.message);
    throw new Error("Something went wrong while fetching bundles");
  }
};
