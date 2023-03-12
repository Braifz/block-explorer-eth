import { useState } from "react";
import { alchemy } from "../config/alchemyConfig";
import { ethers } from "ethers";

const InputAddress = () => {
  const [address, setAddress] = useState("");

  const getTxAddress = async (address) => {
    try {
      const response = await alchemy.nft.getNftsForOwner("kawfee.eth");
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = () => {
    // getTxAddress();
    if (address !== "") {
      const isAddress = ethers.isAddress(address);
      if (isAddress) {
        console.log(address);
        getTxAddress();
      } else {
        console.log("no es un address");
      }
      setAddress("");
    }
  };

  return (
    <div>
      <label htmlFor="address">address</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>
        enviar
      </button>
    </div>
  );
};

export default InputAddress;
