import React, {useState, useEffect} from 'react';
//import notes from '../assets/data';
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

function NotePage() {
  const { id } = useParams();
  let noteId = parseInt(id);
  

  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  //const note = notes.find(note => note.id === noteId);

  let getNote = async () => {
    let response = await fetch(`http://localhost:5000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to={"/"}>
            <ArrowLeft/>
          </Link>
        </h3>
      </div>

      <textarea value={note?.body}></textarea>
    </div>
  );
}

export default NotePage;