import { useState } from "react";
import { alchemy } from "../App";

const InputAddress = () => {
  const [address, setAddress] = useState("");

  const onChange = (e) => {
    setAddress(e.target.value);
  };

  const getTxAddress = async () => {
    try {
      const response = await alchemy.core.getAssetTransfers(
        "0xa719eed5a3be33051e1056d685952e50a1e104c6"
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = () => {
    getTxAddress();
  };

  return (
    <div>
      <label htmlFor="address">address</label>
      <input type="text" onChange={onChange} />
      <button type="submit" onClick={onSubmit}>
        enviar
      </button>
    </div>
  );
};

export default InputAddress;
