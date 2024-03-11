import {useEffect, useState} from "react";

const useImgUrl = id => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        import(`../productImg/${id}.jpg`).then((image) => {
            setImage(image.default);
        });
    }, [id]);

    return image
}

export default useImgUrl;