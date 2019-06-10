import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import styled from "styled-components"

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormTitle = styled.h2`
  color: #313131;
  margin-top: 15px;
`
const FormElementWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`
const ButtonElementWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`
const Label = styled.label`
  font-size: 20px;
  color: #313131;
  margin: 5px;
`

const Input = styled.input`
  border: 2px solid #313131;
  border-radius: 3px;
  width: 225px;
  padding: 5px;
`

const TextArea = styled.textarea`
  width: 450px;
  min-width: 275px;
  min-height: 200px;
  border: 2px solid #313131;
  border-radius: 3px;
  padding: 5px;
`

const Button = styled.input`
  border: 2px solid #313131;
  border-radius: 3px;
  background: none;
`

export default () => (
  <Layout>
    <PageContentStyleWrapper>
      <FormWrapper>
        <FormTitle>Let{`'`}s talk.</FormTitle>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <FormElementWrapper>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" required />
          </FormElementWrapper>
          <FormElementWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required />
          </FormElementWrapper>
          <FormElementWrapper>
            <TextArea name="message" id="message" rows="6" required />
          </FormElementWrapper>
          <input type="hidden" display="none" name="bot-field" />
          <input
            type="hidden"
            display="none"
            name="form-name"
            value="contact"
          />
          <ButtonElementWrapper>
            <Button type="reset" value="Clear" />
            <Button type="submit" value="Send Message" />
          </ButtonElementWrapper>
        </form>
      </FormWrapper>
    </PageContentStyleWrapper>
  </Layout>
)
