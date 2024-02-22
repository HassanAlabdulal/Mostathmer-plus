"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Opportunity } from "@/interfaces/add-opportunity";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function IsAuth() {
  const { data, error } = await supabase.auth.getUser();
  if (data.user) {
    return true;
  } else {
    return false;
  }
}

export async function AddNewOpportunity(opportunity: Opportunity) {
  const { data, error } = await supabase
    .from("opportunities")
    .insert({
      Title: opportunity.Title,
      Description: opportunity.Description,
      Coast: opportunity.Coast,
      Location: opportunity.Location,
      Contact: opportunity.Contact,
      Type: opportunity.Type,
      OwnerID: getUserID,
    })
    .select();

  if (error) {
    console.log(error);

    redirect("/error");
  }
}

async function getUserID() {
  const { data, error } = await supabase.auth.getUser();

  console.log(data.user?.id);

  return data.user?.id;
}
