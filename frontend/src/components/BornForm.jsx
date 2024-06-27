import { EDIT_YEAR } from "../queries"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import Select from 'react-select'

const BornForm = ({ authors }) => {
    const [selectedAuthor, setSelectedAuthor] = useState(null)

    const [year, setYear] = useState('')

    const [ editYear ] = useMutation(EDIT_YEAR)

    const authorOptions = authors.map(author => ({
        value: author.name,
        label: author.name
    }))

    const submit = (event) => {
        event.preventDefault()

        editYear({ variables: { name: selectedAuthor.value, setBornTo: parseInt(year) } })

        setSelectedAuthor(null)
        setYear('')
    }


    return (
        <div>
            <h2>change born year</h2>
            <form onSubmit={submit}>
                <div>
                    name: <Select
                        value={selectedAuthor}
                        onChange={setSelectedAuthor}
                        options={authorOptions}
                    />
                </div>
                <div>
                    year: <input 
                    value={year}
                    onChange={({ target }) => setYear(target.value)}
                    />
                </div>
                <button type="submit">change year</button>
            </form>
        </div>
    )

}

export default BornForm