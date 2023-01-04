import { saveAs } from "file-saver";

async function downloadWalletIDFile() {
  try {
    // Make a request to the API endpoint to get the wallet ID file
    const response = await fetch("/api/downloadWalletIDFile");
    const data = await response.blob();

    // Save the file to the user's device
    saveAs(data, "walletIDFile.txt");
  } catch (error) {
    console.error(error);
  }
}
