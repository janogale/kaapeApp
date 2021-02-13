import React from "react";
import QrReader from "react-qr-reader";
function QrCodeReader(props) {
  const [result, setResult] = React.useState(null);
  const [qrData, setQrData] = React.useState(null);
  const [camera, switchCamera] = React.useState("environment");

  React.useEffect(function () {});

  const handleScan = (data) => {
    console.log(data);
    setResult(data);
    if (data) {
      setQrData(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const handleSwitchCamera = () => {
    switchCamera(camera == "environment" ? "user" : "environment");
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <div style={{ position: "relative", marginBottom: 80 }}>
        <QrReader
          delay={500}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          facingMode={camera}
        />
      </div>

      <p>found Data: {qrData}</p>

      <h2>{camera}</h2>
      <button onClick={handleSwitchCamera}>Switch Camera</button>
    </div>
  );
}

export default QrCodeReader;
