"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface FormData {
  name: string;
  email: string;
  password: string;
}
const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function signup(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }
  await SignName(formData.name);
}

async function SignName(full_name: string) {
  const id = await GenerateId();
  const { error } = await supabase
    .from("profiles")
    .update({ full_name })
    .eq("id", id);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}

async function GenerateId() {
  const { error, data } = await supabase.auth.getUser();
  if (error) {
    redirect("/error");
  }
  return data.user.id;
}
