"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function IsAuth() {
  const { data, error } = await supabase.auth.getUser();
  if (data.user) {
    return "Yes email is" + data.user.id;
  } else {
    return "NOOOOO";
  }
}
