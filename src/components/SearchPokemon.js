import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { RxMagnifyingGlass } from 'react-icons/rx'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const schema = yup.object().shape({
  query: yup.string().required('Search string is required'),
})

const SearchPokemon = ({ onSubmit }) => {
  const handleSubmit = async ({ resetForm, query }) => {
    if (!query.trim()) {
      // toast.error('Enter a request!', { autoClose: 1500 })
    } else {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      const data = await response.json()
      onSubmit(data)
      console.log(data)
      resetForm()
    }
  }

  const initialValues = {
    query: '',
  }

  return (
    <>
      {/* <ToastContainer /> */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            <Field type="text" name="query" />
            <ErrorMessage name="query" component="div" />
          </label>

          <button type="submit">
            <RxMagnifyingGlass />
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default SearchPokemon