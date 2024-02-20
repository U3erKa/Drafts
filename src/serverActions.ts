'use server';

export async function submitForm(formData: FormData) {
  try {
    console.log(Object.fromEntries(formData));
    return true;
  } catch (error) {
    return false;
  }
}
