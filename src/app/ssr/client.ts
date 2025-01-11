import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../db/types";

// Implementation based on the URL: https://clerk.com/docs/integrations/databases/supabase
export const createClerkSupabaseClientSsr = async () => {
  const { getToken } = await auth();

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_KEY) {
    throw new Error("Missing Supabase environment variables");
  }

  try {
    const token = await getToken({
      template: "supabase",
    });

    const supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token ?? process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
          },
        },
      },
    );

    return supabase;
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
    throw new Error("Failed to initialize database connection");
  }
};
