import {createClient} from "@supabase/supabase-js"

export async function uploadFile (images:File[]){
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    
    const supabase = createClient(supabaseUrl,supabaseKey);

    const data = await Promise.all(
        images.map((file) =>
          supabase.storage.from("kycFiles").upload(`${file.name}_${Date.now()}`, file)
        )
      );

      //console.log({data});
    
      const urls = data.map(
        (item) =>
          supabase.storage.from("kycFiles").getPublicUrl(item.data?.path ?? "").data.publicUrl
      );
    
      return urls;
}