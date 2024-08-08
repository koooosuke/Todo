'use server';
import { supabase } from "@/utils/supabase/supabase"
import { revalidateTag } from "next/cache";

export async function getTasks() {
  const { data: tasks, error } = await supabase(['tasks']).from('tasks').select('*');

  if (error) {
    throw error;
  }

  return tasks;
}

export async function addTask(prevState: { result: boolean } | null, formData: FormData) {
  const text = formData.get('text');
  const { error } = await supabase().from('tasks').insert([
    { text }
  ])

  if (error) {
    return {
      result: false
    }
  }

  revalidateTag('tasks');

  return {
    result: true
  }
}

export async function updateTask(prevState: { result: boolean } | null, formData: FormData) {
  const id = formData.get('id');
  const text = formData.get('text');
  const { error } = await supabase().from('tasks').update({ text }).eq('id', id)

  if (error) {
    return {
      result: false
    }
  }

  revalidateTag('tasks');

  return {
    result: true
  }
}

export async function removeTask(id: number) {
  const { error } = await supabase().from('tasks').delete().eq('id', id)

  if (error) {
    return {
      result: false
    }
  }

  revalidateTag('tasks');

  return {
    result: true
  }
}
