import { Tweet } from "react-tweet";

export default function Page({ params }: { params: { tweetId: string } }) {
  // center the tweet
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Tweet id={params.tweetId} />
    </div>
  );
}
