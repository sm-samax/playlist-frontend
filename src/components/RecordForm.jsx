import "./RecordForm.css";
import { ReactComponent as StartIcon } from "../assets/start.svg";
import { ReactComponent as PauseIcon } from "../assets/pause.svg";
import { ReactComponent as DownloadIcon } from "../assets/download.svg";
import { ReactComponent as RemoveIcon } from "../assets/remove.svg";
import { useState } from "react";

export default function RecordForm(props) {
  const record = props.record;
  const removeRecord = props.removeRecord;
  const [playing, setPlaying] = useState(false);

  const onPlay = (e) => {
    setPlaying(!playing);
  };

  return (
    <div className="recf">
      <p>{record.title}</p>
      <div className="alr">
        <button onClick={onPlay}>
          {!playing && <StartIcon className="ico" />}
          {playing && <PauseIcon className="ico" />}
        </button>
        <button>
          <DownloadIcon className="ico" />
        </button>
        <button onClick={(e) => removeRecord(record.id)}>
          <RemoveIcon className="ico" />
        </button>
      </div>
    </div>
  );
}
