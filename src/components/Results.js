import { Table } from "reactstrap";
import { XLg, CheckLg, TextLeft, GraphDown } from "react-bootstrap-icons";
import { PieChart } from "react-minimal-pie-chart";
import "../App.css";

const Results = ({ exersices, correctas, cantidad, type }) => {
  return (
    <div style={{ padding: 20, margin: 25 }}>
      <h2>
        <b>Tus resultados!!</b>!!
      </h2>
      <h3>Resumen {<GraphDown />}</h3>
      {exersices.length !== 0 ? (
        <PieChart
          style={{ width: "350px" }}
          animation
          animationDuration={500}
          animationEasing="ease-out"
          data={[
            { title: "Correctas", value: Number(correctas), color: "green" },
            {
              title: "Incorrectas",
              value: Number(cantidad) - Number(correctas),
              color: "red",
            },
          ]}
          labelStyle={{
            fontSize: "5px",
            fontColor: "FFFFFA",
            fontWeight: "700",
          }}
        />
      ) : (
        <span>No hay datos</span>
      )}
      <h2>
        {correctas}/{cantidad} Correctas!!
      </h2>
      <h2>
        <b>Detalle {<TextLeft />}</b>
      </h2>
      <Table style={{ color: "white" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {exersices.map((exer, i) => {
            return (
              <tr key={exer.id}>
                <th scope="row">{exer.id}</th>
                <td>
                  {exer.firstNumber} {type} {exer.secondNumber}
                </td>
                <td>
                  {Number(exer.result) === Number(exer.userResult) ? (
                    <span>{<CheckLg color="#64df38" size={30} />}</span>
                  ) : (
                    <span>{<XLg color="red" size={30} />}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Results;
