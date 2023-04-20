import QRCode from "qrcode";
import { useEffect, useRef } from "react";

type QRCodeGeneratorProps = {
    url: string;
};

function QRCodeGenerator({ url }: QRCodeGeneratorProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        QRCode.toCanvas(canvas, url, {
            margin: 2,
            errorCorrectionLevel: "H",
            width: 300,

            color: { dark: "#000000", light: "#ffffff" },
        });
    }, [url]);

    return <canvas ref={canvasRef} style={{ borderRadius: "8px" }} />;
}

export default QRCodeGenerator;
