// Import Modules & Components
import { useState } from 'react'
// Import Styles
import styles from './ContactForm.module.scss'

export function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name, email, message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
              setMessage('')
            }
          })
    }

    return (
        <form className={styles.FormContainer}>
            <div className={styles.Box50}>
                <lable htmlFor="name">Dein Name</lable>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Max Mustermann"
                    onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
            <div className={styles.Box50}>
                <lable htmlFor="mail">Deine Mail-Adresse</lable>
                <input
                    type="email"
                    id="mail" 
                    name="mail"
                    placeholder="max@mustermann.de"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className={styles.Box100}>
                <lable htmlFor="message">Deine Nachricht</lable>
                <textarea 
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Was möchtest du uns sagen?"
                    onChange={(e)=>{setMessage(e.target.value)}}
                />
            </div>
            <button type='submit' onClick={(e)=>{handleSubmit(e)}}>
                Senden
            </button>
        </form>
    )
}