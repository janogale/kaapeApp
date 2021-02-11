import React from "react";
import QrReader from "react-qr-scanner";
function QrCodeReader(props) {
  const [result, setResult] = React.useState(null);
  const [qrData, setQrData] = React.useState(null);

  const handleScan = (data) => {
    setResult(data);
    if (data) {
      setQrData(data.text);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      {result === null ? (
        <QrReader
          delay={1000}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          facingMode="environment"
        />
      ) : (
        <>
          <p>Found data</p>
          <p>{qrData}</p>
        </>
      )}
    </div>
  );
}

export default QrCodeReader;
