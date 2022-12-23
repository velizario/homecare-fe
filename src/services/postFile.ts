import axios from "axios";

type PostFileType = (
    propertyName: string,
    postToURL : string,
    fileName: string,
) => void;

const postFile:PostFileType = (propertyName, postToURL, fileName) => {

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    var formData = new FormData();
    formData.append(propertyName, fileName);
    axios.post(postToURL, formData, config).then(response => console.log(response.data))
}

export default postFile;