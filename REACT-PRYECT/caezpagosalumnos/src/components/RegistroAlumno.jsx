import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// Import specific Bootstrap components if needed
import './RegistroAlumno.module.css'

/*
CREATE TABLE Encargado(
Id BIGINT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR (50) NOT NULL,
Apellido VARCHAR (50) NOT NULL,
IdTipoDoc TINYINT NOT NULL FOREIGN KEY REFERENCES TipoDocumento(Id),
NumeroDocumento VARCHAR(50) NOT NULL,
Telefono VARCHAR(50) NOT NULL,
Direccion TINYINT NOT NULL FOREIGN KEY REFERENCES Direccion(Id),
Parentezco VARCHAR (50)
)
GO
----Tabla Alumno
CREATE TABLE Estudiante(
Id INT NOT NULL PRIMARY KEY IDENTITY (1,1),
Nombre VARCHAR (50) NOT NULL,
Apellido VARCHAR (50) NOT NULL,
IdGrado TINYINT NOT NULL FOREIGN KEY REFERENCES Grado(Id),
IdTipoDoc TINYINT NOT NULL FOREIGN KEY REFERENCES TipoDocumento(Id),
NumeroDocumento VARCHAR(50) NOT NULL,
IdEncargado BIGINT NOT NULL FOREIGN KEY REFERENCES Encargado(Id)
)*/
const RegistroAlumno = () => {
    return (
        <div className='formulario'>
            <form className="row g-3">
                {/* //Nombre */}
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                {/* //Apellido */}
                <div className="col-md-6">
                    <label htmlFor="inputApellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="inputApellido" />
                </div>
                {/* //Grado */}
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default RegistroAlumno;
