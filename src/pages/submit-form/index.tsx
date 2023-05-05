import { useState } from 'react'

const SubmitForm = () => {
  const [data, setData] = useState({})
  const [submittedData, setSubmittedData] = useState({})
  const [show, setShow] = useState(false)

  const onChange = (e, field) => {
    setData({ ...data, [field]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(data)
    setShow(true)
  }

  return (
    <div className="container">
      <form className="flex flex-col items-center gap-2" onSubmit={onSubmit}>
        <p>Username:</p>
        <input className="px-2" onChange={(e) => onChange(e, 'username')} />
        <p>FullName:</p>
        <input className="px-2" onChange={(e) => onChange(e, 'fullname')} />
        <p>Age:</p>
        <input type="number" min={0} className="px-2" onChange={(e) => onChange(e, 'age')} />
        <button className="block mt-4">Submit</button>
      </form>
      <p className="mt-4">Request Sent to DB with below request data</p>
      {show && Object.entries(submittedData).map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>)}
    </div>
  )
}

export default SubmitForm
