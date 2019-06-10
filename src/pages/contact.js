import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"

export default () => (
  <Layout>
    <PageContentStyleWrapper>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="submit" value="Send Message" />
        <input type="reset" value="Clear" />
      </form>
    </PageContentStyleWrapper>
  </Layout>
)
