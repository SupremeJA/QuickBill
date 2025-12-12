import { toPng } from "html-to-image";

const ReceiptButton = ({ ref, customerName }) => {
  const downloadImage = async () => {
    if (ref.current === null) return;

    try {
      // Converts the referenced element to a PNG data URL
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      // Create a fake link to trigger the download
      const link = document.createElement("a");
      link.download = `receipt-${customerName}`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download receipt", err);
    }
  };
  return (
    // <div>
    <button
      onClick={downloadImage}
      className="mt-4 bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all w-full"
    >
      Download Image
    </button>
    // </div>
  );
};

export default ReceiptButton;
