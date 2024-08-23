"use server";
import { InputType } from "@/app/client/p1Application/page";
//import { UpdateInputType } from "@/app/admin/adone/application/[id]/page";
import prisma from "../prisma";
import { Application } from "@prisma/client";


export async function savApplication(applicationData:InputType, filesUrl:string[],userId:string){

    const basic: Omit<Application, "id"> = {     
        counterparty:applicationData.counterparty,
        entityType: applicationData.entityType,  
        regName: applicationData.regName,      
        regCountry: applicationData.regCountry,
        regId : applicationData.regId,
        regAddr: applicationData.regAddr,
        bsnsAddr: applicationData.bsnsAddr,
        telephone: applicationData.telephone,
        website: applicationData.website,
        bankName: applicationData.bankName,
        bankAddr: applicationData.bankAddr,
        country: applicationData.country,
        accNum: applicationData.accNum,
        swiftCode: applicationData.swiftCode,
        iban: applicationData.iban,
        accBen: applicationData.accBen,
        status:"Pending",
        comment:null,
        userId,
    }


    const result = await prisma.application.create({
        data:{
            ...basic,
            files:{
                create:filesUrl.map((img) => ({
                    url:img,
                }))
            }
        }
    })

    console.log({result});
    return result;

}

// export async function updtApplication(applicationId:number, applicationData:UpdateInputType){
//     const result = await prisma.application.update({
//         where:{
//             id:applicationId,
//         },
//         data:{
//             status:applicationData.status,
//             comment:applicationData.comment
//         }
//     })

// }