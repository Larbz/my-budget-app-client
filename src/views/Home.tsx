import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useAuth } from "../context/Auth";
import { AuthContext } from "../context/Auth/AuthContext";
import { Main } from "../styles/components/Basic";
import { toBase64 } from "../utils/imageTo64Base";

interface img {
    _id: string;
    name: string;
    file: string;
}

export const Home = () => {
    const { jwt, csrf } = useAuth();
    const [img, setImg] = useState<img>();
    const [imgUrl, setImgUrl] = useState("");
    const readImage = async () => {
        const img = await fetch("http://192.168.18.3:3000/api/images/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Specify the content type of the request body
            },
            body: JSON.stringify({
                id: "646edd394d22a2f63991ce72",
            }),
        });
        const data = await img.json();
        setImg(data);
        console.log(data);
    };
    const urlForServer = "http://192.168.18.3:3000/api/images";
    // const createImg = () => {
    //     const uint8Array = new Uint8Array(img?.data.data as ArrayBuffer);

    //     // Crea un objeto Blob a partir del Uint8Array
    //     const blob = new Blob([uint8Array], { type: "image/jpeg" });

    //     // Crea una URL a partir del objeto Blob
    //     const imageUrl = URL.createObjectURL(blob);
    //     setImgUrl(imageUrl);
    //     // // Crea un elemento img y establece su atributo src con la URL de la imagen
    //     // const imgElement = document.createElement('img');
    //     // imgElement.src = imageUrl;

    //     // // Agrega el elemento img al DOM para mostrar la imagen
    //     // document.body.appendChild(imgElement);
    // };
    const [file, setFile] = useState<File | undefined | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [display, setDisplay] = useState<File[]>([]);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0]);
        const prevBlob = URL.createObjectURL(e.target.files?.[0] as Blob);
        setPreview(prevBlob);
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(file);
        const b64file: string = (await toBase64(file as File)) as string;
        const formData = new FormData();
        console.log(b64file);
        formData.append("file", b64file);
        console.log(formData.get("file"));
        await axios.post(urlForServer, formData);
        // fetchData();
        // setPreview(null);
    };

    const fetchData = async () => {
        const res = await axios.post(urlForServer + "/get", {
            id: "646f0d56e0ee9b813db43060",
        });
        setImg(res.data);
        console.log(img);
        // setDisplay(res.data);
        // console.log(display);
    };

    // useEffect(() => {
    //     readImage()
    //     createImg()
    // }, []);
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Main>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onChange} />
                <button type="submit">send data</button>
            </form>
            <hr />
            {/* DISPLAY FILE AS A PREVIEW */}
            <h1>file preview</h1>
            {preview && <img src={preview} alt="" />}
            <hr />
            {/* DISPLAY FILES */}
            <h1>display files</h1>
            {/* {display &&
                display.map((el) => {
                    return (
                        <div key={el._id}>
                            <hr />
                            <img src={el.fileBin} alt="" />
                        </div>
                    );
                })} */}
            <img src={img?.file}></img>
        </Main>
    );
};
