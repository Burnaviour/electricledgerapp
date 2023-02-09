import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";
import { BoxH31, FormButton, FormLabel2 } from "./adminElements";

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
          <br />
          <BoxH31>
            <FormLabel2>
              Your wallet file has been saved. You can now log in using your
              credentials.
            </FormLabel2>
          </BoxH31>
          <BoxH31>
            <FormLabel2>
              if you didn't get file click here to download.
            </FormLabel2>
          </BoxH31>
        </div>
      )}
      <br />
      {downloaded && (
        <FormButton
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
        </FormButton>
      )}
    </>
  );
};

export default WalletDownload;
