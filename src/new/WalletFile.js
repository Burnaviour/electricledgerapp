import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";

const WalletDownload = ({ walletFile, success, username }) => {
  const [downloaded, setDownloaded] = useState(false);
  useEffect(() => {
    if (success && !downloaded) {
      saveAs(
        new Blob([Buffer.from(walletFile.data)], { type: walletFile.type }),
        `${username}.id`
      );
      setDownloaded(true);
    }
  }, [success, downloaded, walletFile, username]);

  return (
    <>
      {success && downloaded && (
        <div>
          <p>
            Your wallet file has been saved. You can now log in using your
            credentials.
          </p>
          <p>if you didn't get file click here to download.</p>
        </div>
      )}
      <br />
      {downloaded && (
        <button
          onClick={() => {
            saveAs(
              new Blob([Buffer.from(walletFile.data)], {
                type: walletFile.type,
              }),
              `${username}.id`
            );
          }}
        >
          Download Wallet
        </button>
      )}
    </>
  );
};

export default WalletDownload;
