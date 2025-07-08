import { createClient } from "@supabase/supabase-js"

const url = "https://kjdtbwnojzhbuszmauew.supabase.co"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZHRid25vanpoYnVzem1hdWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjAxNTUsImV4cCI6MjA2NzA5NjE1NX0.xRmv2AhpwEfOmbpOcuz0PsOLS92O-N_MsJDcn-pEnhI`


// export default function uploadMediaToSupabase(file) {


//     return new Promise((resolve, reject) => {

//         if (file == null) {

//             reject("File not Added")

//         }

//         let fileName = file.name
//         const extention = fileName.split(",")[fileName.split(",").length - 1]


        // const supabase = createClient(url, key)

//         const timeStamp = new Date().getTime()
//         fileName = timeStamp +file.name+ "." + extention


//         supabase.storage.from("images").upload(file.name, file, {



//             cacheControl: "3600",
//             upsert: false

//         }).then(() => {

//             const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
//             resolve(publicUrl)


//         }).catch((err) => {

//             reject(err)

//         })



//     })





// }






//files upload karaddi allow karana types decide karana part eka//
// if(extention != "jpg" && extention!= "png" && extention!= "jpeg"){
// alert("please select a jpg,jpeg or png files")
// return

// }


export default function mediaUpload(file) {
	return new Promise((resolve, reject) => {
        if(file == null){
            reject("No file selected")
        }

 const supabase = createClient(url, key)

		const timestamp = new Date().getTime();
		const fileName = timestamp + file.name;

		supabase.storage
			.from("images")
			.upload(fileName, file, {
				cacheControl: "3600",
				upsert: false,
			})
			.then(() => {
				const publicUrl = supabase.storage.from("images").getPublicUrl(fileName)
					.data.publicUrl;
				resolve(publicUrl);
			}).catch(()=>{
                reject("Error uploading file")
            })
	});
}







