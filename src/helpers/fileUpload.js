const cloudUrl = 'https://api.cloudinary.com/v1_1/ikevinmejia/upload';
const cloudPreset = 'ml_default'

export const fileUpload = async (file) => {

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', cloudPreset);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        const cloudResp = await resp.json();
        return cloudResp.secure_url
    } catch (err) {
        console.error(err);
    }
}