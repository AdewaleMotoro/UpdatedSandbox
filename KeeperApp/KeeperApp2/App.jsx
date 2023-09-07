import React from "react";
import Header from "../KeeperApp2/Header";
import Footer from "../KeeperApp2/Footer";
import Note from "../KeeperApp2/Note";
import Notes from "../KeeperApp2/Notes";
import "../KeeperApp2/styles.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />

      {Notes.map(function (noteItems) {
        return (
          <Note
            key={noteItems.key}
            title={noteItems.title}
            content={noteItems.content}
          />
        );
      })}
    </div>
  );
}

export default App;
