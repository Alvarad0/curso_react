import { Form, InputGroup, FormControl, Button } from "react-bootstrap"

const FormSearch = (props) => {
  const {setSearch, isLoading} = props
  const handleSubmit = (e) => {
    e.preventDefault()
    const textSearch = e.target[0].value
    setSearch(textSearch)
    e.target[0].value = ""
  }

  return (
    <>
      <div className="container form-search">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscador"
              aria-label="Buscador"
            />
            <Button variant="outline-primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Buscando…' : 'Buscar'}
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  )
}

export default FormSearch
