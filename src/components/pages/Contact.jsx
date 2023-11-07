export default function Contact() {
  return (
    <div className="form-floating">
      <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com"/>
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    <label for="floatingTextarea">Comments</label>
  </div>
  );
}
