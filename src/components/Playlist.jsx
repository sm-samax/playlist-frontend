import { useState } from "react";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";
import RecordForm from "./RecordForm";
import "./Playlist.css";
import SHA256 from "../sha256";

export default function Playlist() {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [records, setRecords] = useState([]);

  const addRecord = (e) => {
    if (title && url) {
      records.push({
        id: SHA256(`${title}${url}`),
        title: title,
        url: url,
      });

      setRecords(records);
      setTitle("");
      setURL("");
    }
  };

  const removeRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="pl">
      <div className="add">
        <span className="g-wrap">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
        <span className="g-wrap">
          <LinkIcon className="ico" />
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
        </span>

        <span className="g-wrap">
          <button onClick={addRecord}>
            <AddIcon className="ico" />
          </button>
        </span>
      </div>

      <ul className="list">
        {records.map((record) => (
          <li key={record.id}>
            <RecordForm record={record} removeRecord={removeRecord} />
          </li>
        ))}
      </ul>
    </div>
  );
}
