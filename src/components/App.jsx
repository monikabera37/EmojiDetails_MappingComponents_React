import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const createEntry = (item) => {
  return (
    <Entry
      emoji={item.emoji}
      name={item.name}
      des={item.meaning}
      keys={emojipedia.id}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
