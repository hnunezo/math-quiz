import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";

const Exercise = ({
  exercise,
  type,
  cantidad,
  setExercises,
  exercises,
  correctas,
  setCorrectas,
}) => {
  const [respuesta, setRespuesta] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRespuesta(e.target.value);
  };

  const anterior = () => {
    exercise.id === 1
      ? navigate(`/welcome`)
      : navigate(`/exercises/${exercise.id - 1}`);
  };
  const siguiente = () => {
    const newExercises = exercises.map((obj) => {
      if (exercise.id === obj.id) {
        obj = { ...obj, userResult: respuesta };
        if (Number(exercise.result) === Number(respuesta)) {
          setCorrectas(correctas + 1);
        }
      }
      return obj;
    });
    setExercises(newExercises);
    setRespuesta("");
    if (exercise.id === Number(cantidad)) {
      navigate(`/results`);
    } else {
      navigate(`/exercises/${exercise.id + 1}`);
    }
  };
  return (
    <div style={{ padding: 20, margin: 25, width: 1296, height: 528.391 }}>
      <div
        style={{
          padding: "70px 0",
        }}
      >
        <h1>Ejercicio N° {exercise.id}</h1>
        <h5>
          Resuelve {exercise.firstNumber} {type} {exercise.secondNumber} = ?{" "}
        </h5>
        <Input
          type={"number"}
          step="1"
          value={respuesta}
          onChange={handleChange}
          placeholder={"Resultado..."}
          style={{ width: 1200 }}
        />
        <Button className="button" color={"primary"} onClick={anterior}>
          Anterior
        </Button>
        <Button className="button" color={"primary"} onClick={siguiente}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Exercise;
