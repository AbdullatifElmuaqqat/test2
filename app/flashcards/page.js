import React, { useState, useEffect } from 'react'
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { useUser } from '@clerk/nextjs'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase' // Adjust the import according to your file structure

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return
      
      const docRef = doc(collection(db, 'users'), user.id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || []
        setFlashcards(collections)
      } else {
        await setDoc(docRef, { flashcards: [] })
      }
    }
    getFlashcards()
  }, [user])

  const handleCardClick = (name) => {
    // Handle card click logic here
    console.log(name)
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {flashcard.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
