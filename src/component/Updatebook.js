import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateCat() {

  const {id} = useParams();
  const [book, setCat] = useState();

  async function fetchData() {
    const {data} = await axios.get(`http://localhost:3002/books/${id}`)
    console.log(data);
    setCat(data)
  }

  const update = async (e) => {
    const data = {
        'title': e.target.booktitle.value,
        'description': e.target.bookdescription.value,
    }
    await axios.put(`http://localhost:3002/books/${id}`, {data})
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <form onSubmit={update}>
    <label htmlFor=""> Book title :  </label>
    <input type="text" id='booktitle' defaultValue={book?.title}/>
    <br />
    <label htmlFor=""> Book description : </label>
    <input type="text" name="" id="bookdescription" defaultValue={book?.description}/>
    <br />
    <button type='submit'>save</button>
  </form>
  )
}