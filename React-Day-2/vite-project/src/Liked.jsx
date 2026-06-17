import React, { useState } from 'react'

const liked = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <div className="eyebrow">SYS.04_LIKE</div>
      <button className="btn btn-ghost" onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default liked