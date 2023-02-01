
const Contact = () => {
  return (
    <div>
      <div className="contact-details">
        <h2>Get in touch</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email:
          <a href="mailto: info@dcidrinks.com"/>
        </p>
        <p>Address: 123 Main Street, Berlin, DE 10001</p>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.."/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.."/>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."/>
          <input type="submit" value="Submit"/>
        </form>
        </div>
    </div>
  )
}
export default Contact