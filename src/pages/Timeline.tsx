import "./Timeline.css";

import { FormEvent, KeyboardEvent, useState } from "react";

import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

export function Timeline() {
  const [tweets, setTweets] = useState(["Tweet 1", "Tweet 2", "Tweet 3"]);
  const [newTweet, setNewTweet] = useState("");

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/54709156?v=4"
            alt="Namikoka"
          />
          <textarea
            id="tweet"
            onKeyDown={handleHotkeySubmit}
            value={newTweet}
            placeholder="What's happening?"
            onChange={(event) => setNewTweet(event.target.value)}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
