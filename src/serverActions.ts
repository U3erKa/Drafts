'use server';

export async function submitForm(_state: any, formData: FormData) {
  try {
    const data = Object.fromEntries(formData);
    console.log(data);
    return !!data.firstName;
  } catch (error: any) {
    console.log(error?.message);
    return false;
  }
}
