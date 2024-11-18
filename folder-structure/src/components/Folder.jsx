/* eslint-disable react/prop-types */

import React, { useState } from "react";

const Folder = ({ explorerData }) => {
  const [showSubFolders, setShowSubFolders] = useState(false);
  const [showForm, setShowForm] = useState({
    visible: false,
    isFolder: false,
  });

  const handleAddFolderOrFile = (e, isFolder) => {
    e.stopPropagation();
    setShowSubFolders(true);
    setShowForm({
      visible: true,
      isFolder,
    });
  };

  if (explorerData.isFolder) {
    return (
      <div className="root">
        <div
          className="folder"
          onClick={() => {
            setShowSubFolders((value) => {
              return !value;
            });
          }}
        >
          <span>📂 {explorerData.name}</span>
          <div className="buttons">
            <button
              onClick={(e) => {
                handleAddFolderOrFile(e, true);
              }}
            >
              Folder +
            </button>
            <button
              onClick={(e) => {
                handleAddFolderOrFile(e, false);
              }}
            >
              File +
            </button>
          </div>
        </div>

        <div
          style={{
            display: showSubFolders ? "block" : "none",
          }}
          className="sub-folders"
        >
          {showForm.visible && (
            <form>
              <input
                type="text"
                autoFocus
                onBlur={() => {
                  setShowForm((value) => {
                    return { ...value, visible: false };
                  });
                }}
              ></input>
              <button>Add</button>
            </form>
          )}
          {explorerData.items.map((exp) => {
            return <Folder explorerData={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">🗃️ {explorerData.name}</span>;
  }
};

Folder.propTypes = {};

export default Folder;
