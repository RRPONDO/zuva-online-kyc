import { createUploadthing, type FileRouter } from "uploadthing/next";

 
const f = createUploadthing();
 

export const ourFileRouter = {

  fileUploader: f({ pdf: { maxFileSize: "32MB" } })
    
    .onUploadComplete(async ({ metadata, file }) => {      
 
      console.log("file url", file.url); 
    
    }),
} 