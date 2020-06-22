export default async function (files: FileList) {
    const uri = `https://api.cloudinary.com/v1_1/${"dyypxjmx9"}/upload`;
    const get_link: string[] = [];

    console.log(files)

    for (let file of files) {
        try {
            const Data = new FormData();
            Data.append("file", file);
            Data.append("Content", "");
            Data.append("tags", "items");
            Data.append("upload_preset", "yem27xol");

            const response = await fetch(uri, {
                method: "POST",
                body: Data,
            });
            const result = await response.json();
            get_link.push(result?.public_id);
        } catch (error) {
            console.log(error.message);
            return;
        }
    }
    return get_link.join(",");
}