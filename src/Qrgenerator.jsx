import React from "react";
import { useState } from "react";

export default function Qrgenerator() {

const [img,setImg]=useState("");
const [load,setLoad]= useState(false);
const [data,setData] = useState("joker");
const [size,setSize] = useState("150")


async function qrGenerate(){
setLoad(true);
try{
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      data
    )}`;
    setImg(url);
}
catch(error){
console.error("QR Generator is Error",error);
}
finally{
    setLoad(false);
}
}

function handleData(e){
setData(e.target.value);
}

function handleSize(e){
    setSize(e.target.value);
}

function qrDownload(){

}
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex flex-column">
                  <h1 className="card-title mx-auto">QR Code Generator</h1>
                  {load && <p className="card-text">Please Wait....</p>}
                  {img && <img src={img} alt="" className="card-image-top mx-auto" width={size} />}
                  <div className="form-group">
                    <label htmlFor="url" className="form-label">
                      enter Your URL:
                    </label>
                    <input type="text" id="url" className="form-control" onChange={handleData}/>
                    <label htmlFor="size" className="form-label">
                      QR Size::
                    </label>
                    <input type="text" id="size" className="form-control" onChange={handleSize}/>
                    <div className="row my-3">
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary w-100"
                          onClick={qrGenerate}
                          disabled={load}
                        >
                          QR Generator
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary w-100"
                          onClick={qrDownload}
                        >
                          QR Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
