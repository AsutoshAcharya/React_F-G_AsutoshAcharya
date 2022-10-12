import React from "react";
import "./DetailsHeader.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RefreshIcon from "@mui/icons-material/Refresh";

function DetailsHeader(props) {
  // const [searchTerm, setSearchTerm] = useState("");
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="heading">
      <div>
        <h3 className="h3">AromaticBar</h3>
        {props.data.length} records found
      </div>
      <div className="input-icons">
        <input
          type="text"
          name=""
          id=""
          className="input-field"
          placeholder="Search..."
          onChange={props.getData}
        />
        <SearchRoundedIcon className="icon" />
        <button
          className="refresh"
          onClick={refreshPage}>
          <RefreshIcon className="refresh" />
        </button>
        <button className="add-new">Add New</button>
      </div>
    </div>
  );
}

export default DetailsHeader;
