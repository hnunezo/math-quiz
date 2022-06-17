import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import PersonForm from './components/PersonForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Exercise from './components/Exercise';


const App = () => {
  const [collapse, setCollapse] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [exercises, setExercises] = useState([])

  return (
    <div className='app flex-row align-items-center'>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PersonForm
                  collapse={collapse}
                  setCollapse={setCollapse}
                  setName={setName}
                  setType={setType}
                  setCantidad={setCantidad}
                  setExercises={setExercises}
                />}
            />
            <Route
              path="welcome"
              element={
                <Welcome
                  name={name}
                  type={type}
                  cantidad={cantidad}
                  exercises={exercises}
                />}
            />
            {exercises.map(exercise => {
              return <Route key={exercise.id}
                        path={`exercises/${exercise.id}`} 
                        element={<Exercise 
                                    exercise={exercise} 
                                    type={type} 
                                    cantidad={cantidad}
                                    setExercises={setExercises}
                                    exercises={exercises}/>}/>
            })}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App;
