import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const LinkResult = ({ inputValue }) => {
  //console.log(inputValue);
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        setShortenLink(res.data.result.full_short_link);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (inputValue) {
      fetchData();
    }
  }, [inputValue]);

  if (error) {
    return <p className="nodata">Please provide a valid link</p>;
  }
  if (loading) {
    return <p className="nodata">loading.....</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
