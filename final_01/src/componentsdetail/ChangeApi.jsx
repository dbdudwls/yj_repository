import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Change() {

    const navigate = useNavigate();
    const [convertedImage, setConvertedImage] = useState(null);

    const redirectSalonStyle = () => {
        navigate('/salon-style');
    }

    // ailabapi를 이용한 헤어 체인저 기능 

    const handleClick = (hairType) => {
        axios
            .get("http://192.168.178.150:5000/static/before.jpg", { responseType: "blob" })
            .then((response) => {
                // new File([fileData], fileName, options) 형식
                const file = new File([response.data], "face2.png", { type: "image/png" });
                const formData = new FormData();
                formData.append("image_target", file);
                formData.append("hair_type", hairType);

                axios
                    .post(
                        "https://www.ailabapi.com/api/portrait/effects/hairstyle-editor",
                        formData,
                        {
                            headers: {
                                "ailabapi-api-key":
                                    "pif3gZNAWMSLYIRUwTiKeozLdQvxCpJmHX7q6mebcG9sva0l3rC9YkDT7ZV24Euf",
                                "Content-Type": "multipart/form-data",
                            },
                            timeout: 5000,
                        }
                    )
                    .then((response) => {
                        setConvertedImage("data:image/jpeg;base64," + response.data.data.image);
                    })
                    .catch((error) => {
                        alert("실패");
                    });
            })
            .catch((error) => {
                alert("이미지 가져오기 실패");
            });
    };

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div>
                {convertedImage ? (
                    <img
                        src={convertedImage}
                        alt="변환된 이미지"
                        style={{ width: "160px", height: "192px" }}
                    />
                ) : (
                    <img
                        src="http://192.168.178.150:5000/static/before.jpg?cache=false"
                        alt="기본 이미지"
                        style={{ width: "160px", height: "192px" }}
                    />
                )}
            </div>

            <div style={{ margin:"5px", display: "flex", flexDirection: "column", alignItems: "center" }}>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="btnchange" style={{ display: "block" }} onClick={() => handleClick(0)}>
                        앞머리
                    </button>
                    <button className="btnchange" style={{ display: "block" }} onClick={() => handleClick(1)}>
                        긴머리
                    </button>
                    <button className="btnchange" style={{ display: "block" }} onClick={() => handleClick(2)}>
                    <span>앞머리+<br />긴머리</span>
                    </button>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="btnchange" style={{ display: "block" }} onClick={() => handleClick(3)}>
                        <span>모발수<br />증가</span>
                    </button>
                    <button className="btnchange" style={{ display: "block" }} onClick={() => handleClick(901)}>
                        <span>스트레이트<br />헤어</span>
                    </button>
                    <button className="btnchange" style={{ display: "block", backgroundColor: 'aliceblue' }} onClick={redirectSalonStyle}>
                        <span>우리미용실<br />헤어스타일</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Change;