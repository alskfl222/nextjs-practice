import { useState } from 'react';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const res = await fetch('/api/comments');
    const data = await res.json();
    setComments(data);
  };

  const submitComment = async () => {
    const res = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, { method: 'DELETE' });
    const data = await res.json();
    console.log(data)
    fetchComments()
  };

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>SUBMIT comment</button>
      <button onClick={fetchComments}>LOAD comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.text}
            <button onClick={() => deleteComment(comment.id)}>
              DELETE comment
            </button>
          </div>
        );
      })}
    </>
  );
}
